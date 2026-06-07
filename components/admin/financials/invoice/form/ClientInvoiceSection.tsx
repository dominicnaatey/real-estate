"use client";

import type { InvoiceFormState } from "./types";

const inputCls = "w-full h-10 px-3 rounded-(--admin-field-radius) bg-white border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 focus:border-[#008060]/40";
const labelCls = "block text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-3";

const CLIENTS = [
  "Eleanor Pemberton - 142 Park Lane",
  "Marcus Aurelius - Villa Del Mar",
  "Sarah Jenkins - The Heights Loft",
  "Alexander Wright - Penthouse 4B",
];

const CURRENCIES = [
  { value: "GBP", label: "GBP (£)" },
  { value: "USD", label: "USD ($)" },
  { value: "EUR", label: "EUR (€)" },
];

type Props = {
  state: Pick<InvoiceFormState,
    "client" | "setClient" |
    "issueDate" | "setIssueDate" |
    "dueDate" | "setDueDate" |
    "currency" | "setCurrency"
  >;
};

export function ClientInvoiceSection({ state }: Props) {
  return (
    <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        {/* Client Information */}
        <div className="space-y-4">
          <p className={labelCls}>Client Information</p>
          <div>
            <label className="block text-sm font-medium text-[#181d1a] mb-1">Select Client or Lead</label>
            <select
              value={state.client}
              onChange={(e) => state.setClient(e.target.value)}
              className="w-full h-10 px-3 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 appearance-none cursor-pointer"
            >
              {CLIENTS.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="p-4 bg-[#F9FAFB] rounded-(--admin-field-radius) border border-[#ECECEC]">
            <p className="text-sm font-semibold text-[#181d1a]">Alexander Wright</p>
            <p className="text-xs text-[#6B7280] mt-0.5">a.wright@wright-holdings.co.uk</p>
            <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
              12 Knightsbridge Gardens,<br />London, SW1X 7LY
            </p>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="space-y-4">
          <p className={labelCls}>Invoice Details</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#181d1a] mb-1">Invoice Number</label>
              <input
                type="text"
                value="INV-2024-0082"
                readOnly
                className="w-full h-10 px-3 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-[#9CA3AF] outline-none cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#181d1a] mb-1">Issue Date</label>
              <input type="date" value={state.issueDate} onChange={(e) => state.setIssueDate(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#181d1a] mb-1">Due Date</label>
              <input type="date" value={state.dueDate} onChange={(e) => state.setDueDate(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#181d1a] mb-1">Currency</label>
              <select
                value={state.currency}
                onChange={(e) => state.setCurrency(e.target.value)}
                className="w-full h-10 px-3 rounded-(--admin-field-radius) bg-white border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 appearance-none cursor-pointer"
              >
                {CURRENCIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
