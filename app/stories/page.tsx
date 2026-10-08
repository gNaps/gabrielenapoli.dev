import BlogGrid from "@/components/sections/blog-grid";
import BlogArchive from "@/components/sections/blog-archive";
import { coursesApi, standaloneStoriesApi } from "@/utils/api.utils";
import { Metadata } from "next";

const StoriesPage = async () => {
  const courses = await coursesApi();
  const stories = await standaloneStoriesApi();
  return (
    <div className="gn-page">
      <BlogArchive
        counts={{
          All: stories.length + courses.length,
          Series: courses.length,
          Oneshots: stories.length,
        }}
      >
        <BlogGrid stories={stories} courses={courses} />
      </BlogArchive>
    </div>
  );
};

export default StoriesPage;

export const metadata: Metadata = {
  openGraph: {
    url: "/stories",
    title: "Stories by Gabriele Napoli",
    description:
      "Articles and practical guides on Angular, RxJS, Next.js, web development and AI, by Gabriele Napoli. Available in English and Italian.",
    images: [{ url: "/stories/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories by Gabriele Napoli",
    description:
      "Articles and practical guides on Angular, RxJS, Next.js, web development and AI, by Gabriele Napoli. Available in English and Italian.",
    images: ["/stories/opengraph-image"],
  },
  alternates: { canonical: "/stories" },
  title: "Stories & Articles by Gabriele Napoli | Notes from the Desk",
  description: `Articles and guides on Angular, RxJS, Next.js and the JavaScript ecosystem, written by Gabriele Napoli, fullstack developer in Milan.`,
  keywords: [
    "Gabriele Napoli",
    "Angular articles",
    "RxJS guide",
    "Next.js tutorial",
    "JavaScript blog",
    "Fullstack Developer Milan",
  ],
};
