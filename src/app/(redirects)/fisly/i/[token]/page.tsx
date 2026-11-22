import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FISLY_COLOR, FISLY_INVITE_SCHEME_URL, FISLY_INVITE_TOKEN_PATTERN, getFislyHref } from '@/lib/fisly';

type Props = {
  params: Promise<{ token: string }>;
};

export const metadata: Metadata = {
  title: 'Fisly invitation',
  robots: { index: false, follow: false },
};

/**
 * Fallback for Fisly invitation links (`/fisly/i/{token}`). With the app installed the link opens it directly
 * (universal link); this page is what a browser shows otherwise. The token is only echoed into the app link.
 */
export default async function FislyInvitePage({ params }: Props) {
  const { token } = await params;

  if (!FISLY_INVITE_TOKEN_PATTERN.test(token)) {
    notFound();
  }

  const texts = [
    {
      lang: 'en',
      title: 'You have been invited to a shared account on Fisly',
      body: 'Open this invitation in the Fisly app to accept it. If the app is not installed yet, install it first and then open this link again.',
      open: 'Open in Fisly',
      about: 'About Fisly',
      href: getFislyHref('en'),
    },
    {
      lang: 'tr',
      title: "Fisly'de bir ortak hesaba davet edildiniz",
      body: 'Daveti kabul etmek için Fisly uygulamasında açın. Uygulama yüklü değilse önce yükleyin, sonra bu bağlantıyı yeniden açın.',
      open: "Fisly'de aç",
      about: 'Fisly hakkında',
      href: getFislyHref('tr'),
    },
  ];

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{ background: 'linear-gradient(135deg, #0A2342 0%, #0D2D5A 60%, #1E3A6E 100%)' }}
    >
      <div className="w-full max-w-xl flex flex-col gap-6">
        {texts.map((text) => (
          <section key={text.lang} lang={text.lang} className="rounded-2xl p-8" style={{ background: '#ffffff' }}>
            <h1 className="text-2xl font-bold mb-3" style={{ color: '#0A2342' }}>
              {text.title}
            </h1>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#475569' }}>
              {text.body}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`${FISLY_INVITE_SCHEME_URL}${token}`}
                className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: FISLY_COLOR, color: '#ffffff' }}
              >
                {text.open}
              </a>
              <Link
                href={text.href}
                className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-medium"
                style={{ background: '#F8FAFC', color: '#334155', border: '1px solid #E2E8F0' }}
              >
                {text.about}
              </Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
