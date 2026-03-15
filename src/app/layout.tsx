import type { Metadata } from "next";
import "./globals.css";
import { BASE_URL } from "@/lib/routes";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "WowSyler",
  description: "WowSyler Technology — web, mobile, game, and AI software solutions.",
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
