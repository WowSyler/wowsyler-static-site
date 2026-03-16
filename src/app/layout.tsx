import type { Metadata } from "next";
import "./globals.css";
import { BRAND_DISPLAY } from "@/lib/brand";
import { BASE_URL } from "@/lib/routes";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: BRAND_DISPLAY.en,
  description: `${BRAND_DISPLAY.en} — corporate software engineering across web, mobile, backend, and AI.`,
  other: {
    'theme-color': '#0A2342',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0A2342" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
