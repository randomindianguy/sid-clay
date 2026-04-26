type Result = "won" | "missed" | "skipped";

type Row = {
  person: string;
  results: Result[];
};

const providers = [
  "LeadMagic",
  "Findymail",
  "Prospeo",
  "DropContact",
  "Hunter",
  "Datagma",
  "Icypeas",
  "SMARTe",
];

const rows: Row[] = [
  {
    person: "Daley Ervin",
    results: ["missed", "missed", "missed", "missed", "missed", "missed", "missed", "missed"],
  },
  {
    person: "Shashwat M.",
    results: ["missed", "missed", "missed", "missed", "missed", "missed", "missed", "missed"],
  },
  {
    person: "Hrach Simonian",
    results: ["missed", "missed", "missed", "missed", "missed", "missed", "missed", "missed"],
  },
  {
    person: "Pete Martin",
    results: ["missed", "won", "skipped", "skipped", "skipped", "skipped", "skipped", "skipped"],
  },
  {
    person: "Yuri Choi",
    results: ["missed", "won", "skipped", "skipped", "skipped", "skipped", "skipped", "skipped"],
  },
  {
    person: "Sheel Patel",
    results: ["missed", "won", "skipped", "skipped", "skipped", "skipped", "skipped", "skipped"],
  },
  {
    person: "Jerin Mathew",
    results: ["missed", "won", "skipped", "skipped", "skipped", "skipped", "skipped", "skipped"],
  },
  {
    person: "David Ulloa",
    results: ["missed", "won", "skipped", "skipped", "skipped", "skipped", "skipped", "skipped"],
  },
];

const cell: Record<
  Result,
  { glyph: string; bg: string; fg: string; label: string }
> = {
  won: { glyph: "✓", bg: "#DCFCE7", fg: "#15803D", label: "valid email" },
  missed: { glyph: "✕", bg: "#FEE2E2", fg: "#B91C1C", label: "no valid email" },
  skipped: {
    glyph: "—",
    bg: "#F4F4F5",
    fg: "#A1A1AA",
    label: "cascade short-circuit",
  },
};

export default function WaterfallExhibit() {
  const wins = providers.map(
    (_, col) => rows.filter((r) => r.results[col] === "won").length
  );

  // Cost math: total non-skipped calls (the ones Clay actually paid for)
  const billedCalls = rows.reduce(
    (acc, r) => acc + r.results.filter((x) => x !== "skipped").length,
    0
  );
  const successful = rows.filter((r) => r.results.includes("won")).length;
  const efficiency = Math.round((successful / billedCalls) * 100);

  return (
    <div
      className="border border-ink rounded-sm overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div
        className="px-4 py-2 border-b text-[11px] flex items-baseline justify-between"
        style={{
          borderColor: "#E4E4E7",
          color: "#52525B",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <span>
          <span className="mono">find_people</span> &middot; doorstep.ai &middot;
          8/8 rows
        </span>
        <span className="text-[10px] uppercase tracking-wider text-zinc-400">
          email cascade · 8 providers
        </span>
      </div>

      <div className="overflow-x-auto">
        <table
          className="w-full border-collapse text-[12px] min-w-[640px]"
          style={{
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
            color: "#18181B",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#FAFAFA", color: "#71717A" }}>
              <th
                className="text-left py-2 px-3 text-[10px] uppercase tracking-wider font-medium"
                style={{ width: "120px" }}
              >
                Person
              </th>
              {providers.map((p, i) => (
                <th
                  key={p}
                  className="text-center py-2 px-1 text-[9px] uppercase tracking-wider font-medium"
                >
                  <div
                    className="truncate"
                    style={{ maxWidth: "60px", margin: "0 auto" }}
                  >
                    {p}
                  </div>
                  <div className="text-[8px] tracking-normal normal-case text-zinc-400 mt-0.5">
                    {i + 1}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.person}
                style={{ borderTop: "1px solid #F4F4F5", color: "#52525B" }}
              >
                <td className="py-1.5 px-3 truncate" style={{ maxWidth: "120px" }}>
                  {row.person}
                </td>
                {row.results.map((r, ci) => {
                  const c = cell[r];
                  return (
                    <td key={ci} className="py-1.5 px-1 text-center">
                      <span
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold"
                        style={{ backgroundColor: c.bg, color: c.fg }}
                        title={c.label}
                      >
                        {c.glyph}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr
              style={{
                borderTop: "2px solid #E4E4E7",
                backgroundColor: "#FAFAFA",
                color: "#52525B",
              }}
            >
              <td className="py-2 px-3 text-[10px] uppercase tracking-wider font-medium">
                wins
              </td>
              {wins.map((w, i) => (
                <td
                  key={i}
                  className="py-2 px-1 text-center text-[11px] font-medium"
                  style={{ color: w > 0 ? "#15803D" : "#A1A1AA" }}
                >
                  {w}/8
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>

      <div
        className="px-4 py-3 border-t text-[12px] leading-snug"
        style={{
          borderColor: "#E4E4E7",
          color: "#52525B",
          backgroundColor: "#FFFBEB",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <span className="font-medium" style={{ color: "#92400E" }}>
          Findymail at position 2 wins everything that wins.
        </span>{" "}
        LeadMagic at position 1 fails all 8. Positions 3&ndash;8 contribute
        zero. {billedCalls} billed lookups returned {successful} valid
        emails &mdash; <span className="mono">{efficiency}%</span>{" "}
        efficiency. The next <span className="mono text-[11px]">.ai</span>{" "}
        domain runs the same cascade.
      </div>
    </div>
  );
}
