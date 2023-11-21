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
        transition: "800ms ease-in-out",
      }}
    >
      {children}
    </div>
  );
}

export const ContainerAnimated = qwikify$(Animated);
