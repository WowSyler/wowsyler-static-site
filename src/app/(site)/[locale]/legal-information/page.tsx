import LegalPageView from '@/views/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export function generateMetadata() {
  return buildLegalMetadata('legalInformation', 'en');
}

export default function LegalInformationPage() {
  return <LegalPageView pageKey="legalInformation" />;
}
