// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { qwikify$ } from "@builder.io/qwik-react";

// An existing React component
function CodeViewer({ codeString }: any) {
  console.log("CODE STRING", codeString);
  const dark: any = {
    hljs: {
      display: "block",
      overflowX: "auto",
      paddingTop: "2em",
      paddingBottom: "2em",
      paddingRight: "0.5em",
      paddingLeft: "0.5em",
      //background: "#444",
      //color: "#ddd",
      background: "linear-gradient(#202020, #181818)",
      borderColor: "#383838 !important",
      borderRadius: "0 0 3px 3px",
      color: "#b5b5b5",
      fontSize: ".9rem",
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
      color: "#B16CEA",
    },
    "hljs-title": {
      color: "#FF5E69",
      fontWeight: "bold",
    },
    "hljs-name": {
      color: "#FF5E69",
      fontWeight: "bold",
    },
    "hljs-type": {
      color: "#B16CEA",
      fontWeight: "bold",
    },
    "hljs-attribute": {
      color: "#B16CEA",
    },
    "hljs-symbol": {
      color: "#B16CEA",
    },
    "hljs-bullet": {
      color: "#B16CEA",
    },
    "hljs-built_in": {
      color: "#B16CEA",
    },
    "hljs-addition": {
      color: "#B16CEA",
    },
    "hljs-variable": {
      color: "#B16CEA",
    },
    "hljs-template-tag": {
      color: "#B16CEA",
    },
    "hljs-template-variable": {
      color: "#B16CEA",
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
  console.log("dark", dark);
  return (
    <SyntaxHighlighter
      style={dark}
      showLineNumbers={true}
      lineNumberStyle={{ color: "#4a4a4a" }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
}

// Qwik component wrapping the React component
export const QCodeViewer = qwikify$(CodeViewer);
