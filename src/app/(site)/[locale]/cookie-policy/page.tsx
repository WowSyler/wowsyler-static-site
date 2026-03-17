import LegalPageView from '@/views/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export function generateMetadata() {
  return buildLegalMetadata('cookiePolicy', 'en');
}

export default function CookiePolicyPage() {
  return <LegalPageView pageKey="cookiePolicy" />;
}
