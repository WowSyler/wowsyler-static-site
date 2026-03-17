import { permanentRedirect } from 'next/navigation';
import { DEFAULT_LOCALE, getLocaleHomeHref } from '@/lib/routes';

/**
 * Root index — always redirect to the default locale.
 */
export default function RootPage() {
  permanentRedirect(getLocaleHomeHref(DEFAULT_LOCALE));
}
