import Link from "next/link";
import { Plus } from "lucide-react";
import { FinancialsInvoicesTable } from "@/components/admin/financials/FinancialsInvoicesTable";
import { INVOICE_ROWS } from "@/components/admin/financials/data";

export default function AdminInvoicesPage() {
  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a]">
            Invoices
          </h1>
          <p className="text-sm text-[#3e4944] mt-1">
            All invoices issued to clients and their payment status.
          </p>
        </div>
        <Link
          href="/admin/financials/invoices/new"
          className="px-4 py-2 bg-[#008060] text-white rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#00654b] transition-colors flex items-center gap-2"
        >
          <Plus className="w-4.5 h-4.5" />
          Create Invoice
        </Link>
      </div>
      
      <FinancialsInvoicesTable rows={INVOICE_ROWS} />
    </div>
  );
}
