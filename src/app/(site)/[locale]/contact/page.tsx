import type { Metadata } from 'next';
import ContactView from '@/views/ContactView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { BASE_URL, getLocaleHomeHref, getMainPageHref } from '@/lib/routes';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  const title = `Contact Us | ${BRAND_DISPLAY.en}`;
  const description = `Get in touch with ${BRAND_DISPLAY.en}. If you need a reliable software delivery partner, our team would be glad to discuss your project.`;

  return buildPageMetadata({
    locale: 'en',
    title,
    description,
    alternates: {
      en: getMainPageHref('en', 'contact'),
      tr: getMainPageHref('tr', 'contact'),
    },
    keywords: [
      'contact software company',
      'software project consultation',
      'request software proposal',
      'software discovery call',
      'engineering partner contact',
    ],
  });
}

export default function ContactPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', url: `${BASE_URL}${getLocaleHomeHref('en')}` },
    { name: 'Contact', url: `${BASE_URL}${getMainPageHref('en', 'contact')}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ContactView />
    </>
  );
}
