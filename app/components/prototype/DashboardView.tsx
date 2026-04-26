"use client";

const recommendations = [
  {
    id: 1,
    title: "Saves ~16 credits per row on .ai Series A–B accounts",
    detail:
      "Findymail returned a verified email on 73% of 142 runs across .ai Series A–B accounts last quarter. Hunter, currently in position 1, won 31%. Promoting Findymail to position 1 cuts the cascade short on the segment where it wins.",
    impact: "Est. +14% waterfall hit-rate · ~$320 / mo at current volume",
    confidence: "n=142 · last 90 days",
  },
  {
    id: 2,
    title: "Removes 47 stale rows / month from biotech sequences",
    detail:
      "BuiltWith returned tech-stack data older than 180 days on 23% of runs against biotech > 200 HC. Demoting it past cleaner sources cuts stale outputs without sacrificing coverage.",
    impact: "Est. -47 stale rows / mo · downstream sequence quality up",
    confidence: "n=312 · last 60 days",
  },
  {
    id: 3,
    title: "+18% reply rate at the same credit cost",
    detail:
      "Hiring-signal prompt v2 wins replies 31% more than v1 on Series B+ accounts. Same Claygent run, same cost — different prompt scaffold. v3 currently in test, +11% over v2 at low n.",
    impact: "Est. +18% reply rate · zero credit delta",
    confidence: "v1 n=142 · v2 n=89",
  },
];

const segments = [
  { label: "AI Infra · Series A–B", row: ["31%", "73%", "44%", "12%", "—"] },
  { label: "Devtools · Series B+", row: ["58%", "62%", "71%", "39%", "44%"] },
  { label: "Biotech · 200+ HC", row: ["12%", "8%", "29%", "55%", "23%"] },
  { label: "FinServ · Enterprise", row: ["67%", "54%", "82%", "61%", "71%"] },
  { label: "Healthtech · Growth", row: ["41%", "38%", "33%", "47%", "62%"] },
];

const providers = ["Hunter", "Findymail", "Apollo", "LeadMagic", "BuiltWith"];

const timeline = [
  {
    date: "Apr 24",
    title: "Findymail promoted on .ai Series A–B",
    note: "Sara approved · +14% observed hit-rate this week",
    state: "applied",
  },
  {
    date: "Apr 18",
    title: "Apollo demoted on biotech > 200 HC",
    note: "Sara approved · sequence quality up 9%",
    state: "applied",
  },
  {
    date: "Apr 11",
    title: "Hiring-signal v2 promoted to default for Series B+",
    note: "Sara approved · +18% reply rate observed",
    state: "applied",
  },
  {
    date: "Apr 03",
    title: "ZoomInfo demoted on early-stage AI",
    note: "Sara dismissed · prefers manual control here",
    state: "dismissed",
  },
];

function pctColor(pct: string) {
  if (pct === "—") return { bg: "#FAFAFA", fg: "#A1A1AA" };
  const n = parseInt(pct);
  if (n >= 70) return { bg: "#DCFCE7", fg: "#15803D" };
  if (n >= 50) return { bg: "#ECFCCB", fg: "#3F6212" };
  if (n >= 35) return { bg: "#FEF3C7", fg: "#92400E" };
  if (n >= 20) return { bg: "#FFE4E6", fg: "#9F1239" };
  return { bg: "#FEE2E2", fg: "#B91C1C" };
}

