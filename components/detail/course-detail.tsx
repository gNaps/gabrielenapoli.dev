import { getSiteCopy } from "@/cms/site-copy";
import { Course } from "@/models/course.model";
import { Story } from "@/models/story.model";
import Link from "next/link";
import { Fragment } from "react";
import {
  originalStorySlug,
  courseLanguages,
} from "@/utils/content-language.utils";
import ContentLanguageSwitch from "./content-language-switch";

function ChapterRow({ chapter, number }: { chapter: Story; number: number }) {
  return (
    <Link href={`/stories/${chapter.slug}`} className="chapter-row">
      <span className="chapter-row__num">
        CH.{String(number).padStart(2, "0")}
      </span>
      <span className="chapter-row__body">
        <strong className="chapter-row__title">{chapter.title}</strong>
        <span className="chapter-row__date">{chapter.writtenAt}</span>
      </span>
      <span className="chapter-row__arrow">→</span>
    </Link>
  );
}

export default function CourseDetail({
  course,
  chapters,
}: {
  course: Course;
  chapters: Story[];
}) {
  const { lang, t } = getSiteCopy(course.language ?? "it");

  const chapterBySlug = (slug: string) =>
    chapters.find((c) => originalStorySlug(c.slug) === slug);
  const numberOf = (slug: string) => course.chapterSlugs.indexOf(slug) + 1;

  return (
    <div className="gn-page gn-page--narrow" lang={lang}>
      <div className="detail-top">
        <Link href="/stories" className="btn btn--back">
          ← {t.backToBlog}
        </Link>
        <span className="eyebrow">
          {course.chapterSlugs.length}{" "}
          {course.chapterSlugs.length === 1
            ? t.chapterLabel
            : t.chaptersLabel}{" "}
        </span>
      </div>

      <div className="post-head">
        <div className="post-meta">
          <span>{t.evCourse}</span>
        </div>
        <ContentLanguageSwitch
          language={lang}
          paths={courseLanguages(course.slug)}
        />
        <h1 className="post-title">{course.title}</h1>
        <p className="course-intro">{course.description[lang]}</p>
      </div>

      <div className="course-toc">
        {course.sections
          ? course.sections.map((section, s) => (
              <Fragment key={section.title.en}>
                <div className="course-section-head">
                  <span className="course-section-head__num">
                    {String(s + 1).padStart(2, "0")}
                  </span>
                  {section.title[lang]}
                </div>
                {section.chapterSlugs.map((slug) => {
                  const chapter = chapterBySlug(slug);
                  return chapter ? (
                    <ChapterRow
                      key={slug}
                      chapter={chapter}
                      number={numberOf(slug)}
                    />
                  ) : null;
                })}
              </Fragment>
            ))
          : chapters.map((chapter, i) => (
              <ChapterRow key={chapter.slug} chapter={chapter} number={i + 1} />
            ))}
      </div>
    </div>
  );
}
