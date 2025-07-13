"use client";

import { useId } from "react";
import CodeViewer from "../code-viewer/code-viewer";
import RenderContentItems from "./render-content-item/render-content-item";

const RenderContent = ({ content }: any) => {
  const id = useId();
  if (content.children) {
    switch (content.type) {
      case "paragraph":
        return (
          <p className="mb-5 text-xl">
            <RenderContent content={content.children} key={id} />
          </p>
        );
      case "heading":
        return (
          <>
            {content.level === 4 && (
              <h4 className="text-3xl font-bold my-4">
                <RenderContent content={content.children} key={id} />
              </h4>
            )}
          </>
        );
      case "list":
        return (
          <ul className="text-lg">
            <RenderContent content={content.children} key={id} />
          </ul>
        );
      case "listItem":
        return <RenderContent content={content.children} key={id} />;
      default:
        return <></>;
    }
  } else {
    if (content.code) {
      return <CodeViewer codeString={content.code}></CodeViewer>;
    } else {
      return content.map((c: any, index: number) => {
        switch (c.type) {
          case "listItem":
            return (
              <li key={id + index}>
                <RenderContent content={c.children} key={id + index} />
              </li>
            );
          case "paragraph":
            return <RenderContent content={c.children} key={id} />;
          case "link":
            return (
              <a
                href={c.url ? c.url : c.children[0].value}
                target="_blank"
                key={id + index}
              >
                <RenderContent content={c.children} key={id} />
              </a>
            );
          default:
            return (
              <RenderContentItems
                type={c.type}
                value={c.value}
                marks={c.marks}
                key={id}
              />
            );
        }
      });
    }
  }
};

export default RenderContent;
