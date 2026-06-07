"use client";

import { TRANSACTION_TYPES, PAYMENT_METHODS } from "./types";
import type { TransactionFormState } from "./types";

const inputCls = "w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20";
const labelCls = "block text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5";

const CURRENCIES = [
  { value: "USD", label: "USD ($)" },
  { value: "GBP", label: "GBP (£)" },
  { value: "EUR", label: "EUR (€)" },
];

const TYPE_COLORS: Record<string, string> = {
  Income:     "border-[#008060] bg-[#E6F4F0] text-[#005C45]",
  Commission: "border-[#008060] bg-[#E6F4F0] text-[#005C45]",
  Expense:    "border-red-400 bg-red-50 text-red-700",
  Refund:     "border-amber-400 bg-amber-50 text-amber-700",
};

type Props = { state: TransactionFormState };

export function TransactionDetailsSection({ state }: Props) {
  const isExpenseType = state.type === "Expense" || state.type === "Refund";

  return (
    <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6 space-y-5">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] border-b border-[#ECECEC] pb-4">
        Transaction Details
      </p>

      {/* Type */}
      <div>
        <p className={labelCls}>Type</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {TRANSACTION_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => state.setType(t)}
              className={`py-2 px-3 rounded-(--admin-field-radius) text-sm font-medium border transition-colors ${
                state.type === t
                  ? TYPE_COLORS[t]
                  : "border-[#ECECEC] bg-(--admin-field-bg) text-[#3e4944] hover:border-[#008060]/30"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Date + Amount */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Date</label>
          <input
            type="date"
            value={state.date}
            onChange={(e) => state.setDate(e.target.value)}
            className={inputCls}
            required
          />
        </div>
        <div>
          <label className={labelCls}>Amount</label>
          <div className="flex gap-2">
            <select
              value={state.currency}
              onChange={(e) => state.setCurrency(e.target.value)}
              className="h-11 px-3 rounded-(--admin-field-radius) bg-white border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 appearance-none cursor-pointer w-28"
            >
              {CURRENCIES.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
            <input
              type="number"
              value={state.amount}
              onChange={(e) => state.setAmount(e.target.value)}
              className={`${inputCls} flex-1`}
              placeholder="0.00"
              min={0}
              step={0.01}
              required
            />
          </div>
        </div>
      </div>

      {/* Party + Property */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>{isExpenseType ? "Paid To" : "Received From"}</label>
          <input
            type="text"
            value={state.party}
            onChange={(e) => state.setParty(e.target.value)}
            className={inputCls}
            placeholder="Client or company name..."
            required
          />
        </div>
        <div>
          <label className={labelCls}>Property (optional)</label>
          <input
            type="text"
            value={state.property}
            onChange={(e) => state.setProperty(e.target.value)}
            className={inputCls}
            placeholder="eg. Penthouse 4B, The Apex"
          />
        </div>
      </div>

      {/* Method + Reference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Payment Method</label>
          <select
            value={state.method}
            onChange={(e) => state.setMethod(e.target.value as typeof PAYMENT_METHODS[number])}
            className="w-full h-11 px-3 rounded-(--admin-field-radius) bg-white border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 appearance-none cursor-pointer"
          >
            {PAYMENT_METHODS.map((m) => <option key={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Reference / Invoice # (optional)</label>
          <input
            type="text"
            value={state.reference}
            onChange={(e) => state.setReference(e.target.value)}
            className={inputCls}
            placeholder="eg. INV-2024-0082"
          />
        </div>
      </div>
    </div>
  );
}
