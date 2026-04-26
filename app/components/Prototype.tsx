"use client";

import { useState } from "react";
import BuilderView from "./prototype/BuilderView";
import DashboardView from "./prototype/DashboardView";

type TabKey = "dashboard" | "builder";

const tabs: { key: TabKey; label: string; sub: string }[] = [
  {
    key: "dashboard",
    label: "Marketplace intelligence",
    sub: "what Ops sees",
  },
  {
    key: "builder",
    label: "Builder view",
    sub: "what gets captured",
  },
];

const figureCaptions: Record<TabKey, string> = {
  dashboard:
    "A new tab inside Functions — additive, not overriding existing Function authoring. Provider performance by segment, prompt-archetype comparisons, applied-vs-dismissed timeline. Every recommendation requires Ops approval; nothing self-applies. The first recommendation here ('saves ~16 credits per row on .ai Series A–B') is what marketplace intelligence would output running on the waterfall in §I.",
  builder:
    "The substrate beneath the dashboard. Every row in every Clay table carries a reasoning trail at the cell level: which Claygent prompt ran, which sources answered, which subsystem (Claygent, Marketplace, Native) contributed. Click any row to expand its trail. The default Clay table view is unchanged; this surface is opt-in click-to-expand. The cell-level data is what the dashboard above joins across.",
};

export default function Prototype() {
  const [active, setActive] = useState<TabKey>("dashboard");
  const figIndex = tabs.findIndex((t) => t.key === active) + 1;

  return (
    <section
      id="prototype"
      className="px-6 md:px-10 py-24 max-w-[760px] mx-auto w-full"
    >
      <div className="asterism" />

      <div className="mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        &sect; II &middot; The prototype
      </div>

      <h2
        className="display text-[36px] md:text-[52px] leading-[0.98] tracking-[-0.015em] mb-10 font-medium"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
      >
        Two views of the same architecture.
      </h2>

      <p className="dropcap text-[19px] md:text-[21px] leading-[1.65] mb-12">
        The Dashboard is where the intelligence shows up &mdash; Ops
        sees recommendations joined from cell-level data across thousands
        of customer tables. The Builder beneath shows what gets captured
        at each cell to make the join possible. The first recommendation
        in the Dashboard (<em>&ldquo;saves ~16 credits per row on .ai
        Series A&ndash;B accounts&rdquo;</em>) is what marketplace
        intelligence would have produced running on the waterfall in
        §I. Read top-to-bottom.
      </p>

      <div className="flex flex-col sm:flex-row gap-0 mb-0 border-t border-b border-ink">
        {tabs.map((t, i) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`flex-1 text-left px-5 py-5 transition-colors ${
              i < tabs.length - 1 ? "sm:border-r border-ink" : ""
            }`}
            style={{
              backgroundColor:
                active === t.key ? "var(--ink)" : "transparent",
              color: active === t.key ? "var(--paper)" : "var(--ink)",
            }}
          >
            <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-70 mb-1">
              {t.sub}
            </div>
            <div
              className="display text-[20px] italic"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0",
              }}
            >
              {t.label}
            </div>
          </button>
        ))}
      </div>

      <figure
        className="border border-ink border-t-0"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="overflow-x-auto">
          {active === "dashboard" ? <DashboardView /> : <BuilderView />}
        </div>
      </figure>

      <figcaption className="mt-4 mono text-[12px] leading-[1.5] text-muted-foreground italic max-w-[58ch]">
        <span className="uppercase tracking-[0.2em] not-italic">
          Fig. {figIndex} &middot; {tabs.find((t) => t.key === active)?.label}
        </span>
        <br />
        {figureCaptions[active]}
      </figcaption>
    </section>
  );
}
