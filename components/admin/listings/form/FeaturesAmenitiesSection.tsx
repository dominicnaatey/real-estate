"use client";

import type { ListingFormState } from "./types";

const FEATURES = [
  "High ceilings",
  "Garage",
  "Dining room",
  "Heating",
  "Outdoor Living Space",
  "Cooling",
  "Solar panels",
  "Basement",
  "Gym (privately owned)",
  "Swimming Pool (privately owned)",
  "Elevator (privately owned)",
  "Security Camera (Owner-installed)",
  "Private Rooftop Terrace",
  "Rooftop deck (Private)",
];

const AMENITIES = [
  "Swimming pool (Shared)",
  "Elevator (Shared)",
  "Gym (Shared)",
  "Managed Security System",
  "Common Rooftop Deck",
];

type Props = {
  state: Pick<ListingFormState, "features" | "setFeatures" | "amenities" | "setAmenities">;
};

function toggle(list: string[], item: string): string[] {
  return list.includes(item) ? list.filter((i) => i !== item) : [...list, item];
}

function CheckboxItem({
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
        className={`w-4 h-4 rounded border-2  flex-shrink-0 flex items-center justify-center transition-colors ${checked
          ? "bg-[#008060] border-[#008060]"
          : "border-2 border-[#E5E7EB] bg-[#E5E7EB] group-hover:border-gray-300"
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
      <span className="text-sm text-[#181d1a]">{label}</span>
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

export function FeaturesAmenitiesSection({ state }: Props) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Features &amp; Amenities
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Features */}
        <div className="space-y-2">
          <span className="block text-admin-label-color text-admin-label-size font-admin-label">
            Features Exclusive to the property
          </span>
          <div className="p-2 space-y-4">
            {FEATURES.map((feature) => (
              <CheckboxItem
                key={feature}
                label={feature}
                checked={state.features.includes(feature)}
                onChange={() => state.setFeatures(toggle(state.features, feature))}
              />
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="space-y-2">
          <span className="block text-admin-label-color text-admin-label-size font-admin-label">
            Amenities (Shared Building Features)
          </span>
          <div className="p-2 space-y-4">
            {AMENITIES.map((amenity) => (
              <CheckboxItem
                key={amenity}
                label={amenity}
                checked={state.amenities.includes(amenity)}
                onChange={() => state.setAmenities(toggle(state.amenities, amenity))}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
