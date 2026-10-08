import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ScrollEffects from "@/components/layout/scroll-effects";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://gabrielenapoli.dev"),
  title: "Gabriele Napoli | Fullstack Developer in Milan",
  description:
    "Fullstack developer and AI enthusiast in Milan. Building reliable web apps with Angular, React, Next.js and Node.js since 2018.",
  openGraph: {
    title: "Gabriele Napoli | Fullstack Developer in Milan",
    description:
      "Interfaces that feel right. Backends that hold. A human eye on every line.",
    siteName: "Gabriele Napoli",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Gabriele Napoli — Fullstack developer in Milan",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <ScrollEffects />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Script
          id="goatcounter"
          strategy="lazyOnload"
          data-goatcounter="https://napsryu.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
        />
      </body>
    </html>
  );
}
