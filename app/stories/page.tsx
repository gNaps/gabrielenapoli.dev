import BlogArchive from "@/components/sections/blog-archive";
import { coursesApi, standaloneStoriesApi } from "@/utils/api.utils";
import { Metadata } from "next";

const StoriesPage = async () => {
  const token = process.env.AUTH_TOKEN ?? "";
  const courses = await coursesApi(token);
  const stories = await standaloneStoriesApi(token);
  return (
    <div className="gn-page">
      <BlogArchive stories={stories} courses={courses} />
    </div>
  );
};

export default StoriesPage;

export const metadata: Metadata = {
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
