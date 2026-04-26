"use client";

import { useState } from "react";
import { builderRows, type Row } from "./data";

const toneStyles: Record<
  string,
  { bg: string; text: string; dot: string }
> = {
  won: { bg: "#ECFDF5", text: "#047857", dot: "#10B981" },
  lost: { bg: "#FEF2F2", text: "#B91C1C", dot: "#EF4444" },
  pending: { bg: "#EFF6FF", text: "#1D4ED8", dot: "#3B82F6" },
  skipped: { bg: "#F4F4F5", text: "#52525B", dot: "#A1A1AA" },
};

const confidenceStyles: Record<
  string,
  { bg: string; text: string; label: string }
> = {
  high: { bg: "#ECFDF5", text: "#047857", label: "high confidence" },
  medium: { bg: "#FFFBEB", text: "#A16207", label: "medium confidence" },
  low: { bg: "#FEF2F2", text: "#B91C1C", label: "low confidence" },
};

export default function BuilderView() {
  const [openId, setOpenId] = useState<number | null>(1);

  const open = (id: number) =>
    setOpenId((current) => (current === id ? null : id));

  return (
    <div
      className="text-[13px] leading-tight"
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        color: "#18181B",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Breadcrumb / file bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b text-[12px]"
        style={{ borderColor: "#E4E4E7", color: "#71717A" }}
      >
        <span>📁 All Files</span>
        <span>›</span>
        <span>Untitled workbook</span>
        <span>›</span>
        <span style={{ color: "#18181B", fontWeight: 500 }}>
          Hiring signals · Q2
        </span>
      </div>

      {/* Toolbar */}
      <div
        className="flex items-center gap-3 px-4 py-2 border-b text-[12px]"
        style={{ borderColor: "#E4E4E7", color: "#52525B" }}
      >
        <span
          className="px-2 py-0.5 rounded"
          style={{ backgroundColor: "#F4F4F5" }}
        >
          ⟳ Auto-run
        </span>
        <span>Default view</span>
        <span>4/4 columns</span>
        <span>{builderRows.length}/{builderRows.length} rows</span>
        <div className="ml-auto flex items-center gap-2">
          <span
            className="px-2 py-0.5 rounded text-[11px]"
            style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}
          >
            ✦ Opt-in · click any row · default view unchanged
          </span>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr
            className="text-left"
            style={{
              backgroundColor: "#FAFAFA",
              borderBottom: "1px solid #E4E4E7",
              color: "#71717A",
            }}
          >
            <th className="py-2 px-3 font-medium text-[11px] uppercase tracking-wider w-[36px]">
              #
            </th>
            <th className="py-2 px-3 font-medium text-[11px] uppercase tracking-wider">
              Company
            </th>
            <th className="py-2 px-3 font-medium text-[11px] uppercase tracking-wider w-[100px]">
              Industry
            </th>
            <th className="py-2 px-3 font-medium text-[11px] uppercase tracking-wider">
              <span style={{ color: "#7C3AED" }}>✦ Claygent ·</span>{" "}
              Hiring signal this quarter
            </th>
          </tr>
        </thead>
        <tbody>
          {builderRows.map((row) => (
            <RowGroup
              key={row.id}
              row={row}
              isOpen={openId === row.id}
              onToggle={() => open(row.id)}
            />
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-4 py-2 border-t text-[11px]"
        style={{ borderColor: "#E4E4E7", color: "#71717A" }}
      >
        <span>{builderRows.length} rows · all enriched</span>
        <span style={{ color: "#7C3AED" }}>
          ✦ {builderRows.reduce((s, r) => s + r.reasoning.creditsThisRun, 0)} credits used ·
          reasoning included &middot; no second column needed
        </span>
      </div>
    </div>
  );
}

function RowGroup({
  row,
  isOpen,
  onToggle,
}: {
  row: Row;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const conf = confidenceStyles[row.reasoning.confidence];

  return (
    <>
      <tr
        className="cursor-pointer transition-colors"
        style={{
          borderBottom: "1px solid #F4F4F5",
          backgroundColor: isOpen ? "#FAF5FF" : "transparent",
        }}
        onMouseEnter={(e) => {
          if (!isOpen)
            (e.currentTarget as HTMLTableRowElement).style.backgroundColor =
              "#FAFAFA";
        }}
        onMouseLeave={(e) => {
          if (!isOpen)
            (e.currentTarget as HTMLTableRowElement).style.backgroundColor =
              "transparent";
        }}
        onClick={onToggle}
      >
        <td
          className="py-2.5 px-3 align-top text-[12px]"
          style={{ color: "#A1A1AA" }}
        >
          {row.id}
        </td>
        <td className="py-2.5 px-3 align-top">
          <div className="font-medium" style={{ color: "#18181B" }}>
            {row.company}
          </div>
          <div className="text-[11px]" style={{ color: "#A1A1AA" }}>
            {row.domain}
          </div>
        </td>
        <td
          className="py-2.5 px-3 align-top text-[12px]"
          style={{ color: "#52525B" }}
        >
          {row.industry}
        </td>
        <td className="py-2.5 px-3 align-top">
          <div className="flex items-start gap-2">
            <div className="flex-1">{row.signal}</div>
            <button
              type="button"
              className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-medium transition-transform"
              style={{
                backgroundColor: isOpen ? "#7C3AED" : "#EDE9FE",
                color: isOpen ? "#FFFFFF" : "#7C3AED",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
              aria-label="Toggle reasoning"
            >
              ⌄
            </button>
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-[10px]">
            <span
              className="px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: conf.bg,
                color: conf.text,
              }}
            >
              {conf.label}
            </span>
            <span style={{ color: "#A1A1AA" }}>
              fetched {row.reasoning.fetchedAt}
            </span>
          </div>
        </td>
      </tr>
      {isOpen && (
        <tr style={{ backgroundColor: "#FAF5FF" }}>
          <td colSpan={4} className="px-3 pb-4 pt-2">
            <div
              className="rounded-md p-4"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DDD6FE",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded"
                  style={{
                    backgroundColor: "#EDE9FE",
                    color: "#6D28D9",
                    fontWeight: 600,
                  }}
                >
                  ✦ Reasoning trail
                </span>
                <span className="text-[11px]" style={{ color: "#71717A" }}>
                  attached to cell · captured once at run time · zero
                  additional credits
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Prompt</Label>
                  <div
                    className="text-[12px] italic mt-1"
                    style={{ color: "#3F3F46" }}
                  >
                    &ldquo;{row.reasoning.prompt}&rdquo;
                  </div>
                </div>

                <div>
                  <Label>Sources used &middot; by subsystem</Label>
                  <ul className="mt-1 space-y-1">
                    {row.reasoning.sources.map((s, i) => (
                      <li key={i} className="text-[11px] flex items-baseline gap-2">
                        <span
                          className="shrink-0 px-1.5 py-0.5 rounded font-medium"
                          style={{
                            backgroundColor: subsystemBg(s.subsystem),
                            color: subsystemFg(s.subsystem),
                            fontSize: "9.5px",
                          }}
                        >
                          {s.subsystem}
                        </span>
                        <span className="truncate" style={{ color: "#3F3F46" }}>
                          {s.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Label>Reuse</Label>
                  <div className="text-[12px] mt-1" style={{ color: "#3F3F46" }}>
                    {row.reasoning.reuseCount}× across this account
                    <span style={{ color: "#A1A1AA" }}> ·</span> {row.reasoning.creditsThisRun}{" "}
                    credits this run
                  </div>
                  <div
                    className="text-[11px] mt-1 line-through"
                    style={{ color: "#A1A1AA" }}
                  >
                    today: {row.reasoning.creditsIfReasoningColumnAdded} credits
                    if reasoning column added
                  </div>
                </div>

                <div>
                  <Label>Downstream outcomes</Label>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {row.reasoning.outcomes.map((o, i) => {
                      const t = toneStyles[o.tone];
                      return (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px]"
                          style={{ backgroundColor: t.bg, color: t.text }}
                        >
                          <span
                            className="inline-block w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: t.dot }}
                          />
                          {o.count} {o.label.toLowerCase()}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div
                className="mt-4 pt-3 border-t flex items-center justify-between text-[11px]"
                style={{ borderColor: "#F4E8FE", color: "#71717A" }}
              >
                <span>
                  Tomorrow: this trail flows through MCP, exports, and
                  Function refinement.
                </span>
                <button
                  className="px-2 py-1 rounded"
                  style={{ backgroundColor: "#F4F4F5", color: "#52525B" }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  type="button"
                >
                  Hide
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-[10px] uppercase tracking-wider"
      style={{ color: "#A1A1AA", fontWeight: 600 }}
    >
      {children}
    </div>
  );
}

function subsystemBg(s: string) {
  if (s.startsWith("Claygent")) return "#EDE9FE";
  if (s.startsWith("Marketplace")) return "#DBEAFE";
  if (s.startsWith("Native")) return "#DCFCE7";
  if (s === "AI context") return "#FFE4E6";
  return "#F4F4F5";
}

function subsystemFg(s: string) {
  if (s.startsWith("Claygent")) return "#6D28D9";
  if (s.startsWith("Marketplace")) return "#1D4ED8";
  if (s.startsWith("Native")) return "#15803D";
  if (s === "AI context") return "#9F1239";
  return "#52525B";
}
