import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/button/button";
import { Image } from "@unpic/qwik";
import type { AllProjectsData } from "~/models/project.model";
import type { AllStoriesData } from "~/models/story.model";
import Animated from "~/components/animated/animated";

export const useProjects = routeLoader$(async () => {
  const PROJECTS_QUERY = `{
    allProjects(first: ${4}, filter: { homepage: { eq: ${true} } }, orderBy: [order_ASC]) {
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

export const useStories = routeLoader$(async () => {
  const STORIES_QUERY = `{
    allStories(first: ${4}, filter: { homepage: { eq: ${true} } },  orderBy: [order_ASC]) {
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
  const projects = useProjects();
  const stories = useStories();

  return (
    <>
      <div class="py-8 lg:px-36 lg:py-24 xl:px-60">
        <Animated>
          <h4>Hello, I'm Gabriele.</h4>
          <h1 class="mt-3 lg:mt-7 gradient">
            Fullstack developer from Milan.
            <br />
            In love with Javascript.
          </h1>

          <p class="mt-4 lg:mt-6 subtitle">
            Five years of experience in web development. I am a full-stack
            Javascript and I love what I do. I spend my free time learning and
            developing personal and open source projects.
          </p>

          <div class="mt-8">
            <Button value="Let's talk">
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
          </div>
        </Animated>

        <div class="my-16">
          <Animated>
            <div class="flex justify-between mb-6">
              <h4>LATEST PROJECTS</h4>
              <div class="hidden md:block">
                <Button type="outlined" value="View all" size="small">
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
              </div>
            </div>
          </Animated>
          <div class="flex flex-col md:flex-row md:flex-wrap">
            {projects.value.data.allProjects.map((p) => (
              <div
                style="flex: 50%"
                class="mb-8 md:odd:pr-5 md:even:pl-5"
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
          <Animated>
            <div class="md:hidden flex justify-center">
              <Button type="outlined" value="View all">
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
            </div>
          </Animated>
        </div>

        <div class="my-16">
          <Animated>
            <h2>
              I’m an expert <span class="gradient-2">Angular</span> and{" "}
              <span class="gradient-3">React</span> developer. For API, I like
              to use <span class="gradient-4">Node.js</span> and, in particular,{" "}
              <span class="gradient-5">Fastify</span> with{" "}
              <span class="gradient-6">Prisma</span>.
            </h2>

            <p class="mt-4 lg:mt-6 subtitle">
              I use my passion and skills to create digital products and
              experiences. I like to manage the entire development process, from
              designing intuitive UI to database architecture.
            </p>

            <div class="mt-8">
              <Button value="About me" type="outlined">
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
            </div>
          </Animated>
        </div>

        <div class="my-16">
          <Animated>
            <div class="flex justify-between mb-6">
              <h4>STORIES</h4>
              <div class="hidden md:block">
                <Button type="outlined" value="View all" size="small">
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
              </div>
            </div>
          </Animated>

          <div class="flex flex-col md:flex-row md:flex-wrap">
            {stories.value.data.allStories.map((s) => (
              <div
                style="flex: 50%"
                class="mb-8 md:mb-0 md:odd:pr-5 md:even:pl-5"
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
          <Animated>
            <div class="md:hidden flex justify-center">
              <Button type="outlined" value="View all">
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
      name: "Home page | Gabriele Napoli Developer",
      content: "Full stack developer from Milan. In love with Javascript.",
    },
  ],
};
