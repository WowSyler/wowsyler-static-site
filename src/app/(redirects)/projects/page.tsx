import { permanentRedirect } from 'next/navigation';
import { DEFAULT_LOCALE, getMainPageHref } from '@/lib/routes';

export default function ProjectsRedirect() {
  permanentRedirect(getMainPageHref(DEFAULT_LOCALE, 'projects'));
}
