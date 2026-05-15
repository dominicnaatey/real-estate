import { agents } from "../../../lib/data/Agents";
import { AgentsHeader } from "../../../components/admin/agents/AgentsHeader";
import { AgentsMetrics } from "../../../components/admin/agents/AgentsMetrics";
import { AgentsTable } from "../../../components/admin/agents/AgentsTable";
import type { AgentMetric } from "../../../components/admin/agents/types";

export default function AdminAgentsPage() {
  const metrics: AgentMetric[] = [
    { title: "Total Agents", value: 42 },
    { title: "Active Listings", value: 156 },
    { title: "Q3 Sales Volume", value: "$124.5M" },
    { title: "Top Performer", value: "E. Sterling" },
  ];

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto space-y-8">
      <AgentsHeader />
      <AgentsMetrics metrics={metrics} />
      <AgentsTable agents={agents} />
    </div>
  );
}
