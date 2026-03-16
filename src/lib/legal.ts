import type { Metadata } from 'next';
import { BRAND_DISPLAY } from './brand';

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

export function getLegalPageHref(locale: SupportedLocale, pageKey: LegalPageKey) {
  return `/${locale}/${LEGAL_PAGE_CONFIG[pageKey].slugs[locale]}/`;
}

export function buildLegalMetadata(
  pageKey: LegalPageKey,
  locale: SupportedLocale,
  baseUrl: string,
): Metadata {
  const page = LEGAL_PAGE_CONFIG[pageKey];
  const currentMeta = page.metadata[locale];
  const title = `${currentMeta.title} | ${BRAND_DISPLAY[locale]}`;
  const canonical = `${baseUrl}/${locale}/${page.slugs[locale]}/`;

  return {
    title,
    description: currentMeta.description,
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en/${page.slugs.en}/`,
        tr: `${baseUrl}/tr/${page.slugs.tr}/`,
        'x-default': `${baseUrl}/en/${page.slugs.en}/`,
      },
    },
    openGraph: {
      title,
      description: currentMeta.description,
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: currentMeta.description,
    },
  };
}
