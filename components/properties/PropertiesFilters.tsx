"use client";

import { MapPin, SlidersHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FilterPopup } from "../ui/FilterPopup";
import { properties } from "../../lib/data/Properties";

export function PropertiesFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlMode =
    searchParams.get("mode") === "rent"
      ? "rent"
      : searchParams.get("mode") === "buy"
        ? "buy"
        : "all";

  const [listingMode, setListingMode] = useState<"all" | "buy" | "rent">(urlMode);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const { minPriceLimit, maxPriceLimit } = useMemo(() => {
    const relevant =
      urlMode === "rent"
        ? properties.filter((p) => p.listingType === "For Rent")
        : urlMode === "buy"
          ? properties.filter((p) => p.listingType === "For Sale")
          : properties;

    const prices = relevant.map((p) => p.price).filter((p) => Number.isFinite(p));
    if (prices.length === 0) return { minPriceLimit: 0, maxPriceLimit: 0 };
    return {
      minPriceLimit: Math.min(...prices),
      maxPriceLimit: Math.max(...prices),
    };
  }, [urlMode]);

  const priceStep = useMemo(() => {
    const span = Math.max(0, maxPriceLimit - minPriceLimit);
    if (span <= 0) return 1;

    const baseStep =
      span <= 2_000
        ? 10
        : span <= 10_000
          ? 50
          : span <= 50_000
            ? 100
            : span <= 200_000
              ? 1_000
              : 10_000;

    const maxAllowed = Math.max(1, Math.floor(span / 10));
    return Math.min(baseStep, maxAllowed);
  }, [maxPriceLimit, minPriceLimit]);

  const urlMinPriceParam = searchParams.get("minPrice");
  const urlMaxPriceParam = searchParams.get("maxPrice");
  const urlMinPrice = urlMinPriceParam ? Number(urlMinPriceParam) : Number.NaN;
  const urlMaxPrice = urlMaxPriceParam ? Number(urlMaxPriceParam) : Number.NaN;
  const initialMinPrice = useMemo(() => {
    const clamped = Number.isFinite(urlMinPrice)
      ? Math.max(minPriceLimit, Math.min(urlMinPrice, maxPriceLimit))
      : minPriceLimit;
    return clamped;
  }, [maxPriceLimit, minPriceLimit, urlMinPrice]);

  const initialMaxPrice = useMemo(() => {
    const clamped = Number.isFinite(urlMaxPrice)
      ? Math.max(minPriceLimit, Math.min(urlMaxPrice, maxPriceLimit))
      : maxPriceLimit;
    return clamped;
  }, [maxPriceLimit, minPriceLimit, urlMaxPrice]);

  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSearchIndex, setActiveSearchIndex] = useState(-1);
  const searchWrapRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [googleSuggestions, setGoogleSuggestions] = useState<string[]>([]);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isDebouncing, setIsDebouncing] = useState(false);
  const googleRequestIdRef = useRef(0);
  const googleAbortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setListingMode(urlMode);
  }, [urlMode]);

  useEffect(() => {
    const nextMin = Math.min(initialMinPrice, initialMaxPrice);
    const nextMax = Math.max(initialMinPrice, initialMaxPrice);
    setMinPrice(nextMin);
    setMaxPrice(nextMax);
  }, [initialMaxPrice, initialMinPrice]);

  const closeSearch = () => {
    setIsSearchOpen(false);
    setIsGoogleLoading(false);
    setIsDebouncing(false);
    setGoogleSuggestions([]);
    googleAbortRef.current?.abort();
    googleAbortRef.current = null;
    googleRequestIdRef.current++;
  };

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
    return googleSuggestions;
  }, [googleSuggestions, searchValue, suggestedLocations]);

  useEffect(() => {
    const query = searchValue.trim();
    if (!isSearchOpen) return;
    if (!query) return;

    const requestId = ++googleRequestIdRef.current;
    const debounceMs = 1050;
    const timeoutId = window.setTimeout(async () => {
      setIsDebouncing(false);
      setIsGoogleLoading(true);
      const controller = new AbortController();
      googleAbortRef.current?.abort();
      googleAbortRef.current = controller;

      try {
        const res = await fetch(
          `/api/here/autocomplete?input=${encodeURIComponent(query)}`,
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
    }, debounceMs);

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
      closeSearch();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSearch();
        searchInputRef.current?.blur();
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
        closeSearch();
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
    const next = new URLSearchParams(searchParams.toString());
    next.delete("minPrice");
    next.delete("maxPrice");
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const toggleType = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((x) => x !== type) : [...prev, type]));
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((x) => x !== amenity) : [...prev, amenity],
    );
  };

  const matchingCount = useMemo(() => {
    const low = Math.min(minPrice, maxPrice);
    const high = Math.max(minPrice, maxPrice);

    return properties.filter((p) => {
      if (listingMode === "rent" && p.listingType !== "For Rent") return false;
      if (listingMode === "buy" && p.listingType !== "For Sale") return false;
      if (!Number.isFinite(p.price)) return false;
      if (Number.isFinite(low) && p.price < low) return false;
      if (Number.isFinite(high) && p.price > high) return false;
      return true;
    }).length;
  }, [listingMode, maxPrice, minPrice]);

  const applyLabel = useMemo(() => {
    const noun = matchingCount === 1 ? "Property" : "Properties";
    return `Show ${matchingCount} ${noun}`;
  }, [matchingCount]);

  const applyFilters = () => {
    const next = new URLSearchParams(searchParams.toString());

    if (minPrice !== minPriceLimit) next.set("minPrice", String(minPrice));
    else next.delete("minPrice");

    if (maxPrice !== maxPriceLimit) next.set("maxPrice", String(maxPrice));
    else next.delete("maxPrice");

    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const setMode = (mode: "all" | "buy" | "rent") => {
    setListingMode(mode);
    const next = new URLSearchParams(searchParams.toString());
    if (mode === "rent") next.set("mode", "rent");
    else if (mode === "buy") next.set("mode", "buy");
    else next.delete("mode");
    next.delete("minPrice");
    next.delete("maxPrice");
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  return (
    <section className="mb-12 max-w-2xl mx-auto">
      {isSearchOpen ? (
        <button
          type="button"
          aria-label="Close search"
          className="fixed inset-0 bg-black/40 z-20"
          onClick={closeSearch}
        />
      ) : null}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <div ref={searchWrapRef} className="relative flex-1 z-30">
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
              setIsGoogleLoading(false);
              setIsDebouncing(Boolean(nextQuery));
            }}
            onFocus={() => {
              googleAbortRef.current?.abort();
              googleAbortRef.current = null;
              googleRequestIdRef.current++;
              setGoogleSuggestions([]);
              setIsSearchOpen(true);
              setActiveSearchIndex(-1);
              const nextQuery = searchValue.trim();
              setIsGoogleLoading(false);
              setIsDebouncing(Boolean(nextQuery));
            }}
          />

          {isSearchOpen ? (
            <div className="absolute left-0 top-full mt-3 w-full rounded-2xl bg-white border border-black/10 shadow-xl p-3 z-40">
              <div className="flex flex-col gap-1">
                {searchValue.trim().length === 0 ? (
                  <>
                    <div className="px-2 pb-2 text-xs font-semibold text-gray-500">
                      Suggested Locations
                    </div>
                    {visibleSuggestions.map((label, idx) => {
                      const isActive = idx === activeSearchIndex;
                      return (
                        <button
                          key={label}
                          type="button"
                          onMouseEnter={() => setActiveSearchIndex(idx)}
                          onClick={() => {
                            setSearchValue(label);
                            closeSearch();
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
                  </>
                ) : isGoogleLoading ? (
                  <div className="min-h-44 flex items-center justify-center">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-gray-300 animate-bounce [animation-delay:0ms]" />
                      <span className="h-3 w-3 rounded-full bg-gray-300 animate-bounce [animation-delay:140ms]" />
                      <span className="h-3 w-3 rounded-full bg-gray-300 animate-bounce [animation-delay:280ms]" />
                    </div>
                  </div>
                ) : isDebouncing ? (
                  <div className="min-h-44 flex items-center justify-center">
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-gray-300 animate-bounce [animation-delay:0ms]" />
                      <span className="h-3 w-3 rounded-full bg-gray-300 animate-bounce [animation-delay:140ms]" />
                      <span className="h-3 w-3 rounded-full bg-gray-300 animate-bounce [animation-delay:280ms]" />
                    </div>
                  </div>
                ) : visibleSuggestions.length > 0 ? (
                  visibleSuggestions.map((label, idx) => {
                    const isActive = idx === activeSearchIndex;
                    return (
                      <button
                        key={label}
                        type="button"
                        onMouseEnter={() => setActiveSearchIndex(idx)}
                        onClick={() => {
                          setSearchValue(label);
                          closeSearch();
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-900 transition-colors cursor-pointer ${
                          isActive ? "bg-gray-100" : "hover:bg-gray-50"
                        }`}
                      >
                        <span className="h-2 w-2 rounded-full bg-[#0084F4] shrink-0" />
                        <span className="text-left">{label}</span>
                      </button>
                    );
                  })
                ) : (
                  <div className="min-h-44 flex items-center justify-center text-sm text-gray-500">
                    No locations found
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-between sm:justify-start gap-3">
          <div className="flex items-center border border-black/10 rounded-full bg-white p-1">
            <button
              type="button"
              onClick={() => setMode("all")}
              className={`px-3 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                listingMode === "all"
                  ? "bg-black text-white"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setMode("buy")}
              className={`px-3 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                listingMode === "buy"
                  ? "bg-black text-white"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => setMode("rent")}
              className={`px-3 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
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
            className="relative bg-white border border-black/10 rounded-full px-5 py-3 text-sm font-medium text-gray-900 flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-5 h-5 text-gray-700" />
            Filters
            <AnimatePresence>
              {filterCount > 0 ? (
                <motion.span
                  key="filters-count"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-black text-white text-xs font-semibold flex items-center justify-center"
                >
                  {filterCount > 9 ? "9+" : filterCount}
                </motion.span>
              ) : null}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <FilterPopup
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onApply={applyFilters}
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
        priceStep={priceStep}
        onMinPriceChange={(value) => setMinPrice(value)}
        onMaxPriceChange={(value) => setMaxPrice(value)}
        amenities={amenities}
        selectedAmenities={selectedAmenities}
        onToggleAmenity={toggleAmenity}
        onClearAll={clearAll}
        applyLabel={applyLabel}
      />
    </section>
  );
}
