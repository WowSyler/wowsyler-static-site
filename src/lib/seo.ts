import type { Metadata } from 'next';
import { BRAND_DISPLAY, BRAND_SHORT, LEGAL_COMPANY_NAME } from './brand';
import { PUBLIC_CONTACT_EMAIL } from './contact';
import { BASE_URL, DEFAULT_LOCALE, type Locale } from './site-config';

const LOCALE_CODES: Record<Locale, string> = {
  en: 'en_US',
  tr: 'tr_TR',
};

const CONTENT_LANGUAGE: Record<Locale, string> = {
  en: 'en-US',
  tr: 'tr-TR',
};

const COMMON_KEYWORDS: Record<Locale, string[]> = {
  en: [
    'software development',
    'web development',
    'mobile development',
    'backend development',
    'AI development',
    'corporate software',
    'product engineering',
    'Next.js agency',
    '.NET development',
  ],
  tr: [
    'yazılım geliştirme',
    'web geliştirme',
    'mobil geliştirme',
    'backend geliştirme',
    'yapay zeka geliştirme',
    'kurumsal yazılım',
    'ürün mühendisliği',
    'Next.js ajansı',
    '.NET geliştirme',
  ],
};

export const BRAND_LOGO_PATH = '/brand-mark.svg';
export const SOCIAL_IMAGE_PATH = '/opengraph-image.png';

type PageAlternates = Record<Locale, string>;

type BuildPageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  alternates: PageAlternates;
  keywords?: string[];
  type?: 'website' | 'article';
};

function toAbsoluteUrl(pathname: string) {
  return pathname.startsWith('http') ? pathname : `${BASE_URL}${pathname}`;
}

function dedupeKeywords(locale: Locale, keywords: string[] = []) {
  return Array.from(
    new Set([
      ...keywords,
      ...COMMON_KEYWORDS[locale],
      BRAND_SHORT,
      BRAND_DISPLAY[locale],
      LEGAL_COMPANY_NAME,
    ]),
  );
}

export function buildPageMetadata({
  locale,
  title,
  description,
  alternates,
  keywords,
  type = 'website',
}: BuildPageMetadataInput): Metadata {
  const canonical = toAbsoluteUrl(alternates[locale]);
  const imageUrl = toAbsoluteUrl(SOCIAL_IMAGE_PATH);

  return {
    title,
    description,
    keywords: dedupeKeywords(locale, keywords),
    authors: [{ name: BRAND_DISPLAY[locale], url: BASE_URL }],
    creator: BRAND_SHORT,
    publisher: LEGAL_COMPANY_NAME,
    category: locale === 'en' ? 'Corporate software development' : 'Kurumsal yazılım geliştirme',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical,
      languages: {
        en: toAbsoluteUrl(alternates.en),
        tr: toAbsoluteUrl(alternates.tr),
        'x-default': toAbsoluteUrl(alternates[DEFAULT_LOCALE]),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BRAND_DISPLAY[locale],
      locale: LOCALE_CODES[locale],
      alternateLocale: locale === 'en' ? [LOCALE_CODES.tr] : [LOCALE_CODES.en],
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    other: {
      'content-language': CONTENT_LANGUAGE[locale],
    },
  };
}

export function buildOrganizationJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': `${BASE_URL}/#organization`,
    name: BRAND_DISPLAY[locale],
    alternateName: BRAND_SHORT,
    legalName: LEGAL_COMPANY_NAME,
    url: BASE_URL,
    logo: toAbsoluteUrl(BRAND_LOGO_PATH),
    image: toAbsoluteUrl(SOCIAL_IMAGE_PATH),
    inLanguage: CONTENT_LANGUAGE[locale],
    description:
      locale === 'en'
        ? `${BRAND_DISPLAY.en} delivers enterprise-ready software solutions across web, mobile, backend, and AI.`
        : `${BRAND_DISPLAY.tr}; web, mobil, backend ve yapay zeka alanlarında kurumsal yazılım çözümleri üretir.`,
    contactPoint: {
      '@type': 'ContactPoint',
      ...(PUBLIC_CONTACT_EMAIL ? { email: PUBLIC_CONTACT_EMAIL } : {}),
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
    },
  };
}

export function buildWebsiteJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BRAND_DISPLAY[locale],
    alternateName: BRAND_SHORT,
    inLanguage: CONTENT_LANGUAGE[locale],
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };
}

type BreadcrumbItem = {
  name: string;
  url: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
