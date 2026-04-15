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

const MapComponent = ({ apiKey, center, zoom = 12, className }: MapComponentProps) => {
  const resolvedApiKey = apiKey ?? process.env.GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: resolvedApiKey ?? "",
  });

  const memoCenter = useMemo(() => {
    return {
      lat: center?.lat ?? 40.7128,
      lng: center?.lng ?? -74.006,
    };
  }, [center?.lat, center?.lng]);

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

  if (!resolvedApiKey) {
    return (
      <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
        <p className="text-gray-400">Map unavailable</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {isLoaded ? (
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={memoCenter}
          zoom={zoom}
          options={options}
        >
          <Marker position={memoCenter} />
        </GoogleMap>
      ) : (
        <div className="w-full h-full bg-gray-100 animate-pulse rounded-xl flex items-center justify-center">
          <p className="text-gray-400">Loading Map...</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(MapComponent);
