"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ExternalLink, Save } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { Property } from "../../properties/types";

type ListingFormMode = "create" | "edit";

type ListingFormProps = {
  mode: ListingFormMode;
  listingId?: number;
  initial?: Partial<Property>;
  suggestedId?: number;
};

type TextFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
  type?: "text" | "number" | "url";
  required?: boolean;
  disabled?: boolean;
};

function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  disabled,
}: TextFieldProps) {
  return (
    <label className="block">
      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-2">
        {label}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm text-[#181d1a] placeholder:text-[#6e7a73] focus:outline-none focus:ring-2 focus:ring-[#008060]/30 disabled:bg-[#F0F5F0] disabled:text-[#3e4944]"
      />
    </label>
  );
}

type TextAreaFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
  rows?: number;
};

function TextAreaField({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}: TextAreaFieldProps) {
  return (
    <label className="block">
      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-2">
        {label}
      </span>
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm text-[#181d1a] placeholder:text-[#6e7a73] focus:outline-none focus:ring-2 focus:ring-[#008060]/30"
      />
    </label>
  );
}

export function ListingForm({ mode, listingId, initial, suggestedId }: ListingFormProps) {
  const router = useRouter();

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

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/listings");
  }

  const heading = mode === "create" ? "Create Listing" : "Edit Listing";
  const subheading =
    mode === "create"
      ? "Add a new property listing to your inventory."
      : "Update listing details and publish changes.";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] mb-1">
            {heading}
          </h2>
          <p className="text-sm text-[#3e4944]">{subheading}</p>
        </div>
        <div className="flex items-center gap-3">
          {mode === "edit" && listingId ? (
            <Link
              href={`/properties/${listingId}`}
              className="px-4 py-2 bg-white border border-gray-200 text-[#181d1a] text-sm rounded flex items-center gap-2 hover:bg-[#F0F5F0] transition-colors shadow-sm"
            >
              <ExternalLink className="w-[18px] h-[18px]" />
              View
            </Link>
          ) : null}
          <Link
            href="/admin/listings"
            className="px-4 py-2 bg-white border border-gray-200 text-[#181d1a] text-sm rounded hover:bg-[#F0F5F0] transition-colors shadow-sm"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-4 py-2 bg-[#008060] text-white text-sm rounded flex items-center gap-2 hover:bg-[#00654b] transition-colors shadow-sm"
          >
            <Save className="w-[18px] h-[18px]" />
            Save
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-4">
          Core Details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            id="listingId"
            label="Listing ID"
            value={id}
            onChange={setId}
            placeholder="e.g. 12"
            type="number"
            required
            disabled={mode === "edit"}
          />
          <label className="block">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-2">
              Listing Type
            </span>
            <select
              value={listingType}
              onChange={(e) => setListingType(e.target.value as Property["listingType"])}
              className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm text-[#181d1a] focus:outline-none focus:ring-2 focus:ring-[#008060]/30"
            >
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </label>

          <TextField
            id="title"
            label="Title"
            value={title}
            onChange={setTitle}
            placeholder="e.g. The Belvedere Estate"
            required
          />
          <TextField
            id="location"
            label="Location"
            value={location}
            onChange={setLocation}
            placeholder="e.g. Beverly Hills, CA"
            required
          />

          <TextField
            id="price"
            label="Price"
            value={price}
            onChange={setPrice}
            placeholder="e.g. 12500000"
            type="number"
            required
          />
          <label className="flex items-center gap-2 mt-6">
            <input
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-[#008060] focus:ring-[#008060]/30"
            />
            <span className="text-sm text-[#181d1a]">Featured listing</span>
          </label>

          <TextField
            id="beds"
            label="Beds"
            value={beds}
            onChange={setBeds}
            type="number"
            required
          />
          <TextField
            id="baths"
            label="Baths"
            value={baths}
            onChange={setBaths}
            type="number"
            required
          />
          <TextField
            id="sqft"
            label="Sqft"
            value={sqft}
            onChange={setSqft}
            placeholder="e.g. 8,400"
            required
          />
          <TextField
            id="coverImage"
            label="Cover Image URL"
            value={coverImage}
            onChange={setCoverImage}
            type="url"
            placeholder="https://..."
            required
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-4">
          Description
        </p>
        <TextAreaField
          id="description"
          label="Overview"
          value={description}
          onChange={setDescription}
          placeholder="Write a short, high-level description of the property..."
          rows={5}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-4">
            Location Coordinates
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              id="lat"
              label="Latitude"
              value={lat}
              onChange={setLat}
              placeholder="e.g. 34.1002"
              type="number"
            />
            <TextField
              id="lng"
              label="Longitude"
              value={lng}
              onChange={setLng}
              placeholder="e.g. -118.4595"
              type="number"
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-4">
            Agent
          </p>
          <div className="grid grid-cols-1 gap-4">
            <TextField
              id="agentName"
              label="Name"
              value={agentName}
              onChange={setAgentName}
              placeholder="e.g. Johnathan Wick"
            />
            <TextField
              id="agentRole"
              label="Role"
              value={agentRole}
              onChange={setAgentRole}
              placeholder="e.g. Senior Associate"
            />
            <TextField
              id="agentImage"
              label="Avatar URL"
              value={agentImage}
              onChange={setAgentImage}
              type="url"
              placeholder="https://..."
            />
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-4">
          Highlights
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TextField
            id="highlightType"
            label="Type"
            value={highlightType}
            onChange={setHighlightType}
            placeholder="e.g. Villa"
          />
          <TextField
            id="highlightHoa"
            label="HOA"
            value={highlightHoa}
            onChange={setHighlightHoa}
            placeholder="e.g. $450/mo"
          />
          <TextField
            id="highlightBuildingYear"
            label="Building Year"
            value={highlightBuildingYear}
            onChange={setHighlightBuildingYear}
            placeholder="e.g. 2018"
          />
          <TextField
            id="highlightOutside"
            label="Outside"
            value={highlightOutside}
            onChange={setHighlightOutside}
            placeholder="e.g. Ocean View"
          />
          <TextField
            id="highlightGarden"
            label="Garden"
            value={highlightGarden}
            onChange={setHighlightGarden}
            placeholder="e.g. Private Garden"
          />
          <TextField
            id="highlightParking"
            label="Parking"
            value={highlightParking}
            onChange={setHighlightParking}
            placeholder="e.g. 2-Car Garage"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-4">
            Features
          </p>
          <TextAreaField
            id="features"
            label="Comma separated"
            value={featuresText}
            onChange={setFeaturesText}
            placeholder="e.g. Garage, Swimming Pool, Garden"
            rows={4}
          />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-4">
            Amenities
          </p>
          <TextAreaField
            id="amenities"
            label="Comma separated"
            value={amenitiesText}
            onChange={setAmenitiesText}
            placeholder="e.g. Open Plan, Guest Suite, Spa Bath"
            rows={4}
          />
        </div>
      </div>
    </form>
  );
}
