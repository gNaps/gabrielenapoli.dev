import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { style } from "./style";

const CodeViewer = ({ codeString, language, showLineNumbers }: any) => {
  return (
    <SyntaxHighlighter
      language={language ?? "typescript"}
      style={style}
      showLineNumbers={showLineNumbers ?? true}
      lineNumberStyle={{ color: "#4a4a4a" }}
    >
      {codeString.trim()}
    </SyntaxHighlighter>
  );
};

export default CodeViewer;
