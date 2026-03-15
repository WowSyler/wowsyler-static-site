import type { Metadata } from 'next';
import ContactView from '@/views/ContactView';
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
    ? 'Contact Us | WowSyler Technology'
    : 'İletişim | WowSyler Teknoloji';
  const description = isEn
    ? 'Get in touch with WowSyler Technology. Have a project in mind? We\'d love to hear from you and build something great together.'
    : 'WowSyler Teknoloji ile iletişime geçin. Aklınızda bir proje mi var? Birlikte harika bir şey yaratalım.';

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/contact/`,
      languages: {
        en: `${BASE_URL}/en/contact/`,
        tr: `${BASE_URL}/tr/contact/`,
        'x-default': `${BASE_URL}/tr/contact/`,
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
