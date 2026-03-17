import type { Metadata } from 'next';
import ContactView from '@/views/ContactView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { BASE_URL, getMainPageHref } from '@/lib/routes';

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export async function generateMetadata(): Promise<Metadata> {
  const title = `İletişim | ${BRAND_DISPLAY.tr}`;
  const description = `${BRAND_DISPLAY.tr} ile iletişime geçin. Güvenilir bir yazılım teslimat partneri arıyorsanız projenizi birlikte değerlendirebiliriz.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}${getMainPageHref('tr', 'contact')}`,
      languages: {
        tr: `${BASE_URL}${getMainPageHref('tr', 'contact')}`,
        en: `${BASE_URL}${getMainPageHref('en', 'contact')}`,
        'x-default': `${BASE_URL}${getMainPageHref('en', 'contact')}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${getMainPageHref('tr', 'contact')}`,
    },
  };
}

export default function IletisimPage() {
  return <ContactView />;
}
