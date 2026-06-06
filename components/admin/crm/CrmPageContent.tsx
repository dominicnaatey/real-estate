import Link from "next/link";
import { CrmHeader } from "./CrmHeader";
import { CrmLeadsTable } from "./CrmLeadsTable";
import { CrmMetrics, type CrmMetric } from "./CrmMetrics";
import { leads } from "../../../lib/data/Leads";

const metrics: CrmMetric[] = [
  {
    title: "Total Leads",
    value: "1,248",
    meta: (
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">↑</span>
        <span>12% this month</span>
      </div>
    ),
  },
  {
    title: "Active Negotiations",
    value: "42",
    meta: (
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">↑</span>
        <span>5% this month</span>
      </div>
    ),
  },
  {
    title: "Closed Won (YTD)",
    value: "$14.2M",
    meta: <span className="text-[#3e4944]">Across 8 properties</span>,
    metaClassName: "text-[#3e4944]",
  },
  {
    title: "Pipeline Health",
    value: "Strong",
    metaClassName: "text-[#008060]",
    footer: (
      <div className="w-full bg-[#d6dbd7] h-1.5 rounded-full overflow-hidden">
        <div className="bg-[#008060] h-full w-[85%]" />
      </div>
    ),
  },
];

export function CrmPageContent() {
  return (
    <>
      <CrmHeader
        title="CRM Pipeline"
        subtitle="Manage and track your high-value leads across all properties."
      />
      <CrmMetrics metrics={metrics} />
      <CrmLeadsTable rows={leads} summaryLabel={`Showing 1 to ${leads.length} of 1,248 entries`} />
    </>
  );
}
