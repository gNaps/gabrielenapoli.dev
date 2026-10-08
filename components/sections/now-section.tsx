import { nowItems, uses } from "@/cms/now";
import { getSiteCopy } from "@/cms/site-copy";
export default function NowSection() {
  const { t, lang } = getSiteCopy();
  return (
    <section id="now" className="now-section container">
      <div data-reveal>
        <p className="eyebrow accent">
          {t.evNow} <span className="now-date">· {t.nowUpdated}</span>
        </p>
        <h2 className="section-title">{t.nowTitle}</h2>
      </div>
      <div className="now-grid">
        {nowItems.map((item) => (
          <div className="now-card" key={item.label.en} data-reveal>
            <p className="eyebrow accent">{item.label[lang]}</p>
            <h3>{item.value[lang]}</h3>
          </div>
        ))}
      </div>
      <div className="uses-panel" data-reveal>
        <div>
          <p className="eyebrow accent">{t.evUses}</p>
          <h3>{t.usesTitle}</h3>
        </div>
        <dl>
          {uses.map((item) => (
            <div key={item.label.en}>
              <dt>{item.label[lang]}</dt>
              <dd>{item.value[lang]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
