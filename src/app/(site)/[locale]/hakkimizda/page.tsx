import type { Metadata } from 'next';
import AboutView from '@/views/AboutView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildPageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    locale: 'tr',
    title: `Hakkımızda | ${BRAND_DISPLAY.tr}`,
    description:
      `${BRAND_DISPLAY.tr} hakkında bilgi edinin; web, mobil, backend ve yapay zeka alanlarında kurumsal teslimat anlayışıyla çalışan mühendis ekibi.`,
    alternates: {
      en: '/en/about/',
      tr: '/tr/hakkimizda/',
    },
    keywords: [
      'WowSyler hakkında',
      'yazılım şirketi',
      'ürün mühendisliği ekibi',
      'kurumsal yazılım partneri',
      'mühendislik kültürü',
    ],
  });
}

export default function HakkimizdaPage() {
  return <AboutView />;
}
