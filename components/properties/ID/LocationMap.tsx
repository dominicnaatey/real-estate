"use client";

import Image from "next/image";
import MapComponent, { NearbyPlacesBoxes } from "../../GoogleMap/GoogleMaps";
import { useMemo, useState } from "react";

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
  const query =
    coordinates ? `${coordinates.lat},${coordinates.lng}` : location;

  const mapsLinkHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const [availableAmenities, setAvailableAmenities] = useState<Array<{ id: string; label: string }>>([]);
  const [activeAmenity, setActiveAmenity] = useState<string>("all");

  const tabs = useMemo(() => {
    return [{ id: "all", label: "All" }, ...availableAmenities];
  }, [availableAmenities]);

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Location Information
      </h3>
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {tabs.map((t) => {
          const isActive = activeAmenity === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveAmenity(t.id)}
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
      <div className="w-full h-125 bg-gray-200 border-2 border-gray-300 rounded-2xl relative overflow-hidden">
        <Image
          src={mapImage || propertyImage}
          alt={location}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        {coordinates ? (
          <MapComponent
            apiKey={apiKey}
            center={coordinates}
            zoom={14}
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <p className="text-sm text-gray-500">Map unavailable</p>
          </div>
        )}
      </div>

      {coordinates ? (
        <NearbyPlacesBoxes
          apiKey={apiKey}
          center={coordinates}
          activeCategoryId={activeAmenity === "all" ? undefined : activeAmenity}
          onAvailableCategoriesChange={(cats) => {
            setAvailableAmenities(cats);
            if (activeAmenity !== "all" && !cats.some((c) => c.id === activeAmenity)) {
              setActiveAmenity("all");
            }
          }}
          className="mt-4"
        />
      ) : (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-gray-200 rounded-2xl aspect-3/2" />
          <div className="bg-gray-200 rounded-2xl aspect-3/2" />
          <div className="bg-gray-200 rounded-2xl aspect-3/2" />
          <div className="bg-gray-200 rounded-2xl aspect-3/2" />
        </div>
      )}

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
