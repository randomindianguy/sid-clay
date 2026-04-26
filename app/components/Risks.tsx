export default function Risks() {
  return (
    <section
      id="risks"
      className="px-6 md:px-10 py-24 max-w-[760px] mx-auto w-full"
    >
      <div className="asterism" />

      <div className="mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        &sect; III.5 &middot; Assumptions &amp; risks
      </div>

      <h2
        className="display text-[36px] md:text-[52px] leading-[0.98] tracking-[-0.015em] mb-10 font-medium"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
      >
        Who this is for, and what could go wrong.
      </h2>

      <h3
        className="display text-[22px] md:text-[26px] italic mt-12 mb-4"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0" }}
      >
        Who this is for.
      </h3>
      <p className="text-[18px] md:text-[19px] leading-[1.65] mb-8">
        The GTM Engineer or RevOps lead who builds Functions and
        configures waterfalls. They live inside Clay all day. They feel
        every dollar of wasted credit when finance reviews the bill.
        Marketplace intelligence is for them. Reps consume output via
        MCP or CRM; they don&apos;t see provider attribution, and they
        don&apos;t want to. This is explicitly not built for reps.
      </p>

      <h3
        className="display text-[22px] md:text-[26px] italic mt-12 mb-4"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0" }}
      >
        The pains, ordered.
      </h3>
      <ol className="space-y-3 list-none">
        {[
          "Burned credits on dead-weight providers. The waterfall in §I produced 34 billed lookups for 5 valid emails — 15% efficiency.",
          "No data to defend provider choices when finance asks why the bill is what it is.",
          "Manual waterfall maintenance — provider quality drifts; Ops finds out from anecdotes, not signal.",
          "Provider sprawl. 75+ marketplace options. New customers don't know what to enable; existing customers settled into defaults years ago.",
          "One waterfall, all segments. Biotech and fintech run the same cascade despite dramatically different provider performance per segment.",
        ].map((p, i) => (
          <li key={i} className="grid grid-cols-[36px_1fr] gap-3">
            <div
              className="display text-[20px] italic text-accent leading-none pt-1"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0" }}
            >
              {["i.", "ii.", "iii.", "iv.", "v."][i]}
            </div>
            <div className="text-[17px] md:text-[18px] leading-[1.65]">
              {p.split(/§I/).map((seg, idx, arr) => (
                <span key={idx}>
                  {seg}
                  {idx < arr.length - 1 && <span className="mono">§I</span>}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <h3
        className="display text-[22px] md:text-[26px] italic mt-16 mb-4"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0" }}
      >
        Why Clay should care.
      </h3>
      <p className="text-[18px] md:text-[19px] leading-[1.65] mb-6">
        The retention argument is strongest.{" "}
        <em>&ldquo;Clay saved us 30% on enrichment credits&rdquo;</em>{" "}
        is a renewal-securing line. It addresses the credit-cost
        narrative Clay&apos;s own March pricing memo names openly.
        Differentiation follows: no other orchestrator has
        cross-customer marketplace data at this scale, and it
        compounds with every enrichment run.
      </p>
      <p className="text-[18px] md:text-[19px] leading-[1.65]">
        The subtle revenue risk is real. Helping customers spend less
        per row could shrink per-customer credit revenue. The honest
        counter: marketplace intelligence is the kind of feature that
        moves a customer from using Clay for one workflow to trusting
        it across their entire GTM stack. The lifetime-value gain from
        that bucket transition materially exceeds the per-row credit
        savings. Power users don&apos;t churn at credit prices. Casual
        users do.
      </p>

      <h3
        className="display text-[22px] md:text-[26px] italic mt-16 mb-4"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0" }}
      >
        What could go wrong.
      </h3>
      <dl className="space-y-6">
        {[
          {
            term: "Partner-ranking tension.",
            def: "Hunter, Findymail, Apollo and the rest won't love being publicly ranked. Commercial relationships need careful handling — providers should see their own performance privately before any of it is user-facing.",
          },
          {
            term: "Privacy and federated learning.",
            def: "Cross-customer aggregation needs anonymization and a TOS review. Some customers will object to their outcomes informing others' recommendations.",
          },
          {
            term: "Cold start.",
            def: "Per-account recommendations need critical mass before they're meaningful. The fix is the standard collaborative-filtering pattern: seed with Clay's anonymized cross-customer aggregate, then personalize as per-account volume grows. Solved territory, not novel research.",
          },
          {
            term: "Statistical significance.",
            def: "Long-tail segments may never get enough signal — Series C+ logistics in EMEA, e.g. A confidence-threshold mechanic must hold back recommendations until n is meaningful.",
          },
          {
            term: "Provider arbitrage.",
            def: "If everyone routes optimally, the optimal providers gain pricing power. The marketplace's job is to keep that competition healthy, not to declare permanent winners.",
          },
        ].map((r, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6">
            <dt
              className="display text-[18px] md:text-[19px] italic text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0" }}
            >
              {r.term}
            </dt>
            <dd className="text-[16px] md:text-[17px] leading-[1.65] text-muted-foreground">
              {r.def}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
