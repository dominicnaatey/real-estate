import React from "react";
import { Invoice } from "./types";

interface InvoiceTableProps {
  invoice: Invoice;
}

export function InvoiceTable({ invoice }: InvoiceTableProps) {
  return (
    <section className="mb-10 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-[#202E3B]">
            <th className="py-4 text-[11px] font-semibold uppercase tracking-wider text-[#202E3B]">Description</th>
            <th className="py-4 text-[11px] font-semibold uppercase tracking-wider text-[#202E3B] text-center">Qty</th>
            <th className="py-4 text-[11px] font-semibold uppercase tracking-wider text-[#202E3B] text-right">Unit Price</th>
            <th className="py-4 text-[11px] font-semibold uppercase tracking-wider text-[#202E3B] text-right">Amount</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {invoice.items.map((item, index) => (
            <tr key={index} className="border-b border-[#E1E3E5]">
              <td className="py-5 pr-4">
                <p className="font-semibold text-[#202E3B]">{item.description}</p>
                {item.details && (
                  <p className="text-xs text-[#6D7175] mt-1 leading-relaxed">{item.details}</p>
                )}
              </td>
              <td className="py-5 text-center text-[#6D7175]">{item.quantity}</td>
              <td className="py-5 text-right text-[#6D7175]">
                {invoice.currency.symbol}{item.unitPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </td>
              <td className="py-5 text-right font-medium text-[#202E3B]">
                {invoice.currency.symbol}{item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
