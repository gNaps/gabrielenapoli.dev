"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import markdown from "react-syntax-highlighter/dist/esm/languages/prism/markdown";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";
import http from "react-syntax-highlighter/dist/esm/languages/prism/http";
for (const [name, grammar] of Object.entries({
  typescript,
  tsx,
  javascript,
  markup,
  css,
  bash,
  json,
  markdown,
  sql,
  http,
}))
  SyntaxHighlighter.registerLanguage(name, grammar);
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
          {(language ?? "code").toUpperCase()}
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
        language={language === "html" ? "markup" : language === "prisma" ? "text" : (language ?? "text")}
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
