import LegalPageView from '@/views/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';
import { BASE_URL } from '@/lib/routes';

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export function generateMetadata() {
  return buildLegalMetadata('legalInformation', 'en', BASE_URL);
}

export default function LegalInformationPage() {
  return <LegalPageView pageKey="legalInformation" />;
}
