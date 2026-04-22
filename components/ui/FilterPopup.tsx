"use client";

import { Bath, BedDouble, Minus, Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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

  return (
    <AnimatePresence mode="wait">
      {open ? (
        <motion.div
          key="filter-popup"
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.16, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.18, ease: "easeInOut", delay: 0.08 },
          }}
        >
          <motion.button
            type="button"
            aria-label="Close filters"
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.16, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.18, ease: "easeInOut", delay: 0.08 },
            }}
          />

          <div className="absolute inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center p-0 sm:p-6 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Filters"
              className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[88vh] sm:max-h-[92vh] flex flex-col overflow-hidden pointer-events-auto"
              initial={{ opacity: 0, y: 18 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.22, ease: "easeOut", delay: 0.08 },
              }}
              exit={{
                opacity: 0,
                y: 14,
                transition: { duration: 0.18, ease: "easeInOut", delay: 0.08 },
              }}
            >
              <div className="relative border-b border-black/5 px-5 py-4 flex items-center justify-center">
                <div className="text-base font-semibold text-gray-900">
                  Filters
                </div>
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
                {/* Property Types */}
                <div className="pb-6 border-b border-black/5">
                  <div className="text-sm font-semibold text-gray-900 mb-3">
                    Property Type
                  </div>
                  <div className="flex flex-col gap-2">
                    {propertyTypes.map((t) => {
                      const checked = selectedTypes.includes(t);
                      return (
                        <label
                          key={t}
                          className="w-fit inline-flex items-center gap-3 text-sm text-gray-800 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => onToggleType(t)}
                            className={
                              checked
                                ? "h-4 w-4 rounded border-gray-300"
                                : "h-4 w-4 rounded appearance-none bg-gray-200 border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                            }
                          />
                          <span>{t}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Bedrooms & Bathrooms */}
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
                          onClick={() =>
                            onBedroomsChange(Math.max(0, bedrooms - 1))
                          }
                          className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors grid place-items-center cursor-pointer"
                          aria-label="Decrease bedrooms"
                        >
                          <Minus className="w-4 h-4 text-gray-800" />
                        </button>
                        <div className="min-w-10 text-center text-sm font-medium text-gray-800">
                          {bedrooms === 0 ? "Any" : bedrooms}
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            onBedroomsChange(Math.min(10, bedrooms + 1))
                          }
                          className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors grid place-items-center cursor-pointer"
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
                          onClick={() =>
                            onBathroomsChange(Math.max(0, bathrooms - 1))
                          }
                          className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors grid place-items-center cursor-pointer"
                          aria-label="Decrease bathrooms"
                        >
                          <Minus className="w-4 h-4 text-gray-800" />
                        </button>
                        <div className="min-w-10 text-center text-sm font-medium text-gray-800">
                          {bathrooms === 0 ? "Any" : bathrooms}
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            onBathroomsChange(Math.min(10, bathrooms + 1))
                          }
                          className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors grid place-items-center cursor-pointer"
                          aria-label="Increase bathrooms"
                        >
                          <Plus className="w-4 h-4 text-gray-800" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Range */}
                {/* Price Range */}
                <div className="py-6 border-b border-black/5 w-full max-w-md">
                  <div className="text-xl font-bold text-gray-900 mb-6">
                    Price Range
                  </div>

                  <div className="relative pt-12 pb-2 px-2">
                    {/* Distribution Graph (SVG) */}
                    <div className="absolute bottom-6 left-2 right-2 h-16 overflow-hidden pointer-events-none">
                      <svg
                        viewBox="0 0 100 40"
                        preserveAspectRatio="none"
                        className="w-full h-full"
                      >
                        <defs>
                          <clipPath id="range-clip">
                            <rect
                              x={(minPrice / maxPriceLimit) * 100}
                              width={
                                ((maxPrice - minPrice) / maxPriceLimit) * 100
                              }
                              height="100"
                            />
                          </clipPath>
                        </defs>

                        {/* Background Gray Graph */}
                        <path
                          d="M0,40 Q15,40 25,25 T45,10 T70,5 T85,30 T100,40 L100,40 L0,40 Z"
                          fill="#F3F4F6"
                        />

                        {/* Highlighted Blue Graph - Clipped to slider range */}
                        <path
                          d="M0,40 Q15,40 25,25 T45,10 T70,5 T85,30 T100,40 L100,40 L0,40 Z"
                          fill="#0084F4"
                          clipPath="url(#range-clip)"
                        />
                      </svg>
                    </div>

                    {/* Range Sliders Container */}
                    <div className="relative h-2 flex items-center">
                      {/* Slider Track Background */}
                      <div className="absolute w-full h-[2px] bg-gray-200 rounded-full" />

                      {/* Active Blue Track Segment */}
                      <div
                        className="absolute h-[2px] bg-[#0084F4]"
                        style={{
                          left: `${(minPrice / maxPriceLimit) * 100}%`,
                          right: `${100 - (maxPrice / maxPriceLimit) * 100}%`,
                        }}
                      />

                      <input
                        type="range"
                        min={minPriceLimit}
                        max={maxPriceLimit}
                        step={priceStep}
                        value={minPrice}
                        onChange={(e) =>
                          onMinPriceChange(
                            Math.min(
                              Number(e.target.value),
                              maxPrice - priceStep,
                            ),
                          )
                        }
                        className="absolute inset-0 w-full appearance-none bg-transparent pointer-events-none z-20
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-gray-100
          [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-gray-100"
                      />
                      <input
                        type="range"
                        min={minPriceLimit}
                        max={maxPriceLimit}
                        step={priceStep}
                        value={maxPrice}
                        onChange={(e) =>
                          onMaxPriceChange(
                            Math.max(
                              Number(e.target.value),
                              minPrice + priceStep,
                            ),
                          )
                        }
                        className="absolute inset-0 w-full appearance-none bg-transparent pointer-events-none z-20
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-gray-100
          [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-gray-100"
                      />
                    </div>
                  </div>

                  {/* Labels and Inputs */}
                  <div className="mt-8 flex justify-between gap-8">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 mb-3 text-center">
                        Minimum
                      </div>
                      <div className="bg-white border border-gray-300 rounded-full px-6 py-4 text-lg text-gray-900 text-center shadow-sm">
                        {minPrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 mb-3 text-center">
                        Maximum
                      </div>
                      <div className="bg-white border border-gray-300 rounded-full px-6 py-4 text-lg text-gray-900 text-center shadow-sm">
                        {maxPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
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
                              ? "px-3 py-2 rounded-full border border-black bg-black text-white text-xs font-medium cursor-pointer"
                              : "px-3 py-2 rounded-full border border-black/20 bg-white text-gray-900 text-xs font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                          }
                        >
                          {a}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="border-t border-black/5 -shadow-2xl px-5 py-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={onClearAll}
                  className="text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
                >
                  Clear All
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-black text-white px-5 py-3 rounded-full text-sm font-semibold cursor-pointer"
                >
                  {applyLabel}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
