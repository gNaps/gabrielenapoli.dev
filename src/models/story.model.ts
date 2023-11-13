import type { Image } from "./image.model";

export interface Story {
  id: string;
  homepage: boolean;
  title: string;
  slug: string;
  preview: Image;
  writtenAt: string;
}

export interface AllStoriesData {
  data: {
    allStories: Story[];
  };
}
