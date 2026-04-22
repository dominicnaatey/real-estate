"use client";

import { Bath, BedDouble, Minus, Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { useEffect, useId, useMemo } from "react";

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
  const rangeClipId = useId().replace(/:/g, "");

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

  const priceChartData = useMemo(() => {
    const points = 48;
    const span = Math.max(1, maxPriceLimit - minPriceLimit);
    return Array.from({ length: points }, (_, i) => {
      const t = i / (points - 1);
      const value = minPriceLimit + span * t;
      const y1 = Math.exp(-Math.pow((t - 0.35) / 0.18, 2)) * 0.9;
      const y2 = Math.exp(-Math.pow((t - 0.75) / 0.12, 2)) * 0.6;
      return { value, amount: y1 + y2 };
    });
  }, [maxPriceLimit, minPriceLimit]);

  const minPercent = useMemo(() => {
    const span = Math.max(1, maxPriceLimit - minPriceLimit);
    return Math.min(1, Math.max(0, (minPrice - minPriceLimit) / span));
  }, [maxPriceLimit, minPrice, minPriceLimit]);

  const maxPercent = useMemo(() => {
    const span = Math.max(1, maxPriceLimit - minPriceLimit);
    return Math.min(1, Math.max(0, (maxPrice - minPriceLimit) / span));
  }, [maxPrice, maxPriceLimit, minPriceLimit]);

  const handlePriceChange = (values: readonly number[]) => {
    const a = values[0] ?? minPrice;
    const b = values[1] ?? maxPrice;
    const nextMin = Math.min(a, b - priceStep);
    const nextMax = Math.max(b, a + priceStep);
    onMinPriceChange(Math.max(minPriceLimit, Math.min(nextMin, maxPriceLimit)));
    onMaxPriceChange(Math.max(minPriceLimit, Math.min(nextMax, maxPriceLimit)));
  };

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
              className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[88vh] sm:max-h-[92vh] flex flex-col overflow-hidden pointer-events-auto"
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-gray-900" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5">
                {/* Property Types */}
                <div className="pb-10 border-b border-black/5">
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
                <div className="py-10 border-b border-black/5">
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
                <div className="py-10 border-b border-black/5 w-full max-w-md">
                  <div className="text-lg font-bold text-gray-900 mb-6">
                    Price Range
                  </div>

                  <div className="relative pt-12 pb-2 px-2">
                    <div className="absolute bottom-6 left-2 right-2 h-16 overflow-hidden pointer-events-none">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={priceChartData}
                          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                        >
                          <defs>
                            <clipPath
                              id={rangeClipId}
                              clipPathUnits="objectBoundingBox"
                            >
                              <rect
                                x={Math.min(minPercent, maxPercent)}
                                y="0"
                                width={Math.max(
                                  0,
                                  Math.abs(maxPercent - minPercent),
                                )}
                                height="1"
                              />
                            </clipPath>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="amount"
                            stroke="none"
                            fill="#F3F4F6"
                            isAnimationActive={false}
                          />
                          <Area
                            type="monotone"
                            dataKey="amount"
                            stroke="none"
                            fill="#0084F4"
                            clipPath={`url(#${rangeClipId})`}
                            isAnimationActive={false}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="relative h-8">
                      <Slider
                        mode={2}
                        step={priceStep}
                        domain={[minPriceLimit, maxPriceLimit]}
                        values={[minPrice, maxPrice]}
                        rootStyle={{
                          position: "relative",
                          width: "100%",
                          height: 32,
                        }}
                        onUpdate={handlePriceChange}
                        onChange={handlePriceChange}
                      >
                        <Rail>
                          {({ getRailProps }) => (
                            <div
                              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gray-200 rounded-full cursor-pointer"
                              {...getRailProps()}
                            />
                          )}
                        </Rail>
                        <Tracks left={false} right={false}>
                          {({ tracks, getTrackProps }) => (
                            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5">
                              {tracks.map(({ id, source, target }) => (
                                <div
                                  key={id}
                                  className="absolute h-0.5 bg-[#0084F4] rounded-full cursor-pointer"
                                  style={{
                                    left: `${source.percent}%`,
                                    width: `${target.percent - source.percent}%`,
                                  }}
                                  {...getTrackProps()}
                                />
                              ))}
                            </div>
                          )}
                        </Tracks>
                        <Handles>
                          {({ handles, getHandleProps }) => (
                            <div className="absolute inset-0">
                              {handles.map((handle) => (
                                <div
                                  key={handle.id}
                                  style={{ left: `${handle.percent}%` }}
                                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-white shadow-[0_8px_25px_-5px_rgba(0,0,0,0.5)] border border-gray-200 cursor-pointer"
                                  {...getHandleProps(handle.id)}
                                />
                              ))}
                            </div>
                          )}
                        </Handles>
                      </Slider>
                    </div>
                  </div>

                  {/* Labels and Inputs */}
                  <div className="mt-4 flex justify-between w-full">
                    {/* Minimum Group - Aligned to the Start Corner */}
                    <div className="flex flex-col items-center">
                      <div className="text-xs font-medium tracking-wider text-gray-900 mb-3">
                        Minimum
                      </div>
                      <div className="inline-flex min-w-25 items-center justify-center bg-gray-100 rounded-full px-4 py-2.5 text-sm font-medium text-gray-900 text-center">
                        {minPrice.toLocaleString()}
                      </div>
                    </div>

                    {/* Maximum Group - Aligned to the End Corner */}
                    <div className="flex flex-col items-center">
                      <div className="text-xs font-medium tracking-wider text-gray-900 mb-3">
                        Maximum
                      </div>
                      <div className="inline-flex min-w-25 items-center justify-center bg-gray-100 rounded-full px-4 py-2.5 text-sm font-medium text-gray-900 text-center">
                        {maxPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="pt-10">
                  <div className="text-lg font-semibold text-gray-900 mb-3">
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
