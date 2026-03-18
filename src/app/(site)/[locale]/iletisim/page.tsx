import type { Metadata } from 'next';
import ContactView from '@/views/ContactView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { BASE_URL, getLocaleHomeHref, getMainPageHref } from '@/lib/routes';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export async function generateMetadata(): Promise<Metadata> {
  const title = `İletişim | ${BRAND_DISPLAY.tr}`;
  const description = `${BRAND_DISPLAY.tr} ile iletişime geçin. Güvenilir bir yazılım teslimat partneri arıyorsanız projenizi birlikte değerlendirebiliriz.`;

  return buildPageMetadata({
    locale: 'tr',
    title,
    description,
    alternates: {
      en: getMainPageHref('en', 'contact'),
      tr: getMainPageHref('tr', 'contact'),
    },
    keywords: [
      'yazılım şirketi iletişim',
      'yazılım proje danışmanlığı',
      'yazılım teklifi talebi',
      'keşif görüşmesi',
      'mühendislik partneri iletişim',
    ],
  });
}

export default function IletisimPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Ana Sayfa', url: `${BASE_URL}${getLocaleHomeHref('tr')}` },
    { name: 'İletişim', url: `${BASE_URL}${getMainPageHref('tr', 'contact')}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ContactView />
    </>
  );
}
