"use client";

import ContainerAnimated from "@/components/container-animated/container-animated";
import RenderContent from "@/components/render-content/render-content";
import { Story } from "@/models/story.model";
import Image from "next/image";
import { useId } from "react";

const StoryDetail = ({ writtenAt, title, content, preview }: Story) => {
  const {
    value: {
      document: { children: contentChildren },
    },
  } = content;

  const id = useId();

  return (
    <>
      <ContainerAnimated>
        <p className="subtitle">{writtenAt}</p>
        <h1 className="mt-3 lg:mt-7">{title}</h1>
      </ContainerAnimated>

      <div className="my-8 flex justify-center">
        <ContainerAnimated>
          <Image
            src={preview.url ?? ""}
            alt={preview.alt ?? ""}
            width={1200}
            height={600}
            className="rounded-lg img-project"
          />
        </ContainerAnimated>
      </div>

      <div className="my-16 story-wrapper">
        <ContainerAnimated>
          {contentChildren.map((c) => (
            <RenderContent content={c} key={id} />
          ))}
        </ContainerAnimated>
      </div>
    </>
  );
};

export default StoryDetail;
