import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LangSetter from '@/components/LangSetter';
import { BRAND_DISPLAY, BRAND_SHORT, LEGAL_COMPANY_NAME } from '@/lib/brand';
import { PUBLIC_CONTACT_EMAIL } from '@/lib/contact';
import { BASE_URL, LOCALES, type Locale } from '@/lib/routes';

interface LocaleMeta {
  title: string;
  description: string;
  ogLocale: string;
  keywords: string;
}

const META: Record<Locale, LocaleMeta> = {
  en: {
    title: `${BRAND_DISPLAY.en} | Corporate Software, Web & Mobile, AI Development`,
    description:
      `${BRAND_DISPLAY.en} delivers enterprise-ready software solutions across web, mobile, backend, and AI with a disciplined product engineering approach.`,
    ogLocale: 'en_US',
    keywords: `software development, web development, mobile development, AI agents, backend development, corporate software partner, ${BRAND_DISPLAY.en}, Next.js, React, .NET Core, Go`,
  },
  tr: {
    title: `${BRAND_DISPLAY.tr} | Kurumsal Yazılım, Web & Mobil, Yapay Zeka`,
    description:
      `${BRAND_DISPLAY.tr}; web, mobil, backend ve yapay zeka alanlarında kurumsal ölçekte yazılım çözümleri üretir.`,
    ogLocale: 'tr_TR',
    keywords: `yazılım geliştirme, web geliştirme, mobil geliştirme, yapay zeka, backend geliştirme, kurumsal yazılım partneri, ${BRAND_DISPLAY.tr}, Next.js, React, .NET Core, Go`,
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
      siteName: BRAND_DISPLAY[locale as Locale] ?? BRAND_DISPLAY.tr,
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
    '@type': 'Corporation',
    name: BRAND_DISPLAY[locale],
    alternateName: BRAND_SHORT,
    legalName: LEGAL_COMPANY_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: isEn
      ? `${BRAND_DISPLAY.en} delivers enterprise-ready software solutions across web, mobile, backend, and AI.`
      : `${BRAND_DISPLAY.tr}; web, mobil, backend ve yapay zeka alanlarında kurumsal yazılım çözümleri üretir.`,
    contactPoint: {
      '@type': 'ContactPoint',
      ...(PUBLIC_CONTACT_EMAIL ? { email: PUBLIC_CONTACT_EMAIL } : {}),
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
