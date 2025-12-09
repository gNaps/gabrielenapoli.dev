import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { style } from "./style";

const CodeViewer = ({ codeString }: any) => {
  const newlineCount = (codeString.match(/\r?\n/g) || []).length;
  return newlineCount > 1 ? (
    <SyntaxHighlighter
      language="typescript"
      style={style}
      showLineNumbers={true}
      lineNumberStyle={{ color: "#4a4a4a" }}
    >
      {codeString}
    </SyntaxHighlighter>
  ) : (
    <pre>{codeString}</pre>
  );
};

export default CodeViewer;
