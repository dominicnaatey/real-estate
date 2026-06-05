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
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius) border border-[#ECECEC]">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">Basic Information</h3>
      </div>

      <div className="space-y-6">
        {/* Property Name */}
        <label className="block space-y-2">
          <span className="block text-admin-label-color text-admin-label-size font-admin-label">Property Name</span>
          <input
            type="text"
            value={state.title}
            onChange={(e) => state.setTitle(e.target.value)}
            className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-admin-field-text border border-[#ECECEC] outline-none focus:ring-2 focus:ring-[#008060]/20"
            placeholder="eg. Luxury 3+ Den Executive Condo with Panoramic City Views"
            required
          />
        </label>

        {/* Location */}
        <label className="block space-y-2">
          <span className="block text-admin-label-color text-admin-label-size font-admin-label">Location</span>
          <input
            type="text"
            value={state.location}
            onChange={(e) => state.setLocation(e.target.value)}
            className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-admin-field-text border border-[#ECECEC] outline-none focus:ring-2 focus:ring-[#008060]/20"
            placeholder="Downtown Toronto, ON, Canada"
            required
          />
        </label>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <label className="block space-y-2">
            <span className="block text-admin-label-color text-admin-label-size font-admin-label">Bedrooms</span>
            <input
              type="number"
              value={state.beds}
              onChange={(e) => state.setBeds(e.target.value)}
              className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-admin-field-text border border-[#ECECEC] outline-none focus:ring-2 focus:ring-[#008060]/20"
              required
            />
          </label>

          <label className="block space-y-2">
            <span className="block text-admin-label-color text-admin-label-size font-admin-label">Bathrooms</span>
            <input
              type="number"
              value={state.baths}
              onChange={(e) => state.setBaths(e.target.value)}
              min={1}
              step={0.5}
              className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-admin-field-text border border-[#ECECEC] outline-none focus:ring-2 focus:ring-[#008060]/20"
              required
            />
          </label>

          <label className="block space-y-2">
            <span className="block text-admin-label-color text-admin-label-size font-admin-label">Area &nbsp;[Square Foot]</span>
            <input
              type="number"
              value={state.sqft}
              onChange={(e) => state.setSqft(e.target.value)}
              className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-admin-field-text border border-[#ECECEC] outline-none focus:ring-2 focus:ring-[#008060]/20"
              required
            />
          </label>
        </div>
      </div>
    </div>
  );
}
