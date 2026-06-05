"use client";

import { FileText } from "lucide-react";
import { AdminDropdown } from "../../ui/AdminDropdown";
import type { LeadFormState } from "./types";

const inputCls = "w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-admin-field-text outline-none focus:ring-2 focus:ring-[#008060]/20";
const labelCls = "block text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]";

const CONTACT_METHODS = [
  { value: "Email", label: "Email" },
  { value: "Phone", label: "Phone" },
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "In Person", label: "In Person" },
];

type Props = {
  state: Pick<LeadFormState,
    "fullName" | "setFullName" |
    "email" | "setEmail" |
    "phone" | "setPhone" |
    "contactMethod" | "setContactMethod"
  >;
};

export function ContactInfoSection({ state }: Props) {
  return (
    <section className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6">
      <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-4 mb-6">
        <FileText className="w-4 h-4 text-[#3e4944]" />
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Contact Information
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="space-y-1.5 block">
          <span className={labelCls}>Full Name</span>
          <input
            type="text"
            value={state.fullName}
            onChange={(e) => state.setFullName(e.target.value)}
            className={inputCls}
            placeholder="e.g. Alexander Sterling"
            required
          />
        </label>

        <label className="space-y-1.5 block">
          <span className={labelCls}>Email Address</span>
          <input
            type="email"
            value={state.email}
            onChange={(e) => state.setEmail(e.target.value)}
            className={inputCls}
            placeholder="alexander@sterling-estates.com"
            required
          />
        </label>

        <label className="space-y-1.5 block">
          <span className={labelCls}>Phone Number</span>
          <input
            type="tel"
            value={state.phone}
            onChange={(e) => state.setPhone(e.target.value)}
            className={inputCls}
            placeholder="+1 (555) 000-0000"
          />
        </label>

        <AdminDropdown
          label="Preferred Contact Method"
          value={state.contactMethod}
          onChange={state.setContactMethod}
          options={CONTACT_METHODS}
          placeholder="Select method..."
        />
      </div>
    </section>
  );
}
