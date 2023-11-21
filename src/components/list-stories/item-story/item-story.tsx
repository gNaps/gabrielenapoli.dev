import { $, component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { FramerAnimated } from "~/components/framer-animated/framer-animated";
import type { Story } from "~/models/story.model";

export default component$(({ preview, title, writtenAt, slug }: Story) => {
  const nav = useNavigate();

  const openDetailStory = $(async () => {
    await nav(`/stories/${slug}`);
  });

  return (
    <>
      <FramerAnimated client:visible>
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
          <div
            class="border border-white h-14 w-14 md:h-16 md:w-16 rounded-full flex justify-center items-center cursor-pointer"
            onClick$={openDetailStory}
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
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </FramerAnimated>
    </>
  );
});
