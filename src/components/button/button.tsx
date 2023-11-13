import { Slot, component$ } from "@builder.io/qwik";

interface ButtonProps {
  type?: "basic" | "outlined";
  value?: string;
  onClick?: any;
  size?: "small" | "medium" | "large";
}

export default component$(
  ({ type = "basic", value, onClick, size = "medium" }: ButtonProps) => {
    const bg = type === "basic" ? "bg-white" : "bg-black";
    const textColor = type === "basic" ? "text-black" : "text-white";
    return (
      <>
        <button
          class={`flex items-center gap-2 ${
            size === "medium"
              ? "py-2 px-7"
              : size === "small"
              ? "py-2 px-4"
              : ""
          } rounded-full border border-white ${bg} ${textColor}`}
          onClick$={onClick}
        >
          {value && value.toLocaleUpperCase()}
          <Slot />
        </button>
      </>
    );
  }
);
