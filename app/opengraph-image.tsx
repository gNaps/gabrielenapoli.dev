import { ImageResponse } from "next/og";
export const alt =
  "Gabriele Napoli — Fullstack developer and AI enthusiast in Milan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "#0a0a0b",
        color: "#f5f5f4",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
        }}
      >
        <span>Gabriele Napoli</span>
        <span style={{ color: "#a1a1a6" }}>Milan, Italy</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 80,
          fontWeight: 600,
          letterSpacing: "-4px",
          lineHeight: 1.05,
        }}
      >
        <span>Fullstack developer.</span>
        <span style={{ color: "#b18cff" }}>AI enthusiast.</span>
      </div>
      <span style={{ fontSize: 24, color: "#a1a1a6" }}>
        Reliable web apps. A human eye on every line.
      </span>
    </div>,
    size,
  );
}
