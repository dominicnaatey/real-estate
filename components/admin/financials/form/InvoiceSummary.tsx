"use client";

import { Info } from "lucide-react";
import type { InvoiceFormState } from "./types";

const CURRENCY_SYMBOLS: Record<string, string> = { GBP: "£", EUR: "€", USD: "$" };

type Props = {
  state: Pick<InvoiceFormState, "lineItems" | "currency">;
};

export function InvoiceSummary({ state }: Props) {
  const symbol = CURRENCY_SYMBOLS[state.currency] ?? "$";

  const subtotal = state.lineItems.reduce(
    (sum, item) => sum + item.qty * parseFloat(item.unitPrice || "0"),
    0
  );
  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  const fmt = (n: number) => n.toLocaleString("en-GB", { minimumFractionDigits: 2 });

  return (
    <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) overflow-hidden">
      <div className="px-5 py-4 bg-[#F9FAFB] border-b border-[#ECECEC]">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">Summary</p>
      </div>
      <div className="px-5 py-4 space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-[#6B7280]">Subtotal</span>
          <span className="font-medium text-[#181d1a]">{symbol}{fmt(subtotal)}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#6B7280]">VAT</span>
            <span className="bg-[#F3F4F6] px-1.5 py-0.5 rounded text-[10px] font-bold text-[#6B7280]">20%</span>
          </div>
          <span className="font-medium text-[#181d1a]">{symbol}{fmt(vat)}</span>
        </div>
        <div className="border-t border-[#ECECEC] pt-3 flex justify-between items-center">
          <span className="text-base font-semibold text-[#181d1a]">Total Due</span>
          <span className="text-2xl font-bold text-[#008060]">{symbol}{fmt(total)}</span>
        </div>
      </div>
      <div className="px-5 py-3 bg-[#F0FAF7] border-t border-[#008060]/10 flex gap-3">
        <Info className="w-4 h-4 text-[#008060] shrink-0 mt-0.5" />
        <p className="text-[11px] leading-relaxed text-[#008060]/80">
          This amount will be automatically ledgered to the Property Expenses account for Alexander Wright upon sending.
        </p>
      </div>
    </div>
  );
}
