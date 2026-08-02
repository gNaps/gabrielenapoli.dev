"use client";

import { nowItems, uses } from "@/cms/now";
import IllustrationSlot from "@/components/layout/illustration-slot";
import { useReveal } from "@/components/layout/use-reveal";
import { useLang } from "@/components/providers/language-provider";

export default function NowSection() {
  const { lang, t } = useLang();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="now" ref={ref} className="reveal mt-section">
      <div className="now-grid">
        <div className="panel panel--ink sh-10 sh-accent now-card">
          <div className="now-card__eyebrow">
            <span className="blink-dot" />
            {t.evNow}
          </div>
          <h2 className="now-card__title">{t.nowTitle}</h2>
          <div className="now-list">
            {nowItems.map((item) => (
              <div key={item.label.en} className="now-row">
                <span className="now-row__label">{item.label[lang]}</span>
                <span className="now-row__value">{item.value[lang]}</span>
              </div>
            ))}
          </div>
          <div className="now-updated">{t.nowUpdated}</div>
        </div>
        <div className="about-col">
          <div
            className="panel panel--img sh-10"
            style={{ flex: 1, minHeight: 220 }}
          >
            <IllustrationSlot label="NOW · 挿絵" src="/cms/now.webp" />
          </div>
          <div id="uses" className="panel uses-card">
            <div className="eyebrow">{t.evUses}</div>
            <h3 className="uses-card__title">{t.usesTitle}</h3>
            <div className="uses-list">
              {uses.map((item) => (
                <div key={item.label.en} className="uses-row">
                  <span className="uses-row__label">{item.label[lang]}</span>
                  <span className="uses-row__value">{item.value[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
