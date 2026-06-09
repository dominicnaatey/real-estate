"use client";

import { Toggle } from "./Toggle";
import type { InvoiceFormState } from "./types";
import { AdminDropdown } from "@/components/admin/ui/AdminDropdown";
import type { InvoiceStatus } from "../../types";

type Props = {
  state: Pick<InvoiceFormState,
    "sendEmail" | "setSendEmail" |
    "onlinePayment" | "setOnlinePayment" |
    "hideTotals" | "setHideTotals" |
    "status" | "setStatus"
  >;
};

export function InvoiceOptionsSection({ state }: Props) {
  const options = [
    { label: "Send via Email automatically", value: state.sendEmail, onChange: () => state.setSendEmail(!state.sendEmail) },
    { label: "Enable online payment", value: state.onlinePayment, onChange: () => state.setOnlinePayment(!state.onlinePayment) },
    { label: "Hide totals from summary", value: state.hideTotals, onChange: () => state.setHideTotals(!state.hideTotals) },
  ];

  const statusOptions = [
    { label: "Draft", value: "Draft" },
    { label: "Pending", value: "Pending" },
    { label: "Paid", value: "Paid" },
    { label: "Overdue", value: "Overdue" },
  ];

  return (
    <div className="space-y-6">
      {/* Invoice Status */}
      <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-5">
        <AdminDropdown
          label="Invoice Status"
          value={state.status}
          onChange={(v) => state.setStatus(v as InvoiceStatus)}
          options={statusOptions}
        />
      </div>

      {/* Invoice Options */}
      <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-5 space-y-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">Invoice Options</p>
        <div className="space-y-4">
          {options.map(({ label, value, onChange }) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-sm text-[#181d1a]">{label}</span>
              <Toggle checked={value} onChange={onChange} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
