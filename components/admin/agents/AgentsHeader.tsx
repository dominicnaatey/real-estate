import Link from "next/link";
import { Plus } from "lucide-react";

export function AgentsHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] mb-1">
          Agents
        </h2>
        <p className="text-sm text-[#3e4944]">
          Manage your luxury real estate roster and performance.
        </p>
      </div>
      <Link
        href="/admin/agents/new"
        className="inline-flex items-center justify-center px-4 py-2 rounded bg-[#008060] text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-[#00654b] transition-colors"
      >
        <Plus className="w-4.5 h-4.5 mr-2" />
        New Agent
      </Link>
    </div>
  );
}

