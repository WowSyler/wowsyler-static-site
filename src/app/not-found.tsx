import { NOT_FOUND_METADATA } from '@/lib/not-found-metadata';
import NotFoundView from '@/components/NotFoundView';

export const metadata = NOT_FOUND_METADATA;

export default function NotFound() {
  return <NotFoundView />;
}
