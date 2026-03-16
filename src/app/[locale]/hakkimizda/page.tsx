import type { Metadata } from 'next';
import AboutView from '@/views/AboutView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { BASE_URL } from '@/lib/routes';

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Hakkımızda | ${BRAND_DISPLAY.tr}`,
    description:
      `${BRAND_DISPLAY.tr} hakkında bilgi edinin — web, mobil, backend ve yapay zeka alanlarında kurumsal teslimat anlayışıyla çalışan mühendis ekibi.`,
    alternates: {
      canonical: `${BASE_URL}/tr/hakkimizda/`,
      languages: {
        tr: `${BASE_URL}/tr/hakkimizda/`,
        en: `${BASE_URL}/en/about/`,
        'x-default': `${BASE_URL}/en/about/`,
      },
    },
    openGraph: {
      title: `Hakkımızda | ${BRAND_DISPLAY.tr}`,
      description:
        `${BRAND_DISPLAY.tr} hakkında bilgi edinin — güvenilir mühendislik ve sürdürülebilir ürün geliştirme odağıyla çalışan ekip.`,
      url: `${BASE_URL}/tr/hakkimizda/`,
    },
  };
}

export default function HakkimizdaPage() {
  return <AboutView />;
}
