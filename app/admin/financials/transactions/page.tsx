import Link from "next/link";
import { Plus } from "lucide-react";
import { transactions } from "../../../../lib/data/Transactions";
import { FinancialsTransactionsTable } from "../../../../components/admin/financials/FinancialsTransactionsTable";
import type { TransactionRow } from "../../../../components/admin/financials/types";

const rows: TransactionRow[] = transactions.map((t) => ({
  id: t.id,
  title: t.party,
  subtitle: t.reference ?? t.notes ?? "",
  date: new Date(t.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
  amount: `${t.currency === "GBP" ? "£" : t.currency === "EUR" ? "€" : "$"}${parseFloat(t.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}`,
  type: t.type,
  method: t.method,
  icon: { kind: "icon" as const, type: "user" as const },
}));

export default function AdminTransactionsPage() {
  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a]">
            Transactions
          </h1>
          <p className="text-sm text-[#3e4944] mt-1">
            Manual ledger of all money received and paid out.
          </p>
        </div>
        <Link
          href="/admin/financials/transactions/new"
          className="px-4 py-2 bg-[#008060] text-white rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#00654b] transition-colors flex items-center gap-2"
        >
          <Plus className="w-4.5 h-4.5" />
          Record Transaction
        </Link>
      </div>

      <FinancialsTransactionsTable rows={rows} fullWidth />
    </div>
  );
}
