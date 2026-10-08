import { getSiteCopy } from "@/cms/site-copy";
import { Course } from "@/models/course.model";
import Link from "next/link";
import { courseLanguages } from "@/utils/content-language.utils";

export default function CourseCard({ course }: { course: Course }) {
  const { lang, t } = getSiteCopy();

  return (
    <Link href={courseLanguages(course.slug)[lang]} className="course-card">
      <div className="course-card__meta">{t.evCourse}</div>
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
