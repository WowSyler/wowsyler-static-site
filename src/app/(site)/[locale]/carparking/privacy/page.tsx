import type { Metadata } from 'next';
import CarParkingLegalView from '@/views/CarParkingLegalView';
import { buildCarParkingMetadata, getCarParkingHref } from '@/lib/carparking';
import { buildBreadcrumbJsonLd } from '@/lib/seo';
import { BASE_URL, LOCALES, getLocaleHomeHref } from '@/lib/routes';

type Props = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return buildCarParkingMetadata('privacy', locale === 'en' ? 'en' : 'tr');
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale === 'en' ? 'en' : 'tr';
  const jsonLd = buildBreadcrumbJsonLd([
    { name: currentLocale === 'en' ? 'Home' : 'Ana Sayfa', url: `${BASE_URL}${getLocaleHomeHref(currentLocale)}` },
    { name: 'Car Parking Trainer', url: `${BASE_URL}${getCarParkingHref(currentLocale)}` },
    { name: currentLocale === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası', url: `${BASE_URL}${getCarParkingHref(currentLocale, 'privacy')}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CarParkingLegalView pageKey="privacy" />
    </>
  );
}
