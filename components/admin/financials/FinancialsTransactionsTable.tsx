import Image from "next/image";
import { Building2, User } from "lucide-react";
import type { TransactionRow, TransactionStatus } from "./types";

function StatusPill({ status }: { status: TransactionStatus }) {
  const className =
    status === "Paid"
      ? "bg-[rgba(0,128,96,0.10)] text-[#008060]"
      : status === "Pending"
        ? "bg-[rgba(245,158,11,0.20)] text-[#996b00]"
        : "bg-[rgba(239,68,68,0.10)] text-[#DC2626]";

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${className}`}>
      {status}
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
        className="w-10 h-10 rounded object-cover"
        referrerPolicy="no-referrer"
      />
    );
  }

  const Icon = row.icon?.type === "company" ? Building2 : User;
  return (
    <div className="w-10 h-10 rounded bg-[#F0F5F0] border border-gray-200 flex items-center justify-center text-[#3e4944]">
      <Icon className="w-5 h-5" />
    </div>
  );
}

export function FinancialsTransactionsTable({ rows }: { rows: TransactionRow[] }) {
  return (
    <div className="lg:col-span-2 bg-white border border-gray-200 rounded overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-200 bg-[#F9FAFB] flex justify-between items-center">
        <h2 className="text-lg font-semibold text-[#181d1a]">Recent Transactions</h2>
        <button type="button" className="text-[#008060] text-sm font-medium hover:underline">
          View All
        </button>
      </div>
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F0F5F0] border-b border-gray-200">
              <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-1/3">
                Property / Client
              </th>
              <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                Date
              </th>
              <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                Amount
              </th>
              <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] text-right">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-200 bg-white">
            {rows.map((row) => (
              <tr key={`${row.title}-${row.subtitle}`} className="hover:bg-[#F9FAFB] transition-colors group">
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
                <td className="p-3 text-[#3e4944]">{row.date}</td>
                <td className="p-3 font-medium text-[#181d1a]">{row.amount}</td>
                <td className="p-3 text-right">
                  <StatusPill status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

