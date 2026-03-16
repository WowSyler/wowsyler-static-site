import type { Metadata } from 'next';
import ContactView from '@/views/ContactView';
import { BRAND_DISPLAY } from '@/lib/brand';
import { BASE_URL, LOCALES, type Locale } from '@/lib/routes';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = (locale as Locale) === 'en';

  const title = isEn
    ? `Contact Us | ${BRAND_DISPLAY.en}`
    : `İletişim | ${BRAND_DISPLAY.tr}`;
  const description = isEn
    ? `Get in touch with ${BRAND_DISPLAY.en}. If you need a reliable software delivery partner, our team would be glad to discuss your project.`
    : `${BRAND_DISPLAY.tr} ile iletişime geçin. Güvenilir bir yazılım teslimat partneri arıyorsanız projenizi birlikte değerlendirebiliriz.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/contact/`,
      languages: {
        en: `${BASE_URL}/en/contact/`,
        tr: `${BASE_URL}/tr/contact/`,
        'x-default': `${BASE_URL}/en/contact/`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/contact/`,
    },
  };
}

export default function ContactPage() {
  return <ContactView />;
}
