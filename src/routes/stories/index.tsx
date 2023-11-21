import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { FramerAnimated } from "~/components/framer-animated/framer-animated";
import ListStories from "~/components/list-stories/list-stories";
import { storiesListApi } from "~/utils/api.utils";

export const useStories = routeLoader$(async (requestEvent) => {
  const token = requestEvent.env.get("AUTH_TOKEN");
  return await storiesListApi(token ?? "");
});

export default component$(() => {
  const stories = useStories();

  return (
    <>
      <div class="py-8 lg:px-36 lg:py-24 xl:px-80">
        <FramerAnimated client:visible>
          <h4>A collection of my stories.</h4>
          <h1 class="mt-3 lg:mt-7">
            Sharing and insight{" "}
            <span class="gradient">code wings, code words.</span>
          </h1>
        </FramerAnimated>

        <div class="my-16">
          <ListStories stories={stories.value} homepage={false} />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Gabriele Napoli | Fullstack Javascript",
  meta: [
    {
      name: "A collection of my stories | Gabriele Napoli Developer",
      content:
        "I’m a senior Angular and React developer. For backend, I like to use Node.js and, in particular, Fastify with Prisma.",
    },
  ],
};
