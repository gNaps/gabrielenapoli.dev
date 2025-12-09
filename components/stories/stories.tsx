"use client";

import { Story } from "@/models/story.model";
import ContainerAnimated from "../container-animated/container-animated";
import GradientText from "../gradient-text/gradient-text";
import ListStories from "../list-stories/list-stories";

interface StoryProps {
  stories: Story[];
}

const Stories = ({ stories }: StoryProps) => {
  return (
    <>
      <ContainerAnimated>
        <p className="h4">A collection of my stories.</p>
        <h1 className="mt-3 lg:mt-7">
          Sharing and insight:
          <GradientText animationSpeed={3}>
            code wings, code words.
          </GradientText>
        </h1>

        <p className="mt-4 lg:mt-6 subtitle">
          Here you can find articles, guides and tutorials about web
          development.
        </p>
      </ContainerAnimated>

      <div className="my-16">
        <ListStories stories={stories} homepage={false} />
      </div>
    </>
  );
};

export default Stories;
