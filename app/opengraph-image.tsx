import { ImageResponse } from "next/og";

export const alt = "Mir Rahman — Solutions Architect and Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#020617", color: "#f8fafc", width: "100%", height: "100%", display: "flex", padding: 72, fontFamily: "sans-serif" }}>
      <div style={{ border: "1px solid #26364c", background: "#071426", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 58, position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#38bdf8", fontSize: 24, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          <div style={{ width: 46, height: 46, background: "#0284c7", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 18 }}>MR</div>
          Vancouver, BC, Canada
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "serif", fontSize: 88, lineHeight: 1, letterSpacing: "-0.04em" }}>Mir Rahman</div>
          <div style={{ fontSize: 35, marginTop: 24, color: "#aab8c9" }}>Solutions Architect &amp; Senior Software Engineer</div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#7f91a7" }}>Secure systems · Cloud platforms · Data workflows · Practical AI</div>
      </div>
    </div>,
    size,
  );
}
