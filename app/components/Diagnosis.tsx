import WaterfallExhibit from "./diagnosis/WaterfallExhibit";

type Quote = {
  text: string;
  attribution: string;
  source: string;
  href: string;
  takeaway: string;
};

const quotes: Quote[] = [
  {
    text: "Viewing a function in 'Live' mode mainly serves as an 'audit log' of data processing. Once run, rows are effectively archived and cannot be modified from within the function itself.",
    attribution: "Clay University, Functions documentation",
    source: "university.clay.com/docs/functions",
    href: "https://university.clay.com/docs/functions",
    takeaway:
      "Live mode is an audit log, not an analytics surface. Function-level performance data has no home in Clay\u2019s schema today.",
  },
  {
    text: "When we make updates to add additional context or refine prompts, the optimizations are automatically rolled out to all of the workflows using the function.",
    attribution: "Osman Sheikhnureldin · Head of GTM Ops, Clay",
    source: "clay.com/blog/functions",
    href: "https://www.clay.com/blog/functions",
    takeaway:
      "\u201cWe\u201d means humans editing. Refinement is Ops typing into the editor. There is no automated signal informing those edits today.",
  },
];

const negativeWords = [
  "win rate",
  "success rate",
  "outcome",
  "performance",
  "learning",
  "prioritize",
  "refine",
  "iterate",
];

export default function Diagnosis() {
  return (
    <section
      id="diagnosis"
      className="px-6 md:px-10 py-24 max-w-[760px] mx-auto w-full"
    >
      <div className="asterism" />

      <div className="mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        &sect; I &middot; The diagnosis
      </div>

      <h2
        className="display text-[36px] md:text-[52px] leading-[0.98] tracking-[-0.015em] mb-10 font-medium"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
      >
        Stateless by default.
      </h2>

      <p className="dropcap text-[19px] md:text-[21px] leading-[1.65] mb-16">
        Clay&apos;s enrichment layer is the most data-rich pipe in B2B
        GTM. Seventy-five-plus providers. More than a billion requests.
        Every domain pattern, every industry, every account stage. None
        of it aggregates. The waterfall doesn&apos;t learn. The
        marketplace can&apos;t tell you which providers win for which
        segments. Claygent doesn&apos;t know which research patterns
        yielded replies last quarter. Each request runs as if it were
        the first.
      </p>

      <div className="space-y-16">
        <figure className="border-t-2 border-ink pt-8">
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Exhibit 01 &middot; from my own Clay workspace
          </div>

          <h3
            className="display text-[26px] md:text-[34px] leading-[1.18] tracking-[-0.01em] mb-6 italic"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0" }}
          >
            Eight providers. One wins everything that wins.
          </h3>

          <p className="text-[16px] md:text-[17px] leading-[1.65] mb-6 text-muted-foreground">
            I ran a real Find-People table on{" "}
            <span className="mono text-[14px]">doorstep.ai</span> in my
            own Clay account. The Function cascades through eight
            email-finder providers: LeadMagic, Findymail, Prospeo,
            DropContact, Hunter, Datagma, Icypeas, SMARTe. Findymail at
            position 2 won every row that produced a valid email
            (5 of 8). LeadMagic at position 1 failed all 8. Positions
            3&ndash;8 contributed zero. The next time this Function runs
            on a <span className="mono text-[14px]">.ai</span> domain,
            the cascade restarts at LeadMagic. The system never learned.
          </p>

          <WaterfallExhibit />

          <p className="mt-8 text-[16px] md:text-[17px] leading-[1.65] text-muted-foreground">
            Look closely at the column headers in any Clay table:{" "}
            <span className="mono text-[14px]">100% / 88% / 63% / 89%</span>.
            Clay already tracks freshness per provider column &mdash;
            per-provider telemetry stored at the column level.
            Different providers produce data with different staleness
            curves; that&apos;s a quality signal in itself. Clay
            doesn&apos;t aggregate it across customers, and it
            doesn&apos;t segment it by industry or stage. The columnar
            primitive is shaped to be joinable. Marketplace intelligence
            is a join, not a build.
          </p>

          <div className="mt-6 mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Captured 2026-04-25 &middot; verifiable in any Clay workspace
          </div>
        </figure>

        {quotes.map((q, i) => {
          const num = (i + 2).toString().padStart(2, "0");
          return (
            <figure key={i} className="border-t border-ink pt-8">
              <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Exhibit {num}
              </div>
              <blockquote
                className="display text-[26px] md:text-[34px] leading-[1.18] tracking-[-0.01em] mb-8 italic"
                style={{
                  fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0",
                }}
              >
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption className="flex flex-col gap-1 mb-8">
                <div className="text-[15px] text-ink">
                  &mdash; {q.attribution}
                </div>
                <a
                  href={q.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-[11px] uppercase tracking-[0.18em]"
                >
                  {q.source} ↗
                </a>
              </figcaption>
              <p className="text-[17px] md:text-[18px] leading-[1.65] pl-6 border-l-2 border-accent text-muted-foreground italic">
                {q.takeaway}
              </p>
            </figure>
          );
        })}

        <figure className="border-t-2 border-accent pt-8">
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
            The negative space
          </div>
          <p
            className="display text-[26px] md:text-[34px] leading-[1.18] tracking-[-0.01em] mb-8 font-medium"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
          >
            Across every Clay University Functions and integration lesson,
            these enrichment-quality words return zero hits each.
          </p>
          <div className="mono text-[13px] flex flex-wrap gap-x-6 gap-y-2 mb-8">
            {negativeWords.map((w) => (
              <span key={w} className="line-through text-muted-foreground">
                {w}
              </span>
            ))}
          </div>
          <p className="text-[17px] md:text-[18px] leading-[1.65] text-muted-foreground italic">
            The forward-looking lesson{" "}
            <em className="not-italic">
              &ldquo;What&apos;s Possible Next: Functions Beyond the Table&rdquo;
            </em>{" "}
            describes more distribution surfaces. It does not describe
            learning.
          </p>
        </figure>
      </div>
    </section>
  );
}
