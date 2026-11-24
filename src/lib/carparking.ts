import type { Metadata } from 'next';
import { BRAND_DISPLAY } from './brand';
import { buildPageMetadata } from './seo';
import type { Locale } from './site-config';

/** Car Parking Trainer mobile game pages. Slugs are identical in both locales so store links stay stable. */
export const CARPARKING_SUPPORT_EMAIL = 'info@wowsyler.com';
export const CARPARKING_PROVIDER = 'WowSyler Yazılım ve Teknoloji, İstanbul, Türkiye';
export const CARPARKING_COLOR = '#0D9488';

/** No purchases or subscriptions, so there is no terms page: only the product page and the privacy policy. */
export type CarParkingPageKey = 'app' | 'privacy';
export type CarParkingLegalKey = Exclude<CarParkingPageKey, 'app'>;

const CARPARKING_PATHS: Record<CarParkingPageKey, string> = {
  app: 'carparking',
  privacy: 'carparking/privacy',
};

export const CARPARKING_PAGE_KEYS = Object.keys(CARPARKING_PATHS) as CarParkingPageKey[];

export function getCarParkingHref(locale: Locale, page: CarParkingPageKey = 'app') {
  return `/${locale}/${CARPARKING_PATHS[page]}/`;
}

const CARPARKING_METADATA: Record<CarParkingPageKey, Record<Locale, { title: string; description: string; keywords: string[] }>> = {
  app: {
    en: {
      title: 'Car Parking Trainer: Learn Real Parking Techniques',
      description:
        'Car Parking Trainer is a parking simulation that teaches bay, perpendicular, angled and parallel parking across 50 levels with 4 vehicles. Free, no ads, no in-app purchases, no account. App details and support.',
      keywords: ['Car Parking Trainer', 'parking training game', 'parallel parking practice', 'parking simulator', 'Car Parking Trainer support'],
    },
    tr: {
      title: 'Car Parking Trainer: Gerçek Park Tekniklerini Öğrenin',
      description:
        'Car Parking Trainer; cep, dikey, açılı ve paralel parkı 50 seviye ve 4 araçla öğreten bir park simülasyonudur. Ücretsiz, reklamsız, uygulama içi satın alma ve hesap yok. Uygulama bilgileri ve destek.',
      keywords: ['Car Parking Trainer', 'park etme eğitimi oyunu', 'paralel park çalışması', 'park simülasyonu', 'Car Parking Trainer destek'],
    },
  },
  privacy: {
    en: {
      title: 'Car Parking Trainer Privacy Policy',
      description: 'Car Parking Trainer collects no data: no analytics, no tracking, no ads and no network access. Progress and settings stay on your device.',
      keywords: ['Car Parking Trainer privacy policy', 'parking game privacy', 'no data collection game'],
    },
    tr: {
      title: 'Car Parking Trainer Gizlilik Politikası',
      description: 'Car Parking Trainer hiçbir veri toplamaz: analitik, takip, reklam ve ağ erişimi yoktur. İlerleme ve ayarlar cihazınızda kalır.',
      keywords: ['Car Parking Trainer gizlilik politikası', 'park oyunu gizlilik', 'veri toplamayan oyun'],
    },
  },
};

export function buildCarParkingMetadata(page: CarParkingPageKey, locale: Locale): Metadata {
  const meta = CARPARKING_METADATA[page][locale];

  return buildPageMetadata({
    locale,
    title: `${meta.title} | ${BRAND_DISPLAY[locale]}`,
    description: meta.description,
    alternates: { en: getCarParkingHref('en', page), tr: getCarParkingHref('tr', page) },
    keywords: meta.keywords,
  });
}
