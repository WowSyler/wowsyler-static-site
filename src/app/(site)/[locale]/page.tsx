import type { Metadata } from 'next';
import HomeView from '@/views/HomeView';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { BASE_URL, LOCALES, getLocaleHomeHref, type Locale } from '@/lib/routes';

const HOME_METADATA: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string[];
  }
> = {
  en: {
    title: 'WowSyler Software & Technology | Corporate Software, Web, Mobile & AI Development',
    description:
      'WowSyler Software & Technology delivers enterprise-ready software solutions across web, mobile, backend, and AI with a disciplined product engineering approach.',
    keywords: [
      'corporate software development',
      'software engineering partner',
      'game development',
      'mobile game development',
      'web and mobile app development',
      'AI agent development',
      'backend systems engineering',
    ],
  },
  tr: {
    title: 'WowSyler Yazılım ve Teknoloji | Kurumsal Yazılım, Web, Mobil ve Yapay Zeka',
    description:
      'WowSyler Yazılım ve Teknoloji; web, mobil, backend ve yapay zeka alanlarında kurumsal ölçekte yazılım çözümleri üretir.',
    keywords: [
      'kurumsal yazılım geliştirme',
      'oyun geliştirme',
      'mobil uygulama geliştirme',
      'mobil oyun geliştirme',
      'yazılım mühendisliği partneri',
      'web ve mobil uygulama geliştirme',
      'yapay zeka ajan geliştirme',
      'backend sistem mühendisliği',
    ],
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale === 'en' ? 'en' : 'tr';
  const meta = HOME_METADATA[currentLocale];

  return buildPageMetadata({
    locale: currentLocale,
    title: meta.title,
    description: meta.description,
    alternates: {
      en: getLocaleHomeHref('en'),
      tr: getLocaleHomeHref('tr'),
    },
    keywords: meta.keywords,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale === 'en' ? 'en' : 'tr';
  const homeLabel = currentLocale === 'en' ? 'Home' : 'Ana Sayfa';

  const jsonLd = buildBreadcrumbJsonLd([{ name: homeLabel, url: `${BASE_URL}${getLocaleHomeHref(currentLocale)}` }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomeView />
    </>
  );
}
