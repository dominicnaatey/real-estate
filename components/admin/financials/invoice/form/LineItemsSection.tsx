"use client";

import { Plus, Trash2 } from "lucide-react";
import type { InvoiceFormState, LineItem } from "./types";

type Props = {
  state: Pick<InvoiceFormState, "lineItems" | "setLineItems" | "currency">;
};

const CURRENCY_SYMBOLS: Record<string, string> = { GBP: "£", EUR: "€", USD: "$" };

export function LineItemsSection({ state }: Props) {
  const symbol = CURRENCY_SYMBOLS[state.currency] ?? "$";

  function addItem() {
    state.setLineItems([
      ...state.lineItems,
      { id: Date.now(), description: "", note: "", qty: 1, unitPrice: "0.00" },
    ]);
  }

  function removeItem(id: number) {
    state.setLineItems(state.lineItems.filter((item) => item.id !== id));
  }

  function updateItem(id: number, field: keyof LineItem, value: string | number) {
    state.setLineItems(
      state.lineItems.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }

  return (
    <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) overflow-hidden">
      <div className="px-6 py-4 border-b border-[#ECECEC] flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">Services &amp; Items</p>
        <button
          type="button"
          onClick={addItem}
          className="flex items-center gap-1 text-sm font-semibold text-[#008060] hover:text-[#00654b] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Service Line
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#F9FAFB]">
            <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">Description</th>
            <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] w-20">Qty</th>
            <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] w-36">Unit Price</th>
            <th className="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] w-32">Amount</th>
            <th className="px-4 py-3 w-10" />
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F3F4F6]">
          {state.lineItems.map((item) => {
            const amount = item.qty * parseFloat(item.unitPrice || "0");
            return (
              <tr key={item.id}>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateItem(item.id, "description", e.target.value)}
                    className="w-full border-none p-0 text-sm font-medium text-[#181d1a] outline-none bg-transparent"
                    placeholder="Service description..."
                  />
                  <input
                    type="text"
                    value={item.note}
                    onChange={(e) => updateItem(item.id, "note", e.target.value)}
                    className="w-full border-none p-0 text-xs text-[#6B7280] outline-none bg-transparent mt-1"
                    placeholder="Optional note..."
                  />
                </td>
                <td className="px-4 py-4">
                  <input
                    type="number"
                    value={item.qty}
                    min={1}
                    onChange={(e) => updateItem(item.id, "qty", Number(e.target.value))}
                    className="w-16 border border-[#ECECEC] rounded px-2 py-1 text-sm text-center outline-none focus:ring-2 focus:ring-[#008060]/20"
                  />
                </td>
                <td className="px-4 py-4">
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-[#9CA3AF]">{symbol}</span>
                    <input
                      type="text"
                      value={item.unitPrice}
                      onChange={(e) => updateItem(item.id, "unitPrice", e.target.value)}
                      className="w-full border border-[#ECECEC] rounded pl-5 pr-2 py-1 text-sm outline-none focus:ring-2 focus:ring-[#008060]/20"
                    />
                  </div>
                </td>
                <td className="px-4 py-4 text-right text-sm font-semibold text-[#181d1a]">
                  {symbol}{amount.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-4 text-center">
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-[#9CA3AF] hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="px-6 py-4">
        <button
          type="button"
          onClick={addItem}
          className="w-full py-3 border-2 border-dashed border-[#ECECEC] rounded-(--admin-field-radius) text-sm text-[#9CA3AF] hover:border-[#008060]/40 hover:text-[#008060] transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add another item
        </button>
      </div>
    </div>
  );
}
