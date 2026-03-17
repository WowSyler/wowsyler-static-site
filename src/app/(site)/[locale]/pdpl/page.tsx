import LegalPageView from '@/views/LegalPageView';
import { buildLegalMetadata } from '@/lib/legal';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export function generateMetadata() {
  return buildLegalMetadata('pdpl', 'en');
}

export default function PdplPage() {
  return <LegalPageView pageKey="pdpl" />;
}
