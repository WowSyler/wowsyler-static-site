import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { BRAND_DISPLAY, BRAND_SHORT } from '@/lib/brand';

// Same shape the mail gateway accepts (no whitespace, '@' or angle brackets in either part).
const EMAIL_REGEX = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const MAIL_GATEWAY_TIMEOUT_MS = 15_000;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 160;
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const runtime = 'nodejs';

function normalizeText(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildPlainTextEmail({ name, email, subject, message }: ContactPayload) {
  return [
    'New website contact submission',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    message,
  ].join('\n');
}

function buildHtmlEmail({ name, email, subject, message }: ContactPayload) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New website contact submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Subject:</strong> ${safeSubject}</p>
      <p><strong>Message:</strong></p>
      <div style="padding: 16px; border: 1px solid #cbd5e1; border-radius: 12px; background: #f8fafc;">
        ${safeMessage}
      </div>
    </div>
  `;
}

function validatePayload(payload: ContactPayload) {
  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    return 'All fields are required.';
  }

  if (!EMAIL_REGEX.test(payload.email)) {
    return 'Please provide a valid email address.';
  }

  if (payload.name.length > MAX_NAME_LENGTH) {
    return 'Name is too long.';
  }

  if (payload.email.length > MAX_EMAIL_LENGTH) {
    return 'Email is too long.';
  }

  if (payload.subject.length > MAX_SUBJECT_LENGTH) {
    return 'Subject is too long.';
  }

  if (payload.message.length > MAX_MESSAGE_LENGTH) {
    return 'Message is too long.';
  }

  return null;
}

function mapProviderError(message: string) {
  const normalized = message.toLowerCase();

  if (
    normalized.includes('testing emails') ||
    normalized.includes('own email address') ||
    normalized.includes('onboarding@resend.dev')
  ) {
    return 'Resend is still using its test sender. Set CONTACT_FROM_EMAIL to a verified sender such as noreply@send.wowsyler.com and redeploy.';
  }

  if (
    normalized.includes('verified domain') ||
    normalized.includes('verify a domain') ||
    normalized.includes('from address')
  ) {
    return 'CONTACT_FROM_EMAIL must use an address from a verified Resend domain.';
  }

  return message;
}

export async function POST(request: Request) {
  let rawBody: unknown;

  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: normalizeText((rawBody as Record<string, unknown>)?.name),
    email: normalizeText((rawBody as Record<string, unknown>)?.email),
    subject: normalizeText((rawBody as Record<string, unknown>)?.subject),
    message: normalizeText((rawBody as Record<string, unknown>)?.message),
  };

  const validationError = validatePayload(payload);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const mailGatewayUrl = process.env.MAIL_GATEWAY_URL?.trim();
  const mailGatewayToken = process.env.MAIL_GATEWAY_TOKEN?.trim();
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const contactToEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const useGateway = Boolean(mailGatewayUrl);

  if (
    !contactToEmail ||
    !contactFromEmail ||
    (useGateway ? !mailGatewayToken : !resendApiKey)
  ) {
    return NextResponse.json(
      {
        error: useGateway
          ? 'Contact email service is not fully configured. Set MAIL_GATEWAY_TOKEN, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL in Coolify.'
          : 'Contact email service is not fully configured. Set MAIL_GATEWAY_URL and MAIL_GATEWAY_TOKEN (or RESEND_API_KEY), CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL in Coolify.',
      },
      { status: 500 },
    );
  }

  if (!EMAIL_REGEX.test(contactToEmail) || !EMAIL_REGEX.test(contactFromEmail)) {
    return NextResponse.json(
      {
        error:
          'CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not a valid email address. Use a real inbox and a sender on wowsyler.com.',
      },
      { status: 500 },
    );
  }

  const email = {
    from: contactFromEmail,
    to: contactToEmail,
    // The visitor's address is validated above; replies go straight to them.
    replyTo: EMAIL_REGEX.test(payload.email) ? payload.email : undefined,
    subject: `${BRAND_DISPLAY.tr} contact form: ${payload.subject}`,
    text: buildPlainTextEmail(payload),
    html: buildHtmlEmail(payload),
  };

  if (useGateway) {
    return sendViaGateway(mailGatewayUrl!, mailGatewayToken!, email);
  }

  return sendViaResend(resendApiKey!, email);
}

type ContactEmail = {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
};

const GATEWAY_FAILURE_MESSAGE = 'The message could not be sent right now. Please try again later.';

/**
 * Central mail gateway: POST {MAIL_GATEWAY_URL}/send with the Bearer token. 202 (queued) or 200 (duplicate) is success;
 * 400/401/413 are permanent (configuration) errors, 429/5xx/network/timeout are transient. The token and the gateway's
 * response body are never logged or returned to the visitor.
 */
async function sendViaGateway(baseUrl: string, token: string, email: ContactEmail) {
  const url = `${baseUrl.replace(/\/+$/, '')}/send`;

  let response: Response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: { email: email.from, name: BRAND_SHORT },
        to: [email.to],
        ...(email.replyTo ? { replyTo: email.replyTo } : {}),
        subject: email.subject,
        text: email.text,
        html: email.html,
      }),
      signal: AbortSignal.timeout(MAIL_GATEWAY_TIMEOUT_MS),
      cache: 'no-store',
    });
  } catch (error) {
    const reason = error instanceof Error ? error.name : 'unknown';
    console.error(`[contact] mail gateway unreachable (${reason})`);
    return NextResponse.json({ error: GATEWAY_FAILURE_MESSAGE }, { status: 502 });
  }

  if (response.ok) {
    const body = (await response.json().catch(() => null)) as { id?: string } | null;
    return NextResponse.json({ ok: true, id: body?.id ?? null });
  }

  const transient = response.status === 429 || response.status >= 500;
  console.error(
    `[contact] mail gateway rejected the message: status ${response.status} (${transient ? 'transient' : 'permanent'})`,
  );
  return NextResponse.json({ error: GATEWAY_FAILURE_MESSAGE }, { status: transient ? 503 : 502 });
}

/** Rollback path, used only while MAIL_GATEWAY_URL is empty. */
async function sendViaResend(apiKey: string, email: ContactEmail) {
  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: email.from,
      to: [email.to],
      ...(email.replyTo ? { replyTo: [email.replyTo] } : {}),
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    if (error) {
      return NextResponse.json({ error: mapProviderError(error.message) }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? mapProviderError(error.message)
            : 'Unexpected error while sending the contact email.',
      },
      { status: 502 },
    );
  }
}
