import type { Metadata } from 'next';
import ProjectsView from '@/views/ProjectsView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildPageMetadata } from '@/lib/seo';
import { getMainPageHref } from '@/lib/routes';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  const title = `Projects | ${BRAND_DISPLAY.en}`;
  const description = `Explore products built with the engineering and delivery standards of ${BRAND_DISPLAY.en} — TextManipulator, AirdropBotPro, Streea, and more.`;

  return buildPageMetadata({
    locale: 'en',
    title,
    description,
    alternates: {
      en: getMainPageHref('en', 'projects'),
      tr: getMainPageHref('tr', 'projects'),
    },
    keywords: [
      'software projects',
      'case studies',
      'product portfolio',
      'web and mobile products',
      'AI products',
    ],
  });
}

export default function ProjectsPage() {
  return <ProjectsView />;
}
