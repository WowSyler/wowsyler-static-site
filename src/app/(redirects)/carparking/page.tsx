import { permanentRedirect } from 'next/navigation';
import { getCarParkingHref } from '@/lib/carparking';
import { DEFAULT_LOCALE } from '@/lib/routes';

export default function CarParkingRedirect() {
  permanentRedirect(getCarParkingHref(DEFAULT_LOCALE));
}
