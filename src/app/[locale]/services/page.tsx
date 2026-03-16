import type { Metadata } from 'next';
import ServicesView from '@/views/ServicesView';
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
    ? 'Services | WowSyler Technology'
    : 'Hizmetlerimiz | WowSyler Teknoloji';
  const description = isEn
    ? 'Comprehensive software development services: web, mobile, game, AI agents, backend, and DevOps by WowSyler Technology.'
    : 'Web, mobil, oyun, yapay zeka, backend ve DevOps alanlarında kapsamlı yazılım geliştirme hizmetleri.';

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
