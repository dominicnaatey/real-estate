"use client";

import type { ListingFormState } from "./types";

type StatusSectionProps = {
  state: Pick<ListingFormState, "status" | "setStatus">;
};

const STATUS_OPTIONS = ["Draft", "Published", "Sold", "Rented", "Suspended"] as const;

export function StatusSection({ state }: StatusSectionProps) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading font-admin-heading">
          Status
        </h3>
      </div>
      
      <div className="space-y-4 pt-2">
        {STATUS_OPTIONS.map((option) => (
          <label key={option} className="flex items-center gap-3 cursor-pointer group">
            <div
              className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${
                state.status === option
                  ? "border-[#008060]"
                  : "bg-[#F3F4F6] border-transparent"
              }`}
            >
              {state.status === option && (
                <div className="w-2 h-2 rounded-full bg-[#008060]" />
              )}
            </div>
            <span className="text-[15px] font-medium text-[#181d1a]">{option}</span>
            <input
              type="radio"
              name="status"
              value={option}
              checked={state.status === option}
              onChange={() => state.setStatus(option)}
              className="sr-only"
              aria-label={option}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
