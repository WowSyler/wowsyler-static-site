import type { Metadata } from 'next';
import ServicesView from '@/views/ServicesView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { BASE_URL, getLocaleHomeHref, getMainPageHref } from '@/lib/routes';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export async function generateMetadata(): Promise<Metadata> {
  const title = `Hizmetlerimiz | ${BRAND_DISPLAY.tr}`;
  const description = `${BRAND_DISPLAY.tr}; web, mobil, backend, yapay zeka ve DevOps alanlarında kurumsal yazılım hizmetleri sunar.`;

  return buildPageMetadata({
    locale: 'tr',
    title,
    description,
    alternates: {
      en: getMainPageHref('en', 'services'),
      tr: getMainPageHref('tr', 'services'),
    },
    keywords: [
      'yazılım geliştirme hizmetleri',
      'web geliştirme hizmetleri',
      'mobil uygulama geliştirme hizmetleri',
      'yapay zeka geliştirme hizmetleri',
      'DevOps danışmanlığı',
    ],
  });
}

export default function HizmetlerPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Ana Sayfa', url: `${BASE_URL}${getLocaleHomeHref('tr')}` },
    { name: 'Hizmetler', url: `${BASE_URL}${getMainPageHref('tr', 'services')}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicesView />
    </>
  );
}
