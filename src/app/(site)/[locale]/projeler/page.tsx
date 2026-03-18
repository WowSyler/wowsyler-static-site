import type { Metadata } from 'next';
import ProjectsView from '@/views/ProjectsView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { BASE_URL, getLocaleHomeHref, getMainPageHref } from '@/lib/routes';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export async function generateMetadata(): Promise<Metadata> {
  const title = `Projelerimiz | ${BRAND_DISPLAY.tr}`;
  const description = `${BRAND_DISPLAY.tr} ekibinin mühendislik ve teslimat standardıyla geliştirdiği projeler — TextManipulator, AirdropBotPro, Streea ve daha fazlası.`;

  return buildPageMetadata({
    locale: 'tr',
    title,
    description,
    alternates: {
      en: getMainPageHref('en', 'projects'),
      tr: getMainPageHref('tr', 'projects'),
    },
    keywords: [
      'yazılım projeleri',
      'referans projeler',
      'ürün portföyü',
      'web ve mobil ürünler',
      'yapay zeka ürünleri',
    ],
  });
}

export default function ProjelerPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Ana Sayfa', url: `${BASE_URL}${getLocaleHomeHref('tr')}` },
    { name: 'Projeler', url: `${BASE_URL}${getMainPageHref('tr', 'projects')}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectsView />
    </>
  );
}
