import type { Metadata } from 'next';
import AboutView from '@/views/AboutView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { BASE_URL, getLocaleHomeHref } from '@/lib/routes';

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
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Ana Sayfa', url: `${BASE_URL}${getLocaleHomeHref('tr')}` },
    { name: 'Hakkımızda', url: `${BASE_URL}/tr/hakkimizda/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutView />
    </>
  );
}
