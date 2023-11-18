import { component$ } from "@builder.io/qwik";

export default component$(({ type, value, marks }: any) => {
  switch (type) {
    case "span":
      if (value.startsWith("<script src=")) {
        return <span dangerouslySetInnerHTML={value}></span>;
      } else {
        return (
          <>
            <span
              class={`${marks && marks.includes("strong") ? "font-bold" : ""} ${
                marks && marks.includes("emphasis") ? "italic" : ""
              } ${
                marks && marks.includes("code")
                  ? "text-sm p-1 bg-white text-black rounded"
                  : ""
              }`}
            >
              {value}
            </span>
          </>
        );
      }
    default:
      return <></>;
  }
});
