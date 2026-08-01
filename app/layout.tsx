import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* Display face for Latin headings and the logotype — a heavy condensed
   gothic, the idiom of manga cover and chapter titles.

   Deliberately NOT a Japanese Google font: families like Zen Old Mincho are
   served as ~120 numbered unicode-range slices that `subsets: ["latin"]`
   cannot filter, so next/font inlines every one of them — that cost 731
   @font-face rules and 544 kB of blocking CSS. Kana therefore falls through
   to the system gothic faces declared in --font-display.

   Anton ships a single weight. Headings must stay at font-weight 400 or the
   browser synthesises a smeared fake bold. */
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-anton",
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
      className={anton.variable}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.dataset.theme=t;}}catch(e){}})();`,
          }}
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
