"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Building2, Plus, User, MoreHorizontal, Archive, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import type { TransactionRow, TransactionType, PaymentMethod } from "./types";

function TypePill({ type }: { type: TransactionType }) {
  const styles: Record<TransactionType, string> = {
    Income:     "bg-[rgba(0,128,96,0.10)] text-[#008060]",
    Commission: "bg-[rgba(0,128,96,0.06)] text-[#00654b]",
    Expense:    "bg-[rgba(239,68,68,0.10)] text-[#DC2626]",
    Refund:     "bg-[rgba(245,158,11,0.15)] text-[#996b00]",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${styles[type]}`}>
      {type}
    </span>
  );
}

function MethodPill({ method }: { method: PaymentMethod }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#F3F4F6] text-[#6B7280]">
      {method}
    </span>
  );
}

function AmountCell({ amount, type }: { amount: string; type: TransactionType }) {
  const isIncome = type === "Income" || type === "Commission";
  return (
    <span className={`font-semibold ${isIncome ? "text-[#008060]" : "text-[#DC2626]"}`}>
      {isIncome ? "+" : "−"}{amount}
    </span>
  );
}

function TransactionAvatar({ row }: { row: TransactionRow }) {
  if (row.thumbnail?.kind === "image") {
    return (
      <Image
        alt={row.thumbnail.alt}
        src={row.thumbnail.src}
        width={40}
        height={40}
        className="w-10 h-10 rounded object-cover shrink-0"
        referrerPolicy="no-referrer"
      />
    );
  }
  const Icon = row.icon?.type === "company" ? Building2 : User;
  return (
    <div className="w-10 h-10 rounded bg-[#F0F5F0] border-admin border-admin-border flex items-center justify-center text-[#3e4944] shrink-0">
      <Icon className="w-5 h-5" />
    </div>
  );
}

export function FinancialsTransactionsTable({ rows, fullWidth = false }: { rows: TransactionRow[]; fullWidth?: boolean }) {
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

  const allSelected = rows.length > 0 && selected.size === rows.filter(r => r.id).length;

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set());
    } else {
      const allIds = rows.map(r => r.id).filter((id): id is string => !!id);
      setSelected(new Set(allIds));
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
    <div className={`bg-white border-admin border-admin-border rounded-2xl overflow-hidden flex flex-col ${fullWidth ? "" : "lg:col-span-2"}`}>
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            {selected.size > 0 ? (
              <tr className="bg-[#F9FAFB] border-b-admin border-admin-border h-16">
                <th colSpan={6} className="p-3">
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
                        Export
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
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                              <Archive className="w-4 h-4" />
                              Archive selected
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#ba1a1a] hover:bg-red-50 transition-colors border-b border-[#ECECEC]">
                              <Trash2 className="w-4 h-4" />
                              Delete selected
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
                <th className="p-3 w-10">
                  <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Select all" />
                </th>
                <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                  Party / Property
                </th>
                <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                  Date
                </th>
                <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                  Amount
                </th>
                <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                  Method
                </th>
                <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] text-right">
                  Type
                </th>
              </tr>
            )}
          </thead>
          <tbody className="text-sm divide-y divide-gray-200 bg-white">
            {rows.map((row) => {
              const isSelected = !!row.id && selected.has(row.id);
              return (
                <tr
                  key={row.id ?? `${row.title}-${row.subtitle}`}
                  onClick={() => {
                    if (row.id) {
                      router.push(`/admin/financials/transactions/${row.id}/edit`);
                    }
                  }}
                  className={`transition-colors group ${
                    row.id ? "cursor-pointer" : ""
                  } ${isSelected ? "bg-[#F0F5F0]" : "hover:bg-[#F9FAFB]"}`}
                >
                  <td className="p-3" onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => row.id && toggleOne(row.id)}
                      disabled={!row.id}
                    />
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <TransactionAvatar row={row} />
                      <div>
                        <div className="font-medium text-[#181d1a] group-hover:text-[#008060] transition-colors">
                          {row.title}
                        </div>
                        <div className="text-[#3e4944] text-[11px]">{row.subtitle}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-[#3e4944] whitespace-nowrap">{row.date}</td>
                  <td className="p-3 whitespace-nowrap">
                    <AmountCell amount={row.amount} type={row.type} />
                  </td>
                  <td className="p-3">
                    <MethodPill method={row.method} />
                  </td>
                  <td className="p-3 text-right">
                    <TypePill type={row.type} />
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
