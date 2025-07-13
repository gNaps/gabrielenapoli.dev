"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

const ContainerAnimated = ({ children }: any): any => {
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
};

export default ContainerAnimated;
