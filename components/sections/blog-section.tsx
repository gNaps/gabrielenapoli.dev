"use client";

import { useReveal } from "@/components/layout/use-reveal";
import { useLang } from "@/components/providers/language-provider";
import { Course } from "@/models/course.model";
import { Story } from "@/models/story.model";
import Link from "next/link";
import BlogGrid from "./blog-grid";

export default function BlogSection({
  stories,
  courses,
  viewAllHref,
}: {
  stories: Story[];
  courses?: Course[];
  viewAllHref?: string;
}) {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="blog" ref={ref} className="reveal mt-section">
      <div className="section-head">
        <h2 className="section-title">{t.blogTitle}</h2>
        <span className="eyebrow">
          {t.evBlog}
          {viewAllHref && (
            <>
              {"  ·  "}
              <Link href={viewAllHref}>{t.viewAll}</Link>
            </>
          )}
        </span>
      </div>
      <BlogGrid stories={stories} courses={courses} />
    </section>
  );
}
