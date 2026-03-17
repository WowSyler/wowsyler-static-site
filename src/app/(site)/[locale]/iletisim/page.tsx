import type { Metadata } from 'next';
import ContactView from '@/views/ContactView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildPageMetadata } from '@/lib/seo';
import { getMainPageHref } from '@/lib/routes';

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
  return <ContactView />;
}
