import type { Metadata } from 'next';
import ServicesView from '@/views/ServicesView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildPageMetadata } from '@/lib/seo';
import { getMainPageHref } from '@/lib/routes';

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
  return <ServicesView />;
}
