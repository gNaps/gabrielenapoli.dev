import Image from "next/image";

const RenderContentItem = ({ type, value, marks }: any) => {
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
            src={imageSrc ?? ""}
            alt={imageSrc ?? ""}
            width={800}
            height={400}
            className="rounded-lg"
          />
        );
      } else {
        return (
          <>
            <span
              className={`${
                marks && marks.includes("strong") ? "font-bold" : ""
              } ${marks && marks.includes("emphasis") ? "italic" : ""} ${
                marks && marks.includes("code")
                  ? "text-sm p-1 bg-zinc-500 text-white rounded"
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
};

export default RenderContentItem;
