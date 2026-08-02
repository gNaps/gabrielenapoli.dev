"use client";

import IllustrationSlot from "@/components/layout/illustration-slot";
import { useLang } from "@/components/providers/language-provider";
import { Story } from "@/models/story.model";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export interface CourseNav {
  courseSlug: string;
  courseTitle: string;
  kana: string;
  index: number;
  total: number;
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}

export default function StoryPost({
  story,
  content,
  others,
  courseNav,
}: {
  story: Story;
  content: ReactNode;
  others: Story[];
  courseNav?: CourseNav;
}) {
  const { t } = useLang();

  return (
    <div className="gn-page gn-page--narrow">
      <div className="detail-top">
        {courseNav ? (
          <Link href={`/series/${courseNav.courseSlug}`} className="btn btn--back">
            ← {t.backToCourse}
          </Link>
        ) : (
          <Link href="/#blog" className="btn btn--back">
            ← {t.backToBlog}
          </Link>
        )}
        <span className="eyebrow" style={{ letterSpacing: "0.24em" }}>
          {courseNav
            ? `${courseNav.courseTitle} · ${courseNav.kana}`
            : t.evBlog}
        </span>
      </div>

      <div className="panel sh-10 post-head">
        <div className="post-meta">
          <span>{story.writtenAt}</span>
          {courseNav ? (
            <span className="muted num">
              CH.{String(courseNav.index + 1).padStart(2, "0")} /{" "}
              {courseNav.total}
            </span>
          ) : (
            <span className="muted">{t.articleKind}</span>
          )}
        </div>
        <h1 className="post-title">{story.title}</h1>
      </div>

      <div className="panel panel--img sh-10 post-cover">
        {story.preview.url ? (
          <Image
            src={story.preview.url}
            alt={story.preview.alt}
            fill
            priority
            sizes="(max-width: 820px) 100vw, 850px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <IllustrationSlot label="COVER · 表紙" />
        )}
      </div>

      <div className="story-wrapper">{content}</div>

      {courseNav ? (
        <div className="related-grid">
          {courseNav.prev ? (
            <Link
              href={`/stories/${courseNav.prev.slug}`}
              className="panel sh-8 press press--sm related-card"
            >
              <span className="related-card__date">← {t.prevStep}</span>
              <strong className="related-card__title">
                {courseNav.prev.title}
              </strong>
            </Link>
          ) : (
            <span aria-hidden />
          )}
          {courseNav.next && (
            <Link
              href={`/stories/${courseNav.next.slug}`}
              className="panel sh-8 press press--sm related-card related-card--next"
            >
              <span className="related-card__date">{t.nextStep} →</span>
              <strong className="related-card__title">
                {courseNav.next.title}
              </strong>
            </Link>
          )}
        </div>
      ) : (
        others.length > 0 && (
          <div className="related-grid">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/stories/${other.slug}`}
                className="panel sh-8 press press--sm related-card"
              >
                <span className="related-card__date">{other.writtenAt}</span>
                <strong className="related-card__title">{other.title}</strong>
                <span className="related-card__read">{t.readMore}</span>
              </Link>
            ))}
          </div>
        )
      )}
    </div>
  );
}
