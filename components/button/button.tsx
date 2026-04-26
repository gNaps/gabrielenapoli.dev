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
  const isPrimary = type === "basic";
  const isSmall = size === "small";

  return (
    <button
      className={`pill ${isPrimary ? "pill-primary" : ""} ${isSmall ? "pill-sm" : ""}`}
      onClick={onClick}
      aria-label={value}
      id={id}
    >
      {value}
      {children}
    </button>
  );
};

export default GNButton;
