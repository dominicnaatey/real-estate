"use client";

import { TextField } from "./fields";
import type { ListingFormState, ListingFormMode } from "./types";
import type { Property } from "../../../properties/types";

type BasicInformationSectionProps = {
  state: ListingFormState;
  mode: ListingFormMode;
};

export function BasicInformationSection({ state, mode }: BasicInformationSectionProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-xl font-medium text-[#181d1a]">Basic Information</h3>
      </div>

      {/* Listing Type (Radio Buttons) */}
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 cursor-pointer group">
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${state.listingType === "For Sale" ? "border-[#008060]" : "border-gray-300 group-hover:border-gray-400"}`}>
            {state.listingType === "For Sale" && <div className="w-2.5 h-2.5 rounded-full bg-[#008060]" />}
          </div>
          <span className="text-base text-gray-500 font-medium">For Sale</span>
          <input
            type="radio"
            name="listingType"
            value="For Sale"
            checked={state.listingType === "For Sale"}
            onChange={() => state.setListingType("For Sale")}
            className="hidden"
          />
        </label>
        
        <label className="flex items-center gap-2 cursor-pointer group">
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${state.listingType === "For Rent" ? "border-[#008060]" : "border-gray-300 group-hover:border-gray-400"}`}>
            {state.listingType === "For Rent" && <div className="w-2.5 h-2.5 rounded-full bg-[#008060]" />}
          </div>
          <span className="text-base text-gray-500 font-medium">For Rent</span>
          <input
            type="radio"
            name="listingType"
            value="For Rent"
            checked={state.listingType === "For Rent"}
            onChange={() => state.setListingType("For Rent")}
            className="hidden"
          />
        </label>
      </div>

      <div className="space-y-6">
        {/* Property Name */}
        <label className="block space-y-2">
          <span className="block text-[15px] font-semibold text-gray-600">Property Name</span>
          <input
            type="text"
            value={state.title}
            onChange={(e) => state.setTitle(e.target.value)}
            className="w-full h-11 px-4 rounded-xl bg-[#F7F7F7] text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20"
            required
          />
        </label>

        {/* Location */}
        <label className="block space-y-2">
          <span className="block text-[15px] font-semibold text-gray-600">Location</span>
          <input
            type="text"
            value={state.location}
            onChange={(e) => state.setLocation(e.target.value)}
            className="w-full h-11 px-4 rounded-xl bg-[#F7F7F7] text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20"
            required
          />
        </label>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <label className="block space-y-2">
            <span className="block text-[15px] font-semibold text-gray-600">Price &nbsp;[$ USD]</span>
            <input
              type="number"
              value={state.price}
              onChange={(e) => state.setPrice(e.target.value)}
              min={0}
              className="w-full h-11 px-4 rounded-xl bg-[#F7F7F7] text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20"
              required
            />
          </label>

          <label className="block space-y-2">
            <span className="block text-[15px] font-semibold text-gray-600">Bedrooms</span>
            <input
              type="number"
              value={state.beds}
              onChange={(e) => state.setBeds(e.target.value)}
              min={0}
              className="w-full h-11 px-4 rounded-xl bg-[#F7F7F7] text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20"
              required
            />
          </label>

          <label className="block space-y-2">
            <span className="block text-[15px] font-semibold text-gray-600">Bathrooms</span>
            <input
              type="number"
              value={state.baths}
              onChange={(e) => state.setBaths(e.target.value)}
              min={0}
              step={0.5}
              className="w-full h-11 px-4 rounded-xl bg-[#F7F7F7] text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20"
              required
            />
          </label>

          <label className="block space-y-2">
            <span className="block text-[15px] font-semibold text-gray-600">Area &nbsp;[Square Foot]</span>
            <input
              type="number"
              value={state.sqft}
              onChange={(e) => state.setSqft(e.target.value)}
              className="w-full h-11 px-4 rounded-xl bg-[#F7F7F7] text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20"
              required
            />
          </label>
        </div>

        {/* Existing hidden/extra fields to not break form logic */}
        <div className="pt-8 mt-8 border-t border-[#ECECEC] space-y-6">
          <TextField
            id="coverImage"
            label="Cover Image URL (Additional)"
            value={state.coverImage}
            onChange={state.setCoverImage}
            type="url"
            placeholder="https://..."
            required
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={state.isFeatured}
                onChange={(e) => state.setIsFeatured(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-[#008060] focus:ring-[#008060]/30"
              />
              <span className="text-sm text-[#181d1a]">Featured listing</span>
            </label>

            <TextField
              id="listingId"
              label="Listing ID"
              value={state.id}
              onChange={state.setId}
              placeholder="0"
              type="number"
              min={1}
              required
              disabled={mode === "edit"}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
