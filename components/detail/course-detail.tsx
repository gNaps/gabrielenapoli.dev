"use client";

import { useLang } from "@/components/providers/language-provider";
import { Course } from "@/models/course.model";
import { Story } from "@/models/story.model";
import Link from "next/link";
import { Fragment } from "react";

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
  const { lang, t } = useLang();

  const chapterBySlug = (slug: string) =>
    chapters.find((c) => c.slug === slug);
  const numberOf = (slug: string) =>
    course.chapterSlugs.indexOf(slug) + 1;

  return (
    <div className="gn-page gn-page--narrow">
      <div className="detail-top">
        <Link href="/#blog" className="btn btn--back">
          ← {t.backToBlog}
        </Link>
        <span className="eyebrow">
          {course.chapterSlugs.length}{" "}
          {course.chapterSlugs.length === 1 ? t.chapterLabel : t.chaptersLabel}{" "}
          · {course.kana}
        </span>
      </div>

      <div className="panel sh-10 post-head">
        <div className="post-meta">
          <span>{t.evCourse}</span>
        </div>
        <h1 className="post-title">{course.title}</h1>
        <p className="course-intro">{course.description[lang]}</p>
      </div>

      <div className="panel sh-10 course-toc">
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
