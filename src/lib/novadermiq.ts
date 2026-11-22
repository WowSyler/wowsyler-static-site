import type { Metadata } from 'next';
import { BRAND_DISPLAY } from './brand';
import { buildPageMetadata } from './seo';
import type { Locale } from './site-config';

/** NovaDermIQ mobile app pages. Slugs are identical in both locales so store links stay stable. */
export const NOVADERMIQ_SUPPORT_EMAIL = 'info-novadermiq@wowsyler.com';
export const NOVADERMIQ_PROVIDER = 'WowSyler Yazılım ve Teknoloji, İstanbul, Türkiye';
export const NOVADERMIQ_COLOR = '#E11D48';

export type NovaDermIQPageKey = 'app' | 'privacy' | 'terms';
export type NovaDermIQLegalKey = Exclude<NovaDermIQPageKey, 'app'>;

const NOVADERMIQ_PATHS: Record<NovaDermIQPageKey, string> = {
  app: 'novadermiq',
  privacy: 'novadermiq/privacy',
  terms: 'novadermiq/terms',
};

export const NOVADERMIQ_PAGE_KEYS = Object.keys(NOVADERMIQ_PATHS) as NovaDermIQPageKey[];

export function getNovaDermIQHref(locale: Locale, page: NovaDermIQPageKey = 'app') {
  return `/${locale}/${NOVADERMIQ_PATHS[page]}/`;
}

const NOVADERMIQ_METADATA: Record<NovaDermIQPageKey, Record<Locale, { title: string; description: string; keywords: string[] }>> = {
  app: {
    en: {
      title: 'NovaDermIQ: AI Skin Analysis for Salons and Individuals',
      description:
        'NovaDermIQ analyses a face photo with AI and returns a skin score, metrics such as moisture, pores and pigmentation, and personalised recommendations. Plans for individuals and beauty salons. App details and support.',
      keywords: ['NovaDermIQ', 'AI skin analysis app', 'face skin analysis', 'beauty salon skin analysis', 'NovaDermIQ support'],
    },
    tr: {
      title: 'NovaDermIQ: Salonlar ve Bireyler İçin Yapay Zekâ Cilt Analizi',
      description:
        'NovaDermIQ, yüz fotoğrafını yapay zekâ ile analiz ederek cilt skoru; nem, gözenek ve pigmentasyon gibi metrikler ve kişisel öneriler sunar. Bireyler ve güzellik salonları için planlar. Uygulama bilgileri ve destek.',
      keywords: ['NovaDermIQ', 'yapay zekâ cilt analizi uygulaması', 'yüz cilt analizi', 'güzellik salonu cilt analizi', 'NovaDermIQ destek'],
    },
  },
  privacy: {
    en: {
      title: 'NovaDermIQ Privacy Policy',
      description: 'How the NovaDermIQ app handles face images (sensitive data), consent, retention, cross-border AI processing and your KVKK/GDPR rights.',
      keywords: ['NovaDermIQ privacy policy', 'face image privacy', 'skin analysis app privacy'],
    },
    tr: {
      title: 'NovaDermIQ Gizlilik Politikası',
      description: 'NovaDermIQ uygulamasının yüz görsellerini (özel nitelikli veri), açık rızayı, saklamayı, yurt dışına yapay zekâ aktarımını ve KVKK/GDPR haklarınızı nasıl ele aldığı.',
      keywords: ['NovaDermIQ gizlilik politikası', 'yüz görseli gizlilik', 'cilt analizi uygulaması gizlilik'],
    },
  },
  terms: {
    en: {
      title: 'NovaDermIQ Terms of Use and Subscription',
      description: 'Plans, TRY prices, automatic renewal, cancellation and refunds for NovaDermIQ Individual and Salon subscriptions.',
      keywords: ['NovaDermIQ terms', 'NovaDermIQ subscription', 'cancel NovaDermIQ subscription'],
    },
    tr: {
      title: 'NovaDermIQ Kullanım ve Abonelik Şartları',
      description: 'NovaDermIQ Bireysel ve Salon abonelikleri için planlar, TL fiyatlar, otomatik yenileme, iptal ve iade koşulları.',
      keywords: ['NovaDermIQ kullanım şartları', 'NovaDermIQ abonelik', 'NovaDermIQ abonelik iptali'],
    },
  },
};

export function buildNovaDermIQMetadata(page: NovaDermIQPageKey, locale: Locale): Metadata {
  const meta = NOVADERMIQ_METADATA[page][locale];

  return buildPageMetadata({
    locale,
    title: `${meta.title} | ${BRAND_DISPLAY[locale]}`,
    description: meta.description,
    alternates: { en: getNovaDermIQHref('en', page), tr: getNovaDermIQHref('tr', page) },
    keywords: meta.keywords,
  });
}
