import { $, component$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
  useNavigate,
} from "@builder.io/qwik-city";
import Button from "~/components/button/button";
import { Image } from "@unpic/qwik";
import { ContainerAnimated } from "~/components/container-animated/container-animated";
import { experiencesApi, stacksApi } from "~/utils/api.utils";

export const useExperiences = routeLoader$(async (requestEvent) => {
  const token = requestEvent.env.get("AUTH_TOKEN");
  return await experiencesApi(token ?? "");
});

export const useStacks = routeLoader$(async (requestEvent) => {
  const token = requestEvent.env.get("AUTH_TOKEN");
  return await stacksApi(token ?? "");
});

export default component$(() => {
  const experiences = useExperiences();
  const stacks = useStacks();
  const nav = useNavigate();

  const contacts = $(async () => {
    await nav(`/contacts`);
  });

  return (
    <>
      <div class="py-8 lg:px-36 lg:py-24 xl:px-80">
        <ContainerAnimated client:visible>
          <p class="h4">About me.</p>
          <div class="flex flex-col md:flex-row md:gap-10 items-center">
            <h1 class="mt-3 lg:mt-7">
              In the world of the digital era,{" "}
              <span class="gradient">it's innovate or die.</span>
            </h1>
            <div class="flex flex-col">
              <p class="mt-4 lg:mt-6 subtitle">
                Hello universe! I’m Gabriele. Find out a little more about me
                here.
              </p>

              <div class="mt-8">
                <Button
                  value="Let's talk"
                  onClick={contacts}
                  id={"button-lets-talk-home"}
                  name={"button-lets-talk-home"}
                >
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
          </div>
          <div class="flex justify-center">
            <Image
              src="https://www.datocms-assets.com/110849/1699911074-about-me.webp"
              alt="Gabriele Napoli"
              width={1200}
              height={600}
              class="rounded-lg mt-8"
            />
          </div>
        </ContainerAnimated>

        <div class="my-16">
          <ContainerAnimated client:visible>
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
          </ContainerAnimated>
        </div>

        <div class="my-16">
          <ContainerAnimated client:visible>
            <h4>EXPERIENCES</h4>
            {experiences.value.data.allExperiences.map((exp) => (
              <div
                class="flex flex-col md:flex-row md:justify-between my-10"
                key={exp.id}
              >
                <div class="flex flex-col">
                  <p class="text-2xl mb-2">{exp.jobTitle}</p>
                  <p class="mb-2">@{exp.company}</p>
                  <div class="flex gap-3 mb-2 md:mb-0">
                    {exp.skill.map((s) => (
                      <div
                        dangerouslySetInnerHTML={s.icon}
                        key={s.id}
                        class="w-6 h-6"
                      ></div>
                    ))}
                  </div>
                </div>
                <div class="flex gap-1">
                  <p>{exp.yearStart}</p> - <p>{exp.yearEnd || "Present"}</p>
                </div>
              </div>
            ))}
          </ContainerAnimated>
        </div>

        <div class="my-16">
          <ContainerAnimated client:visible>
            <h4 class="mb-6">STACK</h4>
            <div class="w-full flex flex-wrap px-10">
              {stacks.value.data.allStacks.map((s) => (
                <div
                  class="flex flex-col items-center my-6 gap-2 stack-wrapper"
                  key={s.id}
                >
                  <div
                    dangerouslySetInnerHTML={s.skill.icon}
                    key={s.id}
                    class="w-16 h-16"
                  ></div>
                  {s.learning && (
                    <p class="gradient-no-text px-2 rounded-full">Learning</p>
                  )}
                </div>
              ))}
            </div>
          </ContainerAnimated>
        </div>

        <div class="my-16">
          <ContainerAnimated client:visible>
            <p class="mb-3">
              After graduating in 2019, I've spent the last 5 years as a full
              stack web developer. I've worked in various web projects, from
              management apps to IoT dashboards. Explored tech like .NET and
              Cordova/ionic for mobile. Now, I'm all about the Javascript world,
              working with Angular, React, and NodeJS.
            </p>
            <p>
              Currently, I'm a full stack javascript developer at ScuolaZoo.
              Most of my time? Spent on my Mac, studying, building personal
              projects, and having fun with Figma. But hey, life isn't just
              code! I love read manga and play video games
            </p>
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
      name: "description",
      content:
        "Gabriele Napoli | Fullstack Javascript | I’m a senior Angular and React developer. For backend, I like to use Node.js and, in particular, Fastify with Prisma.",
    },
  ],
};
