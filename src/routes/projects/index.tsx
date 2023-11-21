import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { ContainerAnimated } from "~/components/container-animated/container-animated";
import ListProjects from "~/components/list-projects/list-projects";
import { projectsListApi } from "~/utils/api.utils";

export const useProjects = routeLoader$(async (requestEvent) => {
  const token = requestEvent.env.get("AUTH_TOKEN");
  return await projectsListApi(token ?? "");
});

export default component$(() => {
  const projects = useProjects();

  return (
    <>
      <div class="py-8 lg:px-36 lg:py-24 xl:px-80">
        <ContainerAnimated client:visible>
          <h4>My projects.</h4>
          <h1 class="mt-3 lg:mt-7">
            Remember our words <span class="gradient">coding is coming.</span>
          </h1>
        </ContainerAnimated>

        <div class="my-16">
          <ListProjects projects={projects.value} homepage={false} />
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
