"use client";

import { UserPlus } from "lucide-react";
import { AdminDropdown } from "../../ui/AdminDropdown";
import type { LeadFormState, Priority } from "./types";

const labelCls = "block text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]";

const LEAD_SOURCES = [
  { value: "Website", label: "Website" },
  { value: "Referral", label: "Referral" },
  { value: "Social Media", label: "Social Media" },
  { value: "Cold Call", label: "Cold Call" },
  { value: "Open House", label: "Open House" },
  { value: "Portal", label: "Portal" },
];

const LEAD_STATUSES = [
  { value: "New", label: "New" },
  { value: "Contacted", label: "Contacted" },
  { value: "Viewing Scheduled", label: "Viewing Scheduled" },
  { value: "Offer Pending", label: "Offer Pending" },
  { value: "Closed Won", label: "Closed Won" },
  { value: "Closed Lost", label: "Closed Lost" },
];

const PRIORITY_LEVELS: Priority[] = ["Low", "Medium", "High"];

type Props = {
  state: Pick<LeadFormState,
    "leadSource" | "setLeadSource" |
    "leadStatus" | "setLeadStatus" |
    "priority" | "setPriority"
  >;
};

export function LeadDetailsSection({ state }: Props) {
  return (
    <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6 space-y-5">
      <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-4">
        <UserPlus className="w-4 h-4 text-[#3e4944]" />
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Lead Details
        </h3>
      </div>

      <AdminDropdown
        label="Lead Source"
        value={state.leadSource}
        onChange={state.setLeadSource}
        options={LEAD_SOURCES}
        placeholder="Select source..."
      />

      <AdminDropdown
        label="Lead Status"
        value={state.leadStatus}
        onChange={state.setLeadStatus}
        options={LEAD_STATUSES}
        placeholder="Select status..."
      />

      <fieldset className="space-y-2">
        <legend className={labelCls}>Priority Level</legend>
        <div className="flex items-center gap-4">
          {PRIORITY_LEVELS.map((lvl) => (
            <label key={lvl} className="flex items-center gap-1.5 cursor-pointer text-sm text-[#181d1a]">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                state.priority === lvl ? "border-[#008060]" : "border-[#D1D5DB]"
              }`}>
                {state.priority === lvl && <div className="w-2 h-2 rounded-full bg-[#008060]" />}
              </div>
              {lvl}
              <input
                type="radio"
                name="priority"
                value={lvl}
                checked={state.priority === lvl}
                onChange={() => state.setPriority(lvl)}
                className="sr-only"
              />
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
