import { AgentsHeader } from "../../../components/admin/agents/AgentsHeader";
import { AgentsMetrics } from "../../../components/admin/agents/AgentsMetrics";
import { AgentsTable } from "../../../components/admin/agents/AgentsTable";
import type { AgentMetric, AgentRow } from "../../../components/admin/agents/types";

export default function AdminAgentsPage() {
  const agents: AgentRow[] = [
    {
      name: "Eleanor Sterling",
      role: "Senior Partner",
      email: "e.sterling@estatepro.com",
      phone: "+1 (555) 123-4567",
      activeListings: 14,
      salesYtd: "$42.5M",
      status: "Active",
      avatar: {
        kind: "image",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByRVa1npTdvh4i7v5__DHyn2mk3NkK66p4tZkq21bIbrb-F_60kg0YWBQIyPgX0le4BUO5FRCRaJecOX8mBUQ4xDQVpgqvbHRrU-LcVjFS2T72ZWAnmB8oGWJYFztir6a4M4obbAe9z2SP586v4I9GE3LEFYqS1X34jH7PUge1gb5kBUSwvkHWKnQjHojulD3IoKguQGZ5nL9KqmunkgyHnh5ZjHbNPiOVxlk6gbcKaBtpFMdSYtjGKK2vjj39BvC3ecq30qtIWHdz",
      },
    },
    {
      name: "Marcus Vance",
      role: "Director of Sales",
      email: "m.vance@estatepro.com",
      phone: "+1 (555) 987-6543",
      activeListings: 8,
      salesYtd: "$28.1M",
      status: "Active",
      avatar: {
        kind: "image",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvP0bSA4IvsDip9IwYx9_wvJGlktDgUG6Y5nCi31epJZgJxTdsIsyZr8YPXSOPPZVIHkGlU4651SCUqPSf2QF8NcX99sLa90pOxOledq_dsnioUTPM6bPhHIa2LzwLuGuMocZCTEIOB7ZAWU4v3A7ocaWacWknn7BQIIRXNGctDFbBhkTOQRE55SApFHdGGFrxXojld4r5FxT5PMp4I94ELamKwgIx1DAJ-1yzi7LkSsSpuUGrOb48APNPyzvwW1f312RIdTgGTODW",
      },
    },
    {
      name: "Chloe Larson",
      role: "Luxury Specialist",
      email: "c.larson@estatepro.com",
      phone: "+1 (555) 234-5678",
      activeListings: 5,
      salesYtd: "$15.2M",
      status: "On Leave",
    },
  ];

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
