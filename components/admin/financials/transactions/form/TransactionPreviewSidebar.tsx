"use client";

import type { TransactionFormState } from "./types";

const CURRENCY_SYMBOLS: Record<string, string> = { GBP: "£", EUR: "€", USD: "$" };

type Props = { state: TransactionFormState };

export function TransactionPreviewSidebar({ state }: Props) {
  const isExpense = state.type === "Expense" || state.type === "Refund";
  const symbol = CURRENCY_SYMBOLS[state.currency] ?? "$";
  const formatted = state.amount
    ? parseFloat(state.amount).toLocaleString("en-GB", { minimumFractionDigits: 2 })
    : "0.00";

  return (
    <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-5 space-y-4">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">Preview</p>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-[#6B7280]">Type</span>
          <span className={`font-medium ${isExpense ? "text-red-600" : "text-[#008060]"}`}>{state.type}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B7280]">Date</span>
          <span className="text-[#181d1a]">{state.date || "—"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B7280]">Party</span>
          <span className="text-[#181d1a] truncate max-w-[140px] text-right">{state.party || "—"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B7280]">Method</span>
          <span className="text-[#181d1a]">{state.method}</span>
        </div>
        <div className="border-t border-[#ECECEC] pt-3 flex justify-between items-center">
          <span className="font-semibold text-[#181d1a]">Amount</span>
          <span className={`text-xl font-bold ${isExpense ? "text-red-600" : "text-[#008060]"}`}>
            {isExpense ? "−" : "+"}{symbol}{formatted}
          </span>
        </div>
      </div>
    </div>
  );
}
