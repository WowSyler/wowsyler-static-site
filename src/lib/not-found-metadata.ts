import type { Metadata } from 'next';
import { BRAND_DISPLAY, BRAND_SHORT, LEGAL_COMPANY_NAME } from '@/lib/brand';
import { BASE_URL } from '@/lib/routes';

const title = `404 | ${BRAND_DISPLAY.en}`;
const description = `${BRAND_DISPLAY.en} page not found. Return to the homepage to continue browsing our services and projects.`;
const socialImage = `${BASE_URL}/opengraph-image.png`;

export const NOT_FOUND_METADATA: Metadata = {
  metadataBase: new URL(BASE_URL),
  title,
  description,
  applicationName: BRAND_SHORT,
  creator: BRAND_SHORT,
  publisher: LEGAL_COMPANY_NAME,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/404/`,
    siteName: BRAND_DISPLAY.en,
    type: 'website',
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [socialImage],
  },
};
