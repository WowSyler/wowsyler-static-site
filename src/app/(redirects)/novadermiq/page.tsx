import { permanentRedirect } from 'next/navigation';
import { getNovaDermIQHref } from '@/lib/novadermiq';
import { DEFAULT_LOCALE } from '@/lib/routes';

export default function NovaDermIQRedirect() {
  permanentRedirect(getNovaDermIQHref(DEFAULT_LOCALE));
}
