import { ImageResponse } from "next/og";

export function socialImage(label: string, title: string, subtitle: string) {
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
        <span style={{ color: "#b18cff" }}>{label}</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 88,
          fontWeight: 600,
          letterSpacing: "-4px",
          lineHeight: 1.05,
          maxWidth: 980,
        }}
      >
        {title}
      </div>
      <span style={{ fontSize: 26, color: "#a1a1a6" }}>{subtitle}</span>
    </div>,
    { width: 1200, height: 630 },
  );
}
