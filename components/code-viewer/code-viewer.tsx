import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { style } from "./style";

const CodeViewer = ({ codeString }: any) => {
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
};

export default CodeViewer;
