import { permanentRedirect } from 'next/navigation';
import { getCarParkingHref } from '@/lib/carparking';
import { DEFAULT_LOCALE } from '@/lib/routes';

// Mağaza metinleri dil öneksiz adresi kullanabilir (/carparking/privacy).
export default function CarParkingPrivacyRedirect() {
  permanentRedirect(getCarParkingHref(DEFAULT_LOCALE, 'privacy'));
}
