import type { Metadata } from 'next';
import { BRAND_DISPLAY } from './brand';
import { buildPageMetadata } from './seo';
import type { Locale } from './site-config';

/** Fisly mobile app pages. Slugs are identical in both locales so store links stay stable. */
export const FISLY_SUPPORT_EMAIL = 'fisly@wowsyler.com';
export const FISLY_PROVIDER = 'Ozan Küçük (WowSyler), İstanbul, Türkiye';
export const FISLY_COLOR = '#65A30D';

export type FislyPageKey = 'app' | 'privacy' | 'terms';
export type FislyLegalKey = Exclude<FislyPageKey, 'app'>;

const FISLY_PATHS: Record<FislyPageKey, string> = {
  app: 'fisly',
  privacy: 'fisly/privacy',
  terms: 'fisly/terms',
};

export const FISLY_PAGE_KEYS = Object.keys(FISLY_PATHS) as FislyPageKey[];

export function getFislyHref(locale: Locale, page: FislyPageKey = 'app') {
  return `/${locale}/${FISLY_PATHS[page]}/`;
}

const FISLY_METADATA: Record<FislyPageKey, Record<Locale, { title: string; description: string; keywords: string[] }>> = {
  app: {
    en: {
      title: 'Fisly: Receipt Scanner — Expense Tracker & Tax Reports',
      description:
        'Fisly reads the amount, date, vendor and VAT from a receipt photo, tracks income and expenses and exports CSV/PDF reports for tax time. App details and support.',
      keywords: ['Fisly', 'receipt scanner app', 'expense tracker', 'tax report app', 'Fisly support'],
    },
    tr: {
      title: 'Fisly: Fiş Tarayıcı — Gider Takibi ve Vergi Raporu',
      description:
        'Fisly, fiş fotoğrafından tutarı, tarihi, satıcıyı ve KDV\'yi okur; gelir ve giderleri takip eder, vergi zamanı için CSV/PDF rapor üretir. Uygulama bilgileri ve destek.',
      keywords: ['Fisly', 'fiş tarayıcı uygulaması', 'gider takibi', 'vergi raporu uygulaması', 'Fisly destek'],
    },
  },
  privacy: {
    en: {
      title: 'Fisly Privacy Policy',
      description: 'How the Fisly mobile app collects, uses, shares and deletes your data, including AI receipt processing.',
      keywords: ['Fisly privacy policy', 'receipt scanner privacy'],
    },
    tr: {
      title: 'Fisly Gizlilik Politikası',
      description: 'Fisly mobil uygulamasının verilerinizi nasıl topladığı, kullandığı, paylaştığı ve sildiği; yapay zekâ ile fiş okuma dâhil.',
      keywords: ['Fisly gizlilik politikası', 'fiş tarayıcı gizlilik'],
    },
  },
  terms: {
    en: {
      title: 'Fisly Subscription Terms',
      description: 'Plans, prices, automatic renewal, cancellation and refunds for Fisly Pro and Pro+ subscriptions.',
      keywords: ['Fisly subscription terms', 'Fisly Pro price', 'cancel Fisly subscription'],
    },
    tr: {
      title: 'Fisly Abonelik Şartları',
      description: 'Fisly Pro ve Pro+ abonelikleri için planlar, fiyatlar, otomatik yenileme, iptal ve iade koşulları.',
      keywords: ['Fisly abonelik şartları', 'Fisly Pro fiyat', 'Fisly abonelik iptali'],
    },
  },
};

export function buildFislyMetadata(page: FislyPageKey, locale: Locale): Metadata {
  const meta = FISLY_METADATA[page][locale];

  return buildPageMetadata({
    locale,
    title: `${meta.title} | ${BRAND_DISPLAY[locale]}`,
    description: meta.description,
    alternates: { en: getFislyHref('en', page), tr: getFislyHref('tr', page) },
    keywords: meta.keywords,
  });
}
