"use client";

import type { ListingFormState } from "./types";

type PricingTypeSectionProps = {
  state: Pick<ListingFormState, "listingType" | "setListingType" | "price" | "setPrice">;
};

export function PricingTypeSection({ state }: PricingTypeSectionProps) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius) border border-[#ECECEC]">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Pricing &amp; Type
        </h3>
      </div>

      <div className="space-y-6 pt-2">
        {/* Listing Type */}
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${state.listingType === "For Sale" ? "border-[#008060]" : "bg-[#F3F4F6] border-transparent"}`}>
              {state.listingType === "For Sale" && <div className="w-2 h-2 rounded-full bg-[#008060]" />}
            </div>
            <span className="text-[15px] font-medium text-[#181d1a]">For Sale</span>
            <input
              type="radio"
              name="listingType"
              value="For Sale"
              checked={state.listingType === "For Sale"}
              onChange={() => state.setListingType("For Sale")}
              className="sr-only"
            />
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${state.listingType === "For Rent" ? "border-[#008060]" : "bg-[#F3F4F6] border-transparent"}`}>
              {state.listingType === "For Rent" && <div className="w-2 h-2 rounded-full bg-[#008060]" />}
            </div>
            <span className="text-[15px] font-medium text-[#181d1a]">For Rent</span>
            <input
              type="radio"
              name="listingType"
              value="For Rent"
              checked={state.listingType === "For Rent"}
              onChange={() => state.setListingType("For Rent")}
              className="sr-only"
            />
          </label>
        </div>

        {/* Price Input */}
        <label className="block space-y-2">
          <span className="block text-admin-label-color text-[15px] font-admin-label">
            {state.listingType === "For Rent" ? "Monthly Rent [$ USD]" : "Price [$ USD]"}
          </span>
          <input
            type="number"
            value={state.price}
            onChange={(e) => state.setPrice(e.target.value)}
            step={100}
            className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-admin-field-text border border-[#ECECEC] outline-none focus:ring-2 focus:ring-[#008060]/20"
            required
          />
        </label>
      </div>
    </div>
  );
}
