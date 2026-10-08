import { getSiteCopy } from "@/cms/site-copy";
import heroImage from "@/public/cms/hero.webp";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { lang, t } = getSiteCopy();
  return (
    <section
      id="top"
      className="hero-scroll"
      data-sticky="hero"
      aria-label="Introduction"
    >
      <div className="hero-stage">
        <div className="hero-title" data-hero-title>
          <p className="eyebrow hero-eyebrow">
            Gabriele Napoli ·{" "}
            {lang === "en" ? "Milan, Italy" : "Milano, Italia"} · Full stack
            developer
          </p>
          <h1>
            {lang === "en"
              ? "Fullstack developer and "
              : "Sviluppatore fullstack e "}
            <span className="accent">AI enthusiast</span>,{" "}
            <span className="hero-muted">
              {lang === "en"
                ? "building reliable web apps."
                : "creo applicazioni web affidabili."}
            </span>
          </h1>
          <div className="hero-ctas">
            <Link href="/#work" className="btn btn--primary">
              {t.ctaWork}
            </Link>
            <Link href="/#contact" className="btn btn--ghost">
              {t.ctaTalk}
            </Link>
          </div>
        </div>
        <div className="hero-media" data-hero-media>
          <div className="hero-image" data-hero-img>
            <Image
              src={heroImage}
              alt="Gabriele Napoli, fullstack developer in Milan"
              fill
              preload
              sizes="100vw"
              className="cover"
            />
          </div>
          <div className="hero-shade" />
          <div className="hero-caption" data-hero-cap>
            <div>
              <p className="eyebrow accent">{t.nowShipping}</p>
              <h2>NapSQL 2.0</h2>
              <p className="ship-description">{t.shipDesc}</p>
            </div>
            <Link href="/projects/napsql" className="btn btn--glass">
              {lang === "en" ? "Read the case study →" : "Scopri il progetto →"}
            </Link>
          </div>
        </div>
        <span className="scroll-hint" aria-hidden="true">
          {lang === "en" ? "Scroll to explore" : "Scorri per esplorare"}
          <span>↓</span>
        </span>
      </div>
    </section>
  );
}
