"use client";

import { useLang } from "@/components/providers/language-provider";
import { Course } from "@/models/course.model";
import { Story } from "@/models/story.model";
import BlogGrid from "./blog-grid";

export default function BlogArchive({
  stories,
  courses,
}: {
  stories: Story[];
  courses?: Course[];
}) {
  const { t } = useLang();

  return (
    <section style={{ paddingTop: 52 }}>
      <div className="section-head">
        <h2 className="section-title">{t.blogTitle}</h2>
        <span className="eyebrow">{t.evBlog}</span>
      </div>
      <BlogGrid stories={stories} courses={courses} />
    </section>
  );
}
