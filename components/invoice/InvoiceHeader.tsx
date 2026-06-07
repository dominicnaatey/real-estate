import React from "react";
import { Invoice } from "./types";

interface InvoiceHeaderProps {
  invoice: Invoice;
}

export function InvoiceHeader({ invoice }: InvoiceHeaderProps) {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start border-b border-[#E1E3E5] pb-10 mb-10">
      <div className="mb-6 md:mb-0">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#202E3B] mb-4">INVOICE</h1>
        <div className="flex flex-col gap-2">
          <p className="text-[#6D7175] text-sm flex items-center">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#202E3B] mr-3 w-24">Number:</span>
            {invoice.invoiceNumber}
          </p>
          <p className="text-[#6D7175] text-sm flex items-center">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#202E3B] mr-3 w-24">Issue Date:</span>
            {invoice.issueDate}
          </p>
          <p className="text-[#6D7175] text-sm flex items-center">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#202E3B] mr-3 w-24">Due Date:</span>
            {invoice.dueDate}
          </p>
        </div>
      </div>
      <div className="text-right flex flex-col items-end">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-[#00654b] rounded flex items-center justify-center text-white">
            <span className="text-xs font-bold">EP</span>
          </div>
          <span className="font-serif text-xl font-semibold text-[#202E3B]">EstatePro Elite</span>
        </div>
        <div className="text-sm text-[#6D7175] leading-relaxed">
          <p className="font-semibold text-[#202E3B]">LuxManagement HQ</p>
          <p>12 Bruton Street</p>
          <p>Mayfair, London W1J 6QA</p>
          <p>finance@luxmanagement.com</p>
        </div>
      </div>
    </section>
  );
}
