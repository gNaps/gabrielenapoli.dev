"use client";

import IllustrationSlot from "@/components/layout/illustration-slot";
import { useReveal } from "@/components/layout/use-reveal";
import { useLang } from "@/components/providers/language-provider";

export default function AboutSection() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="reveal">
      <div className="section-head">
        <h2 className="section-title">{t.aboutTitle}</h2>
        <span className="eyebrow">{t.evAbout}</span>
      </div>
      <div className="about-grid">
        <div
          className="panel panel--img sh-10"
          style={{ minHeight: 420 }}
        >
          <IllustrationSlot
            src="/cms/about_me.webp"
            alt="Gabriele Napoli"
            label="ABOUT · 挿絵"
          />
          <div className="vtext about-vtext">ミラノの開発者</div>
        </div>
        <div className="about-col">
          <div className="panel sh-10 bubble">
            <p className="bubble__lead">{t.bubbleLead}</p>
            <p className="bubble__body">{t.bubbleBody}</p>
          </div>
          <div className="facts-grid">
            {t.facts.map((fact) => (
              <div key={fact.big} className="fact">
                <div className="fact__big">{fact.big}</div>
                <div className="fact__label">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
