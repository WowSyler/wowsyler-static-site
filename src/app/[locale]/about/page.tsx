import type { Metadata } from 'next';
import AboutView from '@/views/AboutView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { BASE_URL } from '@/lib/routes';

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `About Us | ${BRAND_DISPLAY.en}`,
    description:
      `Learn about ${BRAND_DISPLAY.en} — a delivery-focused software company building dependable products across web, mobile, backend, and AI.`,
    alternates: {
      canonical: `${BASE_URL}/en/about/`,
      languages: {
        en: `${BASE_URL}/en/about/`,
        tr: `${BASE_URL}/tr/hakkimizda/`,
        'x-default': `${BASE_URL}/en/about/`,
      },
    },
    openGraph: {
      title: `About Us | ${BRAND_DISPLAY.en}`,
      description:
        `Learn about ${BRAND_DISPLAY.en} — a software company focused on dependable engineering and long-term product quality.`,
      url: `${BASE_URL}/en/about/`,
    },
  };
}

export default function AboutPage() {
  return <AboutView />;
}
