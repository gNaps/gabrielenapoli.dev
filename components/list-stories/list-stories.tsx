"use client";

import { Story } from "@/models/story.model";
import { useRouter } from "next/navigation";
import ContainerAnimated from "../container-animated/container-animated";
import ItemStory from "./item-story/item-story";

interface ListStoriesProps {
  stories: Story[];
  homepage: boolean;
}

const ListStories = ({ stories, homepage }: ListStoriesProps) => {
  const router = useRouter();

  return (
    <>
      {homepage && (
        <ContainerAnimated>
          <div className="section-head">
            <div>
              <div className="eyebrow">物語 · Writing</div>
              <h2 style={{ marginTop: 14 }}>
                Recent <span className="grad-violet">articles</span>.
              </h2>
            </div>
            <button className="pill" onClick={() => router.push("/stories")}>
              <span className="kana" aria-hidden style={{ fontSize: 11 }}>
                一覧
              </span>
              View all
              <svg
                width={13}
                height={13}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ fill: "none" }}
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </button>
          </div>
        </ContainerAnimated>
      )}

      <div className="grid-2">
        {stories.map((s) => (
          <ContainerAnimated key={s.id}>
            <ItemStory {...s} />
          </ContainerAnimated>
        ))}
      </div>
    </>
  );
};

export default ListStories;
