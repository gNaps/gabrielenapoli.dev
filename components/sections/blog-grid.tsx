import { getSiteCopy } from "@/cms/site-copy";
import { Course } from "@/models/course.model";
import { Story } from "@/models/story.model";
import Link from "next/link";
import CourseCard from "./course-card";

export default function BlogGrid({
  stories,
  courses = [],
}: {
  stories: Story[];
  courses?: Course[];
}) {
  const { t } = getSiteCopy();

  return (
    <div className="blog-grid">
      {courses.map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
      {stories.map((story) => (
        <Link
          key={story.slug}
          href={`/stories/${story.slug}`}
          className="blog-card"
        >
          <div className="blog-card__meta">
            <span className="blog-card__kind">{t.articleKind}</span>
            <span>{story.writtenAt}</span>
          </div>
          <h3 className="blog-card__title">{story.title}</h3>
          <span className="blog-card__read">{t.readMore}</span>
        </Link>
      ))}
    </div>
  );
}
