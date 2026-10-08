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
import { personStructuredData, SITE_URL, PERSON_ID } from "@/utils/seo.utils";

export default async function Home() {
  const projects = await projectsHomeApi();
  const courses = await coursesApi();
  const stories = (await standaloneStoriesApi())
    .filter((s) => s.homepage)
    .slice(0, 2);
  const experiences = await experiencesApi();
  const chapters = await Promise.all(
    experiences.map(async (exp) => ({
      ...exp,
      description: await getExperienceBySlug(exp.slug),
    })),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              personStructuredData,
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                name: "Gabriele Napoli",
                url: SITE_URL,
                inLanguage: ["en", "it"],
                publisher: { "@id": PERSON_ID },
              },
              {
                "@type": "WebPage",
                url: SITE_URL,
                name: "Gabriele Napoli | Full Stack Developer in Milan",
                inLanguage: "en",
                about: { "@id": PERSON_ID },
                isPartOf: { "@id": `${SITE_URL}/#website` },
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="home-page">
        <Hero />
        <AboutSection />
        <WorkSection projects={projects} viewAllHref="/projects" />
        <TimelineSection experiences={chapters} />
        <BlogSection
          stories={stories}
          courses={courses}
          viewAllHref="/stories"
        />
        <NowSection />
        <ContactSection />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Gabriele Napoli | Full Stack Developer in Milan",
  description:
    "Gabriele Napoli, senior full stack developer in Milan. Angular, React, Next.js and Node.js: 8+ years of experience, projects and practical development guides.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Gabriele Napoli | Full Stack Developer in Milan",
    description:
      "Gabriele Napoli, senior full stack developer in Milan. Angular, React, Next.js and Node.js: projects, experience and practical development guides.",
    locale: "en_US",
  },
};
