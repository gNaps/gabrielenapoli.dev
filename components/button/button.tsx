"use client";

import { ReactNode } from "react";

interface ButtonProps {
  type?: "basic" | "outlined";
  value?: string;
  onClick?: any;
  size?: "small" | "medium" | "large";
  name?: string;
  id?: string;
  children?: ReactNode;
}

const GNButton = ({
  type = "basic",
  value,
  onClick,
  size = "medium",
  id,
  children,
}: ButtonProps) => {
  const bg = type === "basic" ? "bg-white" : "bg-black";
  const textColor = type === "basic" ? "text-black" : "text-white";

  const hoverBg =
    type === "basic"
      ? "hover:bg-gradient-to-r from-[#B16CEA] via-[#FFA84B] via-[#FF8A56] to-[#FF5E69] hover:text-white"
      : "hover:bg-white hover:text-black";
  return (
    <button
      className={`flex items-center gap-2 ${
        size === "medium" ? "py-2 px-7" : size === "small" ? "py-2 px-4" : ""
      } rounded-full border border-white ${bg} ${textColor} ${hoverBg}`}
      onClick={onClick}
      aria-label={value}
      id={id}
    >
      {value && value.toLocaleUpperCase()}
      {children}
    </button>
  );
};

export default GNButton;
