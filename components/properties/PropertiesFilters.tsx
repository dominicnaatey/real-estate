"use client";

import {
  Bath,
  BedDouble,
  MapPin,
  Minus,
  Plus,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export function PropertiesFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const [listingMode, setListingMode] = useState<"buy" | "rent">("buy");
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [minPrice, setMinPrice] = useState(128_000);
  const [maxPrice, setMaxPrice] = useState(2_504_000);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const propertyTypes = useMemo(
    () => [
      "Houses",
      "Apartments/Flats",
      "Gated Estate Homes",
      "Condo",
      "Duplex",
      "Villa",
      "Land",
      "Office Spaces",
      "Warehouses",
    ],
    [],
  );

  const amenities = useMemo(
    () => ["Pool", "Parking Space", "Power backup/ solar", "Garden", "Smart Home", "Water Storage"],
    [],
  );

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const clearAll = () => {
    setSelectedTypes([]);
    setSelectedAmenities([]);
    setBedrooms(0);
    setBathrooms(0);
    setMinPrice(128_000);
    setMaxPrice(2_504_000);
  };

  return (
    <section className="mb-12 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <div className="relative flex-1">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            className="w-full bg-white border border-black/10 rounded-full py-3 pl-11 pr-4 text-sm font-medium text-gray-900 outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 placeholder:text-gray-500"
            placeholder="Search location or address or city"
            type="text"
            aria-label="Search location or address or city"
          />
        </div>

        <div className="flex items-center justify-between sm:justify-start gap-3">
          <div className="flex items-center border border-black/10 rounded-full bg-white p-1">
            <button
              type="button"
              onClick={() => setListingMode("buy")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                listingMode === "buy"
                  ? "bg-black text-white"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => setListingMode("rent")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                listingMode === "rent"
                  ? "bg-black text-white"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Rent
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="bg-white border border-black/10 rounded-full px-5 py-3 text-sm font-medium text-gray-900 flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5 text-gray-700" />
            Filters
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close filters"
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
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
                  onClick={() => setIsOpen(false)}
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
                        <label key={t} className="flex items-center gap-3 text-sm text-gray-800 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              setSelectedTypes((prev) =>
                                prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
                              )
                            }
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
                          onClick={() => setBedrooms((v) => Math.max(0, v - 1))}
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
                          onClick={() => setBedrooms((v) => Math.min(10, v + 1))}
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
                          onClick={() => setBathrooms((v) => Math.max(0, v - 1))}
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
                          onClick={() => setBathrooms((v) => Math.min(10, v + 1))}
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
                      min={0}
                      max={5_000_000}
                      step={10_000}
                      value={minPrice}
                      onChange={(e) => {
                        const next = Number(e.target.value);
                        setMinPrice(Math.min(next, maxPrice));
                      }}
                      className="absolute inset-0 w-full"
                    />
                    <input
                      type="range"
                      min={0}
                      max={5_000_000}
                      step={10_000}
                      value={maxPrice}
                      onChange={(e) => {
                        const next = Number(e.target.value);
                        setMaxPrice(Math.max(next, minPrice));
                      }}
                      className="absolute inset-0 w-full"
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-medium text-gray-500 mb-2">Minimum</div>
                      <div className="bg-white border border-black/10 rounded-full px-4 py-3 text-sm text-gray-900">
                        {minPrice.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-500 mb-2">Maximum</div>
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
                          onClick={() =>
                            setSelectedAmenities((prev) =>
                              prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a],
                            )
                          }
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
                  onClick={clearAll}
                  className="text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Clear All
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-black text-white px-5 py-3 rounded-full text-sm font-semibold"
                >
                  Show 80 Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
