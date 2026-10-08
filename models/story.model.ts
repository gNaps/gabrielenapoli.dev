import type { Image } from "./image.model";

export interface Story {
  id: number;
  homepage: boolean;
  title: string;
  slug: string;
  preview: Image;
  writtenAt: string;
  language: "en" | "it";
  description: string;
  updatedAt?: string;
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
