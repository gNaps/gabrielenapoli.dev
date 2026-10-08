import { Children, isValidElement, type ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import CodeViewer from "./components/code-viewer/code-viewer";
import { headingId } from "@/utils/heading.utils";

const CALLOUT_LABELS: Record<string, string> = {
  info: "Note",
  warning: "Warning",
  success: "OK",
};

function plainText(children: ReactNode): string {
  return Children.toArray(children)
    .map((child) =>
      isValidElement<{ children?: ReactNode }>(child)
        ? plainText(child.props.children)
        : String(child),
    )
    .join("");
}
const components: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2 {...props} id={headingId(plainText(children))}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 {...props} id={headingId(plainText(children))}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 {...props} id={headingId(plainText(children))}>
      {children}
    </h4>
  ),
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
