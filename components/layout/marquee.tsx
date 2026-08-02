import { Fragment } from "react";

const TECHS = [
  "ANGULAR",
  "REACT",
  "NODE.JS",
  "FASTIFY",
  "PRISMA",
  "TYPESCRIPT",
  "NEXT.JS",
  "AI",
];

function MarqueeRow() {
  return (
    <div className="marquee__row">
      {TECHS.map((tech) => (
        <Fragment key={tech}>
          <span>{tech}</span>
          <span className="dot">・</span>
        </Fragment>
      ))}
    </div>
  );
}

/* The track holds two identical rows so translateX(-50%) loops
   seamlessly. */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  );
}
