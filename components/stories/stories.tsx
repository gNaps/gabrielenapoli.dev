"use client";

import { Story } from "@/models/story.model";
import ContainerAnimated from "../container-animated/container-animated";
import ListStories from "../list-stories/list-stories";

interface StoryProps {
  stories: Story[];
}

const Stories = ({ stories }: StoryProps) => {
  return (
    <>
      <ContainerAnimated>
        <div className="eyebrow" style={{ marginBottom: 20 }}>
          物語 · Stories
        </div>
        <h1 className="glow-wrap" style={{ textWrap: "initial" }}>
          Writing about code,{" "}
          <span className="grad">tools, and what I learn.</span>
        </h1>
        <p style={{ marginTop: 28, maxWidth: 620, fontSize: 16 }}>
          Here you can find articles, guides and tutorials about web
          development — the things I wish someone had written down for me when I
          started.
        </p>
      </ContainerAnimated>

      <div className="mt-xl">
        <ListStories stories={stories} homepage={false} />
      </div>
    </>
  );
};

export default Stories;
