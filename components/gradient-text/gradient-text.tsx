import { ReactNode } from "react";
import "./gradient-text.css";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export default function GradientText({
  children,
  className = "",
  colors = [
    "#b16cea",
    "#ff5e69",
    "#ff8a56",
    "#ffa84b",
    "#b16cea",
    "#ff5e69",
    "#ff8a56",
    "#ffa84b",
  ],
  animationSpeed = 8,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <span className={`animated-gradient-text ${className}`}>
      <span className="text-content" style={gradientStyle}>
        {children}
      </span>
    </span>
  );
}
