"use client";

import IllustrationSlot from "@/components/layout/illustration-slot";
import { useLang } from "@/components/providers/language-provider";
import Link from "next/link";

const SHIP_TAGS = ["React", "Electron", "SQL Server"];

export default function Hero() {
  const { lang, t } = useLang();

  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-col">
          <div className="panel sh-12 hero-head">
            <div className="focus-lines" aria-hidden />
            <div className="hero-eyebrow">{t.eyebrowVol}</div>
            <h1 className="hero-title">
              {lang === "en" ? (
                <>
                  Fullstack developer
                  <br />
                  and <em>AI enthusiast</em>,
                  <br />
                  shipping reliable web apps.
                </>
              ) : (
                <>
                  Fullstack developer
                  <br />
                  e <em>AI enthusiast</em>,
                  <br />
                  che spedisce app affidabili.
                </>
              )}
            </h1>
            <p className="hero-blurb">{t.heroBlurb}</p>
            <div className="hero-ctas">
              <Link href="/#work" className="btn btn--primary">
                {t.ctaWork}
              </Link>
              <Link href="/#contact" className="btn btn--ghost">
                {t.ctaTalk}
              </Link>
            </div>
          </div>

          <div className="statrow">
            <div className="panel sh-12 stat-card">
              <div className="stat-card__head">
                <span className="eyebrow" style={{ letterSpacing: "0.26em" }}>
                  {t.statusLabel}
                </span>
                <span className="stat-card__lv">LV.28</span>
              </div>
              <div className="stat-list">
                {t.stats.map((stat) => (
                  <div key={stat.label} className="statbar">
                    <span className="statbar__label">{stat.label}</span>
                    <span className="statbar__track">
                      <span
                        className="statbar__fill"
                        style={{ width: `${stat.width}%` }}
                      />
                    </span>
                    <span className="statbar__value">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-vtext sh-12 sh-accent">
              <div className="hatch" aria-hidden />
              <div className="vtext">ミラノの開発者</div>
            </div>
          </div>
        </div>

        <div className="hero-col">
          <div className="panel panel--img sh-12" style={{ minHeight: 400 }}>
            <IllustrationSlot
              label="HERO · 挿絵"
              priority
              sizes="(max-width: 820px) 100vw, 50vw"
              src="/cms/hero.webp"
            />
            <div className="panel-caption">{t.panelCaption}</div>
            <div className="sfx sfx--hero">ドン!</div>
          </div>

          <div className="panel sh-12 ship-card">
            <div className="ship-card__status">
              <span className="blink-dot" />
              {t.nowShipping}
            </div>
            <div className="ship-card__title-row">
              <strong className="ship-card__title">NapSQL 2.0</strong>
              <Link href="/projects/napsql" className="ship-card__read">
                {t.readMore}
              </Link>
            </div>
            <p className="ship-card__desc">{t.shipDesc}</p>
            <div className="ship-card__tags">
              {SHIP_TAGS.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
