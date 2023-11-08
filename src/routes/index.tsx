import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/button/button";

export default component$(() => {
  return (
    <>
      <div class="py-8 lg:px-36 lg:py-24 xl:px-60">
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

        <div class="my-16">
          <h2>
            I’m an expert <span class="gradient-2">Angular</span> and{" "}
            <span class="gradient-3">React</span> developer. For API, I like to
            use <span class="gradient-4">Node.js</span> and, in particular,{" "}
            <span class="gradient-5">Fastify</span> with{" "}
            <span class="gradient-6">Prisma</span>.
          </h2>
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
      content: "Qwik site description",
    },
  ],
};
