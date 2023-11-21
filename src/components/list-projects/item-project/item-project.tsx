import { $, component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { ButtonCircleAnimated } from "~/components/button-circle-animated/button-circle-animated";
import type { Project } from "~/models/project.model";

export default component$(({ preview, title, skill, slug }: Project) => {
  const nav = useNavigate();

  const openDetailProject = $(async () => {
    await nav(`/projects/${slug}`);
  });

  return (
    <>
      <Image
        src={preview.url}
        alt={preview.alt}
        width={800}
        height={400}
        class="rounded-lg"
      />
      <div class="flex justify-between mt-6">
        <div>
          <p class="font-semibold text-2xl mb-6">{title}</p>
          <div class="flex gap-3">
            {skill.map((s) => (
              <div
                dangerouslySetInnerHTML={s.icon}
                key={s.id}
                class="w-8 w-8 md:w-10 md:h-10"
              ></div>
            ))}
          </div>
        </div>
        <div onClick$={openDetailProject}>
          <ButtonCircleAnimated client:visible>
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
          </ButtonCircleAnimated>
        </div>

        {/* <div
          class="border border-white h-14 w-14 md:h-16 md:w-16 rounded-full flex justify-center items-center cursor-pointer"
          onClick$={openDetailProject}
        > */}

        {/* </div> */}
      </div>
    </>
  );
});
