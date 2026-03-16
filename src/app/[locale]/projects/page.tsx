import type { Metadata } from 'next';
import ProjectsView from '@/views/ProjectsView';
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
    ? `Projects | ${BRAND_DISPLAY.en}`
    : `Projelerimiz | ${BRAND_DISPLAY.tr}`;
  const description = isEn
    ? `Explore products built with the engineering and delivery standards of ${BRAND_DISPLAY.en} — TextManipulator, AirdropBotPro, Streea, and more.`
    : `${BRAND_DISPLAY.tr} ekibinin mühendislik ve teslimat standardıyla geliştirdiği projeler — TextManipulator, AirdropBotPro, Streea ve daha fazlası.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/projects/`,
      languages: {
        en: `${BASE_URL}/en/projects/`,
        tr: `${BASE_URL}/tr/projects/`,
        'x-default': `${BASE_URL}/en/projects/`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/projects/`,
    },
  };
}

export default function ProjectsPage() {
  return <ProjectsView />;
}
