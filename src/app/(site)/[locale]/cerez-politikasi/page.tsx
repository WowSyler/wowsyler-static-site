import LegalPageView from '@/views/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export function generateMetadata() {
  return buildLegalMetadata('cookiePolicy', 'tr');
}

export default function CerezPolitikasiPage() {
  return <LegalPageView pageKey="cookiePolicy" />;
}
