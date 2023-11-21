import { $, component$ } from "@builder.io/qwik";
import { ContainerAnimated } from "../container-animated/container-animated";
import Button from "../button/button";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();

  const contacts = $(async () => {
    await nav(`/contacts`);
  });

  return (
    <>
      <ContainerAnimated client:visible>
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
          <Button value="Let's talk" onClick={contacts}>
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
      </ContainerAnimated>
    </>
  );
});
