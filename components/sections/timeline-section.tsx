import { getSiteCopy } from "@/cms/site-copy";
import { Experience } from "@/models/experience.model";
export default function TimelineSection({
  experiences,
}: {
  experiences: Experience[];
}) {
  const { lang, t } = getSiteCopy();
  return (
    <section id="timeline" className="career-section container">
      <div className="career-heading">
        <p className="eyebrow accent">{t.evStory}</p>
        <h2 className="section-title">{t.timelineTitle}</h2>
        <p className="section-intro">
          {lang === "en"
            ? "From a university internship to leading refactors of business-critical systems. One chapter at a time."
            : "Da uno stage universitario al refactoring di sistemi aziendali critici. Un capitolo alla volta."}
        </p>
      </div>
      <div className="career-timeline" data-timeline>
        <div className="career-line" aria-hidden="true">
          <div data-line />
        </div>
        {[...experiences]
          .sort((a, b) => a.order - b.order)
          .map((exp) => (
            <article key={exp.slug} className="career-chapter" data-reveal>
              <span className="career-dot" data-dot aria-hidden="true" />
              <div className="career-meta">
                <span>{exp.chapter?.[lang]}</span>
                <span>{exp.chapterYear?.[lang]}</span>
                <span className="accent">{exp.jobTitle}</span>
              </div>
              <h3>{exp.company}</h3>
              <div className="career-body">{exp.description}</div>
              <div className="tag-row">
                {exp.tags?.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
