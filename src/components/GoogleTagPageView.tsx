'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = {
  measurementId: string;
};

export default function GoogleTagPageView({ measurementId }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    let cancelled = false;
    let attempts = 0;

    const trackPageView = () => {
      if (cancelled) {
        return;
      }

      if (typeof window.gtag === 'function') {
        const pagePath = search ? `${pathname}?${search}` : pathname;

        window.gtag('event', 'page_view', {
          send_to: measurementId,
          page_title: document.title,
          page_location: window.location.href,
          page_path: pagePath,
        });
        return;
      }

      if (attempts >= 20) {
        return;
      }

      attempts += 1;
      window.setTimeout(trackPageView, 250);
    };

    trackPageView();

    return () => {
      cancelled = true;
    };
  }, [measurementId, pathname, search]);

  return null;
}
