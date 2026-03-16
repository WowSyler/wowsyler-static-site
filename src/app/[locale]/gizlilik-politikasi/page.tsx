import LegalPageView from '@/views/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';
import { BASE_URL } from '@/lib/routes';

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export function generateMetadata() {
  return buildLegalMetadata('privacyPolicy', 'tr', BASE_URL);
}

export default function GizlilikPolitikasiPage() {
  return <LegalPageView pageKey="privacyPolicy" />;
}
