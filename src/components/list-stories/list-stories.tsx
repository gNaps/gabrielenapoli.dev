import { $, component$ } from "@builder.io/qwik";
import { FramerAnimated } from "../framer-animated/framer-animated";
import ItemStory from "./item-story/item-story";
import Button from "../button/button";
import { useNavigate } from "@builder.io/qwik-city";
import type { AllStoriesData } from "~/models/story.model";

interface ListStoriesProps {
  stories: AllStoriesData;
  homepage: boolean;
}

export default component$(({ stories, homepage }: ListStoriesProps) => {
  const nav = useNavigate();

  const openStories = $(async () => {
    await nav(`/stories`);
  });

  return (
    <>
      {homepage && (
        <FramerAnimated client:visible>
          <div class="flex justify-between mb-6">
            <h4>STORIES</h4>
            <div class="hidden md:block">
              <Button
                type="outlined"
                value="View all"
                size="small"
                onClick={openStories}
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
        </FramerAnimated>
      )}

      <div class="flex flex-col md:flex-row md:flex-wrap">
        {stories.data.allStories.map((s) => (
          <div
            class="mb-8 md:mb-0 md:odd:pr-5 md:even:pl-5 w-full md:w-1/2"
            key={s.id}
          >
            <ItemStory {...s} />
          </div>
        ))}
      </div>
      {homepage && (
        <FramerAnimated client:visible>
          <div class="md:hidden flex justify-center">
            <Button type="outlined" value="View all" onClick={openStories}>
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
      )}
    </>
  );
});
