"use client";

import { useRouter } from "next/navigation";
import type { InvoiceRow, InvoiceStatus } from "./types";

function StatusPill({ status }: { status: InvoiceStatus }) {
  const styles: Record<InvoiceStatus, string> = {
    Paid: "bg-[#E6F4F0] text-[#005C45]",
    Pending: "bg-blue-50 text-blue-700",
    Overdue: "bg-red-50 text-red-700",
    Draft: "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${styles[status]}`}>
      {status}
    </span>
  );
}

export function FinancialsInvoicesTable({ rows }: { rows: InvoiceRow[] }) {
  const router = useRouter();

  return (
    <div className="bg-white border-admin border-admin-border rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F9FAFB] border-b-admin border-admin-border">
              <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                Invoice
              </th>
              <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                Client
              </th>
              <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                Property
              </th>
              <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                Issue Date
              </th>
              <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                Due Date
              </th>
              <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                Amount
              </th>
              <th className="p-4 text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] text-right">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-[#ECECEC]">
            {rows.map((row) => (
              <tr
                key={row.id}
                onClick={() => router.push(`/invoice/${row.invoiceNumber}`)}
                className="hover:bg-[#F9FAFB] transition-colors cursor-pointer group"
              >
                <td className="p-4">
                  <span className="font-semibold text-[#181d1a] group-hover:text-[#008060] transition-colors">
                    {row.invoiceNumber}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-[#181d1a]">{row.clientName}</span>
                    <span className="text-[11px] text-[#6B7280]">{row.clientEmail}</span>
                  </div>
                </td>
                <td className="p-4 text-[#3e4944]">
                  {row.propertyTitle || "—"}
                </td>
                <td className="p-4 text-[#3e4944]">
                  {row.issueDate}
                </td>
                <td className="p-4 text-[#3e4944]">
                  {row.dueDate}
                </td>
                <td className="p-4 font-semibold text-[#181d1a]">
                  {row.amount}
                </td>
                <td className="p-4 text-right">
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
