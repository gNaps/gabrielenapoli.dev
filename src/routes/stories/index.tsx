import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Animated from "~/components/animated/animated";
import { Image } from "@unpic/qwik";
import type { AllStoriesData } from "~/models/story.model";

export const useStories = routeLoader$(async () => {
  const STORIES_QUERY = `{
    allStories(orderBy: [order_ASC]) {
      homepage
      id
      preview {
        url
        alt
      }
      slug
      title
      writtenAt
    }
   }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer 186d5bb937f0caf3896ce670a1410f`,
    },
    method: "POST",
    body: JSON.stringify({ query: STORIES_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as AllStoriesData;
});

export default component$(() => {
  const stories = useStories();

  return (
    <>
      <div class="py-8 lg:px-36 lg:py-24 xl:px-96">
        <Animated>
          <h4>A collection of my stories.</h4>
          <h1 class="mt-3 lg:mt-7">
            Sharing and insight{" "}
            <span class="gradient">code wings, code words.</span>
          </h1>
        </Animated>

        <div class="my-16">
          <div class="flex flex-col md:flex-row md:flex-wrap">
            {stories.value.data.allStories.map((s) => (
              <div
                class="mb-8 md:mb-0 md:odd:pr-5 md:even:pl-5 w-full md:w-1/2"
                key={s.id}
              >
                <Animated>
                  <Image
                    src={s.preview.url}
                    alt={s.preview.alt}
                    width={800}
                    height={400}
                    class="rounded-lg"
                  />
                  <div class="flex justify-between mt-6 gap-2">
                    <div class="flex-1">
                      <p class="font-semibold text-3xl mb-6">{s.title}</p>
                      <p class="subtitle">{s.writtenAt}</p>
                    </div>
                    <div class="border border-white h-14 w-14 md:h-16 md:w-16 rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </Animated>
              </div>
            ))}
          </div>
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
        "I’m an expert Angular and React developer. For API, I like to use Node.js and, in particular, Fastify with Prisma.",
    },
  ],
};
