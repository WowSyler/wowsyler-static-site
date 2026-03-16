import { LEGAL_PAGE_CONFIG } from './legal';

export const BASE_URL = 'https://wowsyler.com';

export type Locale = 'en' | 'tr';

export const LOCALES: Locale[] = ['en', 'tr'];

/**
 * Slug mappings for pages that have different URL slugs per locale.
 * Other pages use the same slug in both locales.
 */
const SLUG_MAP: Record<string, Record<Locale, string>> = {
  about: { en: 'about', tr: 'hakkimizda' },
  hakkimizda: { en: 'about', tr: 'hakkimizda' },
  pdpl: LEGAL_PAGE_CONFIG.pdpl.slugs,
  kvkk: LEGAL_PAGE_CONFIG.pdpl.slugs,
  'privacy-policy': LEGAL_PAGE_CONFIG.privacyPolicy.slugs,
  'gizlilik-politikasi': LEGAL_PAGE_CONFIG.privacyPolicy.slugs,
  'cookie-policy': LEGAL_PAGE_CONFIG.cookiePolicy.slugs,
  'cerez-politikasi': LEGAL_PAGE_CONFIG.cookiePolicy.slugs,
  'legal-information': LEGAL_PAGE_CONFIG.legalInformation.slugs,
  'yasal-bilgiler': LEGAL_PAGE_CONFIG.legalInformation.slugs,
};

/**
 * Given a pathname like `/tr/hakkimizda` and a target locale, returns the
 * equivalent URL in the target locale (e.g. `/en/about`).
 */
export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  // Normalize: remove trailing slash, split by "/"
  const parts = currentPath.replace(/\/$/, '').split('/').filter(Boolean);
  const slug = parts[1]; // e.g. "about", "hakkimizda", "services", undefined

  if (!slug) {
    return `/${targetLocale}/`;
  }

  const mapped = SLUG_MAP[slug];
  const targetSlug = mapped ? mapped[targetLocale] : slug;

  return `/${targetLocale}/${targetSlug}/`;
}

/** Returns all sitemap entries for building sitemap.xml */
export interface SitemapEntry {
  url: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const SITEMAP_ENTRIES: SitemapEntry[] = [
  { url: `${BASE_URL}/tr/`, changefreq: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/en/`, changefreq: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/tr/hakkimizda/`, changefreq: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/en/about/`, changefreq: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/tr/services/`, changefreq: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/en/services/`, changefreq: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/tr/projects/`, changefreq: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/en/projects/`, changefreq: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/tr/contact/`, changefreq: 'yearly', priority: 0.6 },
  { url: `${BASE_URL}/en/contact/`, changefreq: 'yearly', priority: 0.6 },
  { url: `${BASE_URL}/tr/${LEGAL_PAGE_CONFIG.pdpl.slugs.tr}/`, changefreq: 'yearly', priority: 0.4 },
  { url: `${BASE_URL}/en/${LEGAL_PAGE_CONFIG.pdpl.slugs.en}/`, changefreq: 'yearly', priority: 0.4 },
  {
    url: `${BASE_URL}/tr/${LEGAL_PAGE_CONFIG.privacyPolicy.slugs.tr}/`,
    changefreq: 'yearly',
    priority: 0.4,
  },
  {
    url: `${BASE_URL}/en/${LEGAL_PAGE_CONFIG.privacyPolicy.slugs.en}/`,
    changefreq: 'yearly',
    priority: 0.4,
  },
  {
    url: `${BASE_URL}/tr/${LEGAL_PAGE_CONFIG.cookiePolicy.slugs.tr}/`,
    changefreq: 'yearly',
    priority: 0.4,
  },
  {
    url: `${BASE_URL}/en/${LEGAL_PAGE_CONFIG.cookiePolicy.slugs.en}/`,
    changefreq: 'yearly',
    priority: 0.4,
  },
  {
    url: `${BASE_URL}/tr/${LEGAL_PAGE_CONFIG.legalInformation.slugs.tr}/`,
    changefreq: 'yearly',
    priority: 0.4,
  },
  {
    url: `${BASE_URL}/en/${LEGAL_PAGE_CONFIG.legalInformation.slugs.en}/`,
    changefreq: 'yearly',
    priority: 0.4,
  },
];
