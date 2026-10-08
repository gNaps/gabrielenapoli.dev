import { getSiteCopy } from "@/cms/site-copy";
import { Course } from "@/models/course.model";
import { Story } from "@/models/story.model";
import Link from "next/link";
import BlogGrid from "./blog-grid";
export default function BlogSection({
  stories,
  courses,
  viewAllHref = "/stories",
}: {
  stories: Story[];
  courses?: Course[];
  viewAllHref?: string;
}) {
  const { t, lang } = getSiteCopy();
  return (
    <section id="blog" className="section-dark section-space">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow accent">Stories</p>
            <h2 className="section-title">{t.blogTitle}</h2>
          </div>
          <Link href={viewAllHref} className="text-link">
            {lang === "en" ? "All stories →" : "Tutti gli articoli →"}
          </Link>
        </div>
        <BlogGrid stories={stories} courses={courses} />
      </div>
    </section>
  );
}
