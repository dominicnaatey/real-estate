"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Kanban,
  LayoutList,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import type { LeadRow, LeadStatus } from "./types";

function StatusPill({ status }: { status: LeadStatus }) {
  const className =
    status === "Offer Pending"
      ? "bg-emerald-100 text-emerald-800"
      : status === "Viewing Scheduled"
        ? "bg-orange-100 text-orange-800"
        : status === "Contacted"
          ? "bg-blue-100 text-blue-800"
          : "bg-gray-100 text-gray-800";

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${className}`}>
      {status}
    </span>
  );
}

function LeadAvatar({ lead }: { lead: LeadRow }) {
  if (lead.avatar?.kind === "image") {
    return (
      <div className="relative w-8 h-8 rounded overflow-hidden bg-[#dfe4df] shrink-0">
        <Image alt={`${lead.name} avatar`} src={lead.avatar.src} fill className="object-cover" sizes="32px" />
      </div>
    );
  }

  const initial = (lead.name.trim()[0] || "?").toUpperCase();
  return (
    <div className="w-8 h-8 rounded bg-[#d9dff5] flex items-center justify-center text-[#3e4944] font-medium shrink-0">
      {initial}
    </div>
  );
}

export function CrmLeadsTable({
  rows,
  summaryLabel,
}: {
  rows: LeadRow[];
  summaryLabel: string;
}) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const allSelected = selected.size === rows.length && rows.length > 0;

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(rows.map((l) => l.email)));
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
    <div className="bg-white border-admin border-admin-border rounded-2xl overflow-hidden">
      <div className="p-4 border-b-admin border-admin-border bg-white flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <select className="pl-3 pr-8 py-1.5 text-sm border-none bg-[#F9FAFB] rounded text-[#181d1a] focus:ring-1 focus:ring-[#008060] appearance-none cursor-pointer">
              <option>All Statuses</option>
              <option>New Lead</option>
              <option>Contacted</option>
              <option>Viewing Scheduled</option>
              <option>Offer Pending</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3e4944] text-sm pointer-events-none">
              ▾
            </span>
          </div>
          <div className="h-4 w-px bg-gray-200" />
          <div className="relative">
            <select className="pl-3 pr-8 py-1.5 text-sm border-none bg-[#F9FAFB] rounded text-[#181d1a] focus:ring-1 focus:ring-[#008060] appearance-none cursor-pointer">
              <option>Any Agent</option>
              <option>Sarah Jenkins</option>
              <option>Michael Chen</option>
              <option>David Ross</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3e4944] text-sm pointer-events-none">
              ▾
            </span>
          </div>
          <div className="h-4 w-px bg-gray-200" />
          <div className="relative">
            <select className="pl-3 pr-8 py-1.5 text-sm border-none bg-[#F9FAFB] rounded text-[#181d1a] focus:ring-1 focus:ring-[#008060] appearance-none cursor-pointer">
              <option>Lead Quality</option>
              <option>Hot (High Intent)</option>
              <option>Warm (Engaged)</option>
              <option>Cold (Passive)</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3e4944] text-sm pointer-events-none">
              ▾
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 border-admin border-admin-border rounded bg-[#F9FAFB] p-0.5">
          <button type="button" className="p-1.5 bg-white shadow-sm rounded text-[#181d1a]">
            <LayoutList className="w-4.5 h-4.5" />
          </button>
          <button type="button" className="p-1.5 text-[#3e4944] hover:text-[#181d1a]">
            <Kanban className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            {selected.size > 0 ? (
              <tr className="border-b-admin border-admin-border bg-[#F9FAFB] h-16">
                <th colSpan={6} className="p-4">
                  <div className="flex items-center gap-3">
                    <div onClick={(e) => e.stopPropagation()} className="flex items-center">
                      <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Deselect all" />
                    </div>
                    <span className="text-sm font-semibold text-[#181d1a]">
                      {selected.size} selected
                    </span>
                    <div className="h-4 w-px bg-[#D1D5DB]" />
                    <button type="button" className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider border border-[#ECECEC] rounded bg-white text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                      Bulk Edit
                    </button>
                    <button type="button" className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider border border-[#ECECEC] rounded bg-white text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                      Set as Closed
                    </button>
                    <button type="button" className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider border border-[#ECECEC] rounded bg-white text-[#ba1a1a] hover:bg-red-50 transition-colors">
                      Delete
                    </button>
                  </div>
                </th>
              </tr>
            ) : (
              <tr className="border-b-admin border-admin-border bg-white h-16">
                <th className="p-4 w-10" onClick={(e) => e.stopPropagation()}>
                  <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Select all" />
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-52">
                  Lead Name
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-32">
                  Status
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-48">
                  Interest / Budget
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-44">
                  Assigned Agent
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-36">
                  Last Interaction
                </th>
              </tr>
            )}
          </thead>
          <tbody className="text-sm divide-y divide-gray-200">
            {rows.map((lead) => (
              <tr
                key={lead.email}
                onClick={() => router.push(`/admin/crm/${lead.id}/edit`)}
                className="hover:bg-[#F9FAFB] transition-colors cursor-pointer"
              >
                <td className="p-4 w-10" onClick={(e) => e.stopPropagation()}>
                  <Checkbox checked={selected.has(lead.email)} onCheckedChange={() => toggleOne(lead.email)} aria-label={`Select ${lead.name}`} />
                </td>
                <td className="p-4 w-52">
                  <div className="flex items-center gap-3">
                    <LeadAvatar lead={lead} />
                    <div>
                      <p className="font-medium text-[#181d1a]">{lead.name}</p>
                      <p className="text-[#3e4944] text-[12px]">{lead.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 w-32">
                  <StatusPill status={lead.status} />
                </td>
                <td className="p-4 w-48">
                  <p className="text-[#181d1a]">{lead.interest}</p>
                  <p className="text-[#3e4944] text-[12px]">{lead.budget}</p>
                </td>
                <td className="p-4 w-44 text-[#181d1a]">{lead.agent}</td>
                <td className="p-4 w-36 text-[#3e4944]">{lead.lastInteraction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t-admin border-admin-border bg-white flex items-center justify-between text-sm text-[#3e4944]">
        <div>{summaryLabel}</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-1 border-admin border-admin-border rounded disabled:opacity-50 hover:bg-[#F9FAFB]"
            disabled
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4.5 h-4.5" />
          </button>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center border-admin border-admin-border rounded bg-[#F9FAFB] font-medium text-[#181d1a]"
          >
            1
          </button>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center border border-transparent hover:bg-[#F9FAFB] rounded"
          >
            2
          </button>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center border border-transparent hover:bg-[#F9FAFB] rounded"
          >
            3
          </button>
          <span>...</span>
          <button
            type="button"
            className="p-1 border-admin border-admin-border rounded hover:bg-[#F9FAFB]"
            aria-label="Next page"
          >
            <ChevronRight className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
