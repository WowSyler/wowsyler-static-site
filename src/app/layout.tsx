import type { Metadata } from "next";
import "./globals.css";
import { BASE_URL } from "@/lib/routes";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "WowSyler",
  description: "WowSyler Technology — web, mobile, game, and AI software solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
