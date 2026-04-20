"use client";

import Image from "next/image";
import MapComponent, { NearbyPlacesBoxes } from "../../GoogleMap/GoogleMaps";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type LocationMapProps = {
  apiKey?: string;
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  mapImage?: string;
  propertyImage: string;
};

export function LocationMap({
  apiKey,
  location,
  coordinates,
  mapImage,
  propertyImage,
}: LocationMapProps) {
  // Map query used for the "View on Google Maps" external link
  const query =
    coordinates ? `${coordinates.lat},${coordinates.lng}` : location;

  const mapsLinkHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  // Amenity tabs state (populated dynamically from Places results)
  const [availableAmenities, setAvailableAmenities] = useState<Array<{ id: string; label: string }>>([]);
  const [activeAmenity, setActiveAmenity] = useState<string>("all");
  const [amenityResults, setAmenityResults] = useState<
    Array<{
      id: string;
      label: string;
      places: Array<{
        placeId?: string;
        name: string;
        position?: { lat: number; lng: number };
      }>;
    }>
  >([]);
  const [selectedPlace, setSelectedPlace] = useState<{
    id: string;
    position: { lat: number; lng: number };
    title?: string;
  } | null>(null);

  // Tabs scrolling + chevron controls state
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Lazy-load heavy Maps + Places only when the section is near viewport
  const mapSectionRef = useRef<HTMLDivElement | null>(null);
  const [loadMap, setLoadMap] = useState(false);
  const amenitiesSectionRef = useRef<HTMLDivElement | null>(null);
  const [loadAmenities, setLoadAmenities] = useState(false);

  // Tabs list: always show "All" + whatever categories exist in this neighborhood
  const tabs = useMemo(() => {
    return [{ id: "all", label: "All" }, ...availableAmenities];
  }, [availableAmenities]);

  const selectAmenity = useCallback((id: string) => {
    setActiveAmenity(id);
    setSelectedPlace(null);
  }, []);

  const highlightMarkers = useMemo(() => {
    if (!coordinates) return [];
    if (activeAmenity === "all") return [];
    if (selectedPlace) return [selectedPlace];
    const category = amenityResults.find((c) => c.id === activeAmenity);
    if (!category) return [];
    return category.places
      .filter((p) => Boolean(p.position))
      .slice(0, 10)
      .map((p) => {
        const pos = p.position as { lat: number; lng: number };
        return {
          id: `${activeAmenity}-${p.placeId ?? `${p.name}-${pos.lat}-${pos.lng}`}`,
          position: pos,
          title: p.name,
        };
      });
  }, [activeAmenity, amenityResults, coordinates, selectedPlace]);

  const handleAvailableCategoriesChange = useCallback(
    (cats: Array<{ id: string; label: string }>) => {
      setAvailableAmenities(cats);
      if (activeAmenity !== "all" && !cats.some((c) => c.id === activeAmenity)) {
        setActiveAmenity("all");
      }
    },
    [activeAmenity],
  );

  const handleResultsChange = useCallback(
    (
      results: Array<{
        id: string;
        label: string;
        places: Array<{
          placeId?: string;
          name: string;
          photoUrl?: string;
          position?: { lat: number; lng: number };
        }>;
      }>,
    ) => {
      setAmenityResults(results);
    },
    [],
  );

  // Update chevron enable/disable based on scroll position
  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;

    const update = () => {
      const node = tabsRef.current;
      if (!node) return;
      setCanScrollLeft(node.scrollLeft > 0);
      setCanScrollRight(node.scrollLeft + node.clientWidth < node.scrollWidth - 1);
    };

    update();
    const onScroll = () => update();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [tabs.length]);

  // IntersectionObserver: load maps/amenities when user scrolls near the map
  useEffect(() => {
    const el = mapSectionRef.current;
    if (!el) return;
    if (loadMap) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        setLoadMap(true);
        observer.disconnect();
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMap]);

  useEffect(() => {
    const el = amenitiesSectionRef.current;
    if (!el) return;
    if (loadAmenities) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        setLoadAmenities(true);
        observer.disconnect();
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadAmenities]);

  return (
    <div>
      {/* Section header */}
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Location Information
      </h3>

      {/* Amenity tabs (scrollable, chevrons instead of visible scrollbar) */}
      <div className="relative mb-4">
        <button
          type="button"
          onClick={() => tabsRef.current?.scrollBy({ left: -220, behavior: "smooth" })}
          disabled={!canScrollLeft}
          className="hidden md:grid absolute left-0 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-white shadow-sm border border-gray-200 place-items-center disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Scroll amenities left"
        >
          <ChevronLeft size={18} className="text-gray-700" />
        </button>

        <div className="overflow-hidden md:px-11">
          <div
            ref={tabsRef}
            className="flex gap-2 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {tabs.map((t) => {
              const isActive = activeAmenity === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => selectAmenity(t.id)}
                  className={
                    isActive
                      ? "px-4 py-1.5 bg-[#008060] text-white text-sm font-medium rounded-full whitespace-nowrap"
                      : "px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap"
                  }
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={() => tabsRef.current?.scrollBy({ left: 220, behavior: "smooth" })}
          disabled={!canScrollRight}
          className="hidden md:grid absolute right-0 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-white shadow-sm border border-gray-200 place-items-center disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Scroll amenities right"
        >
          <ChevronRight size={18} className="text-gray-700" />
        </button>
      </div>

      {/* Map container (lazy-loaded) */}
      <div
        ref={mapSectionRef}
        className="w-full h-75 md:h-100 bg-gray-200 border-2 border-gray-300 rounded-2xl relative overflow-hidden"
      >
        {/* Soft fallback image behind the map */}
        <Image
          src={mapImage || propertyImage}
          alt={location}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        {coordinates && loadMap ? (
          <MapComponent
            apiKey={apiKey}
            center={coordinates}
            zoom={14}
            highlightMarkers={highlightMarkers}
            selectedMarkerId={selectedPlace?.id}
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <p className="text-sm text-gray-500">
              {coordinates ? "Loading map..." : "Map unavailable"}
            </p>
          </div>
        )}
      </div>

      {/* Nearby amenities preview boxes (lazy-loaded, filtered by the selected tab) */}
      <div ref={amenitiesSectionRef}>
        {coordinates && loadAmenities ? (
          <NearbyPlacesBoxes
            apiKey={apiKey}
            center={coordinates}
            activeCategoryId={activeAmenity === "all" ? undefined : activeAmenity}
            selectedPlaceId={selectedPlace?.id}
            onAvailableCategoriesChange={handleAvailableCategoriesChange}
            onResultsChange={handleResultsChange}
            onPlaceSelect={(place) => {
              if (!place.position) return;
              if (place.categoryId && activeAmenity === "all") {
                selectAmenity(place.categoryId);
              }

              const id =
                place.placeId ??
                `${place.name}-${place.position.lat}-${place.position.lng}`;

              setSelectedPlace({
                id,
                position: place.position,
                title: place.name,
              });
            }}
            className="mt-4"
          />
        ) : (
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-100 rounded-2xl aspect-3/2" />
            <div className="bg-gray-100 rounded-2xl aspect-3/2" />
            <div className="bg-gray-100 rounded-2xl aspect-3/2" />
            <div className="bg-gray-100 rounded-2xl aspect-3/2" />
          </div>
        )}
      </div>

      {/* External Google Maps link */}
      <div className="mt-3">
        <a
          href={mapsLinkHref}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-[#008060] hover:text-[#00664d] transition-colors"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
}
