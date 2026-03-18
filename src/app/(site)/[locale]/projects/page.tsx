import type { Metadata } from 'next';
import ProjectsView from '@/views/ProjectsView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { BASE_URL, getLocaleHomeHref, getMainPageHref } from '@/lib/routes';

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
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', url: `${BASE_URL}${getLocaleHomeHref('en')}` },
    { name: 'Projects', url: `${BASE_URL}${getMainPageHref('en', 'projects')}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectsView />
    </>
  );
}
