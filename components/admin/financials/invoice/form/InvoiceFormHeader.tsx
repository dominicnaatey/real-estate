"use client";

import Link from "next/link";
import { Eye, Send, CheckCircle, Save } from "lucide-react";
import type { InvoiceFormState } from "./types";

type Props = {
  mode?: "create" | "edit";
  state: InvoiceFormState;
};

export function InvoiceFormHeader({ mode = "create", state }: Props) {
  const isDraft = state.status === "Draft";
  const isPending = state.status === "Pending" || state.status === "Overdue";
  const isPaid = state.status === "Paid";

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
              : `Update the details for invoice ${state.client.split(' - ')[0] || ''}.`}
          </p>
        </div>
        <div className="flex gap-3 shrink-0 flex-wrap">
          {/* Preview is always useful */}
          <button
            type="button"
            className="px-4 py-2 border border-[#ECECEC] rounded text-sm font-medium text-[#3e4944] bg-white hover:bg-[#F9FAFB] transition-colors flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>

          {/* Context-aware secondary actions */}
          {isDraft && (
            <button
              type="button"
              className="px-4 py-2 border border-[#ECECEC] rounded text-sm font-medium text-[#3e4944] bg-white hover:bg-[#F9FAFB] transition-colors"
            >
              Save
            </button>
          )}

          {isPending && (
            <button
              type="button"
              onClick={() => state.setStatus("Paid")}
              className="px-4 py-2 border border-[#ECECEC] rounded text-sm font-medium text-[#008060] bg-white hover:bg-[#F0FAF7] transition-colors flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              Mark as Paid
            </button>
          )}

          {/* Primary Action */}
          {isDraft || mode === "create" ? (
            <button
              type="submit"
              className="px-5 py-2 bg-[#008060] text-white rounded text-sm font-semibold hover:bg-[#00654b] transition-colors flex items-center gap-2 shadow-sm"
            >
              <Send className="w-4 h-4" />
              Send Invoice
            </button>
          ) : (
            <button
              type="submit"
              className="px-5 py-2 bg-[#008060] text-white rounded text-sm font-semibold hover:bg-[#00654b] transition-colors flex items-center gap-2 shadow-sm"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          )}
        </div>
      </div>
    </>
  );
}
