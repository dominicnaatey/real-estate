"use client";

import { Toggle } from "./Toggle";
import type { InvoiceFormState } from "./types";

type Props = {
  state: Pick<InvoiceFormState,
    "sendEmail" | "setSendEmail" |
    "onlinePayment" | "setOnlinePayment" |
    "hideTotals" | "setHideTotals"
  >;
};

export function InvoiceOptionsSection({ state }: Props) {
  const options = [
    { label: "Send via Email automatically", value: state.sendEmail, onChange: () => state.setSendEmail(!state.sendEmail) },
    { label: "Enable online payment", value: state.onlinePayment, onChange: () => state.setOnlinePayment(!state.onlinePayment) },
    { label: "Hide totals from summary", value: state.hideTotals, onChange: () => state.setHideTotals(!state.hideTotals) },
  ];

  return (
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
  );
}
