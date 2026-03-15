import type { Metadata } from 'next';
import AboutView from '@/views/AboutView';
import { BASE_URL } from '@/lib/routes';

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Hakkımızda | WowSyler Teknoloji',
    description:
      'WowSyler Teknoloji hakkında bilgi edinin — web, mobil, oyun ve yapay zeka alanlarında dünya standartlarında yazılımlar geliştiren tutkulu mühendis ekibi.',
    alternates: {
      canonical: `${BASE_URL}/tr/hakkimizda/`,
      languages: {
        tr: `${BASE_URL}/tr/hakkimizda/`,
        en: `${BASE_URL}/en/about/`,
        'x-default': `${BASE_URL}/tr/hakkimizda/`,
      },
    },
    openGraph: {
      title: 'Hakkımızda | WowSyler Teknoloji',
      description:
        'WowSyler Teknoloji hakkında bilgi edinin — dünya standartlarında yazılımlar geliştiren mühendis ekibi.',
      url: `${BASE_URL}/tr/hakkimizda/`,
    },
  };
}

export default function HakkimizdaPage() {
  return <AboutView />;
}
