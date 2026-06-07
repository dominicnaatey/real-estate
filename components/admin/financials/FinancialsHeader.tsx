import Link from "next/link";
import { Download, Plus } from "lucide-react";

export function FinancialsHeader() {
  return (
    <div className="flex justify-between items-end gap-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a]">
          Financials &amp; Invoicing
        </h1>
        <p className="text-sm text-[#3e4944] mt-1">
          Overview of recent transactions and revenue metrics.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="px-4 py-2 border-admin border-admin-border bg-white rounded text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] hover:bg-[#F0F5F0] transition-colors flex items-center gap-2"
        >
          <Download className="w-[18px] h-[18px]" />
          Export CSV
        </button>
        <Link
          href="/admin/financials/invoices/new"
          className="px-4 py-2 bg-[#008060] text-white rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#00654b] transition-colors flex items-center gap-2"
        >
          <Plus className="w-[18px] h-[18px]" />
          Create Invoice
        </Link>
      </div>
    </div>
  );
}

