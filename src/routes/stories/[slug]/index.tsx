import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import RenderContent from "~/components/render-content/render-content";
import { ContainerAnimated } from "~/components/container-animated/container-animated";
import { storyDetailApi } from "~/utils/api.utils";

export const useStory = routeLoader$(async (requestEvent) => {
  const { slug } = requestEvent.params;
  const token = requestEvent.env.get("AUTH_TOKEN");
  return storyDetailApi(slug, token ?? "");
});

export default component$(() => {
  const story = useStory();
  const {
    writtenAt,
    title,
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
        <ContainerAnimated client:visible>
          <p class="subtitle">{writtenAt}</p>
          <h1 class="mt-3 lg:mt-7">{title}</h1>
        </ContainerAnimated>

        <div class="my-8 flex justify-center">
          <ContainerAnimated client:visible>
            <Image
              src={preview.url}
              alt={preview.alt}
              width={1200}
              height={600}
              class="rounded-lg"
            />
          </ContainerAnimated>
        </div>

        <div class="my-16">
          <ContainerAnimated client:visible>
            {contentChildren.map((c: any) => (
              <RenderContent content={c} key={c} />
            ))}
          </ContainerAnimated>
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
        "I’m a senior Angular and React developer. For backend, I like to use Node.js and, in particular, Fastify with Prisma.",
    },
  ],
};
