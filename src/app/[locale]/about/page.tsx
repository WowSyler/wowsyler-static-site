import type { Metadata } from 'next';
import AboutView from '@/views/AboutView';
import { BASE_URL } from '@/lib/routes';

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About Us | WowSyler Technology',
    description:
      'Learn about WowSyler Technology — a passionate team of engineers building world-class software products in web, mobile, game, and AI.',
    alternates: {
      canonical: `${BASE_URL}/en/about/`,
      languages: {
        en: `${BASE_URL}/en/about/`,
        tr: `${BASE_URL}/tr/hakkimizda/`,
        'x-default': `${BASE_URL}/tr/hakkimizda/`,
      },
    },
    openGraph: {
      title: 'About Us | WowSyler Technology',
      description:
        'Learn about WowSyler Technology — a passionate team of engineers building world-class software products.',
      url: `${BASE_URL}/en/about/`,
    },
  };
}

export default function AboutPage() {
  return <AboutView />;
}
