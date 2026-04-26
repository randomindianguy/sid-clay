export default function Drafts() {
  return (
    <section
      id="drafts"
      className="px-6 md:px-10 py-24 max-w-[760px] mx-auto w-full"
    >
      <div className="asterism" />

      <div className="mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        &sect; I.5 &middot; Drafts that died
      </div>

      <h2
        className="display text-[32px] md:text-[44px] leading-[1.0] tracking-[-0.015em] mb-8 font-medium"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
      >
        The first version of this thesis was about MCP.
      </h2>

      <p className="text-[18px] md:text-[20px] leading-[1.65] mb-6 text-muted-foreground">
        It centered on a single phrase from the April 22 MCP launch
        post &mdash; <em>&ldquo;creating a tighter feedback loop between
        Ops and sales teams&rdquo;</em> &mdash; and read it as a
        promise Clay shipped in only one direction. The argument was
        clean. The artifact ran on the rhetoric of quoting Clay back to
        themselves.
      </p>

      <p className="text-[18px] md:text-[20px] leading-[1.65] mb-6 text-muted-foreground">
        It died for two reasons. The first: MCP and Functions sit closer
        to the rep distribution layer than to enrichment. The role this
        thesis is for owns Claygent, the marketplace, integrations, and
        tables. A brilliant pitch in another PM&apos;s territory is a
        polite forward, not an interview.
      </p>

      <p className="text-[18px] md:text-[20px] leading-[1.65] text-muted-foreground">
        The second: a single launch-post phrase is parry-able in ten
        seconds. The structural evidence &mdash; the waterfall above,
        Live mode as audit log, the negative-space audit &mdash; is
        durable. The linguistic teardown isn&apos;t. The enrichment-side
        version of this thesis is stronger because the evidence is in
        scope, the bet is in scope, and the strongest single piece of
        evidence is something only an Enrichment PM can act on.
      </p>
    </section>
  );
}
