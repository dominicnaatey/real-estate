"use client";

import { MapPin, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FilterPopup } from "../ui/FilterPopup";

export function PropertiesFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const [listingMode, setListingMode] = useState<"buy" | "rent">("buy");
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const minPriceLimit = 0;
  const maxPriceLimit = 5_000_000;
  const [minPrice, setMinPrice] = useState(minPriceLimit);
  const [maxPrice, setMaxPrice] = useState(maxPriceLimit);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSearchIndex, setActiveSearchIndex] = useState(-1);
  const searchWrapRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [googleSuggestions, setGoogleSuggestions] = useState<string[]>([]);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const googleRequestIdRef = useRef(0);
  const googleAbortRef = useRef<AbortController | null>(null);

  const filterCount =
    selectedTypes.length +
    selectedAmenities.length +
    (bedrooms > 0 ? 1 : 0) +
    (bathrooms > 0 ? 1 : 0) +
    (minPrice !== minPriceLimit || maxPrice !== maxPriceLimit ? 1 : 0);

  const suggestedLocations = useMemo(
    () => [
      "Cantonments",
      "Airport Residential Area",
      "Labone",
      "Roman Ridge",
      "Osu",
      "East Legon",
      "Tse Addo",
      "East Legon Hills",
      "Tema Community 25",
    ],
    [],
  );

  const visibleSuggestions = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) return suggestedLocations;
    if (googleSuggestions.length > 0) return googleSuggestions;
    return suggestedLocations
      .map((label) => {
        const normalized = label.toLowerCase();
        const includes = normalized.includes(query);
        if (!includes) return null;
        const words = normalized.split(/[\s,]+/).filter(Boolean);
        const startsWith =
          normalized.startsWith(query) || words.some((w) => w.startsWith(query));
        return { label, rank: startsWith ? 0 : 1 };
      })
      .filter((v): v is { label: string; rank: number } => v !== null)
      .sort((a, b) => {
        if (a.rank !== b.rank) return a.rank - b.rank;
        return a.label.localeCompare(b.label);
      })
      .map((v) => v.label);
  }, [googleSuggestions, searchValue, suggestedLocations]);

  useEffect(() => {
    const query = searchValue.trim();
    if (!isSearchOpen) return;
    if (!query) return;

    const requestId = ++googleRequestIdRef.current;
    const timeoutId = window.setTimeout(async () => {
      const controller = new AbortController();
      googleAbortRef.current?.abort();
      googleAbortRef.current = controller;

      try {
        const res = await fetch(
          `/api/places/autocomplete?input=${encodeURIComponent(query)}`,
          { signal: controller.signal },
        );
        if (requestId !== googleRequestIdRef.current) return;
        if (!res.ok) {
          setGoogleSuggestions([]);
          setIsGoogleLoading(false);
          return;
        }
        const data = (await res.json()) as { suggestions?: string[] };
        setGoogleSuggestions(Array.isArray(data?.suggestions) ? data.suggestions : []);
        setIsGoogleLoading(false);
      } catch {
        if (requestId !== googleRequestIdRef.current) return;
        setGoogleSuggestions([]);
        setIsGoogleLoading(false);
      }
    }, 180);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isSearchOpen, searchValue]);

  useEffect(() => {
    if (!isSearchOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      const node = searchWrapRef.current;
      if (!node) return;
      if (node.contains(e.target as Node)) return;
      setIsSearchOpen(false);
      setIsGoogleLoading(false);
      setGoogleSuggestions([]);
      googleAbortRef.current?.abort();
      googleAbortRef.current = null;
      googleRequestIdRef.current++;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        searchInputRef.current?.blur();
        setIsGoogleLoading(false);
        setGoogleSuggestions([]);
        googleAbortRef.current?.abort();
        googleAbortRef.current = null;
        googleRequestIdRef.current++;
      }
      if (e.key === "ArrowDown") {
        setActiveSearchIndex((i) => {
          const max = visibleSuggestions.length - 1;
          if (max < 0) return -1;
          if (i < 0) return 0;
          return Math.min(i + 1, max);
        });
      }
      if (e.key === "ArrowUp") {
        setActiveSearchIndex((i) => {
          if (i <= 0) return -1;
          return i - 1;
        });
      }
      if (e.key === "Enter") {
        if (activeSearchIndex < 0) return;
        const selected = visibleSuggestions[activeSearchIndex];
        if (!selected) return;
        setSearchValue(selected);
        setIsSearchOpen(false);
        setGoogleSuggestions([]);
        setIsGoogleLoading(false);
        googleAbortRef.current?.abort();
        googleAbortRef.current = null;
        googleRequestIdRef.current++;
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeSearchIndex, isSearchOpen, visibleSuggestions]);

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
    setMinPrice(minPriceLimit);
    setMaxPrice(maxPriceLimit);
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
        <div ref={searchWrapRef} className="relative flex-1">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            ref={searchInputRef}
            className="w-full bg-white border border-black/10 rounded-full py-3 pl-11 pr-4 text-sm font-medium text-gray-900 outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 placeholder:text-gray-500"
            placeholder="Search location or address or city"
            type="text"
            aria-label="Search location or address or city"
            value={searchValue}
            onChange={(e) => {
              const nextValue = e.target.value;
              const nextQuery = nextValue.trim();
              googleAbortRef.current?.abort();
              googleAbortRef.current = null;
              googleRequestIdRef.current++;
              setGoogleSuggestions([]);
              setSearchValue(nextValue);
              setIsSearchOpen(true);
              setActiveSearchIndex(-1);
              setIsGoogleLoading(Boolean(nextQuery));
            }}
            onFocus={() => {
              googleAbortRef.current?.abort();
              googleAbortRef.current = null;
              googleRequestIdRef.current++;
              setGoogleSuggestions([]);
              setIsSearchOpen(true);
              setActiveSearchIndex(-1);
              const nextQuery = searchValue.trim();
              setIsGoogleLoading(Boolean(nextQuery));
            }}
          />

          {isSearchOpen && (isGoogleLoading || visibleSuggestions.length > 0) ? (
            <div className="absolute left-0 top-full mt-3 w-full rounded-2xl bg-white border border-black/10 shadow-xl p-3 z-30">
              <div className="px-2 pb-2 text-xs font-semibold text-gray-500">
                Suggested Locations
              </div>
              <div className="flex flex-col gap-1">
                {isGoogleLoading ? (
                  <div className="px-3 py-3 rounded-xl bg-gray-50 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#0084F4] shrink-0" />
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:120ms]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:240ms]" />
                    </div>
                  </div>
                ) : null}
                {visibleSuggestions.map((label, idx) => {
                  const isActive = idx === activeSearchIndex;
                  return (
                    <button
                      key={label}
                      type="button"
                      onMouseEnter={() => setActiveSearchIndex(idx)}
                      onClick={() => {
                        setSearchValue(label);
                        setIsSearchOpen(false);
                        setGoogleSuggestions([]);
                        setIsGoogleLoading(false);
                        googleAbortRef.current?.abort();
                        googleAbortRef.current = null;
                        googleRequestIdRef.current++;
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-900 transition-colors cursor-pointer ${
                        isActive ? "bg-gray-100" : "hover:bg-gray-50"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-[#0084F4] shrink-0" />
                      <span className="text-left">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-between sm:justify-start gap-3">
          <div className="flex items-center border border-black/10 rounded-full bg-white p-1">
            <button
              type="button"
              onClick={() => setListingMode("buy")}
              className={`px-3 py-2.5 rounded-full text-sm font-medium transition-colors ${
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
              className={`px-3 py-2.5 rounded-full text-sm font-medium transition-colors ${
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
            className="relative bg-white border border-black/10 rounded-full px-5 py-3 text-sm font-medium text-gray-900 flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5 text-gray-700" />
            Filters
            {filterCount > 0 ? (
              <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-black text-white text-xs font-semibold flex items-center justify-center">
                {filterCount > 9 ? "9+" : filterCount}
              </span>
            ) : null}
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
        minPriceLimit={minPriceLimit}
        maxPriceLimit={maxPriceLimit}
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
