"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import type { AgentRow, AgentStatus } from "./types";

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
      <div className="relative h-10 w-10 rounded-full overflow-hidden border-admin border-admin-border shrink-0">
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
    <div className="h-10 w-10 rounded-full border-admin border-admin-border bg-[#F0F5F0] flex items-center justify-center text-[#3e4944] text-sm font-semibold shrink-0">
      {initials || "A"}
    </div>
  );
}

export function AgentsTable({ agents }: { agents: AgentRow[] }) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const allSelected = selected.size === agents.length && agents.length > 0;

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(agents.map((a) => a.email)));
    }
  }

  function toggleOne(email: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(email)) {
        next.delete(email);
      } else {
        next.add(email);
      }
      return next;
    });
  }

  return (
    <div className="bg-white border-admin border-admin-border rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            {selected.size > 0 ? (
              <tr className="bg-[#F9FAFB] border-b-admin border-admin-border h-16">
                <th colSpan={6} className="p-4">
                  <div className="flex items-center gap-2">
                    <div onClick={(e) => e.stopPropagation()} className="flex items-center">
                      <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Deselect all" />
                    </div>
                    <span className="text-sm font-semibold text-[#181d1a] ml-1">{selected.size} selected</span>
                    <div className="flex items-center gap-2 ml-4">
                      <button type="button" className="px-3 py-1 text-xs font-medium border border-[#ECECEC] rounded bg-white text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                        Bulk Edit
                      </button>
                      <button type="button" className="px-3 py-1 text-xs font-medium border border-[#ECECEC] rounded bg-white text-[#ba1a1a] hover:bg-red-50 transition-colors">
                        Remove
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            ) : (
              <tr className="bg-[#F9FAFB] border-b-admin border-admin-border h-16">
                <th className="p-4 w-10" onClick={(e) => e.stopPropagation()}>
                  <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Select all" />
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-52">
                  Agent
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-48">
                  Contact
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-32 text-right">
                  Active Listings
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-32 text-right">
                  Sales YTD
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-28 text-center">
                  Status
                </th>
              </tr>
            )}
          </thead>
          <tbody className="text-sm divide-y divide-gray-200">
            {agents.map((agent) => {
              const isSelected = selected.has(agent.email);
              return (
                <tr
                  key={agent.email}
                  onClick={() => router.push(`/admin/agents/${agent.id}/edit`)}
                  className={`transition-colors cursor-pointer group ${
                    isSelected ? "bg-[#F0F5F0]" : "hover:bg-[#F9FAFB]"
                  }`}
                >
                  <td className="p-4 w-10" onClick={(e) => e.stopPropagation()}>
                    <Checkbox checked={isSelected} onCheckedChange={() => toggleOne(agent.email)} />
                  </td>
                  <td className="p-4 w-52">
                    <div className="flex items-center">
                      <AgentAvatar agent={agent} />
                      <div className="ml-4">
                        <div className="text-sm font-semibold text-[#181d1a] group-hover:text-[#008060] transition-colors">{agent.name}</div>
                        <div className="text-xs text-[#3e4944]">{agent.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 w-48">
                    <div className="text-sm text-[#181d1a]">{agent.email}</div>
                    <div className="text-sm text-[#3e4944]">{agent.phone}</div>
                  </td>
                  <td className="p-4 w-32 text-right text-sm text-[#181d1a]">
                    {agent.activeListings}
                  </td>
                  <td className="p-4 w-32 text-right text-sm font-semibold text-[#181d1a]">
                    {agent.salesYtd}
                  </td>
                  <td className="p-4 w-28 text-center">
                    <StatusPill status={agent.status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="bg-white px-4 py-3 border-t-admin border-admin-border flex items-center justify-between sm:px-6">
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
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border-admin border-admin-border bg-white text-sm font-medium text-[#3e4944] hover:bg-[#F9FAFB]"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="z-10 bg-[#F9FAFB] border-admin-border text-[#181d1a] relative inline-flex items-center px-4 py-2 border text-sm font-semibold"
                aria-current="page"
              >
                1
              </button>
              <button
                type="button"
                className="bg-white border-admin-border text-[#3e4944] hover:bg-[#F9FAFB] relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                2
              </button>
              <button
                type="button"
                className="bg-white border-admin-border text-[#3e4944] hover:bg-[#F9FAFB] relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                3
              </button>
              <span className="relative inline-flex items-center px-4 py-2 border-admin border-admin-border bg-white text-sm font-medium text-[#3e4944]">
                ...
              </span>
              <button
                type="button"
                className="bg-white border-admin-border text-[#3e4944] hover:bg-[#F9FAFB] relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                8
              </button>
              <button
                type="button"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border-admin border-admin-border bg-white text-sm font-medium text-[#3e4944] hover:bg-[#F9FAFB]"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
