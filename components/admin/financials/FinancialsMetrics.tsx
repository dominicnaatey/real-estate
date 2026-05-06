import type { FinancialMetric } from "./types";

function MetricCard({
  title,
  value,
  meta,
  metaTone = "neutral",
}: FinancialMetric) {
  const metaClassName =
    metaTone === "success"
      ? "text-[#008060]"
      : metaTone === "critical"
        ? "text-[#DC2626]"
        : "text-[#3e4944]";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
      <h3 className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider mb-2">
        {title}
      </h3>
      <div className="text-[28px] leading-none tracking-tight font-bold text-[#181d1a]">
        {value}
      </div>
      <div className={`mt-2 text-sm ${metaClassName}`}>{meta}</div>
    </div>
  );
}

export function FinancialsMetrics({ metrics }: { metrics: FinancialMetric[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <MetricCard
          key={m.title}
          title={m.title}
          value={m.value}
          meta={m.meta}
          metaTone={m.metaTone}
        />
      ))}
    </div>
  );
}
