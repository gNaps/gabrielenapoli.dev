import type { MDXComponents } from "mdx/types";
import CodeViewer from "./components/code-viewer/code-viewer";

const components: MDXComponents = {
  Card(props) {
    return (
      <div className="my-8 p-6 rounded-lg shadow-md bg-neutral-900">
        {props.children}
      </div>
    );
  },
  pre: (props: any) => (
    <CodeViewer codeString={props.children.props.children} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
