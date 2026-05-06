import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Kanban,
  LayoutList,
  MoreHorizontal,
} from "lucide-react";
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
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
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

        <div className="flex items-center gap-2 border border-gray-200 rounded bg-[#F9FAFB] p-0.5">
          <button type="button" className="p-1.5 bg-white shadow-sm rounded text-[#181d1a]">
            <LayoutList className="w-[18px] h-[18px]" />
          </button>
          <button type="button" className="p-1.5 text-[#3e4944] hover:text-[#181d1a]">
            <Kanban className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-white">
              <th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                Lead Name
              </th>
              <th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                Status
              </th>
              <th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                Interest / Budget
              </th>
              <th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                Assigned Agent
              </th>
              <th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                Last Interaction
              </th>
              <th className="py-3 px-4 text-right" />
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-200">
            {rows.map((lead) => (
              <tr key={lead.email} className="hover:bg-[#F9FAFB] transition-colors group cursor-pointer">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <LeadAvatar lead={lead} />
                    <div>
                      <p className="font-medium text-[#181d1a]">{lead.name}</p>
                      <p className="text-[#3e4944] text-[12px]">{lead.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <StatusPill status={lead.status} />
                </td>
                <td className="py-3 px-4">
                  <p className="text-[#181d1a]">{lead.interest}</p>
                  <p className="text-[#3e4944] text-[12px]">{lead.budget}</p>
                </td>
                <td className="py-3 px-4 text-[#181d1a]">{lead.agent}</td>
                <td className="py-3 px-4 text-[#3e4944]">{lead.lastInteraction}</td>
                <td className="py-3 px-4 text-right">
                  <button
                    type="button"
                    className="text-[#3e4944] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#181d1a]"
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

      <div className="p-4 border-t border-gray-200 bg-white flex items-center justify-between text-sm text-[#3e4944]">
        <div>{summaryLabel}</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-1 border border-gray-200 rounded disabled:opacity-50 hover:bg-[#F9FAFB]"
            disabled
            aria-label="Previous page"
          >
            <ChevronLeft className="w-[18px] h-[18px]" />
          </button>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded bg-[#F9FAFB] font-medium text-[#181d1a]"
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
            className="p-1 border border-gray-200 rounded hover:bg-[#F9FAFB]"
            aria-label="Next page"
          >
            <ChevronRight className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
