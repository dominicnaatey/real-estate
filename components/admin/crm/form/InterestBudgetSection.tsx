"use client";

import { Home } from "lucide-react";
import type { LeadFormState } from "./types";

const inputCls = "w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-admin-field-text outline-none focus:ring-2 focus:ring-[#008060]/20";
const labelCls = "block text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]";

const PROPERTY_TYPES = [
  { value: "Condo", label: "Condo", icon: "🏢" },
  { value: "Single Family", label: "Single Family", icon: "🏡" },
  { value: "Land", label: "Land", icon: "🌿" },
  { value: "Commercial", label: "Commercial", icon: "🏬" },
];

type Props = {
  state: Pick<LeadFormState,
    "propertyType" | "setPropertyType" |
    "minBudget" | "setMinBudget" |
    "maxBudget" | "setMaxBudget" |
    "preferredLocations" | "setPreferredLocations"
  >;
};

export function InterestBudgetSection({ state }: Props) {
  return (
    <section className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6">
      <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-4 mb-6">
        <Home className="w-4 h-4 text-[#3e4944]" />
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Interest &amp; Budget
        </h3>
      </div>

      {/* Property Type Pills */}
      <div className="space-y-2 mb-5">
        <span className={labelCls}>Property Type Interest</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {PROPERTY_TYPES.map((pt) => (
            <button
              key={pt.value}
              type="button"
              onClick={() => state.setPropertyType(pt.value)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-(--admin-field-radius) text-sm font-medium border transition-colors ${
                state.propertyType === pt.value
                  ? "bg-[#E6F4F0] border-[#008060] text-[#005C45]"
                  : "bg-(--admin-field-bg) border-[#ECECEC] text-[#3e4944] hover:border-[#008060]/40"
              }`}
            >
              <span>{pt.icon}</span>
              {pt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <label className="space-y-1.5 block">
          <span className={labelCls}>Minimum Budget</span>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9CA3AF]">$</span>
            <input
              type="text"
              value={state.minBudget}
              onChange={(e) => state.setMinBudget(e.target.value)}
              className={`${inputCls} pl-8`}
              placeholder="500,000"
            />
          </div>
        </label>

        <label className="space-y-1.5 block">
          <span className={labelCls}>Maximum Budget</span>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9CA3AF]">$</span>
            <input
              type="text"
              value={state.maxBudget}
              onChange={(e) => state.setMaxBudget(e.target.value)}
              className={`${inputCls} pl-8`}
              placeholder="2,500,000"
            />
          </div>
        </label>
      </div>

      <label className="space-y-1.5 block">
        <span className={labelCls}>Preferred Locations</span>
        <input
          type="text"
          value={state.preferredLocations}
          onChange={(e) => state.setPreferredLocations(e.target.value)}
          className={inputCls}
          placeholder="e.g. Aspen, Beverly Hills, Miami Beach"
        />
      </label>
    </section>
  );
}
