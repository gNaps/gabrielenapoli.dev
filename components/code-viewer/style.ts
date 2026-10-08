/* Dark syntax theme shared by all article code blocks. */

const FONT = "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace";

export const style: any = {
  'code[class*="language-"]': {
    color: "#f5f5f4",
    background: "none",
    fontFamily: FONT,
    fontSize: "14px",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.75",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#f5f5f4",
    background: "transparent",
    fontFamily: FONT,
    fontSize: "14px",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.75",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "18px 20px",
    margin: "0",
    overflow: "auto",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#14100f",
    padding: ".1em .3em",
    whiteSpace: "normal",
  },
  comment: {
    color: "#94949b",
    fontStyle: "italic",
  },
  "block-comment": {
    color: "#94949b",
    fontStyle: "italic",
  },
  prolog: {
    color: "#94949b",
  },
  doctype: {
    color: "#94949b",
  },
  cdata: {
    color: "#94949b",
  },
  punctuation: {
    color: "#c9beb4",
  },
  tag: {
    color: "#ff9d9d",
  },
  "attr-name": {
    color: "#ff9d9d",
  },
  namespace: {
    color: "#ff9d9d",
  },
  deleted: {
    color: "#ff9d9d",
  },
  "function-name": {
    color: "#4fd6ff",
  },
  function: {
    color: "#4fd6ff",
  },
  boolean: {
    color: "#ffab66",
  },
  number: {
    color: "#ffab66",
  },
  property: {
    color: "#ffd97a",
  },
  "class-name": {
    color: "#ffd97a",
  },
  constant: {
    color: "#ffd97a",
  },
  symbol: {
    color: "#ffd97a",
  },
  selector: {
    color: "#b18cff",
  },
  important: {
    color: "#b18cff",
    fontWeight: "bold",
  },
  atrule: {
    color: "#b18cff",
  },
  keyword: {
    color: "#b18cff",
  },
  builtin: {
    color: "#b18cff",
  },
  string: {
    color: "#a8e6a1",
  },
  char: {
    color: "#a8e6a1",
  },
  "attr-value": {
    color: "#a8e6a1",
  },
  regex: {
    color: "#a8e6a1",
  },
  variable: {
    color: "#f5f5f4",
  },
  operator: {
    color: "#7fe3e1",
  },
  entity: {
    color: "#7fe3e1",
    cursor: "help",
  },
  url: {
    color: "#7fe3e1",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  inserted: {
    color: "#a8e6a1",
  },
};
