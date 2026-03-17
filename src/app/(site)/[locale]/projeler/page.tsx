import type { Metadata } from 'next';
import ProjectsView from '@/views/ProjectsView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { buildPageMetadata } from '@/lib/seo';
import { getMainPageHref } from '@/lib/routes';

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
  return <ProjectsView />;
}
