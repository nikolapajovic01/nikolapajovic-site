const TEXT =
  "AGENTS ✦ RAG SYSTEMS ✦ LLM PRODUCTS ✦ 0→1 BUILDS ✦ SHIPPED, NOT PITCHED ✦ BELGRADE → WORLDWIDE ✦ ";

export default function Marquee() {
  return (
    <div
      style={{
        background: "var(--accent)",
        color: "var(--dark-fg)",
        overflow: "hidden",
        padding: "18px 0",
        transform: "rotate(-1.2deg) scale(1.02)",
        margin: "0 -8px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 26s linear infinite",
        }}
      >
        <span
          className="mono"
          style={{ fontSize: 15, letterSpacing: "0.1em", whiteSpace: "nowrap" }}
        >
          {TEXT}
        </span>
        <span
          className="mono"
          style={{ fontSize: 15, letterSpacing: "0.1em", whiteSpace: "nowrap" }}
        >
          {TEXT}
        </span>
      </div>
    </div>
  );
}
