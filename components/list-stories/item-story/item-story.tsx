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
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--subtle)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {writtenAt}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 19,
            marginTop: 4,
          }}
        >
          {title}
        </h3>
      </div>
    </article>
  );
};

export default ItemStory;
