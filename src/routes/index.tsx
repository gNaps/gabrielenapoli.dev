import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/button/button";
import { FramerAnimated } from "~/components/framer-animated/framer-animated";
import ListProjects from "~/components/list-projects/list-projects";
import Hero from "~/components/hero/hero";
import ListStories from "~/components/list-stories/list-stories";
import { projectsHomeApi, storiesHomeApi } from "~/utils/api.utils";

export const useProjects = routeLoader$(async (requestEvent) => {
  const token = requestEvent.env.get("AUTH_TOKEN");
  return await projectsHomeApi(token ?? "");
});

export const useStories = routeLoader$(async (requestEvent) => {
  const token = requestEvent.env.get("AUTH_TOKEN");
  return await storiesHomeApi(token ?? "");
});

export default component$(() => {
  const projects = useProjects();
  const stories = useStories();

  return (
    <>
      <div class="py-8 lg:px-36 lg:py-24 xl:px-80">
        <Hero />

        <div class="my-16">
          <ListProjects projects={projects.value} homepage={true} />
        </div>

        <div class="my-16">
          <FramerAnimated client:visible>
            <h2>
              I’m a senior <span class="gradient-2">Angular</span> and{" "}
              <span class="gradient-3">React</span> developer. For backend, I
              like to use <span class="gradient-4">Node.js</span> and, in
              particular, <span class="gradient-5">Fastify</span> with{" "}
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
          </FramerAnimated>
        </div>

        <div class="my-16">
          <ListStories stories={stories.value} homepage={true} />
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
