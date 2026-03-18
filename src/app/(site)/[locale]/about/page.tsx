import type { Metadata } from 'next';
import AboutView from '@/views/AboutView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { BASE_URL, getLocaleHomeHref } from '@/lib/routes';

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
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', url: `${BASE_URL}${getLocaleHomeHref('en')}` },
    { name: 'About', url: `${BASE_URL}/en/about/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutView />
    </>
  );
}
