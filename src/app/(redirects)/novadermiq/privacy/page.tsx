import { permanentRedirect } from 'next/navigation';
import { getNovaDermIQHref } from '@/lib/novadermiq';
import { DEFAULT_LOCALE } from '@/lib/routes';

// Uygulama ve mağaza metinleri dil öneksiz adresi kullanır (/novadermiq/privacy).
export default function NovaDermIQPrivacyRedirect() {
  permanentRedirect(getNovaDermIQHref(DEFAULT_LOCALE, 'privacy'));
}
