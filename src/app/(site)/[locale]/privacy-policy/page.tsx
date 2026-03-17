import LegalPageView from '@/views/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export function generateMetadata() {
  return buildLegalMetadata('privacyPolicy', 'en');
}

export default function PrivacyPolicyPage() {
  return <LegalPageView pageKey="privacyPolicy" />;
}
