"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const libraries: ("places")[] = ["places"];

type MapComponentProps = {
  apiKey?: string;
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  className?: string;
};

const MapComponent = ({
  apiKey,
  center,
  zoom = 12,
  className,
}: MapComponentProps) => {
  // Priority: Prop API Key > Environment Variable
  const resolvedApiKey = apiKey ?? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: resolvedApiKey ?? "",
    libraries,
  });

  // Default to NYC if no center is provided
  const memoCenter = useMemo(() => {
    return {
      lat: center?.lat ?? 40.7128,
      lng: center?.lng ?? -74.006,
    };
  }, [center?.lat, center?.lng]);

  // Custom Marker Logic (Option 2: Orange circle with Black pin)
  const markerIcon: google.maps.Icon | undefined = useMemo(() => {
    if (!isLoaded) return undefined;

    const url = "/MapMarker.svg"; // Ensure this is in your /public folder

    // Safely access the google object via window
    const g = window.google?.maps;
    if (!g) return { url };

    const width = 40;
    const height = 50;

    return {
      url,
      scaledSize: new g.Size(width, height),
      anchor: new g.Point(width / 2, height), // Anchors the bottom tip of the pin
    };
  }, [isLoaded]);

  // Custom Map Styles: Minimalist / Modern Vintage
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      zoomControl: true,
      clickableIcons: true, // Allows users to click on the malls/restaurants for info
      styles: [
        {
          // Base: High-end Clean
          stylers: [{ saturation: -20 }],
        },
        {
          // Make Parks/Schools green and vibrant
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#e2efd9" }, { visibility: "on" }],
        },
        {
          featureType: "poi.school",
          elementType: "geometry",
          stylers: [{ color: "#fdf2e9" }, { visibility: "on" }],
        },
        {
          // Highlight Schools and Education labels
          featureType: "poi.school",
          elementType: "labels.icon",
          stylers: [{ visibility: "on" }, { hue: "#e67e22" }],
        },
        {
          // Make Malls and Business centers stand out
          featureType: "poi.business",
          elementType: "labels.icon",
          stylers: [{ visibility: "on" }, { color: "#3498db" }],
        },
        {
          // Vibrant Food & Drink (Restaurants/Bars)
          featureType: "poi.attraction",
          elementType: "labels.icon",
          stylers: [{ visibility: "on" }, { hue: "#e74c3c" }],
        },
        {
          // Deep Navy Water for a premium feel
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#d4e6f1" }],
        },
        {
          // Main roads in a warm white
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }],
        },
      ],
    }),
    [],
  );

  // Error State: Missing API Key
  if (!resolvedApiKey) {
    return (
      <div
        className={`bg-gray-100 rounded-xl flex items-center justify-center border border-dashed border-gray-300 ${className}`}
      >
        <p className="text-gray-400 text-sm">
          API Key Missing (Check .env.local)
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {isLoaded ? (
        <GoogleMap
          mapContainerClassName="w-full h-full rounded-xl overflow-hidden shadow-sm"
          center={memoCenter}
          zoom={zoom}
          options={options}
        >
          {/* Main Marker */}
          <Marker
            position={memoCenter}
            icon={markerIcon}
            animation={window.google?.maps.Animation.DROP}
          />
        </GoogleMap>
      ) : (
        <div className="w-full h-full bg-gray-50 animate-pulse rounded-xl flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs text-gray-400 font-medium">
              Initializing Map...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(MapComponent);

type NearbyPlacesBoxesProps = {
  apiKey?: string;
  center: {
    lat: number;
    lng: number;
  };
  activeCategoryId?: string;
  radius?: number;
  className?: string;
  onAvailableCategoriesChange?: (categories: Array<{ id: string; label: string }>) => void;
};

export function NearbyPlacesBoxes({
  apiKey,
  center,
  activeCategoryId,
  radius = 2500,
  className,
  onAvailableCategoriesChange,
}: NearbyPlacesBoxesProps) {
  const categories = useMemo(
    () =>
      [
        { id: "supermarket", label: "Supermarket", types: ["supermarket"] },
        { id: "pharmacy", label: "Pharmacy", types: ["pharmacy"] },
        { id: "gas", label: "Gas station", types: ["gas_station"] },
        { id: "bank", label: "Bank / ATM", types: ["bank", "atm"] },
        { id: "restaurant", label: "Restaurants", types: ["restaurant"] },
        { id: "cafe", label: "Café", types: ["cafe"] },
        { id: "bar", label: "Bar / Pub", types: ["bar"] },
        { id: "gym", label: "Gym", types: ["gym"] },
        { id: "clinic", label: "Medical clinic", types: ["doctor", "hospital"] },
        { id: "school", label: "Elementary school", types: ["school"] },
        { id: "daycare", label: "Daycare", types: ["school"] },
        { id: "hair", label: "Hair salon", types: ["hair_care"] },
        { id: "laundry", label: "Laundry", types: ["laundry"] },
        { id: "pet", label: "Pet supply", types: ["pet_store"] },
      ] as const,
    [],
  );

  const resolvedApiKey = apiKey ?? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: resolvedApiKey ?? "",
    libraries,
  });

  const memoCenter = useMemo(() => {
    return { lat: center.lat, lng: center.lng };
  }, [center.lat, center.lng]);

  type PlacePreview = { placeId?: string; name: string; photoUrl?: string };
  type CategoryResult = { id: string; label: string; places: PlacePreview[] };

  const [results, setResults] = useState<CategoryResult[]>(() =>
    categories.map((c) => ({ id: c.id, label: c.label, places: [] })),
  );
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;
    if (!window.google?.maps?.places) return;

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div"),
    );
    const ok = window.google.maps.places.PlacesServiceStatus.OK;

    const nearbySearch = (type: string) => {
      return new Promise<google.maps.places.PlaceResult[]>((resolve) => {
        service.nearbySearch(
          { location: memoCenter, radius, type },
          (places, status) => {
            if (status !== ok || !places) resolve([]);
            else resolve(places);
          },
        );
      });
    };

    const pickPlaces = (places: google.maps.places.PlaceResult[]) => {
      const sorted = [...places].sort((a, b) => {
        const ap = (a.photos?.length ?? 0) > 0 ? 1 : 0;
        const bp = (b.photos?.length ?? 0) > 0 ? 1 : 0;
        return bp - ap;
      });

      return sorted.slice(0, 10).map<PlacePreview>((p) => {
        const photoUrl = p.photos?.[0]?.getUrl({ maxWidth: 800, maxHeight: 600 });
        return { placeId: p.place_id ?? undefined, name: p.name ?? "", photoUrl };
      });
    };

    const run = async () => {
      const next = await Promise.all(
        categories.map(async (cat) => {
          for (const t of cat.types) {
            const places = await nearbySearch(t);
            if (places.length > 0) {
              return { id: cat.id, label: cat.label, places: pickPlaces(places) };
            }
          }
          return { id: cat.id, label: cat.label, places: [] };
        }),
      );

      setResults(next);
      const available = next
        .filter((c) => c.places.length > 0)
        .map((c) => ({ id: c.id, label: c.label }));
      onAvailableCategoriesChange?.(available);
    };

    run();
  }, [categories, isLoaded, memoCenter, onAvailableCategoriesChange, radius]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const update = () => {
      const node = carouselRef.current;
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
  }, [activeCategoryId, results.length]);

  const visibleCards = useMemo(() => {
    if (activeCategoryId) {
      const found = results.find((r) => r.id === activeCategoryId);
      if (!found) return [];
      return found.places.map((p, i) => ({
        key: `${activeCategoryId}-${p.placeId ?? p.name}-${i}`,
        label: found.label,
        name: p.name,
        photoUrl: p.photoUrl,
      }));
    }

    const available = results.filter((r) => r.places.length > 0);
    return available.map((r) => {
      const p = r.places[0];
      return {
        key: r.id,
        label: r.label,
        name: p?.name ?? "",
        photoUrl: p?.photoUrl,
      };
    });
  }, [activeCategoryId, results]);

  return (
    <div className={className}>
      <div className="relative">
        <button
          type="button"
          onClick={() =>
            carouselRef.current?.scrollBy({ left: -440, behavior: "smooth" })
          }
          disabled={!canScrollLeft}
          className={`absolute -left-4 top-1/2 -translate-y-1/2 z-20 p-2 cursor-pointer transition-opacity duration-200 ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll amenities left"
        >
          <ChevronLeft
            size={44}
            strokeWidth={2}
            className="text-white drop-shadow-[0_10px_22px_rgba(0,0,0,0.95)]"
          />
        </button>

        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden z-0"
        >
          {visibleCards.map((item) => (
            <div
              key={item.key}
              className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-3/2 snap-start flex-none min-w-[calc(50%-0.5rem)] sm:min-w-[calc(25%-0.75rem)]"
            >
              {item.photoUrl ? (
                <Image
                  src={item.photoUrl}
                  alt={item.name || item.label}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : null}
              <div className="absolute inset-x-0 bottom-0 bg-black/35 px-3 py-2">
                <p className="text-xs font-semibold text-white">
                  {item.name || item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() =>
            carouselRef.current?.scrollBy({ left: 440, behavior: "smooth" })
          }
          disabled={!canScrollRight}
          className={`absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-2 cursor-pointer transition-opacity duration-200 ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll amenities right"
        >
          <ChevronRight
            size={44}
            strokeWidth={2}
            className="text-white drop-shadow-[0_10px_22px_rgba(0,0,0,0.95)]"
          />
        </button>
      </div>
    </div>
  );
}
