"use client";

import { useEffect, useState } from "react";
import type { ListingFormState } from "./types";

type LocationDetailsSectionProps = {
  state: Pick<ListingFormState, "lat" | "setLat" | "lng" | "setLng">;
};

export function LocationDetailsSection({ state }: LocationDetailsSectionProps) {
  const [inputValue, setInputValue] = useState("");

  // Sync initial state if available
  useEffect(() => {
    if (state.lat && state.lng && !inputValue) {
      setInputValue(`${state.lat}, ${state.lng}`);
    }
  }, [state.lat, state.lng]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    
    if (val.includes(",")) {
      const [latStr, lngStr] = val.split(",");
      const lat = latStr.trim();
      const lng = lngStr.trim();
      if (lat && lng) {
        state.setLat(lat);
        state.setLng(lng);
      }
    } else {
      const parts = val.trim().split(/\s+/);
      if (parts.length === 2) {
        state.setLat(parts[0]);
        state.setLng(parts[1]);
      } else if (!val) {
        state.setLat("");
        state.setLng("");
      }
    }
  };

  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Location Details
        </h3>
      </div>
      
      <div className="space-y-3 pt-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="eg. 5.620841178595, -0.11997102794635"
          className="w-full h-12 px-4 bg-(--admin-field-bg) rounded-(--admin-field-radius) outline-none text-[15px] placeholder-[#9CA3AF] text-admin-field-text focus:ring-2 focus:ring-[#008060]/20"
        />
        <span className="block text-[15px] font-medium text-[#181d1a]">
          Coordinates
        </span>
      </div>
    </div>
  );
}
