import { permanentRedirect } from 'next/navigation';
import { DEFAULT_LOCALE, getMainPageHref } from '@/lib/routes';

export default function ContactRedirect() {
  permanentRedirect(getMainPageHref(DEFAULT_LOCALE, 'contact'));
}
