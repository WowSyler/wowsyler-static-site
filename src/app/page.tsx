'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Root index — redirect to the appropriate locale.
 * Defaults to /tr/ for Turkish speakers, /en/ for everyone else.
 */
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const lang =
      typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('en')
        ? 'en'
        : 'tr';
    router.replace(`/${lang}/`);
  }, [router]);

  return null;
}
