import type { Metadata } from 'next';
import AboutView from '@/views/AboutView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildPageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    locale: 'en',
    title: `About Us | ${BRAND_DISPLAY.en}`,
    description:
      `Learn about ${BRAND_DISPLAY.en} — a delivery-focused software company building dependable products across web, mobile, backend, and AI.`,
    alternates: {
      en: '/en/about/',
      tr: '/tr/hakkimizda/',
    },
    keywords: [
      'about WowSyler',
      'software company',
      'product engineering team',
      'corporate software partner',
      'engineering culture',
    ],
  });
}

export default function AboutPage() {
  return <AboutView />;
}
