import About from "@/components/about/about";
import { experiencesApi, stacksApi } from "@/utils/api.utils";
import { Metadata } from "next";
import Head from "next/head";

const useExperiences = async () => {
  const token = process.env.AUTH_TOKEN;
  return await experiencesApi(token ?? "");
};

const useStacks = async () => {
  const token = process.env.AUTH_TOKEN;
  return await stacksApi(token ?? "");
};

const AboutPage = async () => {
  const experiences = await useExperiences();
  const stacks = await useStacks();
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
              description:
                "Senior Angular and React developer, experienced in Node.js, Fastify, and Prisma. I love designing robust architectures and seamless user experiences.",
              url: "https://gabrielenapoli.dev",
              sameAs: [
                "https://github.com/gNaps",
                "https://www.linkedin.com/in/gabriele-napoli-a87529185/",
                "https://www.instagram.com/napsryu/",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Fullstack Developer",
                skills: [
                  "JavaScript",
                  "TypeScript",
                  "Node.js",
                  "Angular",
                  "React",
                  "Next.js",
                ],
              },
            }),
          }}
        />
      </Head>
      <div className="py-8 px-6 lg:px-36 lg:py-24 xl:px-100">
        <About experiences={experiences} stacks={stacks} />
      </div>
    </>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: "About Gabriele Napoli | Fullstack JavaScript Developer",
  description: `Learn more about Gabriele Napoli, his skills in JavaScript, Angular, React, Node.js, and his journey as a fullstack developer in Milan.`,
  keywords: [
    "Gabriele Napoli",
    "About Gabriele Napoli",
    "Developer Milan",
    "Fullstack Developer",
    "Javascript Developer",
    "React Developer Milan",
    "Angular Developer Milan",
    "Node.js Developer",
    "Sviluppatore Web Milano",
    "Frontend Backend Developer",
  ],
};
