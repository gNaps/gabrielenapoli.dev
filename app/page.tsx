import AboutHero from "@/components/about-hero/about-hero";
import Hero from "@/components/hero/hero";
import ListProjects from "@/components/list-projects/list-projects";
import ListStories from "@/components/list-stories/list-stories";
import { projectsHomeApi, storiesHomeApi } from "@/utils/api.utils";
import { Metadata } from "next";
import Head from "next/head";

const useProjects = async () => {
  const token = process.env.AUTH_TOKEN;
  return await projectsHomeApi(token ?? "");
};

const useStories = async () => {
  const token = process.env.AUTH_TOKEN;
  return await storiesHomeApi(token ?? "");
};

export default async function Home() {
  const projects = await useProjects();
  const stories = await useStories();

  return (
    <>
      <Head>
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
      </Head>
      <div className="py-8 px-6 lg:px-36 lg:py-24 xl:px-100">
        <Hero />

        <div className="mt-16">
          <ListProjects projects={projects} homepage={true} />
        </div>

        <div className="my-8">
          <AboutHero />
        </div>

        <div className="mt-16">
          <ListStories stories={stories} homepage={true} />
        </div>
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
        url: "https://www.datocms-assets.com/110849/1699911074-about-me.webp",
        width: 1200,
        height: 630,
        alt: "Gabriele Napoli | Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
