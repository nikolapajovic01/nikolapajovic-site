export const pillars = [
  {
    index: "01",
    title: "Agents & Automation",
    body: "Autonomous agents that do real work inside your operations — triage, research, data entry, customer workflows. Built to be reliable, observable, and cheap to run.",
    stack: "tool use · orchestration · evals · human-in-the-loop",
  },
  {
    index: "02",
    title: "RAG & LLM Systems",
    body: "Retrieval pipelines over your documents and data that answer correctly, cite sources, and hold up under real usage. Measured with evals, not vibes.",
    stack: "embeddings · hybrid search · reranking · eval harnesses",
  },
  {
    index: "03",
    title: "0→1 Product Consulting",
    body: "You have an idea; I turn it into a launched product. Scope, architecture, build, deploy, iterate — the same way I built my own company.",
    stack: "scoping · MVP build · launch · iteration",
  },
];

export const timeline = [
  {
    year: "2021",
    title: "Client sites & platforms",
    status: "SHIPPED",
    body: "Production websites and web platforms designed and built end to end — from brief to deployment. The engineering foundation everything else stands on.",
    links: false,
  },
  {
    year: "2023",
    title: "Founded AgroB2B Hub",
    status: "FOUNDER",
    body: "A B2B trading platform for the frozen fruit industry — connecting producers, cold storages, and buyers across Europe. Founded, designed, and built by one person.",
    links: false,
  },
  {
    year: "2024",
    title: "AgroB2B Hub goes live",
    status: "LIVE · PRESS",
    body: "Not an AI project — proof of something rarer: a real platform with real companies on it, covered by Netokracija. That end-to-end 0→1 process is exactly what I run for clients.",
    links: true,
  },
  {
    year: "2025",
    title: "Blog-writing Telegram bots",
    status: "LIVE",
    body: "Telegram bots that generate and publish complete blog posts on schedule — topic research, drafting, formatting, delivery. Content pipelines that run without a human in the loop.",
    links: false,
  },
  {
    year: "2026",
    title: "Hermes",
    status: "IN DEVELOPMENT",
    body: "An autonomous agent system for SEO and content operations — research, writing, publishing, and monitoring running as coordinated agents. Building in public; case study to follow.",
    links: false,
  },
];

export const steps = [
  {
    n: "1",
    title: "Scope",
    body: "A discovery call, then a written proposal: what gets built, what it costs, when it ships. Fixed. If AI is the wrong tool for your problem, I say so on the call.",
  },
  {
    n: "2",
    title: "Build",
    body: "Short cycles, working software every week. You see progress in a live environment, not in status reports. Direct line to me — no intermediaries.",
  },
  {
    n: "3",
    title: "Ship",
    body: "Deployed to your infrastructure, documented, handed over. Your team can run it without me — or I stay on retainer and keep improving it.",
  },
];

export const plans = [
  {
    tag: "FIXED SCOPE",
    title: "Project",
    body: "A defined system, delivered end to end. Agreed scope, fixed price, fixed timeline. Best for an agent, RAG system, or MVP with clear boundaries.",
    terms: "from 2 weeks · fixed price",
  },
  {
    tag: "RETAINER",
    title: "Ongoing",
    body: "A reserved block of my time each month — building, improving, and maintaining your AI systems as they grow. Priority response.",
    terms: "monthly · limited slots",
  },
  {
    tag: "FREE",
    title: "Discovery call",
    body: "Thirty minutes on your problem. You leave with an honest read on feasibility, a rough architecture, and a cost range — whether or not we work together.",
    terms: "30 min · no obligation",
  },
];

export const bio = [
  {
    years: "20XX–XX",
    tag: "EDUCATION",
    title: "University — degree, field",
    body: "Placeholder: your degree, university, what you focused on, anything notable (thesis, competitions, side projects during studies). Send me the real details and I'll write it properly.",
  },
  {
    years: "20XX–XX",
    tag: "EARLY WORK",
    title: "First engineering years",
    body: "Placeholder: where you started, what you built, what stack — the years that made you an engineer. Client sites and platforms, delivered end to end.",
  },
  {
    years: "2023–24",
    tag: "FOUNDER",
    title: "AgroB2B Hub",
    body: "Founded, designed, and built a live B2B trading platform for the frozen fruit industry — alone. Real companies onboarded, covered by Netokracija. The proof behind every claim on this site.",
  },
  {
    years: "2025–",
    tag: "NOW",
    title: "Independent AI consulting",
    body: "Full focus on AI systems: agents, RAG pipelines, LLM products for foreign B2B clients — plus my own builds: blog-writing Telegram bots in production and Hermes, a multi-agent SEO system, in development.",
  },
];

export const principles = [
  {
    title: "Production is the bar",
    body: "A system that only works in a demo doesn't work. Everything I build is measured by whether it survives real users, real data, and real load.",
  },
  {
    title: "One engineer, whole problem",
    body: "You talk to the person writing the code. Scope, architecture, build, deploy — one head holding the whole picture beats a team passing tickets.",
  },
  {
    title: "Honest over impressive",
    body: "If AI is the wrong tool for your problem, I say so on the first call. Saying no early is cheaper for both of us than a failed project.",
  },
];

export const cases = [
  {
    no: "01",
    title: "AgroB2B Hub",
    status: "LIVE · PRESS",
    isAgro: true,
    meta: "FOUNDER · MARKETPLACE · 0→1",
    body: "How one person takes a B2B marketplace from empty repo to live platform with real companies and press coverage: scoping the frozen fruit trade, building marketplace mechanics (listings, matching, messaging), onboarding an industry that lives on the phone. Full write-up coming.",
  },
  {
    no: "02",
    title: "Blog-writing Telegram bots",
    status: "LIVE",
    isAgro: false,
    meta: "LLM PIPELINE · AUTOMATION",
    body: "A content pipeline that lives entirely inside Telegram: research → structure → draft → format → publish, on schedule, with zero clicks. Architecture, prompt design, failure handling, and per-post running costs. Full write-up coming.",
  },
  {
    no: "03",
    title: "Hermes",
    status: "IN DEVELOPMENT",
    isAgro: false,
    meta: "MULTI-AGENT · SEO OPS · BUILDING IN PUBLIC",
    body: "A network of coordinated agents running a complete SEO operation — keyword research, briefs, drafting, internal linking, publishing, rank monitoring. Being built in public: devlogs will land here as it progresses.",
  },
];

export const posts = [
  {
    href: "#",
    title: "How my Telegram bot researches, writes, and publishes a blog post with zero clicks",
    blurb: "The full pipeline behind my blog bots — architecture, prompt design, failure handling, and what it costs to run per post.",
    meta: "AUTOMATION · SOON",
  },
  {
    href: "#",
    title: "Hermes devlog #1: designing a multi-agent SEO system",
    blurb: "Why one agent isn't enough, how the agents divide the work, and where humans stay in the loop.",
    meta: "AGENTS · SOON",
  },
  {
    href: "#",
    title: "RAG that doesn't hallucinate: an eval-first build process",
    blurb: "Define the eval set before the pipeline, then make the numbers go up. The process I use on client RAG systems.",
    meta: "RAG · SOON",
  },
  {
    href: "#",
    title: "What founding a B2B marketplace taught me about shipping AI products",
    blurb: "Lessons from AgroB2B Hub that transfer directly to 0→1 AI work: scope ruthlessly, launch embarrassingly early, talk to users daily.",
    meta: "0→1 · SOON",
  },
];
