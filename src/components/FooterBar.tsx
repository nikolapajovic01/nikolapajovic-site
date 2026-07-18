export default function FooterBar({ marginTop = 100 }: { marginTop?: number }) {
  return (
    <div
      className="mono"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 16,
        marginTop,
        paddingTop: 28,
        borderTop: "1px solid var(--dark-border-soft)",
        fontSize: 12.5,
        color: "var(--dark-muted-2)",
      }}
    >
      <span>© {new Date().getFullYear()} Nikola Pajović</span>
      <span>Belgrade, Serbia · CET</span>
    </div>
  );
}
