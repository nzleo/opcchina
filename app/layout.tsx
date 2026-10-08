import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { Frame } from "@/components/frame";
import { site } from "@/lib/content";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL(`https://${site.domain}`),
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: `https://${site.domain}`,
    siteName: site.domain,
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hans" className={display.variable}>
      <body>
        <Frame>{children}</Frame>
      </body>
    </html>
  );
}
