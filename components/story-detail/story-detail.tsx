"use client";

import ContainerAnimated from "@/components/container-animated/container-animated";
import { Story } from "@/models/story.model";
import Image from "next/image";
import CodeViewer from "../code-viewer/code-viewer";

const StoryDetail = ({ writtenAt, title, content, preview }: Story) => {
  const components = {
    pre: (props: any) => (
      <CodeViewer codeString={props.children.props.children} />
    ),
    Card(props: any) {
      return (
        <div className="my-8 p-6 rounded-lg gn-card">{props.children}</div>
      );
    },
  };

  return (
    <>
      <ContainerAnimated>
        <div className="eyebrow">物語 · {writtenAt}</div>
        <h1 className="mt-sm" style={{ marginTop: 12 }}>
          {title}
        </h1>
      </ContainerAnimated>

      <div className="mt-md" style={{ marginTop: 28 }}>
        <ContainerAnimated>
          <div className="card" style={{ overflow: "hidden" }}>
            <Image
              src={preview.url ?? ""}
              alt={preview.alt ?? ""}
              width={1200}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                aspectRatio: "2",
                objectFit: "cover",
              }}
            />
          </div>
        </ContainerAnimated>
      </div>

      <div
        className="story-wrapper mt-xl"
        style={{ maxWidth: 760, margin: "80px auto 0" }}
      >
        <ContainerAnimated>{content}</ContainerAnimated>
      </div>
    </>
  );
};

export default StoryDetail;
