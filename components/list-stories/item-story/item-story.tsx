"use client";

import { Story } from "@/models/story.model";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ItemStory = ({ preview, title, writtenAt, slug }: Story) => {
  const router = useRouter();

  const openDetailStory = () => {
    try {
      (window as any).goatcounter?.count?.({
        path: "click-story",
        title: slug,
        event: true,
      });
    } catch {}
    router.push(`/stories/${slug}`);
  };

  return (
    <article
      className="card project-card"
      onClick={openDetailStory}
      style={{ cursor: "pointer" }}
    >
      <div className="project-thumb">
        <Image
          src={preview.url}
          alt={preview.alt}
          width={800}
          height={400}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="project-body">
        <div className="project-head">
          <span className="kicker">Article · {writtenAt}</span>
          <span className="card-arrow" aria-hidden>
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ fill: "none" }}
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </div>
        <h3>{title}</h3>
        <span className="read-more">
          Read article
          <svg
            width={13}
            height={13}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ fill: "none" }}
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </article>
  );
};

export default ItemStory;
