"use client";

import React, { useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

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
