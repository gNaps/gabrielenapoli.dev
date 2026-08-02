import type { MDXComponents } from "mdx/types";
import CodeViewer from "./components/code-viewer/code-viewer";

const CALLOUT_LABELS: Record<string, string> = {
  info: "NOTE · メモ",
  warning: "WARNING · 注意",
  success: "OK · 完了",
};

const components: MDXComponents = {
  Card(props) {
    return <div>{props.children}</div>;
  },
  pre: (props: any) => {
    const child = props.children?.props ?? {};
    const language = /language-(\w+)/.exec(child.className ?? "")?.[1];
    return <CodeViewer codeString={child.children} language={language} />;
  },
  CodeViewer: ({ codeString, language, showLineNumbers }: any) => (
    <CodeViewer
      codeString={codeString}
      language={language}
      showLineNumbers={showLineNumbers}
    />
  ),
  Table({ columns = [], data = [] }) {
    return (
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              {columns.map((col: any) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row: any, i: any) => (
              <tr key={i}>
                {columns.map((col: any) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
  Callout({ type = "info", title, children }) {
    return (
      <div className="mdx-callout">
        <div className="mdx-callout__label">
          {CALLOUT_LABELS[type] ?? CALLOUT_LABELS.info}
        </div>
        {title && <p style={{ fontWeight: 700 }}>{title}</p>}
        {children}
      </div>
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
