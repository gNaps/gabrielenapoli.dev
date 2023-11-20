import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Animated from "~/components/animated/animated";
import { Image } from "@unpic/qwik";
import RenderContent from "~/components/render-content/render-content";
import { StoryData } from "~/models/story.model";

export const useStory = routeLoader$(async (requestEvent) => {
  const { slug } = requestEvent.params;
  const STORY_QUERY = `{
    story(filter: { slug: { eq: "${slug}" } }) {
      writtenAt
      title
      slug
      id
      content {
        blocks
        links
        value
      }
      preview {
        url
        title
        id
        alt
      }
    }
   }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer 186d5bb937f0caf3896ce670a1410f`,
    },
    method: "POST",
    body: JSON.stringify({ query: STORY_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as StoryData;
});

export default component$(() => {
  const story = useStory();
  const {
    writtenAt,
    title,
    slug,
    id,
    content: {
      value: {
        document: { children: contentChildren },
      },
    },
    preview,
  } = story.value.data.story;

  return (
    <>
      <div class="py-8 lg:px-36 lg:py-24 xl:px-80">
        <Animated>
          <p class="subtitle">{writtenAt}</p>
          <h1 class="mt-3 lg:mt-7">{title}</h1>
        </Animated>

        <div class="my-8 flex justify-center">
          <Animated>
            <Image
              src={preview.url}
              alt={preview.alt}
              width={1200}
              height={600}
              class="rounded-lg"
            />
          </Animated>
        </div>

        <div class="my-16">
          <Animated>
            {contentChildren.map((c: any) => (
              <RenderContent content={c} key={c} />
            ))}
          </Animated>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Gabriele Napoli | Fullstack Javascript",
  meta: [
    {
      name: "A collection of my projects | Gabriele Napoli Developer",
      content:
        "I’m a senior Angular and React developer. For API, I like to use Node.js and, in particular, Fastify with Prisma.",
    },
  ],
};
