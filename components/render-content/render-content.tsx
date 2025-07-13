"use client";

import { useId } from "react";
import CodeViewer from "../code-viewer/code-viewer";
import RenderContentItems from "./render-content-item/render-content-item";

const RenderContent = ({ content }: any) => {
  if (content.children) {
    switch (content.type) {
      case "paragraph":
        return (
          <p className="mb-5 text-xl">
            <RenderContent content={content.children} key={useId()} />
          </p>
        );
      case "heading":
        return (
          <>
            {content.level === 4 && (
              <h4 className="text-3xl font-bold my-4">
                <RenderContent content={content.children} key={useId()} />
              </h4>
            )}
          </>
        );
      case "list":
        return (
          <ul className="text-lg">
            <RenderContent content={content.children} key={useId()} />
          </ul>
        );
      case "listItem":
        return <RenderContent content={content.children} key={useId()} />;
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
              <li key={useId() + index}>
                <RenderContent content={c.children} key={useId() + index} />
              </li>
            );
          case "paragraph":
            return <RenderContent content={c.children} key={useId()} />;
          case "link":
            return (
              <a
                href={c.url ? c.url : c.children[0].value}
                target="_blank"
                key={useId() + index}
              >
                <RenderContent content={c.children} key={useId()} />
              </a>
            );
          default:
            return (
              <RenderContentItems
                type={c.type}
                value={c.value}
                marks={c.marks}
                key={useId()}
              />
            );
        }
      });
    }
  }
};

export default RenderContent;
