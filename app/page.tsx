import ChapterDivider from "@/components/layout/chapter-divider";
import AboutSection from "@/components/sections/about-section";
import BlogSection from "@/components/sections/blog-section";
import ContactSection from "@/components/sections/contact-section";
import Hero from "@/components/sections/hero";
import NowSection from "@/components/sections/now-section";
import TimelineSection from "@/components/sections/timeline-section";
import WorkSection from "@/components/sections/work-section";
import {
  coursesApi,
  experiencesApi,
  getExperienceBySlug,
  projectsHomeApi,
  standaloneStoriesApi,
} from "@/utils/api.utils";
import { Metadata } from "next";

export default async function Home() {
  const token = process.env.AUTH_TOKEN ?? "";
  const projects = await projectsHomeApi(token);
  const courses = await coursesApi(token);
  const stories = (await standaloneStoriesApi(token))
    .filter((s) => s.homepage)
    .slice(0, 2);
  const experiences = await experiencesApi(token);
  for (const exp of experiences) {
    exp.description = await getExperienceBySlug(exp.slug);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Gabriele Napoli",
            jobTitle: "Fullstack Developer",
            url: "https://gabrielenapoli.dev",
            sameAs: [
              "https://github.com/gNaps",
              "https://www.linkedin.com/in/gabriele-napoli-a87529185/",
              "https://www.instagram.com/napsryu/",
            ],
          }),
        }}
      />
      <div className="gn-page" id="top">
        <Hero />
        <ChapterDivider label="・第一章・" />
        <AboutSection />
        <WorkSection projects={projects} viewAllHref="/projects" />
        <TimelineSection experiences={experiences} />
        <BlogSection stories={stories} courses={courses} viewAllHref="/stories" />
        <NowSection />
        <ChapterDivider label="・最終章・" last />
        <ContactSection />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Gabriele Napoli | Fullstack JavaScript Developer in Milan",
  description:
    "I’m Gabriele Napoli, a fullstack JavaScript developer based in Milan. I build modern, scalable web applications using Angular, React, Node.js, and more. With +5 years of experience in web development, I build full-stack JavaScript applications that are fast, clean, and scalable. I’m passionate about technology, constantly learning, and love turning ideas into real, usable products.",
  keywords: [
    "Gabriele Napoli",
    "Fullstack Developer",
    "Javascript Developer",
    "React Developer Milan",
    "Angular Developer Milan",
    "Node.js Developer",
    "Sviluppatore Web Milano",
    "Frontend Backend Developer",
  ],
  openGraph: {
    title: "Gabriele Napoli | Fullstack Developer",
    description:
      "Crafting robust web applications with Angular, React, and Node.js.",
    url: "https://gabrielenapoli.dev",
    siteName: "Gabriele Napoli | Fullstack Developer",
    images: [
      {
        url: "https://gabrielenapoli.dev/cms/about_me.webp",
        width: 1200,
        height: 630,
        alt: "Gabriele Napoli | Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
