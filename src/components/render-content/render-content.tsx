import { component$ } from "@builder.io/qwik";
import RenderContent from "~/components/render-content/render-content";
import RenderContentItems from "./render-content-items/render-content-items";
import Animated from "../animated/animated";
import { Link } from "@builder.io/qwik-city";
import { QCodeViewer } from "../code-viewer/code-viewer";

export default component$(({ content }: any) => {
  console.log("children", content.children);
  console.log("type", content.type);
  if (content.children) {
    console.log("has children");

    switch (content.type) {
      case "paragraph":
        return (
          <p class="mb-5 text-xl">
            <RenderContent content={content.children} />
          </p>
        );
      case "heading":
        return (
          <>
            {content.level === 4 && (
              <h4 class="text-3xl font-bold my-4">
                <RenderContent content={content.children} />
              </h4>
            )}
          </>
        );
      case "list":
        return (
          <ul class="text-lg">
            <RenderContent content={content.children} />
          </ul>
        );
      case "listItem":
        return <RenderContent content={content.children} />;
      default:
        return <></>;
    }
  } else {
    console.log("not children", content);
    if (content.code) {
      console.log("è un codice");
      return <QCodeViewer codeString={content.code}></QCodeViewer>;
    } else {
      return content.map((c: any) => {
        console.log("not children TYPE", c.type);
        switch (c.type) {
          case "listItem":
            return (
              <li>
                <RenderContent content={c.children} />
              </li>
            );
          case "paragraph":
            return <RenderContent content={c.children} />;
          case "link":
            return (
              <a href={c.url ? c.url : c.children[0].value} target="_blank">
                <RenderContent content={c.children} />
              </a>
            );
          default:
            return (
              <RenderContentItems
                type={c.type}
                value={c.value}
                marks={c.marks}
              />
            );
        }
      });
    }
  }
});
