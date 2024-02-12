import { $, component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { ButtonCircleAnimated } from "~/components/button-circle-animated/button-circle-animated";
import { ContainerAnimated } from "~/components/container-animated/container-animated";
import type { Story } from "~/models/story.model";

export default component$(({ preview, title, writtenAt, slug }: Story) => {
  const nav = useNavigate();

  const openDetailStory = $(async () => {
    (window as any).goatcounter.count({
      path: "click-story",
      title: slug,
      event: true,
    });
    await nav(`/stories/${slug}`);
  });

  return (
    <>
      <ContainerAnimated client:visible>
        <Image
          src={preview.url}
          alt={preview.alt}
          width={800}
          height={400}
          class="rounded-lg"
        />
        <div class="flex justify-between mt-6 gap-2">
          <div class="flex-1">
            <p class="font-semibold text-3xl mb-6">{title}</p>
            <p class="subtitle">{writtenAt}</p>
          </div>
          <div onClick$={openDetailStory}>
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
        </div>
      </ContainerAnimated>
    </>
  );
});
