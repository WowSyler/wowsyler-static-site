import type { Metadata } from 'next';
import '../globals.css';
import GoogleTag from '@/components/GoogleTag';
import { BRAND_DISPLAY, BRAND_SHORT, LEGAL_COMPANY_NAME } from '@/lib/brand';
import { BASE_URL, DEFAULT_LOCALE } from '@/lib/routes';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: BRAND_DISPLAY.en,
  description: `${BRAND_DISPLAY.en} — corporate software engineering across web, mobile, backend, and AI.`,
  applicationName: BRAND_SHORT,
  creator: BRAND_SHORT,
  publisher: LEGAL_COMPANY_NAME,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    title: BRAND_DISPLAY.en,
    description: `${BRAND_DISPLAY.en} — corporate software engineering across web, mobile, backend, and AI.`,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body>
        <GoogleTag />
        {children}
      </body>
    </html>
  );
}
