"use client";

import React, { useEffect, useMemo, useState } from "react";
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
  radius?: number;
  className?: string;
};

export function NearbyPlacesBoxes({
  apiKey,
  center,
  radius = 2500,
  className,
}: NearbyPlacesBoxesProps) {
  const categories = useMemo(
    () =>
      [
        { key: "school", label: "School" },
        { key: "shopping_mall", label: "Mall" },
        { key: "store", label: "Store" },
        { key: "restaurant", label: "Restaurant" },
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

  const [items, setItems] = useState<
    Array<{
      key: (typeof categories)[number]["key"];
      label: string;
      photoUrl?: string;
      placeName?: string;
    }>
  >(() => categories.map((c) => ({ key: c.key, label: c.label })));

  useEffect(() => {
    if (!isLoaded) return;
    if (!window.google?.maps?.places) return;

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div"),
    );
    const ok = window.google.maps.places.PlacesServiceStatus.OK;

    const run = async () => {
      const results = await Promise.all(
        categories.map((item) => {
          return new Promise<{
            key: (typeof categories)[number]["key"];
            label: string;
            photoUrl?: string;
            placeName?: string;
          }>((resolve) => {
            service.nearbySearch(
              {
                location: memoCenter,
                radius,
                type: item.key,
              },
              (places, status) => {
                if (status !== ok || !places || places.length === 0) {
                  resolve({ key: item.key, label: item.label });
                  return;
                }

                const withPhoto =
                  places.find((p) => (p.photos?.length ?? 0) > 0) ?? places[0];
                const photoUrl = withPhoto.photos?.[0]?.getUrl({
                  maxWidth: 800,
                  maxHeight: 600,
                });

                resolve({
                  key: item.key,
                  label: item.label,
                  photoUrl,
                  placeName: withPhoto.name ?? undefined,
                });
              },
            );
          });
        }),
      );

      setItems(results);
    };

    run();
  }, [categories, isLoaded, memoCenter, radius]);

  return (
    <div className={className}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.key}
            className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-[4/3]"
          >
            {item.photoUrl ? (
              <img
                src={item.photoUrl}
                alt={item.placeName ?? item.label}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : null}
            <div className="absolute inset-x-0 bottom-0 bg-black/35 px-3 py-2">
              <p className="text-xs font-semibold text-white">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
