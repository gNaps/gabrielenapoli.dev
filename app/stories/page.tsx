import Stories from "@/components/stories/stories";
import { storiesListApi } from "@/utils/api.utils";
import { Metadata } from "next";

const useStories = async () => {
  const token = process.env.AUTH_TOKEN;
  return await storiesListApi(token ?? "");
};

const StoriesPage = async () => {
  const stories = await useStories();
  return (
    <>
      <div className="py-8 px-6 lg:px-36 lg:py-24 xl:px-100">
        <Stories stories={stories} />
      </div>
    </>
  );
};

export default StoriesPage;

export const metadata: Metadata = {
  title: "Gabriele Napoli | Fullstack Developer",
  description: `I’m a senior Angular and React developer. For backend, I like to use Node.js and, in
            particular, Fastify with Prisma.`,
  keywords: [
    "Gabriele",
    "Napoli",
    "Developer",
    "Angular",
    "React",
    "Node",
    "About",
  ],
};
