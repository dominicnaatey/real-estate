"use client";

import type { ListingFormState } from "./types";

type OptionsSectionProps = {
  state: Pick<ListingFormState, "isFeatured" | "setIsFeatured" | "isPremium" | "setIsPremium" | "isNewlyBuilt" | "setIsNewlyBuilt">;
};

function CheckboxOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
          checked
            ? "bg-[#008060] border-[#008060]"
            : "bg-[#F3F4F6] border-transparent"
        }`}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="text-[15px] font-medium text-[#181d1a]">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
        aria-label={label}
      />
    </label>
  );
}

export function OptionsSection({ state }: OptionsSectionProps) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius) border border-[#ECECEC]">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Options
        </h3>
      </div>
      
      <div className="space-y-4 pt-2">
        <CheckboxOption
          label="Featured"
          checked={state.isFeatured}
          onChange={() => state.setIsFeatured(!state.isFeatured)}
        />
        <CheckboxOption
          label="Premium Listing"
          checked={state.isPremium}
          onChange={() => state.setIsPremium(!state.isPremium)}
        />
        <CheckboxOption
          label="Newly Built"
          checked={state.isNewlyBuilt}
          onChange={() => state.setIsNewlyBuilt(!state.isNewlyBuilt)}
        />
      </div>
    </div>
  );
}
