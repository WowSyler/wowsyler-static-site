import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const contactToEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || 'onboarding@resend.dev';

  if (!resendApiKey || !contactToEmail) {
    return NextResponse.json(
      { error: 'Contact email service is not configured on the server.' },
      { status: 500 },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      replyTo: [payload.email],
      subject: `WowSyler contact form: ${payload.subject}`,
      text: buildPlainTextEmail(payload),
      html: buildHtmlEmail(payload),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Unexpected error while sending the contact email.',
      },
      { status: 502 },
    );
  }
}
