import type { Metadata } from 'next';
import ProjectsView from '@/views/ProjectsView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { BASE_URL, getMainPageHref } from '@/lib/routes';

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export async function generateMetadata(): Promise<Metadata> {
  const title = `Projelerimiz | ${BRAND_DISPLAY.tr}`;
  const description = `${BRAND_DISPLAY.tr} ekibinin mühendislik ve teslimat standardıyla geliştirdiği projeler — TextManipulator, AirdropBotPro, Streea ve daha fazlası.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}${getMainPageHref('tr', 'projects')}`,
      languages: {
        tr: `${BASE_URL}${getMainPageHref('tr', 'projects')}`,
        en: `${BASE_URL}${getMainPageHref('en', 'projects')}`,
        'x-default': `${BASE_URL}${getMainPageHref('en', 'projects')}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${getMainPageHref('tr', 'projects')}`,
    },
  };
}

export default function ProjelerPage() {
  return <ProjectsView />;
}
