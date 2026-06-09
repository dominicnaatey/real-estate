"use client";

import Link from "next/link";
import { FileText, Send } from "lucide-react";

export function InvoiceFormHeader({ mode = "create" }: { mode?: "create" | "edit" }) {
  return (
    <>
      <nav className="flex items-center gap-1.5 text-xs text-[#9CA3AF] mb-6">
        <Link href="/admin/financials" className="hover:text-[#008060] transition-colors">Financials</Link>
        <span>/</span>
        <Link href="/admin/financials" className="hover:text-[#008060] transition-colors">Invoices</Link>
        <span>/</span>
        <span className="text-[#181d1a] font-medium">
          {mode === "create" ? "Create New Invoice" : "Edit Invoice"}
        </span>
      </nav>

      <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] leading-tight">
            {mode === "create" ? "Create New Invoice" : "Edit Invoice"}
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-0.5">
            {mode === "create" 
              ? "Issue a professional statement for agency services and staging."
              : "Update the professional statement for agency services and staging."}
          </p>
        </div>
        <div className="flex gap-3 shrink-0 flex-wrap">
          <button
            type="button"
            className="px-4 py-2 border border-[#ECECEC] rounded text-sm font-medium text-[#3e4944] bg-white hover:bg-[#F9FAFB] transition-colors"
          >
            Save as Draft
          </button>
          <button
            type="button"
            className="px-4 py-2 border border-[#ECECEC] rounded text-sm font-medium text-[#3e4944] bg-white hover:bg-[#F9FAFB] transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Preview PDF
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-[#008060] text-white rounded text-sm font-semibold hover:bg-[#00654b] transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send Invoice
          </button>
        </div>
      </div>
    </>
  );
}
