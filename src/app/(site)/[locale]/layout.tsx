import type { Metadata } from 'next';
import '../../globals.css';
import { notFound } from 'next/navigation';
import GoogleTag from '@/components/GoogleTag';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { BRAND_DISPLAY, BRAND_SHORT, LEGAL_COMPANY_NAME } from '@/lib/brand';
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from '@/lib/seo';
import { BASE_URL, LOCALES, type Locale } from '@/lib/routes';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: BRAND_DISPLAY.en,
  description: `${BRAND_DISPLAY.en} — corporate software engineering across web, mobile, backend, and AI.`,
  applicationName: BRAND_SHORT,
  creator: BRAND_SHORT,
  publisher: LEGAL_COMPANY_NAME,
  referrer: 'origin-when-cross-origin',
  manifest: '/site.webmanifest',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: ['/favicon.svg'],
    apple: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    title: BRAND_DISPLAY.en,
    description: `${BRAND_DISPLAY.en} — corporate software engineering across web, mobile, backend, and AI.`,
    url: BASE_URL,
    siteName: BRAND_DISPLAY.en,
    images: [`${BASE_URL}/opengraph-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND_DISPLAY.en,
    description: `${BRAND_DISPLAY.en} — corporate software engineering across web, mobile, backend, and AI.`,
    images: [`${BASE_URL}/opengraph-image.png`],
  },
  other: {
    'theme-color': '#0A2342',
  },
};
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  const jsonLd = [buildOrganizationJsonLd(locale as Locale), buildWebsiteJsonLd(locale as Locale)];

  return (
    <html lang={locale}>
      <body>
        <GoogleTag />
        <LanguageProvider initialLocale={locale as Locale}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
