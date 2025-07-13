"use client";

import { AllStoriesData } from "@/models/story.model";
import { useRouter } from "next/navigation";
import Button from "../button/button";
import ContainerAnimated from "../container-animated/container-animated";
import ItemStory from "./item-story/item-story";

interface ListStoriesProps {
  stories: AllStoriesData;
  homepage: boolean;
}

const ListStories = ({ stories, homepage }: ListStoriesProps) => {
  const router = useRouter();

  const openStories = () => {
    router.push(`/stories`);
  };

  return (
    <>
      {homepage && (
        <ContainerAnimated>
          <div className="flex justify-between mb-6">
            <p className="h4">STORIES</p>
            <div className="hidden md:block">
              <Button
                type="outlined"
                value="View all"
                size="small"
                onClick={openStories}
                id={"button-view-all-stories"}
                name={"button-view-all-stories"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </ContainerAnimated>
      )}

      <div className="flex flex-col md:flex-row md:flex-wrap">
        {stories.data.allStories.map((s) => (
          <div
            className="mb-8 md:mb-0 md:odd:pr-5 md:even:pl-5 w-full md:w-1/2"
            key={s.id}
          >
            <ItemStory {...s} />
          </div>
        ))}
      </div>
      {homepage && (
        <ContainerAnimated>
          <div className="md:hidden flex justify-center">
            <Button
              type="outlined"
              value="View all"
              onClick={openStories}
              id={"button-open-stories"}
              name={"button-open-stories"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Button>
          </div>
        </ContainerAnimated>
      )}
    </>
  );
};

export default ListStories;
