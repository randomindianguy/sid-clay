export default function Hypothesis() {
  return (
    <section
      id="hypothesis"
      className="px-6 md:px-10 py-24 max-w-[760px] mx-auto w-full"
    >
      <div className="asterism" />

      <div className="mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        &sect; III &middot; The hypothesis
      </div>

      <h2
        className="display text-[36px] md:text-[52px] leading-[0.98] tracking-[-0.015em] mb-10 font-medium"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
      >
        Marketplace intelligence. Provider performance by segment.
      </h2>

      <p className="dropcap text-[19px] md:text-[21px] leading-[1.65] mb-8">
        Capture the disposition signal Clay&apos;s pipes already produce.
        Aggregate provider win rates by industry, geography, account
        stage. Aggregate Claygent prompt-archetype performance by
        Function. Surface both as recommendations to Ops &mdash; not
        auto-applied changes. <em>&ldquo;Findymail won 73% on Series A&ndash;B
        .ai domains last quarter; Hunter won 31%. Promote Findymail to
        position 1 in your waterfall?&rdquo;</em> Ops decides. Clay
        provides intelligence Ops didn&apos;t have before.
      </p>

      <p className="text-[19px] md:text-[21px] leading-[1.65] mb-8">
        This is a competitive asset no one else can replicate.
        Seventy-five-plus providers in the marketplace, billions of
        requests across every domain pattern and industry, and the
        implicit quality signal of which provider returned what for
        whom. No competitor has Clay&apos;s query volume; no competitor
        can replicate usage-informed routing without first becoming
        Clay. The advantage compounds with every enrichment run.
      </p>

      <p className="text-[19px] md:text-[21px] leading-[1.65] mb-12 pl-6 border-l-2 border-accent">
        And no, this is not a competing surface to Sculptor. Sculptor
        today is stateless &mdash; every &ldquo;why is this row here?&rdquo;
        regenerates fresh, with no memory of past outcomes. Marketplace
        intelligence is the substrate. Sculptor stays the consumption
        surface, finally with something to remember.
      </p>

      <figure
        className="border border-ink my-16 relative"
        style={{ backgroundColor: "#ebe4d6" }}
      >
        <div className="absolute top-3 left-4 mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground z-10">
          Fig. 3 &middot; the loop
        </div>

        <div className="px-4 md:px-10 py-10 md:py-14">
          <svg
            viewBox="0 0 600 400"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker
                id="arrow-ink"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M0,0 L10,5 L0,10 Z" fill="#1a1611" />
              </marker>
              <marker
                id="arrow-accent"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M0,0 L10,5 L0,10 Z" fill="#a8332a" />
              </marker>
            </defs>

            {/* Functions — top-left */}
            <rect
              x="50"
              y="50"
              width="180"
              height="70"
              fill="#f4efe7"
              stroke="#1a1611"
              strokeWidth="1.5"
            />
            <text
              x="140"
              y="92"
              textAnchor="middle"
              fontFamily="var(--font-fraunces), serif"
              fontStyle="italic"
              fontSize="24"
              fill="#1a1611"
            >
              Functions
            </text>

            {/* Outputs — top-right */}
            <rect
              x="370"
              y="50"
              width="180"
              height="70"
              fill="#f4efe7"
              stroke="#1a1611"
              strokeWidth="1.5"
            />
            <text
              x="460"
              y="92"
              textAnchor="middle"
              fontFamily="var(--font-fraunces), serif"
              fontStyle="italic"
              fontSize="24"
              fill="#1a1611"
            >
              Outputs
            </text>

            {/* CRM — bottom-right */}
            <rect
              x="370"
              y="280"
              width="180"
              height="70"
              fill="#f4efe7"
              stroke="#1a1611"
              strokeWidth="1.5"
            />
            <text
              x="460"
              y="322"
              textAnchor="middle"
              fontFamily="var(--font-fraunces), serif"
              fontStyle="italic"
              fontSize="24"
              fill="#1a1611"
            >
              CRM
            </text>

            {/* Marketplace — bottom-left (the layer that learns) */}
            <rect
              x="50"
              y="280"
              width="180"
              height="70"
              fill="#1a1611"
              stroke="#1a1611"
              strokeWidth="1.5"
            />
            <text
              x="140"
              y="322"
              textAnchor="middle"
              fontFamily="var(--font-fraunces), serif"
              fontStyle="italic"
              fontSize="24"
              fill="#f4efe7"
            >
              Marketplace
            </text>

            {/* Top arrow: Functions → Outputs (solid) */}
            <line
              x1="240"
              y1="85"
              x2="362"
              y2="85"
              stroke="#1a1611"
              strokeWidth="2"
              markerEnd="url(#arrow-ink)"
            />

            {/* Right arrow: Outputs → CRM (solid) */}
            <line
              x1="460"
              y1="130"
              x2="460"
              y2="272"
              stroke="#1a1611"
              strokeWidth="2"
              markerEnd="url(#arrow-ink)"
            />

            {/* Bottom arrow: CRM → Marketplace (DASHED, accent — missing) */}
            <line
              x1="362"
              y1="315"
              x2="240"
              y2="315"
              stroke="#a8332a"
              strokeWidth="2.5"
              strokeDasharray="7,5"
              markerEnd="url(#arrow-accent)"
            />

            {/* Left arrow: Marketplace → Functions (DASHED, accent — missing) */}
            <line
              x1="140"
              y1="272"
              x2="140"
              y2="130"
              stroke="#a8332a"
              strokeWidth="2.5"
              strokeDasharray="7,5"
              markerEnd="url(#arrow-accent)"
            />

            {/* Center annotation */}
            <text
              x="300"
              y="195"
              textAnchor="middle"
              fontFamily="var(--font-jetbrains), monospace"
              fontSize="9"
              fill="#5b5246"
              letterSpacing="3"
            >
              CLOSE THE LOOP
            </text>
            <text
              x="300"
              y="218"
              textAnchor="middle"
              fontFamily="var(--font-fraunces), serif"
              fontStyle="italic"
              fontSize="14"
              fill="#5b5246"
            >
              each cycle compounds the next
            </text>
          </svg>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="flex items-center gap-2">
              <svg width="36" height="6" viewBox="0 0 36 6">
                <line x1="0" y1="3" x2="36" y2="3" stroke="#1a1611" strokeWidth="2" />
              </svg>
              exists today
            </span>
            <span className="flex items-center gap-2" style={{ color: "#a8332a" }}>
              <svg width="36" height="6" viewBox="0 0 36 6">
                <line x1="0" y1="3" x2="36" y2="3" stroke="#a8332a" strokeWidth="2.5" strokeDasharray="7,5" />
              </svg>
              the missing arcs
            </span>
          </div>
        </div>
      </figure>

      <p className="text-[16px] md:text-[17px] leading-[1.65] text-muted-foreground italic mb-12 max-w-[58ch]">
        Functions produce Outputs. Outputs flow into CRM as opportunities,
        replies, closed-won. Today the cycle stops there. Closing the
        dashed arc turns the marketplace into a node that accumulates &mdash;
        signal fills it as customers run Functions, recommendations refine
        routing, refined routing produces cleaner outputs, cleaner outputs
        become better disposition data. Each cycle makes the next cycle
        better. The dynamic that eventually counterweights it &mdash; what
        happens when everyone routes to the same provider &mdash; is named
        in §III.5.
      </p>

      <div className="mt-16">
        <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
          How it actually ships
        </div>

        <p className="text-[16px] md:text-[17px] leading-[1.65] mb-10 italic text-muted-foreground border-l-2 border-ink pl-5">
          One governing principle runs through everything below: Ops
          stays in control. The system surfaces signal. Ops decides
          whether to apply it. Nothing in this proposal silently rewrites
          a Function someone built.
        </p>

        <ol className="space-y-8 list-none">
          <li className="grid grid-cols-[40px_1fr] gap-5">
            <div
              className="display text-[28px] italic text-accent leading-none pt-1"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0" }}
            >
              i.
            </div>
            <div>
              <div
                className="display text-[20px] md:text-[22px] mb-2 font-medium"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                Reasoning capture is a schema change, not a UI change.
              </div>
              <p className="text-[16px] md:text-[17px] leading-[1.65] text-muted-foreground">
                Claygent already computes the reasoning trail every run.
                Clay&apos;s University documentation confirms this:{" "}
                <em>
                  &ldquo;users can optionally add confidence or reasoning
                  columns&rdquo;
                </em>{" "}
                (Clay U) &mdash; meaning the trail is already computed;
                today it&apos;s discarded the moment the cell renders
                unless the user pays for a second column to retain it.
                Capturing it once means retaining what&apos;s already
                in memory &mdash; no new fetches, no new credits. The
                default table view is unchanged. Reasoning surfaces
                only when explicitly requested: an opt-in inline panel,
                MCP response payloads, or CRM exports.
              </p>
            </div>
          </li>

          <li className="grid grid-cols-[40px_1fr] gap-5">
            <div
              className="display text-[28px] italic text-accent leading-none pt-1"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0" }}
            >
              ii.
            </div>
            <div>
              <div
                className="display text-[20px] md:text-[22px] mb-2 font-medium"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                Disposition comes from CRM read-back, not rep input.
              </div>
              <p className="text-[16px] md:text-[17px] leading-[1.65] text-muted-foreground">
                Clay&apos;s Scheduled Sources already poll Salesforce and
                HubSpot &mdash;{" "}
                <em>
                  &ldquo;existing rows will be updated with any new
                  information&rdquo;
                </em>{" "}
                (Clay U). Toggle that on, re-run a SOQL query against
                Opportunity stage, and stage transitions surface in the
                table. The infrastructure exists. The wiring doesn&apos;t.
                Sequencer-side signals (Outreach reply rates, Salesloft
                meetings booked) aren&apos;t readable today &mdash; that
                gap is itself second-order evidence the loop has been
                outbound-only, and it&apos;s v2 territory.
              </p>
            </div>
          </li>

          <li className="grid grid-cols-[40px_1fr] gap-5">
            <div
              className="display text-[28px] italic text-accent leading-none pt-1"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0" }}
            >
              iii.
            </div>
            <div>
              <div
                className="display text-[20px] md:text-[22px] mb-2 font-medium"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                Refinement is metadata, not re-enrichment.
              </div>
              <p className="text-[16px] md:text-[17px] leading-[1.65] text-muted-foreground">
                Promoting Findymail to position 1 in a waterfall is a
                metadata change, applied lazily at the next run.
                Existing rows are not re-enriched. Following from
                theses i and ii, outcome capture itself is free
                &mdash; Claygent reasoning is already computed (i);
                CRM read-back uses primitives Clay already ships (ii).
                Zero new credit cost. Zero new infrastructure.
              </p>
            </div>
          </li>

          <li className="grid grid-cols-[40px_1fr] gap-5">
            <div
              className="display text-[28px] italic text-accent leading-none pt-1"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0" }}
            >
              iv.
            </div>
            <div>
              <div
                className="display text-[20px] md:text-[22px] mb-2 font-medium"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                New surfaces are additive, not overriding.
              </div>
              <p className="text-[16px] md:text-[17px] leading-[1.65] text-muted-foreground">
                Marketplace intelligence renders as a new tab inside the
                Functions surface, not a redesign of Function authoring.
                The reasoning panel is opt-in click-to-expand. MCP gets
                richer payloads &mdash; same shape, more metadata.
                Nothing currently in Clay gets touched.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
