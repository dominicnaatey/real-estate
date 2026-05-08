"use client";

import { TextField, RadioGroup } from "./fields";
import type { ListingFormState, ListingFormMode } from "./types";
import type { Property } from "../../../properties/types";

type BasicInformationSectionProps = {
  state: ListingFormState;
  mode: ListingFormMode;
};

export function BasicInformationSection({ state, mode }: BasicInformationSectionProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
      <h3 className="text-lg font-serif font-semibold text-[#181d1a] mb-6 border-b border-gray-200 pb-4">
        Basic Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          id="title"
          label="Property Name"
          value={state.title}
          onChange={state.setTitle}
          placeholder="e.g., The Belvedere Estate"
          required
        />

        <RadioGroup
          name="listingType"
          label="Listing Type"
          value={state.listingType}
          onChange={(next) => state.setListingType(next as Property["listingType"])}
          options={[
            { value: "For Sale", label: "For Sale" },
            { value: "For Rent", label: "For Rent" },
          ]}
          columns={2}
        />

        <div className="space-y-1 md:col-span-2">
          <TextField
            id="location"
            label="Location / Address"
            value={state.location}
            onChange={state.setLocation}
            placeholder="123 Luxury Lane, Beverly Hills, CA 90210"
            required
          />
        </div>

        <TextField
          id="price"
          label="Price"
          value={state.price}
          onChange={state.setPrice}
          placeholder="0"
          type="number"
          min={0}
          required
        />

        <TextField
          id="coverImage"
          label="Cover Image URL"
          value={state.coverImage}
          onChange={state.setCoverImage}
          type="url"
          placeholder="https://..."
          required
        />

        <div className="grid grid-cols-3 gap-4 md:col-span-2">
          <TextField
            id="beds"
            label="Bedrooms"
            value={state.beds}
            onChange={state.setBeds}
            type="number"
            min={0}
            required
          />
          <TextField
            id="baths"
            label="Bathrooms"
            value={state.baths}
            onChange={state.setBaths}
            type="number"
            min={0}
            step={0.5}
            required
          />
          <TextField
            id="sqft"
            label="Area (sqft)"
            value={state.sqft}
            onChange={state.setSqft}
            placeholder="0"
            required
          />
        </div>

        <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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
  );
}
