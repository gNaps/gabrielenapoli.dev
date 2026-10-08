import { getSiteCopy } from "@/cms/site-copy";
import { Story } from "@/models/story.model";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import ArticleToc from "./article-toc";
import type { ArticleHeading } from "@/utils/heading.utils";
import ContentLanguageSwitch from "./content-language-switch";
import {
  courseLanguages,
  storyLanguages,
} from "@/utils/content-language.utils";
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
  headings,
  readingMinutes,
}: {
  story: Story;
  content: ReactNode;
  others: Story[];
  courseNav?: CourseNav;
  headings: ArticleHeading[];
  readingMinutes: number;
}) {
  const { t, lang } = getSiteCopy(story.language);
  return (
    <div className="gn-page gn-page--narrow" lang={lang}>
      <div
        className="reading-progress"
        data-reading-progress
        aria-hidden="true"
      />
      <div className="detail-top">
        <Link
          href={
            courseNav ? courseLanguages(courseNav.courseSlug)[lang] : "/stories"
          }
          className="btn btn--back"
        >
          ← {courseNav ? t.backToCourse : t.backToBlog}
        </Link>
        <span className="eyebrow">
          {courseNav
            ? `${courseNav.courseTitle} · ${courseNav.index + 1} / ${courseNav.total}`
            : t.articleKind}
        </span>
      </div>
      <header className="post-head">
        <div className="post-meta">
          <time dateTime={story.writtenAt}>{story.writtenAt}</time>
          <span>
            {readingMinutes} {lang === "it" ? "min di lettura" : "min read"} ·
            Gabriele Napoli
          </span>
        </div>
        <ContentLanguageSwitch
          language={lang}
          paths={storyLanguages(story.slug)}
        />
        <h1 className="post-title" lang={story.language}>
          {story.title}
        </h1>
      </header>
      {story.preview.url && (
        <div className="post-cover">
          <Image
            src={story.preview.url}
            alt={story.preview.alt}
            fill
            preload
            sizes="(max-width: 767px) 100vw, 1120px"
            className="cover"
          />
        </div>
      )}
      <div className="article-layout">
        <ArticleToc headings={headings} language={story.language} />
        <article className="story-wrapper" data-article lang={story.language}>
          {content}
          <div className="author-card">
            <div className="author-avatar" aria-hidden="true">
              GN
            </div>
            <div>
              <strong>
                <Link href="/#about" rel="author">
                  Gabriele Napoli
                </Link>
              </strong>
              <p>
                {lang === "en"
                  ? "Fullstack developer in Milan. Writes about Angular, the JavaScript ecosystem and AI."
                  : "Sviluppatore fullstack a Milano. Scrivo di Angular, ecosistema JavaScript e AI."}
              </p>
            </div>
          </div>
        </article>
      </div>
      {courseNav ? (
        <nav
          className="related-grid"
          aria-label={
            lang === "it" ? "Navigazione tra capitoli" : "Chapter navigation"
          }
        >
          {courseNav.prev && (
            <Link
              href={`/stories/${courseNav.prev.slug}`}
              className="related-card"
            >
              <span className="related-card__date">← {t.prevStep}</span>
              <strong className="related-card__title">
                {courseNav.prev.title}
              </strong>
            </Link>
          )}
          {courseNav.next && (
            <Link
              href={`/stories/${courseNav.next.slug}`}
              className="related-card"
            >
              <span className="related-card__date">{t.nextStep} →</span>
              <strong className="related-card__title">
                {courseNav.next.title}
              </strong>
            </Link>
          )}
        </nav>
      ) : (
        !!others.length && (
          <section className="related-grid">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/stories/${other.slug}`}
                className="related-card"
              >
                <time className="related-card__date" dateTime={other.writtenAt}>
                  {other.writtenAt}
                </time>
                <strong className="related-card__title">{other.title}</strong>
                <span className="related-card__read">{t.readMore}</span>
              </Link>
            ))}
          </section>
        )
      )}
    </div>
  );
}
