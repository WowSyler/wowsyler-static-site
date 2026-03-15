import { redirect } from 'next/navigation';

/**
 * Root index — always redirect to the default locale.
 */
export default function RootPage() {
  redirect('/en/');
}
