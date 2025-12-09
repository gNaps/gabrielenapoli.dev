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
        <div className="my-8 p-6 rounded-lg shadow-md bg-neutral-900">
          {props.children}
        </div>
      );
    },
  };

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

      <div className="my-16 story-wrapper text-lg">
        <ContainerAnimated>
          {/* <MDXRemote
            compiledSource={content.compiledSource}
            frontmatter={content.frontmatter}
            scope={content.scope}
            components={components}
          /> */}
          {content}
        </ContainerAnimated>
      </div>
    </>
  );
};

export default StoryDetail;
