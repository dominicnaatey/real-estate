import type { AgentMetric } from "./types";

function MetricCard({ title, value }: AgentMetric) {
  return (
    <div className="bg-white rounded border border-gray-200 p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
      <h3 className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider mb-2">
        {title}
      </h3>
      <div className="text-[28px] leading-none tracking-tight font-bold text-[#181d1a]">
        {value}
      </div>
    </div>
  );
}

export function AgentsMetrics({ metrics }: { metrics: AgentMetric[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <MetricCard key={m.title} title={m.title} value={m.value} />
      ))}
    </div>
  );
}

