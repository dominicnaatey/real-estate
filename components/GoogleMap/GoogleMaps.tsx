"use client";

import React, { useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY as string,
  });

  // Memoize the center to prevent unnecessary re-renders
  const center = useMemo(() => ({ lat: 40.7128, lng: -74.0060 }), []);

  const containerStyle = {
    width: "100%",
    height: "500px",
    borderRadius: "12px", // Matches a minimalist/modern aesthetic
  };

  // Modern Map Styles (Optional: Silver/Minimalist)
  const options = {
    disableDefaultUI: false,
    clickableIcons: false,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  return isLoaded ? (
    <div className="w-full h-full shadow-lg overflow-hidden rounded-xl border border-gray-200">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={options}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  ) : (
    <div className="w-full h-125 bg-gray-100 animate-pulse rounded-xl flex items-center justify-center">
      <p className="text-gray-400">Loading Map...</p>
    </div>
  );
};

export default React.memo(MapComponent);