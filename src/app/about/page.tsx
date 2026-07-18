import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import FooterBar from "@/components/FooterBar";
import PortraitPlaceholder from "@/components/PortraitPlaceholder";
import { bio, principles } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Nav active="about" />

      {/* Intro */}
      <header className="container" style={{ padding: "100px 0 110px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div>
            <Reveal
              className="mono"
              style={{ fontSize: 13, letterSpacing: "0.1em", color: "var(--muted-3)", marginBottom: 36 }}
            >
              ABOUT
            </Reveal>
            <Reveal as="h1"
              style={{
                margin: "0 0 36px",
                fontSize: "clamp(40px, 6vw, 80px)",
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "-0.045em",
                textWrap: "balance",
              }}
            >
              Engineer first. Everything else{" "}
              <span style={{ color: "var(--accent)" }}>second.</span>
            </Reveal>
            <Reveal as="p"
              style={{ margin: "0 0 20px", fontSize: 18, lineHeight: 1.65, color: "var(--muted-1)", maxWidth: "56ch", textWrap: "pretty" }}
            >
              I&apos;m Nikola Pajović, an independent AI consultant based in
              Belgrade. I design and build AI systems — agents, RAG
              pipelines, LLM products — for clients who need them working in
              production, not in a slide deck.
            </Reveal>
            <Reveal as="p"
              style={{ margin: "0 0 20px", fontSize: 18, lineHeight: 1.65, color: "var(--muted-1)", maxWidth: "56ch", textWrap: "pretty" }}
            >
              Before consulting, I founded and built AgroB2B Hub — a live
              B2B trading platform for the frozen fruit industry — alone,
              from empty repo to press coverage. That experience is why I
              work the way I do: small scope, working software every week,
              ship or say why not.
            </Reveal>
            <Reveal as="p"
              style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: "var(--muted-1)", maxWidth: "56ch", textWrap: "pretty" }}
            >
              When I&apos;m not on client work I build my own systems —
              Telegram bots that write and publish blogs, and Hermes, a
              multi-agent SEO system I&apos;m building in public.
            </Reveal>
          </div>
          <Reveal style={{ position: "relative", minHeight: 460 }}>
            <PortraitPlaceholder />
          </Reveal>
        </div>
      </header>

      {/* Background */}
      <section style={{ background: "var(--dark-bg)", color: "var(--dark-fg)" }}>
        <div className="container" style={{ padding: "110px 0 120px" }}>
          <Reveal
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 24,
              marginBottom: 80,
            }}
          >
            <h2 style={{ margin: 0, fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 800, letterSpacing: "-0.04em" }}>
              Background
            </h2>
            <span className="mono" style={{ fontSize: 13, color: "var(--dark-muted-2)" }}>
              EDUCATION &amp; PATH
            </span>
          </Reveal>

          <div className="timeline-rail">
            {bio.map((b) => (
              <Reveal key={b.title} style={{ position: "relative", paddingBottom: 72 }}>
                <span className="timeline-dot" />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(100px, 220px) 1fr",
                    gap: "16px 48px",
                    alignItems: "start",
                  }}
                >
                  <div
                    className="ghost-number ghost-number--dark"
                    style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
                  >
                    {b.years}
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: 12, letterSpacing: "0.08em", color: "var(--accent-light)", marginBottom: 12 }}>
                      {b.tag}
                    </div>
                    <h3 style={{ margin: "0 0 12px", fontSize: "clamp(20px, 2.4vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                      {b.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--dark-muted-1)", maxWidth: "62ch", textWrap: "pretty" }}>
                      {b.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="container" style={{ padding: "110px 0" }}>
        <Reveal
          className="mono"
          style={{ fontSize: 13, letterSpacing: "0.1em", color: "var(--muted-3)", marginBottom: 40 }}
        >
          HOW I THINK ABOUT THE WORK
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
          {principles.map((p) => (
            <Reveal key={p.title} style={{ borderTop: "2px solid var(--fg)", paddingTop: 28 }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>
                {p.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "var(--muted-1)", textWrap: "pretty" }}>
                {p.body}
              </p>
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
            Want the longer version?{" "}
            <span style={{ color: "var(--accent-light)" }}>Ask me on a call.</span>
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
          <FooterBar marginTop={90} />
        </div>
      </section>
    </div>
  );
}
