import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LangSetter from '@/components/LangSetter';
import { BASE_URL, LOCALES, type Locale } from '@/lib/routes';

interface LocaleMeta {
  title: string;
  description: string;
  ogLocale: string;
}

const META: Record<Locale, LocaleMeta> = {
  en: {
    title: 'WowSyler Technology | Software, Web & Mobile, AI Development',
    description:
      'WowSyler Technology builds powerful software solutions — web, mobile, game development and AI agents — with cutting-edge technologies.',
    ogLocale: 'en_US',
  },
  tr: {
    title: 'WowSyler Teknoloji | Yazılım, Web & Mobil, Yapay Zeka Geliştirme',
    description:
      'WowSyler Teknoloji; web, mobil, oyun geliştirme ve yapay zeka ajanları alanlarında güçlü yazılım çözümleri üretmektedir.',
    ogLocale: 'tr_TR',
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const meta = META[locale as Locale] ?? META.tr;
  const canonicalUrl = `${BASE_URL}/${locale}/`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en/`,
        tr: `${BASE_URL}/tr/`,
        'x-default': `${BASE_URL}/tr/`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      siteName: 'WowSyler',
      locale: meta.ogLocale,
      alternateLocale: [locale === 'en' ? 'tr_TR' : 'en_US'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  return (
    <LanguageProvider initialLocale={locale as Locale}>
      <LangSetter locale={locale} />
      {children}
    </LanguageProvider>
  );
}
