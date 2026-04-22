"use client";

import { MapPin, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { FilterPopup } from "../ui/FilterPopup";

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

  const clearAll = () => {
    setSelectedTypes([]);
    setSelectedAmenities([]);
    setBedrooms(0);
    setBathrooms(0);
    setMinPrice(128_000);
    setMaxPrice(2_504_000);
  };

  const toggleType = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((x) => x !== type) : [...prev, type]));
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((x) => x !== amenity) : [...prev, amenity],
    );
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

      <FilterPopup
        open={isOpen}
        onClose={() => setIsOpen(false)}
        propertyTypes={propertyTypes}
        selectedTypes={selectedTypes}
        onToggleType={toggleType}
        bedrooms={bedrooms}
        onBedroomsChange={setBedrooms}
        bathrooms={bathrooms}
        onBathroomsChange={setBathrooms}
        minPrice={minPrice}
        maxPrice={maxPrice}
        minPriceLimit={0}
        maxPriceLimit={5_000_000}
        priceStep={10_000}
        onMinPriceChange={(value) => setMinPrice(Math.min(value, maxPrice))}
        onMaxPriceChange={(value) => setMaxPrice(Math.max(value, minPrice))}
        amenities={amenities}
        selectedAmenities={selectedAmenities}
        onToggleAmenity={toggleAmenity}
        onClearAll={clearAll}
        applyLabel="Show 80 Properties"
      />
    </section>
  );
}
