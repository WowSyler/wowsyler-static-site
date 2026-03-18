import { Suspense } from 'react';
import Script from 'next/script';
import GoogleTagPageView from './GoogleTagPageView';

export const GOOGLE_TAG_ID = 'G-CYFH9YX9KR';

export default function GoogleTag() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_TAG_ID}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleTagPageView measurementId={GOOGLE_TAG_ID} />
      </Suspense>
    </>
  );
}
