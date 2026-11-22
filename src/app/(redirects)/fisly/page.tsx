import { permanentRedirect } from 'next/navigation';
import { getFislyHref } from '@/lib/fisly';
import { DEFAULT_LOCALE } from '@/lib/routes';

export default function FislyRedirect() {
  permanentRedirect(getFislyHref(DEFAULT_LOCALE));
}
