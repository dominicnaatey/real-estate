import Link from "next/link";
import Image from "next/image";
import { Building2, Plus, User } from "lucide-react";
import type { TransactionRow, TransactionType, PaymentMethod } from "./types";

function TypePill({ type }: { type: TransactionType }) {
  const styles: Record<TransactionType, string> = {
    Income:     "bg-[rgba(0,128,96,0.10)] text-[#008060]",
    Commission: "bg-[rgba(0,128,96,0.06)] text-[#00654b]",
    Expense:    "bg-[rgba(239,68,68,0.10)] text-[#DC2626]",
    Refund:     "bg-[rgba(245,158,11,0.15)] text-[#996b00]",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${styles[type]}`}>
      {type}
    </span>
  );
}

function MethodPill({ method }: { method: PaymentMethod }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#F3F4F6] text-[#6B7280]">
      {method}
    </span>
  );
}

function AmountCell({ amount, type }: { amount: string; type: TransactionType }) {
  const isIncome = type === "Income" || type === "Commission";
  return (
    <span className={`font-semibold ${isIncome ? "text-[#008060]" : "text-[#DC2626]"}`}>
      {isIncome ? "+" : "−"}{amount}
    </span>
  );
}

function TransactionAvatar({ row }: { row: TransactionRow }) {
  if (row.thumbnail?.kind === "image") {
    return (
      <Image
        alt={row.thumbnail.alt}
        src={row.thumbnail.src}
        width={40}
        height={40}
        className="w-10 h-10 rounded object-cover shrink-0"
        referrerPolicy="no-referrer"
      />
    );
  }
  const Icon = row.icon?.type === "company" ? Building2 : User;
  return (
    <div className="w-10 h-10 rounded bg-[#F0F5F0] border-admin border-admin-border flex items-center justify-center text-[#3e4944] shrink-0">
      <Icon className="w-5 h-5" />
    </div>
  );
}

export function FinancialsTransactionsTable({ rows }: { rows: TransactionRow[] }) {
  return (
    <div className="lg:col-span-2 bg-white border-admin border-admin-border rounded-2xl overflow-hidden flex flex-col">
      <div className="p-4 border-b-admin border-admin-border bg-[#F9FAFB] flex justify-between items-center">
        <h2 className="text-lg font-semibold text-[#181d1a]">Transactions</h2>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/financials/transactions/new"
            className="flex items-center gap-1 text-sm font-semibold text-[#008060] hover:text-[#00654b] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Record Transaction
          </Link>
          <span className="text-[#D1D5DB]">|</span>
          <button type="button" className="text-sm text-[#6B7280] hover:text-[#181d1a] transition-colors">
            View All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F0F5F0] border-b-admin border-admin-border">
              <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                Party / Property
              </th>
              <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                Date
              </th>
              <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                Amount
              </th>
              <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                Method
              </th>
              <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] text-right">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-200 bg-white">
            {rows.map((row) => (
              <tr
                key={`${row.title}-${row.subtitle}`}
                className="hover:bg-[#F9FAFB] transition-colors group"
              >
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <TransactionAvatar row={row} />
                    <div>
                      <div className="font-medium text-[#181d1a] group-hover:text-[#008060] transition-colors">
                        {row.title}
                      </div>
                      <div className="text-[#3e4944] text-[11px]">{row.subtitle}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-[#3e4944] whitespace-nowrap">{row.date}</td>
                <td className="p-3 whitespace-nowrap">
                  <AmountCell amount={row.amount} type={row.type} />
                </td>
                <td className="p-3">
                  <MethodPill method={row.method} />
                </td>
                <td className="p-3 text-right">
                  <TypePill type={row.type} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
