import type { Metadata } from 'next';
import ServicesView from '@/views/ServicesView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { BASE_URL, getMainPageHref } from '@/lib/routes';

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export async function generateMetadata(): Promise<Metadata> {
  const title = `Hizmetlerimiz | ${BRAND_DISPLAY.tr}`;
  const description = `${BRAND_DISPLAY.tr}; web, mobil, backend, yapay zeka ve DevOps alanlarında kurumsal yazılım hizmetleri sunar.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}${getMainPageHref('tr', 'services')}`,
      languages: {
        tr: `${BASE_URL}${getMainPageHref('tr', 'services')}`,
        en: `${BASE_URL}${getMainPageHref('en', 'services')}`,
        'x-default': `${BASE_URL}${getMainPageHref('en', 'services')}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${getMainPageHref('tr', 'services')}`,
    },
  };
}

export default function HizmetlerPage() {
  return <ServicesView />;
}
