import type { Metadata } from 'next';
import ServicesView from '@/views/ServicesView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildPageMetadata } from '@/lib/seo';
import { getMainPageHref } from '@/lib/routes';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  const title = `Services | ${BRAND_DISPLAY.en}`;
  const description = `Corporate software development services by ${BRAND_DISPLAY.en}: web, mobile, backend, AI, and DevOps.`;

  return buildPageMetadata({
    locale: 'en',
    title,
    description,
    alternates: {
      en: getMainPageHref('en', 'services'),
      tr: getMainPageHref('tr', 'services'),
    },
    keywords: [
      'software development services',
      'web development services',
      'mobile app development services',
      'AI development services',
      'DevOps consulting',
    ],
  });
}

export default function ServicesPage() {
  return <ServicesView />;
}
