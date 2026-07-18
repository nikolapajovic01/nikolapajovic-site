import Link from "next/link";

export default function Nav({ active }: { active?: "about" | "writing" }) {
  return (
    <nav
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "30px 36px",
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: "-0.01em",
          textDecoration: "none",
          color: "var(--fg)",
        }}
      >
        Nikola Pajović
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
        <Link
          href="/about"
          className={`nav-link${active === "about" ? " nav-link--active" : ""}`}
        >
          About
        </Link>
        <Link
          href="/writing"
          className={`nav-link${active === "writing" ? " nav-link--active" : ""}`}
        >
          Writing
        </Link>
        <Link href="/#contact" className="btn btn-dark btn-sm">
          Book a call
        </Link>
      </div>
    </nav>
  );
}
