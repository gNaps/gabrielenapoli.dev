import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(({ type, value, marks }: any) => {
  switch (type) {
    case "span":
      if (value.startsWith("<script src=")) {
        return <span dangerouslySetInnerHTML={value}></span>;
      } else if (value.startsWith("<img src=")) {
        const imageSrc =
          "https://www.datocms-assets.com/" +
          value.replace('<img src="', "").replace('" />', "");
        return (
          <Image
            src={imageSrc}
            alt={imageSrc}
            width={800}
            height={400}
            class="rounded-lg"
          />
        );
      } else {
        return (
          <>
            <span
              class={`${marks && marks.includes("strong") ? "font-bold" : ""} ${
                marks && marks.includes("emphasis") ? "italic" : ""
              } ${
                marks && marks.includes("code")
                  ? "text-sm p-1 bg-grey text-white rounded"
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
