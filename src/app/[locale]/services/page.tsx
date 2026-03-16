import type { Metadata } from 'next';
import ServicesView from '@/views/ServicesView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { BASE_URL, LOCALES, type Locale } from '@/lib/routes';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = (locale as Locale) === 'en';

  const title = isEn
    ? `Services | ${BRAND_DISPLAY.en}`
    : `Hizmetlerimiz | ${BRAND_DISPLAY.tr}`;
  const description = isEn
    ? `Corporate software development services by ${BRAND_DISPLAY.en}: web, mobile, backend, AI, and DevOps.`
    : `${BRAND_DISPLAY.tr}; web, mobil, backend, yapay zeka ve DevOps alanlarında kurumsal yazılım hizmetleri sunar.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/services/`,
      languages: {
        en: `${BASE_URL}/en/services/`,
        tr: `${BASE_URL}/tr/services/`,
        'x-default': `${BASE_URL}/en/services/`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/services/`,
    },
  };
}

export default function ServicesPage() {
  return <ServicesView />;
}
