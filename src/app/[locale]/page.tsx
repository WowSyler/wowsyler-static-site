import HomeView from '@/views/HomeView';
import { LOCALES } from '@/lib/routes';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function HomePage() {
  return <HomeView />;
}
