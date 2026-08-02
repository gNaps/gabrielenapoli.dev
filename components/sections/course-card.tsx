"use client";

import { useLang } from "@/components/providers/language-provider";
import { Course } from "@/models/course.model";
import Link from "next/link";

export default function CourseCard({ course }: { course: Course }) {
  const { lang, t } = useLang();

  return (
    <Link
      href={`/series/${course.slug}`}
      className="course-card panel panel--ink sh-8 sh-accent press press--sm"
    >
      <div className="course-card__meta">
        <span className="blink-dot" />
        {t.evCourse}
      </div>
      <h3 className="course-card__title">{course.title}</h3>
      <p className="course-card__desc">{course.description[lang]}</p>
      <div className="course-card__foot">
        <span className="tag course-card__tag">
          {course.chapterSlugs.length}{" "}
          {course.chapterSlugs.length === 1 ? t.chapterLabel : t.chaptersLabel}
        </span>
        <span className="course-card__read">{t.readMore}</span>
      </div>
    </Link>
  );
}
