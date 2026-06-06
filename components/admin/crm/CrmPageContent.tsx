import { CrmHeader } from "./CrmHeader";
import { CrmLeadsTable } from "./CrmLeadsTable";
import { CrmMetrics, type CrmMetric } from "./CrmMetrics";
import type { LeadRow } from "./types";

const rows: LeadRow[] = [
  {
    name: "Eleanor Vance",
    email: "eleanor.v@example.com",
    interest: "Penthouse A, The Summit",
    budget: "$4.2M - $4.5M",
    agent: "Sarah Jenkins",
    lastInteraction: "Today, 10:30 AM",
    status: "Offer Pending",
  },
  {
    name: "Marcus Thorne",
    email: "m.thorne@capital.co",
    interest: "Coastal Villa, Malibu",
    budget: "$8.0M+",
    agent: "Michael Chen",
    lastInteraction: "Yesterday, 4:15 PM",
    status: "Viewing Scheduled",
  },
  {
    name: "Julianne Moore",
    email: "julianne@studio-m.com",
    interest: "Loft District, Soho",
    budget: "$2.5M - $3.0M",
    agent: "David Ross",
    lastInteraction: "Oct 12, 2023",
    status: "Contacted",
    avatar: {
      kind: "image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKCIHbuvZS9ikstT-DWtbAHouE6lUhu6zb1D-2teSajvjv4grVKADxjEcwSIDRfKPjyYXIsobewNqIVb15t3RP3q4n57gEXCi7dfl32MiDtFZjgju0U3js5F0vqRBup3pRtHzB39mIDsa6RGZB9iXvuxJ3lwm-Ou50lh2rFFi_c0fdXdIoDPybQol-iO-Cnz59mSvkVKJttT2bx6CwpQQHvVH3IP3D8A9xUQRXWr_hy5neZWkOSgP7bU0JmHJ9n64mtoB6FMgqzUqM",
    },
  },
  {
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
    interest: "Tech Hub Campus Area",
    budget: "$1.2M - $1.8M",
    agent: "Sarah Jenkins",
    lastInteraction: "Just now",
    status: "New Lead",
  },
];

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
      <CrmLeadsTable rows={rows} summaryLabel="Showing 1 to 4 of 1,248 entries" />
    </>
  );
}
