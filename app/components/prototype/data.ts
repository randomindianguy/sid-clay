export type Subsystem =
  | "Claygent · web"
  | "Claygent · scrape"
  | "Marketplace · LeadMagic"
  | "Marketplace · Findymail"
  | "Marketplace · BuiltWith"
  | "Marketplace · Crunchbase"
  | "Marketplace · Lusha"
  | "Native · LinkedIn"
  | "Native · Salesforce"
  | "AI context";

export type Source = {
  subsystem: Subsystem;
  label: string;
  url: string;
};

export type Outcome = {
  label: string;
  count: number;
  tone: "won" | "lost" | "pending" | "skipped";
};

export type Row = {
  id: number;
  company: string;
  domain: string;
  industry: string;
  signal: string;
  reasoning: {
    prompt: string;
    sources: Source[];
    fetchedAt: string;
    reuseCount: number;
    creditsThisRun: number;
    creditsIfReasoningColumnAdded: number;
    outcomes: Outcome[];
    confidence: "high" | "medium" | "low";
  };
};

export const builderRows: Row[] = [
  {
    id: 1,
    company: "Lumen Labs",
    domain: "lumen.dev",
    industry: "AI infra",
    signal:
      "Hiring 4 SDRs + Head of GTM. Just closed $14M Series A.",
    reasoning: {
      prompt:
        "Summarize this company's GTM hiring trajectory this quarter in one sentence.",
      sources: [
        { subsystem: "Native · LinkedIn", label: "linkedin.com/company/lumen-labs/jobs", url: "#" },
        { subsystem: "Claygent · scrape", label: "lumen.dev/careers", url: "#" },
        { subsystem: "Marketplace · Crunchbase", label: "$14M Series A · Mar 2026", url: "#" },
      ],
      fetchedAt: "2 days ago",
      reuseCount: 7,
      creditsThisRun: 18,
      creditsIfReasoningColumnAdded: 36,
      outcomes: [
        { label: "Won", count: 3, tone: "won" },
        { label: "In flight", count: 2, tone: "pending" },
      ],
      confidence: "high",
    },
  },
  {
    id: 2,
    company: "Cantilever",
    domain: "cantilever.io",
    industry: "Devtools",
    signal: "Doubled headcount in 90 days. New AE roles posted Monday.",
    reasoning: {
      prompt:
        "Summarize this company's GTM hiring trajectory this quarter in one sentence.",
      sources: [
        { subsystem: "Native · LinkedIn", label: "headcount delta · 64 → 128 in 90d", url: "#" },
        { subsystem: "Claygent · scrape", label: "cantilever.io/careers · 7 new AE roles", url: "#" },
      ],
      fetchedAt: "5 hours ago",
      reuseCount: 12,
      creditsThisRun: 14,
      creditsIfReasoningColumnAdded: 28,
      outcomes: [
        { label: "Won", count: 4, tone: "won" },
        { label: "Skipped", count: 1, tone: "skipped" },
      ],
      confidence: "high",
    },
  },
  {
    id: 3,
    company: "Northwind",
    domain: "northwind.ai",
    industry: "Sales AI",
    signal: "Quiet quarter. 0 GTM hires. Last raise 14 months ago.",
    reasoning: {
      prompt:
        "Summarize this company's GTM hiring trajectory this quarter in one sentence.",
      sources: [
        { subsystem: "Native · LinkedIn", label: "company/northwind-ai · 0 GTM roles", url: "#" },
        { subsystem: "Marketplace · Crunchbase", label: "last raise · Feb 2025", url: "#" },
      ],
      fetchedAt: "1 day ago",
      reuseCount: 3,
      creditsThisRun: 16,
      creditsIfReasoningColumnAdded: 32,
      outcomes: [
        { label: "Skipped", count: 4, tone: "skipped" },
        { label: "Lost", count: 1, tone: "lost" },
      ],
      confidence: "medium",
    },
  },
  {
    id: 4,
    company: "Helix Bio",
    domain: "helixbio.com",
    industry: "Biotech",
    signal: "Hiring CRO + two AEs. New oncology launch in March.",
    reasoning: {
      prompt:
        "Summarize this company's GTM hiring trajectory this quarter in one sentence.",
      sources: [
        { subsystem: "Claygent · scrape", label: "helixbio.com/news/oncology-launch", url: "#" },
        { subsystem: "Native · LinkedIn", label: "CRO + 2 AE roles posted Apr 2026", url: "#" },
        { subsystem: "Claygent · web", label: "biopharmadive.com/news/helix-launch", url: "#" },
      ],
      fetchedAt: "3 days ago",
      reuseCount: 5,
      creditsThisRun: 22,
      creditsIfReasoningColumnAdded: 44,
      outcomes: [
        { label: "Won", count: 2, tone: "won" },
        { label: "In flight", count: 1, tone: "pending" },
      ],
      confidence: "high",
    },
  },
  {
    id: 5,
    company: "Riftcraft",
    domain: "riftcraft.studio",
    industry: "Gaming",
    signal: "All engineering hires this quarter. No GTM motion.",
    reasoning: {
      prompt:
        "Summarize this company's GTM hiring trajectory this quarter in one sentence.",
      sources: [{ subsystem: "Claygent · scrape", label: "riftcraft.studio/jobs · 12 eng, 0 GTM", url: "#" }],
      fetchedAt: "12 hours ago",
      reuseCount: 1,
      creditsThisRun: 12,
      creditsIfReasoningColumnAdded: 24,
      outcomes: [{ label: "Skipped", count: 3, tone: "skipped" }],
      confidence: "medium",
    },
  },
  {
    id: 6,
    company: "Quanta Field",
    domain: "quantafield.com",
    industry: "Climate",
    signal: "Director of Sales role open 47 days. Stale signal.",
    reasoning: {
      prompt:
        "Summarize this company's GTM hiring trajectory this quarter in one sentence.",
      sources: [
        { subsystem: "Native · LinkedIn", label: "jobs/view/3892471 · 47d open", url: "#" },
        { subsystem: "Claygent · scrape", label: "quantafield.com/about", url: "#" },
      ],
      fetchedAt: "8 days ago",
      reuseCount: 2,
      creditsThisRun: 16,
      creditsIfReasoningColumnAdded: 32,
      outcomes: [{ label: "Lost", count: 2, tone: "lost" }],
      confidence: "low",
    },
  },
  {
    id: 7,
    company: "Mason & Co",
    domain: "masonsf.co",
    industry: "FinServ",
    signal: "Hired SVP Marketing 3 weeks ago. Outbound build incoming.",
    reasoning: {
      prompt:
        "Summarize this company's GTM hiring trajectory this quarter in one sentence.",
      sources: [
        { subsystem: "Native · LinkedIn", label: "in/jane-mason-svp · started 3w ago", url: "#" },
        { subsystem: "Claygent · scrape", label: "masonsf.co/blog/welcome-jane", url: "#" },
      ],
      fetchedAt: "1 day ago",
      reuseCount: 9,
      creditsThisRun: 14,
      creditsIfReasoningColumnAdded: 28,
      outcomes: [
        { label: "Won", count: 5, tone: "won" },
        { label: "In flight", count: 3, tone: "pending" },
      ],
      confidence: "high",
    },
  },
  {
    id: 8,
    company: "Tessera",
    domain: "tessera.health",
    industry: "Healthtech",
    signal: "Layoffs announced last week. No outbound recommended now.",
    reasoning: {
      prompt:
        "Summarize this company's GTM hiring trajectory this quarter in one sentence.",
      sources: [
        { subsystem: "Claygent · web", label: "techcrunch.com/2026/04/tessera-layoffs", url: "#" },
        { subsystem: "Native · LinkedIn", label: "company/tessera-health · 22% headcount cut", url: "#" },
      ],
      fetchedAt: "6 hours ago",
      reuseCount: 4,
      creditsThisRun: 18,
      creditsIfReasoningColumnAdded: 36,
      outcomes: [{ label: "Skipped", count: 6, tone: "skipped" }],
      confidence: "high",
    },
  },
];
