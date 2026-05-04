import Image from "next/image";
import { ChevronLeft, ChevronRight, MoreHorizontal, Plus } from "lucide-react";

type AgentStatus = "Active" | "On Leave";

type AgentRow = {
  name: string;
  role: string;
  email: string;
  phone: string;
  activeListings: number;
  salesYtd: string;
  status: AgentStatus;
  avatar?: { kind: "image"; src: string };
};

function StatusPill({ status }: { status: AgentStatus }) {
  const className =
    status === "Active"
      ? "bg-[rgba(0,128,96,0.10)] text-[#008060]"
      : "bg-[rgba(245,158,11,0.15)] text-[#996b00]";

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${className}`}>
      {status}
    </span>
  );
}

function AgentAvatar({ agent }: { agent: AgentRow }) {
  if (agent.avatar?.kind === "image") {
    return (
      <div className="relative h-10 w-10 rounded-full overflow-hidden border border-gray-200 shrink-0">
        <Image alt="" src={agent.avatar.src} fill className="object-cover" sizes="40px" referrerPolicy="no-referrer" />
      </div>
    );
  }

  const initials = agent.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((v) => v[0]?.toUpperCase())
    .join("");

  return (
    <div className="h-10 w-10 rounded-full border border-gray-200 bg-[#F0F5F0] flex items-center justify-center text-[#3e4944] text-sm font-semibold shrink-0">
      {initials || "A"}
    </div>
  );
}

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

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] mb-1">
            Agents
          </h2>
          <p className="text-sm text-[#3e4944]">
            Manage your luxury real estate roster and performance.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 rounded bg-[#008060] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#00654b] transition-colors"
        >
          <Plus className="w-[18px] h-[18px] mr-2" />
          New Agent
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded border border-gray-200 p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
          <h3 className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider mb-2">
            Total Agents
          </h3>
          <div className="text-[28px] leading-none tracking-tight font-bold text-[#181d1a]">42</div>
        </div>
        <div className="bg-white rounded border border-gray-200 p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
          <h3 className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider mb-2">
            Active Listings
          </h3>
          <div className="text-[28px] leading-none tracking-tight font-bold text-[#181d1a]">156</div>
        </div>
        <div className="bg-white rounded border border-gray-200 p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
          <h3 className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider mb-2">
            Q3 Sales Volume
          </h3>
          <div className="text-[28px] leading-none tracking-tight font-bold text-[#181d1a]">$124.5M</div>
        </div>
        <div className="bg-white rounded border border-gray-200 p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
          <h3 className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider mb-2">
            Top Performer
          </h3>
          <div className="text-[28px] leading-none tracking-tight font-bold text-[#181d1a]">E. Sterling</div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#F9FAFB]">
              <tr>
                <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                  Agent
                </th>
                <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                  Contact
                </th>
                <th className="px-6 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                  Active Listings
                </th>
                <th className="px-6 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                  Sales YTD
                </th>
                <th className="px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                  Status
                </th>
                <th className="px-6 py-3 text-right">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {agents.map((agent) => (
                <tr key={agent.email} className="hover:bg-[#F9FAFB] transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <AgentAvatar agent={agent} />
                      <div className="ml-4">
                        <div className="text-sm font-semibold text-[#181d1a]">{agent.name}</div>
                        <div className="text-xs text-[#3e4944]">{agent.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#181d1a]">{agent.email}</div>
                    <div className="text-sm text-[#3e4944]">{agent.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-[#181d1a]">
                    {agent.activeListings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold text-[#181d1a]">
                    {agent.salesYtd}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <StatusPill status={agent.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      type="button"
                      className="text-[#3e4944] hover:text-[#008060] transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                      aria-label="More actions"
                    >
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white px-4 py-3 border-t border-gray-200 flex items-center justify-between sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-[#3e4944]">
                Showing <span className="font-semibold text-[#181d1a]">1</span> to{" "}
                <span className="font-semibold text-[#181d1a]">3</span> of{" "}
                <span className="font-semibold text-[#181d1a]">42</span> agents
              </p>
            </div>
            <div>
              <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button
                  type="button"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-200 bg-white text-sm font-medium text-[#3e4944] hover:bg-[#F9FAFB]"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="z-10 bg-[#F9FAFB] border-gray-200 text-[#181d1a] relative inline-flex items-center px-4 py-2 border text-sm font-semibold"
                  aria-current="page"
                >
                  1
                </button>
                <button
                  type="button"
                  className="bg-white border-gray-200 text-[#3e4944] hover:bg-[#F9FAFB] relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  2
                </button>
                <button
                  type="button"
                  className="bg-white border-gray-200 text-[#3e4944] hover:bg-[#F9FAFB] relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  3
                </button>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-200 bg-white text-sm font-medium text-[#3e4944]">
                  ...
                </span>
                <button
                  type="button"
                  className="bg-white border-gray-200 text-[#3e4944] hover:bg-[#F9FAFB] relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  8
                </button>
                <button
                  type="button"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-200 bg-white text-sm font-medium text-[#3e4944] hover:bg-[#F9FAFB]"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
