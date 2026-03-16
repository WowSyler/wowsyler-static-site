import LegalPageView from '@/views/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';
import { BASE_URL } from '@/lib/routes';

export function generateStaticParams() {
  return [{ locale: 'tr' }];
}

export function generateMetadata() {
  return buildLegalMetadata('pdpl', 'tr', BASE_URL);
}

export default function KvkkPage() {
  return <LegalPageView pageKey="pdpl" />;
}
