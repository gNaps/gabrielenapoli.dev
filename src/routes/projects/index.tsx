import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Animated from "~/components/animated/animated";
import { Image } from "@unpic/qwik";
import type { AllProjectsData } from "~/models/project.model";

export const useProjects = routeLoader$(async () => {
  const PROJECTS_QUERY = `{
    allProjects(orderBy: [order_ASC]) {
      homepage
      id
      title
      slug
      preview {
        url
        alt
      }
      skill {
        icon
        id
      }
    }
   }`;

  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer 186d5bb937f0caf3896ce670a1410f`,
    },
    method: "POST",
    body: JSON.stringify({ query: PROJECTS_QUERY }),
  });

  const responseBody = await response.json();
  return responseBody as AllProjectsData;
});

export default component$(() => {
  const projects = useProjects();

  return (
    <>
      <div class="py-8 lg:px-36 lg:py-24 xl:px-80">
        <Animated>
          <h4>My projects.</h4>
          <h1 class="mt-3 lg:mt-7">
            Remember our words <span class="gradient">coding is coming.</span>
          </h1>
        </Animated>

        <div class="my-16">
          <Animated>
            <div class="flex flex-col md:flex-row md:flex-wrap">
              {projects.value.data.allProjects.map((p) => (
                <div
                  class="mb-8 md:odd:pr-5 md:even:pl-5 w-full md:w-1/2"
                  key={p.id}
                >
                  <Animated>
                    <Image
                      src={p.preview.url}
                      alt={p.preview.alt}
                      width={800}
                      height={400}
                      class="rounded-lg"
                    />
                    <div class="flex justify-between mt-6">
                      <div>
                        <p class="font-semibold text-2xl mb-6">{p.title}</p>
                        <div class="flex gap-3">
                          {p.skill.map((s) => (
                            <div
                              dangerouslySetInnerHTML={s.icon}
                              key={s.id}
                              class="w-8 w-8 md:w-10 md:h-10"
                            ></div>
                          ))}
                        </div>
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
