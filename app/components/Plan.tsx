type Phase = {
  weeks: string;
  title: string;
  detail: string;
};

const phases: Phase[] = [
  {
    weeks: "Wks 1–3",
    title: "Diagnostic",
    detail:
      "Partner with the enrichment + data eng team to query aggregate waterfall performance: provider win rate by industry, by account stage, by Function archetype. Pair this with 6 customer interviews (Ops champions running heavy waterfall Functions). Output: the actual shape of the loss inside Clay's pipe today.",
  },
  {
    weeks: "Wks 4–5",
    title: "Architecture",
    detail:
      "Marketplace-intelligence schema proposal aligned with eng. The smallest schema change to retain disposition signal from Scheduled Sources. Recommendation surface inside Functions, not a new app. Cost-neutrality and Ops-control reviews.",
  },
  {
    weeks: "Wks 6–9",
    title: "Ship",
    detail:
      "Marketplace intelligence v1 for one enrichment archetype (waterfall email finders) as an A/B test against control accounts. Reasoning capture for one Claygent column type, opt-in surface only.",
  },
  {
    weeks: "Wks 10–12",
    title: "Validate",
    detail:
      "Measure waterfall hit-rate delta on accounts running the recommendation surface vs. control. Propose Function-level recommendation expansion + sequencer-side signal-ingestion roadmap for v2.",
  },
];

export default function Plan() {
  return (
    <section
      id="plan"
      className="px-6 md:px-10 py-24 max-w-[760px] mx-auto w-full"
    >
      <div className="asterism" />

      <div className="mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        &sect; IV &middot; Twelve weeks
      </div>

      <h2
        className="display text-[36px] md:text-[52px] leading-[0.98] tracking-[-0.015em] mb-12 font-medium"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
      >
        What I&apos;d ship.
      </h2>

      <ol className="space-y-0">
        {phases.map((p, i) => (
          <li
            key={p.weeks}
            className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_180px_1fr] gap-4 md:gap-8 py-8 border-t border-ink last:border-b"
          >
            <div className="mono text-[12px] uppercase tracking-[0.18em] text-accent pt-1">
              {p.weeks}
            </div>
            <div
              className="display text-[22px] md:text-[26px] italic col-span-1 md:col-span-1 col-start-2 row-start-1 md:row-auto md:col-start-auto"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0",
              }}
            >
              {p.title}
            </div>
            <div className="text-[16px] md:text-[17px] leading-[1.65] col-span-2 md:col-span-1">
              {p.detail}
            </div>
          </li>
        ))}
      </ol>

      <p className="text-[17px] md:text-[18px] leading-[1.65] mt-10 italic text-muted-foreground">
        <strong className="not-italic text-ink">Week one deliverable:</strong>{" "}
        a joint diagnostic with engineering and the Ops product PM &mdash;
        at which boundary inside the Functions execution path can disposition
        signal be retained, and what&apos;s the smallest schema change to
        do it?
      </p>
    </section>
  );
}
