export default function PortraitPlaceholder() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        borderRadius: 6,
        border: "1px dashed var(--border-strong)",
        background: "var(--bg-card)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 24,
      }}
    >
      <span className="mono" style={{ fontSize: 13, color: "var(--muted-3)" }}>
        Drop your portrait here
        <br />
        (public/portrait.jpg)
      </span>
    </div>
  );
}
