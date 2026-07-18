import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import FooterBar from "@/components/FooterBar";
import { cases, posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing & Case Studies",
};

export default function WritingPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Nav active="writing" />

      <header className="container" style={{ padding: "100px 0 90px" }}>
        <Reveal
          className="mono"
          style={{ fontSize: 13, letterSpacing: "0.1em", color: "var(--muted-3)", marginBottom: 36 }}
        >
          WRITING &amp; CASE STUDIES
        </Reveal>
        <Reveal as="h1"
          style={{
            margin: "0 0 32px",
            fontSize: "clamp(40px, 6.5vw, 88px)",
            lineHeight: 0.98,
            fontWeight: 800,
            letterSpacing: "-0.045em",
            maxWidth: "15ch",
            textWrap: "balance",
          }}
        >
          Notes from the <span style={{ color: "var(--accent)" }}>build.</span>
        </Reveal>
        <Reveal as="p"
          style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "var(--muted-1)", maxWidth: "54ch", textWrap: "pretty" }}
        >
          How I actually build these systems — architecture decisions,
          costs, failures, and results. No theory, no hype. If a post is
          marked &quot;soon&quot;, it&apos;s being written between client work.
        </Reveal>
      </header>

      {/* Case studies */}
      <section style={{ background: "var(--dark-bg)", color: "var(--dark-fg)" }}>
        <div className="container" style={{ padding: "100px 0 110px" }}>
          <Reveal
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 24,
              marginBottom: 64,
            }}
          >
            <h2 style={{ margin: 0, fontSize: "clamp(30px, 4.5vw, 56px)", fontWeight: 800, letterSpacing: "-0.04em" }}>
              Case studies
            </h2>
            <span className="mono" style={{ fontSize: 13, color: "var(--dark-muted-2)" }}>
              HOW THE PROJECTS WERE BUILT
            </span>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {cases.map((c) => (
              <Reveal
                key={c.no}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(90px, 200px) 1fr",
                  gap: "20px 48px",
                  alignItems: "start",
                  padding: "44px 0",
                  borderTop: "1px solid var(--dark-border)",
                }}
              >
                <div
                  className="ghost-number ghost-number--dark"
                  style={{ fontSize: "clamp(32px, 4.5vw, 64px)" }}
                >
                  {c.no}
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      gap: "12px 20px",
                      marginBottom: 14,
                    }}
                  >
                    <h3 style={{ margin: 0, fontSize: "clamp(22px, 2.6vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                      {c.title}
                    </h3>
                    <span className="status-pill">{c.status}</span>
                  </div>
                  <p style={{ margin: "0 0 18px", fontSize: 16, lineHeight: 1.65, color: "var(--dark-muted-1)", maxWidth: "64ch", textWrap: "pretty" }}>
                    {c.body}
                  </p>
                  <div
                    className="mono"
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px", fontSize: 12.5, color: "var(--dark-muted-2)" }}
                  >
                    <span>{c.meta}</span>
                    {c.isAgro && (
                      <>
                        <a href="https://agrob2bhub.com" target="_blank" rel="noopener" className="link-accent-light">
                          agrob2bhub.com ↗
                        </a>
                        <a
                          href="https://www.netokracija.rs"
                          target="_blank"
                          rel="noopener"
                          className="link-underline link-underline--dark"
                        >
                          netokracija ↗
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="container" style={{ padding: "110px 0 120px" }}>
        <Reveal
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 24,
            marginBottom: 56,
          }}
        >
          <h2 style={{ margin: 0, fontSize: "clamp(30px, 4.5vw, 56px)", fontWeight: 800, letterSpacing: "-0.04em" }}>
            Posts
          </h2>
          <span className="mono" style={{ fontSize: 13, color: "var(--muted-3)" }}>
            TECHNICAL, SPECIFIC, MONTHLY
          </span>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {posts.map((po) => (
            <Reveal key={po.title} as="a" href={po.href} className="post-row">
              <div>
                <h3 style={{ margin: "0 0 10px", fontSize: "clamp(20px, 2.4vw, 30px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                  {po.title}
                </h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--muted-1)", maxWidth: "64ch", textWrap: "pretty" }}>
                  {po.blurb}
                </p>
              </div>
              <span className="mono" style={{ fontSize: 12.5, color: "var(--muted-3)", whiteSpace: "nowrap" }}>
                {po.meta}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--dark-bg)", color: "var(--dark-fg)" }}>
        <div className="container" style={{ padding: "100px 0 90px" }}>
          <Reveal as="h2"
            style={{
              margin: "0 0 40px",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              maxWidth: "18ch",
              textWrap: "balance",
            }}
          >
            Want a system like these?{" "}
            <span style={{ color: "var(--accent-light)" }}>Let&apos;s scope it.</span>
          </Reveal>
          <Reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 22 }}>
            <a href="mailto:nikola@nikolapajovic.com" className="btn btn-light">
              nikola@nikolapajovic.com
            </a>
            <Link href="/#contact" className="link-underline link-underline--dark">
              Back to home ↗
            </Link>
          </Reveal>
          <FooterBar marginTop={90} />
        </div>
      </section>
    </div>
  );
}
