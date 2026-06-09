"use client";

import { AdminDropdown } from "@/components/admin/ui/AdminDropdown";
import type { InvoiceFormState } from "./types";
import type { InvoiceStatus } from "../../types";

type Props = {
  state: Pick<InvoiceFormState, "status" | "setStatus">;
};

export function InvoiceStatusSection({ state }: Props) {
  const statusOptions = [
    { label: "Draft", value: "Draft" },
    { label: "Pending", value: "Pending" },
    { label: "Paid", value: "Paid" },
    { label: "Overdue", value: "Overdue" },
  ];

  return (
    <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-5">
      <AdminDropdown
        label="Invoice Status"
        value={state.status}
        onChange={(v) => state.setStatus(v as InvoiceStatus)}
        options={statusOptions}
      />
    </div>
  );
}
