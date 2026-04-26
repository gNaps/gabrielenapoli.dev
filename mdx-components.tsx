import type { MDXComponents } from "mdx/types";
import CodeViewer from "./components/code-viewer/code-viewer";

const components: MDXComponents = {
  Card(props) {
    return (
      <div className="my-8 p-6 gn-card">
        {props.children}
      </div>
    );
  },
  pre: (props: any) => (
    <CodeViewer codeString={props.children.props.children} />
  ),
  CodeViewer: ({ codeString, language, showLineNumbers }: any) => (
    <CodeViewer
      codeString={codeString}
      language={language}
      showLineNumbers={showLineNumbers}
    />
  ),
  Table({ columns = [], data = [] }) {
    return (
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              {columns.map((col: any) => (
                <th
                  key={col.key}
                  className="border px-3 py-2 text-left font-semibold bg-neutral-700"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row: any, i: any) => (
              <tr key={i}>
                {columns.map((col: any) => (
                  <td key={col.key} className="border px-3 py-2">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
  Callout({ type = "info", title, children }) {
    const styles: any = {
      info: {
        border: "border-blue-400",
        bg: "bg-blue-900",
        text: "text-blue-50",
      },
      warning: {
        border: "border-yellow-400",
        bg: "bg-yellow-900",
        text: "text-yellow-50",
      },
      success: {
        border: "border-green-400",
        bg: "bg-green-900",
        text: "text-green-50",
      },
    };

    const s = styles[type] || styles.info;

    return (
      <div
        className={`my-4 p-4 border-l-4 rounded ${s.bg} ${s.border} ${s.text}`}
      >
        {title && <p className="font-semibold mb-1">{title}</p>}
        <div className="text-sm">{children}</div>
      </div>
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
