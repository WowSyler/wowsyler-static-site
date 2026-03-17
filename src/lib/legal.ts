import type { Metadata } from 'next';
import { BRAND_DISPLAY } from './brand';
import { buildPageMetadata } from './seo';

export type SupportedLocale = 'en' | 'tr';
export type LegalPageKey = 'pdpl' | 'privacyPolicy' | 'cookiePolicy' | 'legalInformation';

type LegalPageConfig = {
  slugs: Record<SupportedLocale, string>;
  metadata: Record<
    SupportedLocale,
    {
      title: string;
      description: string;
    }
  >;
};

export const LEGAL_PAGE_CONFIG: Record<LegalPageKey, LegalPageConfig> = {
  pdpl: {
    slugs: {
      en: 'pdpl',
      tr: 'kvkk',
    },
    metadata: {
      en: {
        title: 'PDPL Notice',
        description:
          'Read the PDPL notice of WowSyler Software & Technology regarding contact data, technical logs, and website communication processes.',
      },
      tr: {
        title: 'KVKK Aydınlatma Metni',
        description:
          'WowSyler Yazılım ve Teknoloji tarafından iletişim verileri, teknik kayıtlar ve web sitesi iletişim süreçlerine ilişkin KVKK aydınlatma metni.',
      },
    },
  },
  privacyPolicy: {
    slugs: {
      en: 'privacy-policy',
      tr: 'gizlilik-politikasi',
    },
    metadata: {
      en: {
        title: 'Privacy Policy',
        description:
          'Review how WowSyler Software & Technology collects, uses, stores, and protects website and communication data.',
      },
      tr: {
        title: 'Gizlilik Politikası',
        description:
          'WowSyler Yazılım ve Teknoloji web sitesi ve iletişim verilerinin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu inceleyin.',
      },
    },
  },
  cookiePolicy: {
    slugs: {
      en: 'cookie-policy',
      tr: 'cerez-politikasi',
    },
    metadata: {
      en: {
        title: 'Cookie Policy',
        description:
          'Learn about the essential cookies and similar technical mechanisms used by WowSyler Software & Technology for website continuity and security.',
      },
      tr: {
        title: 'Çerez Politikası',
        description:
          'WowSyler Yazılım ve Teknoloji tarafından site sürekliliği ve güvenlik amacıyla kullanılan temel çerezler ve benzeri teknik mekanizmalar hakkında bilgi alın.',
      },
    },
  },
  legalInformation: {
    slugs: {
      en: 'legal-information',
      tr: 'yasal-bilgiler',
    },
    metadata: {
      en: {
        title: 'Legal Information',
        description:
          'General legal information about the website operator, intellectual property, website content, and liability terms of WowSyler Software & Technology.',
      },
      tr: {
        title: 'Yasal Bilgiler',
        description:
          'WowSyler Yazılım ve Teknoloji web sitesi işletmecisi, fikri mülkiyet, içerik kullanımı ve sorumluluk esaslarına ilişkin genel yasal bilgiler.',
      },
    },
  },
};

export const LEGAL_PAGE_KEYS = Object.keys(LEGAL_PAGE_CONFIG) as LegalPageKey[];

const LEGAL_PAGE_KEYWORDS: Record<LegalPageKey, Record<SupportedLocale, string[]>> = {
  pdpl: {
    en: ['PDPL notice', 'personal data notice', 'data processing notice', 'contact form privacy'],
    tr: ['KVKK aydınlatma metni', 'kişisel veri aydınlatma', 'veri işleme bildirimi', 'iletişim formu KVKK'],
  },
  privacyPolicy: {
    en: ['privacy policy', 'website privacy policy', 'data usage policy', 'data protection policy'],
    tr: ['gizlilik politikası', 'web sitesi gizlilik politikası', 'veri kullanımı politikası', 'veri koruma politikası'],
  },
  cookiePolicy: {
    en: ['cookie policy', 'website cookies', 'essential cookies', 'cookie usage policy'],
    tr: ['çerez politikası', 'web sitesi çerezleri', 'zorunlu çerezler', 'çerez kullanımı politikası'],
  },
  legalInformation: {
    en: ['legal information', 'website legal notice', 'intellectual property notice', 'website terms'],
    tr: ['yasal bilgiler', 'web sitesi yasal bildirim', 'fikri mülkiyet bildirimi', 'web sitesi koşulları'],
  },
};

export function getLegalPageHref(locale: SupportedLocale, pageKey: LegalPageKey) {
  return `/${locale}/${LEGAL_PAGE_CONFIG[pageKey].slugs[locale]}/`;
}

export function buildLegalMetadata(
  pageKey: LegalPageKey,
  locale: SupportedLocale,
): Metadata {
  const page = LEGAL_PAGE_CONFIG[pageKey];
  const currentMeta = page.metadata[locale];
  const title = `${currentMeta.title} | ${BRAND_DISPLAY[locale]}`;

  return buildPageMetadata({
    locale,
    title,
    description: currentMeta.description,
    alternates: {
      en: `/en/${page.slugs.en}/`,
      tr: `/tr/${page.slugs.tr}/`,
    },
    keywords: LEGAL_PAGE_KEYWORDS[pageKey][locale],
  });
}
