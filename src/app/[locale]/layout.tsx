import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LangSetter from '@/components/LangSetter';
import { BASE_URL, LOCALES, type Locale } from '@/lib/routes';

interface LocaleMeta {
  title: string;
  description: string;
  ogLocale: string;
  keywords: string;
}

const META: Record<Locale, LocaleMeta> = {
  en: {
    title: 'WowSyler Technology | Software, Web & Mobile, AI Development',
    description:
      'WowSyler Technology builds powerful software solutions — web, mobile, game development and AI agents — with cutting-edge technologies.',
    ogLocale: 'en_US',
    keywords: 'software development, web development, mobile development, AI agents, game development, WowSyler, technology, Next.js, React, .NET Core, Go',
  },
  tr: {
    title: 'WowSyler Teknoloji | Yazılım, Web & Mobil, Yapay Zeka Geliştirme',
    description:
      'WowSyler Teknoloji; web, mobil, oyun geliştirme ve yapay zeka ajanları alanlarında güçlü yazılım çözümleri üretmektedir.',
    ogLocale: 'tr_TR',
    keywords: 'yazılım geliştirme, web geliştirme, mobil geliştirme, yapay zeka, oyun geliştirme, WowSyler, teknoloji, Next.js, React, .NET Core, Go',
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
    keywords: meta.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en/`,
        tr: `${BASE_URL}/tr/`,
        'x-default': `${BASE_URL}/en/`,
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

function getJsonLd(locale: Locale) {
  const isEn = locale === 'en';
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WowSyler Teknoloji',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: isEn
      ? 'WowSyler Technology builds powerful software solutions — web, mobile, game development and AI agents.'
      : 'WowSyler Teknoloji; web, mobil, oyun geliştirme ve yapay zeka ajanları alanlarında güçlü yazılım çözümleri üretmektedir.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@wowsyler.com',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
    },
    sameAs: [],
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  const jsonLd = getJsonLd(locale as Locale);

  return (
    <LanguageProvider initialLocale={locale as Locale}>
      <LangSetter locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </LanguageProvider>
  );
}
