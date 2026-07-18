import Link from "next/link";
import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import FooterBar from "@/components/FooterBar";
import { pillars, timeline, steps, plans } from "@/lib/content";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <Nav />

      {/* Hero */}
      <header id="top" className="container" style={{ padding: "110px 0 120px" }}>
        <Reveal className="chip" style={{ marginBottom: 44 }}>
          <span className="chip-dot" />
          Available for new projects — Q3 2026
        </Reveal>
        <Reveal as="h1"
          style={{
            margin: "0 0 44px",
            fontSize: "clamp(50px, 9vw, 128px)",
            lineHeight: 0.96,
            fontWeight: 800,
            letterSpacing: "-0.05em",
            maxWidth: "13ch",
            textWrap: "balance",
          }}
        >
          I build AI systems that make it to{" "}
          <span style={{ color: "var(--accent)" }}>production.</span>
        </Reveal>
        <Reveal
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 48,
            alignItems: "end",
            borderTop: "1px solid var(--border)",
            paddingTop: 36,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 19,
              lineHeight: 1.55,
              color: "var(--muted-1)",
              maxWidth: "50ch",
              textWrap: "pretty",
            }}
          >
            Agents, RAG pipelines, LLM products — designed, built, and shipped
            by one senior engineer. No account managers, no discovery
            workshops, no decks.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "flex-end",
            }}
          >
            <Link href="#contact" className="btn btn-dark">
              Book a call
            </Link>
            <Link href="#track" className="btn btn-outline">
              See the work ↓
            </Link>
          </div>
        </Reveal>
      </header>

      <Marquee />

      {/* What I do */}
      <section className="container" style={{ padding: "130px 0 110px" }}>
        <Reveal
          className="mono"
          style={{
            fontSize: 13,
            letterSpacing: "0.1em",
            color: "var(--muted-3)",
            marginBottom: 40,
          }}
        >
          WHAT I DO
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {pillars.map((p) => (
            <Reveal
              key={p.index}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(90px, 220px) 1fr",
                gap: 24,
                alignItems: "start",
                padding: "48px 0",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div
                className="ghost-number"
                style={{ fontSize: "clamp(56px, 8vw, 120px)" }}
              >
                {p.index}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "24px 48px",
                  alignItems: "start",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "clamp(26px, 3vw, 38px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                  }}
                >
                  {p.title}
                </h3>
                <div>
                  <p
                    style={{
                      margin: "0 0 18px",
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: "var(--muted-1)",
                      maxWidth: "56ch",
                      textWrap: "pretty",
                    }}
                  >
                    {p.body}
                  </p>
                  <div className="mono" style={{ fontSize: 12.5, color: "var(--muted-3)" }}>
                    {p.stack}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Track record */}
      <section
        id="track"
        style={{ background: "var(--dark-bg)", color: "var(--dark-fg)" }}
      >
        <div className="container" style={{ padding: "120px 0 140px" }}>
          <Reveal
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 24,
              marginBottom: 90,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(36px, 5.5vw, 72px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              Track record
            </h2>
            <span className="mono" style={{ fontSize: 13, color: "var(--dark-muted-2)" }}>
              EVERYTHING HERE IS REAL AND SHIPPED
            </span>
          </Reveal>

          <div className="timeline-rail">
            {timeline.map((t) => (
              <Reveal key={t.year} style={{ position: "relative", paddingBottom: 88 }}>
                <span className="timeline-dot" />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(110px, 260px) 1fr",
                    gap: "20px 48px",
                    alignItems: "start",
                  }}
                >
                  <div
                    className="ghost-number ghost-number--dark"
                    style={{ fontSize: "clamp(38px, 6vw, 88px)" }}
                  >
                    {t.year}
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
                      <h3
                        style={{
                          margin: 0,
                          fontSize: "clamp(22px, 2.6vw, 32px)",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {t.title}
                      </h3>
                      <span className="status-pill">{t.status}</span>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 16,
                        lineHeight: 1.65,
                        color: "var(--dark-muted-1)",
                        maxWidth: "62ch",
                        textWrap: "pretty",
                      }}
                    >
                      {t.body}
                    </p>
                    {t.links && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 20,
                          marginTop: 22,
                        }}
                      >
                        <a
                          href="https://agrob2bhub.com"
                          target="_blank"
                          rel="noopener"
                          className="link-accent-light"
                        >
                          agrob2bhub.com ↗
                        </a>
                        <a
                          href="https://www.netokracija.rs"
                          target="_blank"
                          rel="noopener"
                          className="link-underline link-underline--dark"
                        >
                          Netokracija coverage ↗
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "calc(4px - clamp(28px, 5vw, 60px))",
                  top: 10,
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "var(--dark-fg)",
                }}
              />
              <p className="mono" style={{ margin: 0, fontSize: 14, color: "var(--dark-muted-2)" }}>
                next entry: <span style={{ color: "var(--dark-fg)" }}>your project</span> —{" "}
                <Link href="#contact" style={{ color: "var(--accent-light)", textDecoration: "none" }}>
                  book a call →
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section id="process" className="container" style={{ padding: "120px 0 110px" }}>
        <Reveal
          className="mono"
          style={{
            fontSize: 13,
            letterSpacing: "0.1em",
            color: "var(--muted-3)",
            marginBottom: 40,
          }}
        >
          HOW I WORK
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
          }}
        >
          {steps.map((s) => (
            <Reveal
              key={s.n}
              style={{ borderTop: "2px solid var(--fg)", paddingTop: 28 }}
            >
              <div className="mono" style={{ fontSize: 13, color: "var(--accent)", marginBottom: 18 }}>
                STEP {s.n} / 3
              </div>
              <h3
                style={{
                  margin: "0 0 14px",
                  fontSize: 26,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "var(--muted-1)", textWrap: "pretty" }}>
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Working together */}
      <section className="container" style={{ padding: "0 36px 130px" }}>
        <Reveal
          className="mono"
          style={{
            fontSize: 13,
            letterSpacing: "0.1em",
            color: "var(--muted-3)",
            marginBottom: 40,
          }}
        >
          WORKING TOGETHER
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {plans.map((pl) => (
            <Reveal key={pl.title} as="div" className="plan-card">
              <div className="mono" style={{ fontSize: 12, letterSpacing: "0.08em", color: "var(--accent)", marginBottom: 24 }}>
                {pl.tag}
              </div>
              <h3 style={{ margin: "0 0 12px", fontSize: 22, fontWeight: 700, letterSpacing: "-0.015em" }}>
                {pl.title}
              </h3>
              <p style={{ margin: "0 0 28px", fontSize: 15, lineHeight: 1.6, color: "var(--muted-1)", flex: 1, textWrap: "pretty" }}>
                {pl.body}
              </p>
              <div className="mono" style={{ fontSize: 13, color: "#3a362c" }}>
                {pl.terms}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: "var(--dark-bg)", color: "var(--dark-fg)" }}>
        <div className="container" style={{ padding: "130px 0 100px" }}>
          <Reveal as="h2"
            style={{
              margin: "0 0 30px",
              fontSize: "clamp(40px, 7vw, 96px)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.98,
              maxWidth: "15ch",
              textWrap: "balance",
            }}
          >
            Have a project in mind?{" "}
            <span style={{ color: "var(--accent-light)" }}>Let&apos;s scope it.</span>
          </Reveal>
          <Reveal as="p"
            style={{
              margin: "0 0 48px",
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--dark-muted-1)",
              maxWidth: "52ch",
              textWrap: "pretty",
            }}
          >
            A 30-minute call. You describe the problem, I tell you honestly
            whether AI solves it — and what it would take to build. No pitch.
          </Reveal>
          <Reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 22 }}>
            <a href="mailto:hello@nikolapajovic.com" className="btn btn-light">
              hello@nikolapajovic.com
            </a>
            <a
              href="https://www.linkedin.com/in/nikolapajovic"
              target="_blank"
              rel="noopener"
              className="link-underline link-underline--dark"
            >
              LinkedIn ↗
            </a>
          </Reveal>
          <FooterBar />
        </div>
      </section>
    </div>
  );
}
