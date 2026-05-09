"use client";

import { useRef, useEffect } from "react";
import { Bold, Italic, List, ChevronDown, Info } from "lucide-react";
import { TextField, TextAreaField } from "./fields";
import type { ListingFormState } from "./types";

type DescriptionHighlightsSectionProps = {
  state: ListingFormState;
};

export function DescriptionHighlightsSection({ state }: DescriptionHighlightsSectionProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && !editorRef.current.innerHTML && state.description) {
      editorRef.current.innerHTML = state.description;
    }
  }, [state.description]);

  const handleFormat = (command: string) => {
    document.execCommand(command, false, undefined);
    if (editorRef.current) {
      editorRef.current.focus();
      state.setDescription(editorRef.current.innerHTML);
    }
  };

  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-[var(--admin-form-card-radius)]">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-[color:var(--admin-heading-color)] text-[length:var(--admin-heading-size)] font-[number:var(--admin-heading-weight)]">
          Description &amp; Highlights
        </h3>
      </div>

      <div className="space-y-6">
        {/* Property Overview */}
        <div className="space-y-2">
          <span className="block text-[color:var(--admin-label-color)] text-[length:var(--admin-label-size)] font-[number:var(--admin-label-weight)]">
            Property Overview
          </span>
          <div className="bg-[var(--admin-field-bg)] rounded-[var(--admin-field-radius)] overflow-hidden">
            <div className="border-b border-white/40 p-2 flex gap-2">
              <button
                type="button"
                onMouseDown={(e) => { e.preventDefault(); handleFormat("bold"); }}
                aria-label="Bold"
                className="p-1 hover:bg-black/5 rounded text-gray-600 transition-colors"
              >
                <Bold className="w-[18px] h-[18px]" />
              </button>
              <button
                type="button"
                onMouseDown={(e) => { e.preventDefault(); handleFormat("italic"); }}
                aria-label="Italic"
                className="p-1 hover:bg-black/5 rounded text-gray-600 transition-colors"
              >
                <Italic className="w-[18px] h-[18px]" />
              </button>
              <button
                type="button"
                onMouseDown={(e) => { e.preventDefault(); handleFormat("insertUnorderedList"); }}
                aria-label="List"
                className="p-1 hover:bg-black/5 rounded text-gray-600 transition-colors"
              >
                <List className="w-[18px] h-[18px]" />
              </button>
            </div>
            <div
              ref={editorRef}
              contentEditable
              onInput={(e) => state.setDescription(e.currentTarget.innerHTML)}
              className="w-full min-h-[140px] p-4 bg-transparent border-none text-[color:var(--admin-field-text-color)] text-sm focus:ring-0 outline-none overflow-y-auto"
            />
          </div>
        </div>

        {/* 3x2 Grid for dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Property Type */}
          <label className="block space-y-2">
            <span className="block text-[color:var(--admin-label-color)] text-[length:var(--admin-label-size)] font-[number:var(--admin-label-weight)]">
              Property Type
            </span>
            <div className="relative">
              <select
                value={state.highlightType}
                onChange={(e) => state.setHighlightType(e.target.value)}
                className="appearance-none w-full h-11 px-4 rounded-[var(--admin-field-radius)] bg-[var(--admin-field-bg)] text-[color:var(--admin-field-text-color)] outline-none focus:ring-2 focus:ring-[#008060]/20 cursor-pointer"
              >
                <option value="">Select type...</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Condo">Condo</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </label>

          {/* HOA */}
          <div className="block space-y-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="text-[color:var(--admin-label-color)] text-[length:var(--admin-label-size)] font-[number:var(--admin-label-weight)]">
                  HOA
                </span>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-4 h-4 rounded border-2 border-[#E5E7EB] bg-[#E5E7EB] group-hover:border-gray-300 transition-colors flex items-center justify-center">
                  {/* Simulate checkbox state if needed. Here we assume it's unlinked from state for now, or just static to match design */}
                </div>
                <span className="text-sm font-semibold text-gray-500">N/A</span>
              </label>
            </div>
            <div className="relative">
              <select
                value={state.highlightHoa}
                onChange={(e) => state.setHighlightHoa(e.target.value)}
                className="appearance-none w-full h-11 px-4 rounded-[var(--admin-field-radius)] bg-[var(--admin-field-bg)] text-[color:var(--admin-field-text-color)] outline-none focus:ring-2 focus:ring-[#008060]/20 cursor-pointer"
              >
                <option value="">Select fee...</option>
                <option value="0">$0</option>
                <option value="100">$100/mo</option>
                <option value="200">$200/mo</option>
                <option value="500">$500/mo</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Building Year */}
          <label className="block space-y-2">
            <span className="block text-[color:var(--admin-label-color)] text-[length:var(--admin-label-size)] font-[number:var(--admin-label-weight)]">
              Building Year
            </span>
            <div className="relative">
              <select
                value={state.highlightBuildingYear}
                onChange={(e) => state.setHighlightBuildingYear(e.target.value)}
                className="appearance-none w-full h-11 px-4 rounded-[var(--admin-field-radius)] bg-[var(--admin-field-bg)] text-[color:var(--admin-field-text-color)] outline-none focus:ring-2 focus:ring-[#008060]/20 cursor-pointer"
              >
                <option value="">Select year...</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2020">2020</option>
                <option value="2010">2010</option>
                <option value="2000">2000</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </label>

          {/* Outside View */}
          <label className="block space-y-2">
            <span className="block text-[color:var(--admin-label-color)] text-[length:var(--admin-label-size)] font-[number:var(--admin-label-weight)]">
              Outside View
            </span>
            <div className="relative">
              <select
                value={state.highlightOutside}
                onChange={(e) => state.setHighlightOutside(e.target.value)}
                className="appearance-none w-full h-11 px-4 rounded-[var(--admin-field-radius)] bg-[var(--admin-field-bg)] text-[color:var(--admin-field-text-color)] outline-none focus:ring-2 focus:ring-[#008060]/20 cursor-pointer"
              >
                <option value="">Select view...</option>
                <option value="Ocean View">Ocean View</option>
                <option value="City View">City View</option>
                <option value="Mountain View">Mountain View</option>
                <option value="Park View">Park View</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </label>

          {/* Garden */}
          <label className="block space-y-2">
            <span className="block text-[color:var(--admin-label-color)] text-[length:var(--admin-label-size)] font-[number:var(--admin-label-weight)]">
              Garden
            </span>
            <div className="relative">
              <select
                value={state.highlightGarden}
                onChange={(e) => state.setHighlightGarden(e.target.value)}
                className="appearance-none w-full h-11 px-4 rounded-[var(--admin-field-radius)] bg-[var(--admin-field-bg)] text-[color:var(--admin-field-text-color)] outline-none focus:ring-2 focus:ring-[#008060]/20 cursor-pointer"
              >
                <option value="">Select garden...</option>
                <option value="Private Garden">Private Garden</option>
                <option value="Shared Garden">Shared Garden</option>
                <option value="Terrace">Terrace</option>
                <option value="Balcony">Balcony</option>
                <option value="None">None</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </label>

          {/* Parking */}
          <label className="block space-y-2">
            <span className="block text-[color:var(--admin-label-color)] text-[length:var(--admin-label-size)] font-[number:var(--admin-label-weight)]">
              Parking
            </span>
            <div className="relative">
              <select
                value={state.highlightParking}
                onChange={(e) => state.setHighlightParking(e.target.value)}
                className="appearance-none w-full h-11 px-4 rounded-[var(--admin-field-radius)] bg-[var(--admin-field-bg)] text-[color:var(--admin-field-text-color)] outline-none focus:ring-2 focus:ring-[#008060]/20 cursor-pointer"
              >
                <option value="">Select parking...</option>
                <option value="1 Space">1 Space</option>
                <option value="2 Spaces">2 Spaces</option>
                <option value="Garage">Garage</option>
                <option value="Street Parking">Street Parking</option>
                <option value="None">None</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </label>
        </div>

        {/* Existing hidden/extra fields to not break form logic */}
        <div className="pt-8 mt-8 border-t border-[#ECECEC] space-y-6">
          <div className="grid grid-cols-2 gap-4">
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
      </div>
    </div>
  );
}
