import type { Image } from "./image.model";

export interface Story {
  id: number;
  homepage: boolean;
  title: string;
  slug: string;
  preview: Image;
  writtenAt: string;
  content?: any;
}

export interface AllStoriesData {
  data: {
    allStories: Story[];
  };
}

export interface StoryData {
  data: {
    story: Story;
  };
}
