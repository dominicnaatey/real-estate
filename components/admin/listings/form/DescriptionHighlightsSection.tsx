"use client";

import { Bold, Italic, List } from "lucide-react";
import { TextField, TextAreaField, RadioGroup } from "./fields";
import type { RadioOption } from "./fields";
import type { ListingFormState } from "./types";

type DescriptionHighlightsSectionProps = {
  state: ListingFormState;
};

const outdoorSpaceOptions: Array<RadioOption<string>> = [
  { value: "", label: "None" },
  { value: "Balcony", label: "Balcony" },
  { value: "Terrace", label: "Terrace" },
  { value: "Garden", label: "Garden" },
  { value: "Full Yard", label: "Full Yard" },
];

export function DescriptionHighlightsSection({ state }: DescriptionHighlightsSectionProps) {
  return (
    <div className="bg-white border border-admin-border rounded-2xl p-5 hover:shadow-admin-card-hover transition-shadow">
      <h3 className="text-lg font-serif font-semibold text-[#181d1a] mb-6 border-b border-admin-border pb-4">
        Description &amp; Highlights
      </h3>
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] block">
            Property Description
          </span>
          <div className="border border-admin-border rounded bg-white">
            <div className="bg-[#F9FAFB] border-b border-admin-border p-2 flex gap-2 rounded-t">
              <button
                type="button"
                aria-label="Bold"
                className="p-1 hover:bg-[#d6dbd7] rounded text-[#3e4944]"
              >
                <Bold className="w-[18px] h-[18px]" />
              </button>
              <button
                type="button"
                aria-label="Italic"
                className="p-1 hover:bg-[#d6dbd7] rounded text-[#3e4944]"
              >
                <Italic className="w-[18px] h-[18px]" />
              </button>
              <button
                type="button"
                aria-label="List"
                className="p-1 hover:bg-[#d6dbd7] rounded text-[#3e4944]"
              >
                <List className="w-[18px] h-[18px]" />
              </button>
            </div>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={state.description}
              onChange={(e) => state.setDescription(e.target.value)}
              placeholder="Enter a detailed description of the property..."
              className="w-full p-3 border-none text-sm focus:ring-0 outline-none resize-y text-[#181d1a] placeholder:text-[#6e7a73] rounded-b admin-field-radius bg-[var(--admin-field-bg)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <TextField
            id="highlightBuildingYear"
            label="Building Year"
            value={state.highlightBuildingYear}
            onChange={state.setHighlightBuildingYear}
            placeholder="YYYY"
            type="number"
            min={0}
          />
          <TextField
            id="highlightHoa"
            label="HOA Fees (/mo)"
            value={state.highlightHoa}
            onChange={state.setHighlightHoa}
            placeholder="0.00"
          />
          <TextField
            id="highlightParking"
            label="Parking Spaces"
            value={state.highlightParking}
            onChange={state.setHighlightParking}
            placeholder="0"
          />
          <div className="md:col-span-4">
            <RadioGroup
              name="outdoorSpace"
              label="Outdoor Space"
              value={state.highlightGarden}
              onChange={state.setHighlightGarden}
              options={outdoorSpaceOptions}
              columns={4}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TextField
            id="highlightType"
            label="Property Type"
            value={state.highlightType}
            onChange={state.setHighlightType}
            placeholder="e.g. Villa"
          />
          <TextField
            id="highlightOutside"
            label="View / Outside"
            value={state.highlightOutside}
            onChange={state.setHighlightOutside}
            placeholder="e.g. Ocean View"
          />
          <div className="grid grid-cols-2 gap-4 lg:col-span-1">
            <TextField
              id="lat"
              label="Latitude"
              value={state.lat}
              onChange={state.setLat}
              placeholder="0.00"
              type="number"
            />
            <TextField
              id="lng"
              label="Longitude"
              value={state.lng}
              onChange={state.setLng}
              placeholder="0.00"
              type="number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TextAreaField
            id="features"
            label="Features (comma separated)"
            value={state.featuresText}
            onChange={state.setFeaturesText}
            placeholder="e.g. Garage, Swimming Pool, Garden"
            rows={4}
          />
          <TextAreaField
            id="amenities"
            label="Amenities (comma separated)"
            value={state.amenitiesText}
            onChange={state.setAmenitiesText}
            placeholder="e.g. Open Plan, Guest Suite, Spa Bath"
            rows={4}
          />
        </div>
      </div>
    </div>
  );
}
