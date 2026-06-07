"use client";

import Link from "next/link";
import { Save } from "lucide-react";

type Props = {
  mode: "create" | "edit";
};

export function TransactionFormHeader({ mode }: Props) {
  return (
    <>
      <nav className="flex items-center gap-1.5 text-xs text-[#9CA3AF] mb-6">
        <Link href="/admin/financials" className="hover:text-[#008060] transition-colors">Financials</Link>
        <span>/</span>
        <Link href="/admin/financials/transactions" className="hover:text-[#008060] transition-colors">Transactions</Link>
        <span>/</span>
        <span className="text-[#181d1a] font-medium">
          {mode === "create" ? "Record Transaction" : "Edit Transaction"}
        </span>
      </nav>

      <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] leading-tight">
            {mode === "create" ? "Record Transaction" : "Edit Transaction"}
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-0.5">
            {mode === "create"
              ? "Manually log a payment received or expense paid."
              : "Update the details of this transaction."}
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link
            href="/admin/financials/transactions"
            className="px-4 py-2 border border-[#ECECEC] rounded text-sm font-medium text-[#3e4944] bg-white hover:bg-[#F9FAFB] transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-5 py-2 bg-[#008060] text-white rounded text-sm font-semibold hover:bg-[#00654b] transition-colors flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {mode === "create" ? "Save Transaction" : "Save Changes"}
          </button>
        </div>
      </div>
    </>
  );
}
