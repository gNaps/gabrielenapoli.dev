// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
import SyntaxHighlighter from "react-syntax-highlighter";
//import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { qwikify$ } from "@builder.io/qwik-react";

// An existing React component
function CodeViewer({ codeString }: any) {
  const dark: any = {
    hljs: {
      display: "block",
      overflowX: "auto",
      padding: "0.5em",
      background: "#444",
      color: "#ddd",
    },
    "hljs-keyword": {
      color: "white",
      fontWeight: "bold",
    },
    "hljs-selector-tag": {
      color: "white",
      fontWeight: "bold",
    },
    "hljs-literal": {
      color: "white",
      fontWeight: "bold",
    },
    "hljs-section": {
      color: "white",
      fontWeight: "bold",
    },
    "hljs-link": {
      color: "white",
    },
    "hljs-subst": {
      color: "#ddd",
    },
    "hljs-string": {
      color: "#d88",
    },
    "hljs-title": {
      color: "#d88",
      fontWeight: "bold",
    },
    "hljs-name": {
      color: "#d88",
      fontWeight: "bold",
    },
    "hljs-type": {
      color: "#d88",
      fontWeight: "bold",
    },
    "hljs-attribute": {
      color: "#d88",
    },
    "hljs-symbol": {
      color: "#d88",
    },
    "hljs-bullet": {
      color: "#d88",
    },
    "hljs-built_in": {
      color: "#d88",
    },
    "hljs-addition": {
      color: "#d88",
    },
    "hljs-variable": {
      color: "#d88",
    },
    "hljs-template-tag": {
      color: "#d88",
    },
    "hljs-template-variable": {
      color: "#d88",
    },
    "hljs-comment": {
      color: "#777",
    },
    "hljs-quote": {
      color: "#777",
    },
    "hljs-deletion": {
      color: "#777",
    },
    "hljs-meta": {
      color: "#777",
    },
    "hljs-doctag": {
      fontWeight: "bold",
    },
    "hljs-strong": {
      fontWeight: "bold",
    },
    "hljs-emphasis": {
      fontStyle: "italic",
    },
  };
  return (
    <SyntaxHighlighter language="typescript" style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
}

// Qwik component wrapping the React component
export const QCodeViewer = qwikify$(CodeViewer);
