"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { style } from "./style";

const CodeViewer = ({ codeString, language, showLineNumbers }: any) => {
  const [copied, setCopied] = useState(false);
  const code = (codeString ?? "").trim();
  const lines = code.split("\n").length;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="code-panel">
      <div className="code-panel__bar">
        <span className="code-panel__lang">
          {(language ?? "code").toUpperCase()} · コード
        </span>
        <button
          type="button"
          className="code-panel__copy"
          onClick={copy}
          aria-label="Copy code"
        >
          {copied ? "COPIED! ✓" : "COPY"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language ?? "typescript"}
        style={style}
        showLineNumbers={showLineNumbers ?? lines > 3}
        lineNumberStyle={{ color: "#5f5750", minWidth: "2.2em" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;
