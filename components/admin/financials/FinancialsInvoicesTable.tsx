"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { MoreHorizontal, Archive, Trash2, Clock, AlertCircle, FileText, CheckCircle2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import type { InvoiceRow, InvoiceStatus } from "./types";

function StatusPill({ status }: { status: InvoiceStatus }) {
  const styles: Record<InvoiceStatus, string> = {
    Paid: "bg-[#E6F4F0] text-[#005C45]",
    Pending: "bg-blue-50 text-blue-700",
    Overdue: "bg-red-50 text-red-700",
    Draft: "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${styles[status]}`}>
      {status}
    </span>
  );
}

export function FinancialsInvoicesTable({ rows }: { rows: InvoiceRow[] }) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showMoreActions, setShowMoreActions] = useState(false);
  const moreActionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreActionsRef.current && !moreActionsRef.current.contains(event.target as Node)) {
        setShowMoreActions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allSelected = rows.length > 0 && selected.size === rows.length;

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(rows.map(r => r.id)));
    }
  }

  function toggleOne(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
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
                <th colSpan={8} className="p-4">
                  <div className="flex items-center gap-2">
                    <div onClick={(e) => e.stopPropagation()} className="flex items-center">
                      <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Deselect all" />
                    </div>
                    <span className="text-sm font-semibold text-[#181d1a] ml-1">{selected.size} selected</span>
                    
                    <div className="flex items-center gap-2 ml-4">
                      <button type="button" className="px-3 py-1 text-xs font-medium border border-[#ECECEC] rounded bg-white text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                        Mark as Paid
                      </button>
                      <button type="button" className="px-3 py-1 text-xs font-medium border border-[#ECECEC] rounded bg-white text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                        Send Reminder
                      </button>
                      
                      <div className="relative" ref={moreActionsRef}>
                        <button 
                          type="button" 
                          onClick={() => setShowMoreActions(!showMoreActions)}
                          className={`p-1 border border-[#ECECEC] rounded bg-white text-[#3e4944] hover:bg-[#F9FAFB] transition-colors ${showMoreActions ? "bg-[#F9FAFB]" : ""}`}
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </button>

                        {showMoreActions && (
                          <div className="absolute left-0 mt-2 w-48 bg-white border border-[#ECECEC] rounded-lg shadow-lg z-50 py-1 overflow-hidden font-normal text-left">
                            <div className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] bg-[#F9FAFB] border-b border-[#ECECEC] mb-1">
                              Update Status
                            </div>
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                              <CheckCircle2 className="w-4 h-4 text-[#008060]" />
                              Mark as Paid
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                              <Clock className="w-4 h-4 text-blue-500" />
                              Mark as Pending
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                              <AlertCircle className="w-4 h-4 text-red-500" />
                              Mark as Overdue
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#3e4944] hover:bg-[#F9FAFB] transition-colors border-b border-[#ECECEC]">
                              <FileText className="w-4 h-4 text-gray-500" />
                              Mark as Draft
                            </button>
                            
                            <div className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] bg-[#F9FAFB] border-b border-[#ECECEC] mb-1 mt-1">
                              Actions
                            </div>
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                              <Archive className="w-4 h-4" />
                              Archive invoices
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#ba1a1a] hover:bg-red-50 transition-colors">
                              <Trash2 className="w-4 h-4" />
                              Delete invoices
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            ) : (
              <tr className="bg-[#F9FAFB] border-b-admin border-admin-border h-16">
                <th className="p-4 w-10">
                  <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Select all" />
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] w-36">
                  Invoice
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] w-48">
                  Client
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] w-32">
                  Amount
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] w-44">
                  Property
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] w-36">
                  Issue Date
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] w-36">
                  Due Date
                </th>
                <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] text-right w-28">
                  Status
                </th>
              </tr>
            )}
          </thead>
          <tbody className="text-sm divide-y divide-[#ECECEC]">
            {rows.map((row) => {
              const isSelected = selected.has(row.id);
              return (
                <tr
                  key={row.id}
                  onClick={() => router.push(`/admin/financials/invoices/${row.id}/edit`)}
                  className={`transition-colors cursor-pointer group ${
                    isSelected ? "bg-[#F0F5F0]" : "hover:bg-[#F9FAFB]"
                  }`}
                >
                  <td className="p-4 w-10" onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => toggleOne(row.id)}
                    />
                  </td>
                  <td className="p-4 w-36">
                    <span className="font-semibold text-[#181d1a] group-hover:text-[#008060] transition-colors">
                      {row.invoiceNumber}
                    </span>
                  </td>
                  <td className="p-4 w-48">
                    <div className="flex flex-col">
                      <span className="font-medium text-[#181d1a]">{row.clientName}</span>
                      <span className="text-[11px] text-[#6B7280]">{row.clientEmail}</span>
                    </div>
                  </td>
                  <td className="p-4 w-32 font-semibold text-[#181d1a]">
                    {row.amount}
                  </td>
                  <td className="p-4 w-44 text-[#3e4944]">
                    {row.propertyTitle || "—"}
                  </td>
                  <td className="p-4 w-36 text-[#3e4944]">
                    {row.issueDate}
                  </td>
                  <td className="p-4 w-36 text-[#3e4944]">
                    {row.dueDate}
                  </td>
                  <td className="p-4 text-right w-28">
                    <StatusPill status={row.status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