export default function DashboardView() {
  return (
    <div
      className="text-[13px]"
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        color: "#18181B",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Breadcrumb */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b text-[12px]"
        style={{ borderColor: "#E4E4E7", color: "#71717A" }}
      >
        <span>⚡ Functions</span>
        <span>›</span>
        <span style={{ color: "#18181B", fontWeight: 500 }}>
          Marketplace intelligence
        </span>
        <span
          className="ml-2 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider"
          style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}
        >
          new tab · proposed
        </span>
        <span className="ml-auto text-[11px]" style={{ color: "#A1A1AA" }}>
          Sidharth&apos;s Workspace · last refreshed 4 min ago
        </span>
      </div>

      {/* Header summary — lead with the credit pain */}
      <div
        className="px-4 py-4 border-b"
        style={{ borderColor: "#E4E4E7", backgroundColor: "#FAFAFA" }}
      >
        <div
          className="text-[13px] mb-4 leading-snug"
          style={{ color: "#92400E" }}
        >
          <span style={{ fontWeight: 600 }}>
            47% of your email-finder spend is going to providers that
            don&apos;t return value for your accounts.
          </span>{" "}
          <span style={{ color: "#92400E" }}>
            Three pending recommendations could close the gap by ~$1,200 / mo.
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Credit efficiency · 30d", value: "53%", delta: "↑ from 41%" },
            { label: "Wasted credits · 30d", value: "4,200", delta: "≈ $420" },
            { label: "Pending recs · est. savings", value: "$1.2k/mo", delta: "3 to review" },
            { label: "Applied this month", value: "7", delta: "+11% hit-rate" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-[10px] uppercase tracking-wider mb-1"
                style={{ color: "#A1A1AA" }}
              >
                {s.label}
              </div>
              <div
                className="text-[22px] leading-tight"
                style={{ color: "#18181B", fontWeight: 600 }}
              >
                {s.value}
              </div>
              <div
                className="text-[10px] mt-0.5"
                style={{ color: "#71717A" }}
              >
                {s.delta}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pending recommendations */}
      <div className="px-4 py-5 border-b" style={{ borderColor: "#E4E4E7" }}>
        <div
          className="flex items-baseline justify-between mb-3"
          style={{ color: "#52525B" }}
        >
          <div className="text-[10px] uppercase tracking-wider font-medium">
            Pending recommendations
          </div>
          <div className="text-[11px]" style={{ color: "#A1A1AA" }}>
            All require Ops approval before applying
          </div>
        </div>

        <div className="space-y-3">
          {recommendations.map((r) => (
            <div
              key={r.id}
              className="border rounded-md p-4"
              style={{ borderColor: "#E4E4E7", backgroundColor: "#FAFAFA" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div
                    className="font-medium mb-1"
                    style={{ color: "#18181B" }}
                  >
                    {r.title}
                  </div>
                  <div
                    className="text-[12px] leading-snug mb-2"
                    style={{ color: "#52525B" }}
                  >
                    {r.detail}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px]">
                    <span style={{ color: "#15803D" }}>{r.impact}</span>
                    <span style={{ color: "#A1A1AA" }}>{r.confidence}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 shrink-0">
                  <button
                    className="px-3 py-1.5 rounded text-[11px] font-medium"
                    style={{
                      backgroundColor: "#18181B",
                      color: "#FFFFFF",
                    }}
                    type="button"
                  >
                    Apply
                  </button>
                  <button
                    className="px-3 py-1.5 rounded text-[11px]"
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#52525B",
                      border: "1px solid #E4E4E7",
                    }}
                    type="button"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Heatmap */}
      <div className="px-4 py-5 border-b" style={{ borderColor: "#E4E4E7" }}>
        <div
          className="flex items-baseline justify-between mb-3"
          style={{ color: "#52525B" }}
        >
          <div className="text-[10px] uppercase tracking-wider font-medium">
            Provider win rate · email finders · last 90 days
          </div>
          <div className="text-[11px]" style={{ color: "#A1A1AA" }}>
            % verified return
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[12px] min-w-[560px]">
            <thead>
              <tr style={{ color: "#71717A" }}>
                <th
                  className="text-left py-2 pr-3 text-[10px] uppercase tracking-wider font-medium"
                  style={{ width: "180px" }}
                >
                  Segment
                </th>
                {providers.map((p) => (
                  <th
                    key={p}
                    className="py-2 px-2 text-center text-[10px] uppercase tracking-wider font-medium"
                  >
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {segments.map((s) => (
                <tr key={s.label} style={{ borderTop: "1px solid #F4F4F5" }}>
                  <td
                    className="py-1.5 pr-3 text-[12px]"
                    style={{ color: "#52525B" }}
                  >
                    {s.label}
                  </td>
                  {s.row.map((pct, ci) => {
                    const c = pctColor(pct);
                    return (
                      <td key={ci} className="py-1.5 px-2 text-center">
                        <span
                          className="inline-block px-2 py-1 rounded text-[11px] font-medium min-w-[44px]"
                          style={{ backgroundColor: c.bg, color: c.fg }}
                        >
                          {pct}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4 py-5">
        <div
          className="text-[10px] uppercase tracking-wider font-medium mb-3"
          style={{ color: "#52525B" }}
        >
          What changed this month
        </div>
        <div className="space-y-2">
          {timeline.map((t, i) => (
            <div
              key={i}
              className="flex items-start gap-3 py-1.5 border-b last:border-b-0"
              style={{ borderColor: "#F4F4F5" }}
            >
              <div
                className="mono text-[11px] shrink-0 w-[52px]"
                style={{ color: "#A1A1AA" }}
              >
                {t.date}
              </div>
              <div className="flex-1">
                <div className="text-[13px]" style={{ color: "#18181B" }}>
                  {t.title}
                </div>
                <div
                  className="text-[11px] mt-0.5"
                  style={{ color: "#71717A" }}
                >
                  {t.note}
                </div>
              </div>
              <div
                className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shrink-0"
                style={{
                  backgroundColor:
                    t.state === "applied" ? "#DCFCE7" : "#F4F4F5",
                  color: t.state === "applied" ? "#15803D" : "#71717A",
                }}
              >
                {t.state}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-4 py-2 border-t text-[11px]"
        style={{
          borderColor: "#E4E4E7",
          color: "#71717A",
          backgroundColor: "#FAFAFA",
        }}
      >
        <span>
          Recommendations driven by 1.2M aggregated enrichment runs across 75+
          marketplace providers
        </span>
        <span style={{ color: "#7C3AED" }}>
          ✦ Ops-controlled · nothing applied without your click
        </span>
      </div>
    </div>
  );
}
