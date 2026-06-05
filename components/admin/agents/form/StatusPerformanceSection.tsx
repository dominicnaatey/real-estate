"use client";

import type { AgentFormState } from "./types";

const labelCls = "block text-admin-label-color text-admin-label-size font-admin-label";

const STATUS_OPTIONS: Array<{ value: "Active" | "On Leave" | "Suspended"; label: string }> = [
  { value: "Active", label: "Active" },
  { value: "On Leave", label: "On Leave" },
  { value: "Suspended", label: "Suspended" },
];

type Props = {
  state: Pick<AgentFormState, "status" | "setStatus">;
};

export function StatusPerformanceSection({ state }: Props) {
  return (
    <div className="space-y-4 bg-white p-4 md:py-6 md:px-6 rounded-(--admin-form-card-radius) border border-[#ECECEC]">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Status
        </h3>
      </div>

      <fieldset className="space-y-1">
        <legend className="sr-only">Agent Status</legend>
        {STATUS_OPTIONS.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2.5 py-1.5 cursor-pointer"
          >
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
              state.status === opt.value ? "border-[#008060]" : "border-[#D1D5DB]"
            }`}>
              {state.status === opt.value && (
                <div className="w-2 h-2 rounded-full bg-[#008060]" />
              )}
            </div>
            <span className="text-sm text-[#181d1a]">{opt.label}</span>
            <input
              type="radio"
              name="agentStatus"
              value={opt.value}
              checked={state.status === opt.value}
              onChange={() => state.setStatus(opt.value)}
              className="sr-only"
            />
          </label>
        ))}
      </fieldset>
    </div>
  );
}
