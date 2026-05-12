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
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-(--admin-heading-color) text-(--admin-heading-size) font-(--admin-heading-weight)">Basic Information</h3>
      </div>

      {/* Listing Type (Radio Buttons) */}
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 cursor-pointer group">
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${state.listingType === "For Sale" ? "border-[#008060]" : "border-gray-300 group-hover:border-gray-400"}`}>
            {state.listingType === "For Sale" && <div className="w-2.5 h-2.5 rounded-full bg-[#008060]" />}
          </div>
          <span className="text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">For Sale</span>
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
          <span className="text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">For Rent</span>
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
          <span className="block text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">Property Name</span>
          <input
            type="text"
            value={state.title}
            onChange={(e) => state.setTitle(e.target.value)}
            className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-(--admin-field-text-color) outline-none focus:ring-2 focus:ring-[#008060]/20"
            required
          />
        </label>

        {/* Location */}
        <label className="block space-y-2">
          <span className="block text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">Location</span>
          <input
            type="text"
            value={state.location}
            onChange={(e) => state.setLocation(e.target.value)}
            className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-(--admin-field-text-color) outline-none focus:ring-2 focus:ring-[#008060]/20"
            required
          />
        </label>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <label className="block space-y-2">
            <span className="block text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">Price &nbsp;[$ USD]</span>
            <input
              type="number"
              value={state.price}
              onChange={(e) => state.setPrice(e.target.value)}
              step={100}
              className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-(--admin-field-text-color) outline-none focus:ring-2 focus:ring-[#008060]/20"
              required
            />
          </label>

          <label className="block space-y-2">
            <span className="block text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">Bedrooms</span>
            <input
              type="number"
              value={state.beds}
              onChange={(e) => state.setBeds(e.target.value)}
              className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-(--admin-field-text-color) outline-none focus:ring-2 focus:ring-[#008060]/20"
              required
            />
          </label>

          <label className="block space-y-2">
            <span className="block text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">Bathrooms</span>
            <input
              type="number"
              value={state.baths}
              onChange={(e) => state.setBaths(e.target.value)}
              min={1}
              step={0.5}
              className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-(--admin-field-text-color) outline-none focus:ring-2 focus:ring-[#008060]/20"
              required
            />
          </label>

          <label className="block space-y-2">
            <span className="block text-(--admin-label-color) text-(--admin-label-size) font-(--admin-label-weight)">Area &nbsp;[Square Foot]</span>
            <input
              type="number"
              value={state.sqft}
              onChange={(e) => state.setSqft(e.target.value)}
              className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-(--admin-field-text-color) outline-none focus:ring-2 focus:ring-[#008060]/20"
              required
            />
          </label>
        </div>
      </div>
    </div>
  );
}
