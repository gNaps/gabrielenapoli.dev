import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Marquee from "@/components/layout/marquee";
import SpeedLines from "@/components/layout/speed-lines";
import { LanguageProvider } from "@/components/providers/language-provider";
import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* Latin-only families go through next/font. The two Japanese families
   (Shippori Mincho B1, Zen Kaku Gothic New) are loaded with a classic
   Google Fonts <link> instead: they ship as ~120 unicode-range slices
   that `subsets: ["latin"]` cannot filter, so next/font would inline
   hundreds of @font-face rules (~544 kB of blocking CSS). With the
   <link> the browser downloads only the slices actually used. */
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Gabriele Napoli | Fullstack JavaScript Developer in Milan",
  description:
    "Fullstack JavaScript developer based in Milan, building fast and scalable web applications with Angular, React and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bebas.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          // Applies the stored theme before first paint (no flash) and
          // migrates the legacy `theme` localStorage key to `gn-theme`.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('gn-theme')||localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.dataset.theme=t;localStorage.setItem('gn-theme',t);}}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@600;700;800&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <Script
          id="goatcounter"
          strategy="afterInteractive"
          data-goatcounter="https://napsryu.goatcounter.com/count"
          src="//gc.zgo.at/count.js"
          async
        />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <LanguageProvider>
          <div className="halftone" aria-hidden />
          <SpeedLines />
          <Header />
          <main>{children}</main>
          <Marquee />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
