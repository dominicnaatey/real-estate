import React from "react";
import { Invoice } from "./types";

interface InvoiceSummaryProps {
  invoice: Invoice;
}

export function InvoiceSummary({ invoice }: InvoiceSummaryProps) {
  return (
    <section className="flex flex-col items-end mb-12">
      <div className="w-full md:w-64 space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-[#6D7175]">Subtotal</span>
          <span className="text-[#202E3B] font-medium">
            {invoice.currency.symbol}{invoice.subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-[#6D7175]">VAT ({invoice.vatRate}%)</span>
          <span className="text-[#202E3B] font-medium">
            {invoice.currency.symbol}{invoice.vatAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="pt-3 border-t-2 border-[#202E3B] flex justify-between items-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#202E3B]">Total Due</span>
          <span className="text-2xl font-bold text-[#008060]">
            {invoice.currency.symbol}{invoice.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>
    </section>
  );
}
