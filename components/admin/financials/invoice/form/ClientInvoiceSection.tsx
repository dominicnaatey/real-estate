"use client";

import type { InvoiceFormState } from "./types";
import { AdminDropdown } from "../../ui/AdminDropdown";

const inputCls = "w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20";
const labelCls = "block text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5";

const CLIENTS = [
  { value: "Alexander Wright", label: "Alexander Wright" },
  { value: "Sarah Johnson", label: "Sarah Johnson" },
  { value: "Michael Chen", label: "Michael Chen" },
];

const CURRENCIES = [
  { value: "USD", label: "USD ($)" },
  { value: "GBP", label: "GBP (£)" },
  { value: "EUR", label: "EUR (€)" },
];

export function ClientInvoiceSection({ state }: { state: InvoiceFormState }) {
  return (
    <div className="space-y-6 bg-white p-6 rounded-(--admin-form-card-radius) border-admin border-admin-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Client Information */}
        <div className="space-y-4">
          <p className={labelCls}>Client Information</p>
          <AdminDropdown
            label="Select Client or Lead"
            value={state.client}
            onChange={state.setClient}
            options={CLIENTS}
          />
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
            <AdminDropdown
              label="Currency"
              value={state.currency}
              onChange={state.setCurrency}
              options={CURRENCIES}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
