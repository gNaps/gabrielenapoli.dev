import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Animated from "~/components/animated/animated";
import { Image } from "@unpic/qwik";
import type { ProjectData } from "~/models/project.model";
import RenderContent from "~/components/render-content/render-content";
import Button from "~/components/button/button";

export const useProject = routeLoader$(async (requestEvent) => {
  const { slug } = requestEvent.params;
  const PROJECT_QUERY = `{
    project(filter: { slug: { eq: ${slug} } }) {
        id
        slug
        subtitle
        title
        urlGithub
        urlPreview
        gallery {
            title
            url
            alt
            id
        }
        skill {
            id
            name
            icon
        }
        preview {
            url
            title
            alt
        }
        content  {
            blocks
            links
            value
        }
    }
   }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer 186d5bb937f0caf3896ce670a1410f`,
    },
    method: "POST",
    body: JSON.stringify({ query: PROJECT_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as ProjectData;
});

export default component$(() => {
  const project = useProject();

  const {
    title,
    subtitle,
    preview,
    skill,
    content: {
      value: {
        document: { children: contentChildren },
      },
    },
    urlGithub,
    urlPreview,
    gallery,
  } = project.value.data.project;

  //console.log(contentChildren);

  return (
    <>
      <div class="py-8 lg:px-36 lg:py-24 xl:px-80">
        <Animated>
          <h4>{title}.</h4>
          <h1 class="mt-3 lg:mt-7">{subtitle}</h1>
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

        <div class="mb-16">
          <Animated>
            <div class="flex gap-5 justify-center">
              {skill.map((s) => (
                <div
                  dangerouslySetInnerHTML={s.icon}
                  key={s.id}
                  class="w-12 h-12 md:w-16 md:h-16"
                ></div>
              ))}
            </div>
          </Animated>
        </div>

        <div class="my-16">
          {contentChildren.map((c: any) => (
            <RenderContent content={c} key={c} />
          ))}
        </div>

        <Animated>
          <div class="my-16 flex gap-3 flex-row">
            {urlPreview && (
              <Button value="Try it">
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            )}
            {urlGithub && (
              <Button value="Github" type="outlined">
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            )}
          </div>
        </Animated>

        <div class="flex flex-col md:flex-row md:flex-wrap">
          {gallery.map((g) => (
            <div
              class="mb-8 md:odd:pr-5 md:even:pl-5 w-full md:w-1/2"
              key={g.id}
            >
              <Animated>
                <Image
                  src={g.url}
                  alt={g.alt}
                  width={800}
                  height={400}
                  class="rounded-lg"
                />
              </Animated>
            </div>
          ))}
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
