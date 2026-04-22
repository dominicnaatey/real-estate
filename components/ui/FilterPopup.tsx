"use client";

import { Bath, BedDouble, Minus, Plus, X } from "lucide-react";
import { useEffect } from "react";

type FilterPopupProps = {
  open: boolean;
  onClose: () => void;
  propertyTypes: string[];
  selectedTypes: string[];
  onToggleType: (type: string) => void;
  bedrooms: number;
  onBedroomsChange: (value: number) => void;
  bathrooms: number;
  onBathroomsChange: (value: number) => void;
  minPrice: number;
  maxPrice: number;
  minPriceLimit: number;
  maxPriceLimit: number;
  priceStep: number;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
  amenities: string[];
  selectedAmenities: string[];
  onToggleAmenity: (amenity: string) => void;
  onClearAll: () => void;
  applyLabel: string;
};

export function FilterPopup({
  open,
  onClose,
  propertyTypes,
  selectedTypes,
  onToggleType,
  bedrooms,
  onBedroomsChange,
  bathrooms,
  onBathroomsChange,
  minPrice,
  maxPrice,
  minPriceLimit,
  maxPriceLimit,
  priceStep,
  onMinPriceChange,
  onMaxPriceChange,
  amenities,
  selectedAmenities,
  onToggleAmenity,
  onClearAll,
  applyLabel,
}: FilterPopupProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close filters"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="absolute inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center p-0 sm:p-6">
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filters"
          className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[88vh] sm:max-h-[92vh] flex flex-col overflow-hidden"
        >
          <div className="relative border-b border-black/5 px-5 py-4 flex items-center justify-center">
            <div className="text-base font-semibold text-gray-900">Filters</div>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full hover:bg-gray-50 transition-colors"
            >
              <X className="w-5 h-5 text-gray-900" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <div className="pb-6 border-b border-black/5">
              <div className="text-sm font-semibold text-gray-900 mb-3">
                Property Type
              </div>
              <div className="space-y-2">
                {propertyTypes.map((t) => {
                  const checked = selectedTypes.includes(t);
                  return (
                    <label
                      key={t}
                      className="flex items-center gap-3 text-sm text-gray-800 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => onToggleType(t)}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <span>{t}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="py-6 border-b border-black/5">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                    <BedDouble className="w-4 h-4 text-gray-700" />
                    Bedrooms
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onBedroomsChange(Math.max(0, bedrooms - 1))}
                      className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors grid place-items-center"
                      aria-label="Decrease bedrooms"
                    >
                      <Minus className="w-4 h-4 text-gray-800" />
                    </button>
                    <div className="min-w-10 text-center text-sm font-medium text-gray-800">
                      {bedrooms === 0 ? "Any" : bedrooms}
                    </div>
                    <button
                      type="button"
                      onClick={() => onBedroomsChange(Math.min(10, bedrooms + 1))}
                      className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors grid place-items-center"
                      aria-label="Increase bedrooms"
                    >
                      <Plus className="w-4 h-4 text-gray-800" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                    <Bath className="w-4 h-4 text-gray-700" />
                    Bathrooms
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onBathroomsChange(Math.max(0, bathrooms - 1))}
                      className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors grid place-items-center"
                      aria-label="Decrease bathrooms"
                    >
                      <Minus className="w-4 h-4 text-gray-800" />
                    </button>
                    <div className="min-w-10 text-center text-sm font-medium text-gray-800">
                      {bathrooms === 0 ? "Any" : bathrooms}
                    </div>
                    <button
                      type="button"
                      onClick={() => onBathroomsChange(Math.min(10, bathrooms + 1))}
                      className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors grid place-items-center"
                      aria-label="Increase bathrooms"
                    >
                      <Plus className="w-4 h-4 text-gray-800" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-6 border-b border-black/5">
              <div className="text-sm font-semibold text-gray-900 mb-4">
                Price Range
              </div>
              <div className="relative h-10">
                <input
                  type="range"
                  min={minPriceLimit}
                  max={maxPriceLimit}
                  step={priceStep}
                  value={minPrice}
                  onChange={(e) => onMinPriceChange(Number(e.target.value))}
                  className="absolute inset-0 w-full"
                />
                <input
                  type="range"
                  min={minPriceLimit}
                  max={maxPriceLimit}
                  step={priceStep}
                  value={maxPrice}
                  onChange={(e) => onMaxPriceChange(Number(e.target.value))}
                  className="absolute inset-0 w-full"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-2">
                    Minimum
                  </div>
                  <div className="bg-white border border-black/10 rounded-full px-4 py-3 text-sm text-gray-900">
                    {minPrice.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-2">
                    Maximum
                  </div>
                  <div className="bg-white border border-black/10 rounded-full px-4 py-3 text-sm text-gray-900 text-right">
                    {maxPrice.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="text-sm font-semibold text-gray-900 mb-3">
                Amenities
              </div>
              <div className="flex flex-wrap gap-2">
                {amenities.map((a) => {
                  const active = selectedAmenities.includes(a);
                  return (
                    <button
                      key={a}
                      type="button"
                      onClick={() => onToggleAmenity(a)}
                      className={
                        active
                          ? "px-3 py-2 rounded-full border border-black bg-black text-white text-xs font-medium"
                          : "px-3 py-2 rounded-full border border-black/20 bg-white text-gray-900 text-xs font-medium hover:bg-gray-50 transition-colors"
                      }
                    >
                      {a}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-black/5 px-5 py-4 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClearAll}
              className="text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Clear All
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-black text-white px-5 py-3 rounded-full text-sm font-semibold"
            >
              {applyLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
