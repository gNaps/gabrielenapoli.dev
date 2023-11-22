// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { qwikify$ } from "@builder.io/qwik-react";
import { style } from "./style";

// An existing React component
function CodeViewer({ codeString }: any) {
  return (
    <SyntaxHighlighter
      language="typescript"
      style={style}
      showLineNumbers={true}
      lineNumberStyle={{ color: "#4a4a4a" }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
}

// Qwik component wrapping the React component
export const QCodeViewer = qwikify$(CodeViewer);
