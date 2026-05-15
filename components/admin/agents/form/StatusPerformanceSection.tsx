"use client";

import type { AgentFormState } from "./types";

const inputCls = "w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-admin-field-text outline-none focus:ring-2 focus:ring-[#008060]/20";
const labelCls = "block text-admin-label-color text-admin-label-size font-admin-label";

const STATUS_OPTIONS: Array<{ value: "Active" | "On Leave"; label: string }> = [
  { value: "Active", label: "Active" },
  { value: "On Leave", label: "On Leave" },
];

type Props = {
  state: Pick<AgentFormState,
    "status" | "setStatus" |
    "salesYtd" | "setSalesYtd" |
    "activeListings" | "setActiveListings"
  >;
};

export function StatusPerformanceSection({ state }: Props) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-6 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Status &amp; Performance
        </h3>
      </div>

      {/* Status */}
      <fieldset className="space-y-2">
        <legend className={labelCls}>Status</legend>
        <div className="grid grid-cols-2 gap-2">
          {STATUS_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className={`flex items-center gap-2 rounded-(--admin-field-radius) bg-(--admin-field-bg) px-3 py-2.5 text-sm cursor-pointer transition-colors ${
                state.status === opt.value
                  ? "ring-2 ring-[#008060]/20 text-[#008060]"
                  : "text-[#181d1a] hover:ring-2 hover:ring-[#008060]/10"
              }`}
            >
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                state.status === opt.value ? "border-[#008060]" : "border-[#D1D5DB]"
              }`}>
                {state.status === opt.value && (
                  <div className="w-2 h-2 rounded-full bg-[#008060]" />
                )}
              </div>
              <span className="font-medium">{opt.label}</span>
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
        </div>
      </fieldset>

      {/* Performance */}
      <div className="space-y-4">
        <label className="block space-y-2">
          <span className={`block ${labelCls}`}>Sales YTD</span>
          <input
            type="text"
            value={state.salesYtd}
            onChange={(e) => state.setSalesYtd(e.target.value)}
            className={inputCls}
            placeholder="eg. $4.2M"
          />
        </label>

        <label className="block space-y-2">
          <span className={`block ${labelCls}`}>Active Listings</span>
          <input
            type="number"
            value={state.activeListings}
            onChange={(e) => state.setActiveListings(e.target.value)}
            className={inputCls}
            min={0}
          />
        </label>
      </div>
    </div>
  );
}
