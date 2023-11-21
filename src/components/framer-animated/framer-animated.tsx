/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Animated({ children }: any): any {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        //transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        transition: "1000ms ease-in-out",
      }}
    >
      {children}
    </div>
  );
}

export const FramerAnimated = qwikify$(Animated);
