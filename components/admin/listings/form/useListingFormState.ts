"use client";

import { useState } from "react";
import type { Property } from "../../../properties/types";
import type { ListingFormMode, ListingFormState } from "./types";

export function useListingFormState({
  mode,
  listingId,
  initial,
  suggestedId,
}: {
  mode: ListingFormMode;
  listingId?: number;
  initial?: Partial<Property>;
  suggestedId?: number;
}): ListingFormState {
  const [id, setId] = useState(
    String(
      mode === "edit"
        ? listingId ?? initial?.id ?? ""
        : suggestedId ?? initial?.id ?? ""
    )
  );
  const [title, setTitle] = useState(initial?.title ?? "");
  const [location, setLocation] = useState(initial?.location ?? "");
  const [listingType, setListingType] = useState<Property["listingType"]>(
    initial?.listingType ?? "For Sale"
  );
  const [isFeatured, setIsFeatured] = useState(Boolean(initial?.isFeatured));
  const [price, setPrice] = useState(
    initial?.price !== undefined ? String(initial.price) : ""
  );
  const [beds, setBeds] = useState(
    initial?.beds !== undefined ? String(initial.beds) : ""
  );
  const [baths, setBaths] = useState(
    initial?.baths !== undefined ? String(initial.baths) : ""
  );
  const [sqft, setSqft] = useState(initial?.sqft ?? "");
  const [coverImage, setCoverImage] = useState(initial?.image ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");

  const [lat, setLat] = useState(
    initial?.coordinates?.lat !== undefined ? String(initial.coordinates.lat) : ""
  );
  const [lng, setLng] = useState(
    initial?.coordinates?.lng !== undefined ? String(initial.coordinates.lng) : ""
  );

  const [agentName, setAgentName] = useState(initial?.agent?.name ?? "");
  const [agentRole, setAgentRole] = useState(initial?.agent?.role ?? "");
  const [agentImage, setAgentImage] = useState(initial?.agent?.image ?? "");

  const [highlightType, setHighlightType] = useState(initial?.highlights?.type ?? "");
  const [highlightHoa, setHighlightHoa] = useState(initial?.highlights?.hoa ?? "");
  const [highlightBuildingYear, setHighlightBuildingYear] = useState(
    initial?.highlights?.buildingYear ?? ""
  );
  const [highlightOutside, setHighlightOutside] = useState(
    initial?.highlights?.outside ?? ""
  );
  const [highlightGarden, setHighlightGarden] = useState(
    initial?.highlights?.garden ?? ""
  );
  const [highlightParking, setHighlightParking] = useState(
    initial?.highlights?.parking ?? ""
  );

  const [featuresText, setFeaturesText] = useState((initial?.features ?? []).join(", "));
  const [amenitiesText, setAmenitiesText] = useState((initial?.amenities ?? []).join(", "));

  return {
    id, setId,
    title, setTitle,
    location, setLocation,
    listingType, setListingType,
    isFeatured, setIsFeatured,
    price, setPrice,
    beds, setBeds,
    baths, setBaths,
    sqft, setSqft,
    coverImage, setCoverImage,
    description, setDescription,
    lat, setLat,
    lng, setLng,
    agentName, setAgentName,
    agentRole, setAgentRole,
    agentImage, setAgentImage,
    highlightType, setHighlightType,
    highlightHoa, setHighlightHoa,
    highlightBuildingYear, setHighlightBuildingYear,
    highlightOutside, setHighlightOutside,
    highlightGarden, setHighlightGarden,
    highlightParking, setHighlightParking,
    featuresText, setFeaturesText,
    amenitiesText, setAmenitiesText,
  };
}
