import LegalPageView from '@/views/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export function generateMetadata() {
  return buildLegalMetadata('legalInformation', 'tr');
}

export default function YasalBilgilerPage() {
  return <LegalPageView pageKey="legalInformation" />;
}
