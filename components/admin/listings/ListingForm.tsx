"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bold, ExternalLink, Italic, List, Save, Upload } from "lucide-react";
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
  min?: number;
  step?: number;
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
  min,
  step,
}: TextFieldProps) {
  return (
    <label className="space-y-1 block">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] block">
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
        min={min}
        step={step}
        className="w-full p-2 border-admin border-admin-border admin-field-radius text-sm text-[#181d1a] placeholder:text-[#6e7a73] focus:ring-1 focus:ring-[#008060] focus:border-[#008060] outline-none bg-(--admin-field-bg) disabled:bg-[#d6dbd7] disabled:text-[#3e4944]"
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
    <label className="space-y-1 block">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] block">
        {label}
      </span>
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-3 border-admin border-admin-border admin-field-radius text-sm text-[#181d1a] placeholder:text-[#6e7a73] focus:ring-1 focus:ring-[#008060] focus:border-[#008060] outline-none bg-(--admin-field-bg) resize-y"
      />
    </label>
  );
}

type RadioOption<TValue extends string> = {
  value: TValue;
  label: string;
};

function RadioGroup<TValue extends string>({
  name,
  label,
  value,
  onChange,
  options,
  columns = 2,
}: {
  name: string;
  label: string;
  value: TValue;
  onChange: (next: TValue) => void;
  options: Array<RadioOption<TValue>>;
  columns?: 1 | 2 | 3 | 4;
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
        {label}
      </legend>
      <div
        className={
          columns === 1
            ? "grid grid-cols-1 gap-2"
            : columns === 3
              ? "grid grid-cols-1 sm:grid-cols-3 gap-2"
              : columns === 4
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
                : "grid grid-cols-1 sm:grid-cols-2 gap-2"
        }
      >
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2 border-admin border-admin-border admin-field-radius bg-(--admin-field-bg) px-3 py-2 text-sm text-[#181d1a] hover:border-[#008060]/40 transition-colors cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="h-4 w-4 border-gray-300 text-[#008060] focus:ring-[#008060]/30"
            />
            <span className="leading-none">{opt.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
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

  const heading = mode === "create" ? "Add New Property" : "Edit Property";
  const subheading =
    mode === "create"
      ? "Create a new listing in the LuxManagement system."
      : "Update listing details and publish changes.";

  const outdoorSpaceOptions: Array<RadioOption<string>> = [
    { value: "", label: "None" },
    { value: "Balcony", label: "Balcony" },
    { value: "Terrace", label: "Terrace" },
    { value: "Garden", label: "Garden" },
    { value: "Full Yard", label: "Full Yard" },
  ];

  return (
    <form onSubmit={onSubmit}>
      <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] mb-1 leading-tight">
            {heading}
          </h2>
          <p className="text-sm text-[#3e4944]">{subheading}</p>
        </div>
        <div className="flex gap-3">
          {mode === "edit" && listingId ? (
            <Link
              href={`/properties/${listingId}`}
              className="px-4 py-2 border-admin border-admin-border rounded text-[#181d1a] text-[11px] font-semibold uppercase tracking-wider bg-white hover:bg-[#F9FAFB] transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-4.5 h-4.5" />
              View
            </Link>
          ) : null}
          <Link
            href="/admin/listings"
            className="px-4 py-2 border-admin border-admin-border rounded text-[#3e4944] text-[11px] font-semibold uppercase tracking-wider bg-white hover:bg-[#F9FAFB] transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-4 py-2 bg-[#008060] text-white rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#00654b] transition-colors flex items-center gap-2"
          >
            <Save className="w-4.5 h-4.5" />
            Save Property
          </button>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border-admin border-admin-border rounded-2xl p-5 hover:shadow-admin-card-hover transition-shadow">
              <h3 className="text-lg font-serif font-semibold text-[#181d1a] mb-6 border-b-admin border-admin-border pb-4">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField
                  id="title"
                  label="Property Name"
                  value={title}
                  onChange={setTitle}
                  placeholder="e.g., The Belvedere Estate"
                  required
                />

                <RadioGroup
                  name="listingType"
                  label="Listing Type"
                  value={listingType}
                  onChange={(next) => setListingType(next as Property["listingType"])}
                  options={[
                    { value: "For Sale", label: "For Sale" },
                    { value: "For Rent", label: "For Rent" },
                  ]}
                  columns={2}
                />

                <div className="space-y-1 md:col-span-2">
                  <TextField
                    id="location"
                    label="Location / Address"
                    value={location}
                    onChange={setLocation}
                    placeholder="123 Luxury Lane, Beverly Hills, CA 90210"
                    required
                  />
                </div>

                <TextField
                  id="price"
                  label="Price"
                  value={price}
                  onChange={setPrice}
                  placeholder="0"
                  type="number"
                  min={0}
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

                <div className="grid grid-cols-3 gap-4 md:col-span-2">
                  <TextField
                    id="beds"
                    label="Bedrooms"
                    value={beds}
                    onChange={setBeds}
                    type="number"
                    min={0}
                    required
                  />
                  <TextField
                    id="baths"
                    label="Bathrooms"
                    value={baths}
                    onChange={setBaths}
                    type="number"
                    min={0}
                    step={0.5}
                    required
                  />
                  <TextField
                    id="sqft"
                    label="Area (sqft)"
                    value={sqft}
                    onChange={setSqft}
                    placeholder="0"
                    required
                  />
                </div>

                <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isFeatured}
                      onChange={(e) => setIsFeatured(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-[#008060] focus:ring-[#008060]/30"
                    />
                    <span className="text-sm text-[#181d1a]">Featured listing</span>
                  </label>

                  <TextField
                    id="listingId"
                    label="Listing ID"
                    value={id}
                    onChange={setId}
                    placeholder="0"
                    type="number"
                    min={1}
                    required
                    disabled={mode === "edit"}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border-admin border-admin-border rounded-2xl p-5 hover:shadow-admin-card-hover transition-shadow">
              <h3 className="text-lg font-serif font-semibold text-[#181d1a] mb-6 border-b-admin border-admin-border pb-4">
                Description &amp; Highlights
              </h3>
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] block">
                    Property Description
                  </span>
                  <div className="border-admin border-admin-border rounded bg-white">
                    <div className="bg-[#F9FAFB] border-b-admin border-admin-border p-2 flex gap-2 rounded-t">
                      <button
                        type="button"
                        aria-label="Bold"
                        className="p-1 hover:bg-[#d6dbd7] rounded text-[#3e4944]"
                      >
                        <Bold className="w-4.5 h-4.5" />
                      </button>
                      <button
                        type="button"
                        aria-label="Italic"
                        className="p-1 hover:bg-[#d6dbd7] rounded text-[#3e4944]"
                      >
                        <Italic className="w-4.5 h-4.5" />
                      </button>
                      <button
                        type="button"
                        aria-label="List"
                        className="p-1 hover:bg-[#d6dbd7] rounded text-[#3e4944]"
                      >
                        <List className="w-4.5 h-4.5" />
                      </button>
                    </div>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter a detailed description of the property..."
                      className="w-full p-3 border-none text-sm focus:ring-0 outline-none resize-y text-[#181d1a] placeholder:text-[#6e7a73] rounded-b admin-field-radius bg-(--admin-field-bg)"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <TextField
                    id="highlightBuildingYear"
                    label="Building Year"
                    value={highlightBuildingYear}
                    onChange={setHighlightBuildingYear}
                    placeholder="YYYY"
                    type="number"
                    min={0}
                  />
                  <TextField
                    id="highlightHoa"
                    label="HOA Fees (/mo)"
                    value={highlightHoa}
                    onChange={setHighlightHoa}
                    placeholder="0.00"
                  />
                  <TextField
                    id="highlightParking"
                    label="Parking Spaces"
                    value={highlightParking}
                    onChange={setHighlightParking}
                    placeholder="0"
                  />
                  <div className="md:col-span-4">
                    <RadioGroup
                      name="outdoorSpace"
                      label="Outdoor Space"
                      value={highlightGarden}
                      onChange={setHighlightGarden}
                      options={outdoorSpaceOptions}
                      columns={4}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <TextField
                    id="highlightType"
                    label="Property Type"
                    value={highlightType}
                    onChange={setHighlightType}
                    placeholder="e.g. Villa"
                  />
                  <TextField
                    id="highlightOutside"
                    label="View / Outside"
                    value={highlightOutside}
                    onChange={setHighlightOutside}
                    placeholder="e.g. Ocean View"
                  />
                  <div className="grid grid-cols-2 gap-4 lg:col-span-1">
                    <TextField
                      id="lat"
                      label="Latitude"
                      value={lat}
                      onChange={setLat}
                      placeholder="0.00"
                      type="number"
                    />
                    <TextField
                      id="lng"
                      label="Longitude"
                      value={lng}
                      onChange={setLng}
                      placeholder="0.00"
                      type="number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <TextAreaField
                    id="features"
                    label="Features (comma separated)"
                    value={featuresText}
                    onChange={setFeaturesText}
                    placeholder="e.g. Garage, Swimming Pool, Garden"
                    rows={4}
                  />
                  <TextAreaField
                    id="amenities"
                    label="Amenities (comma separated)"
                    value={amenitiesText}
                    onChange={setAmenitiesText}
                    placeholder="e.g. Open Plan, Guest Suite, Spa Bath"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border-admin border-admin-border rounded-2xl p-5 hover:shadow-admin-card-hover transition-shadow">
              <h3 className="text-lg font-serif font-semibold text-[#181d1a] mb-6 border-b-admin border-admin-border pb-4">
                Media
              </h3>
              <div className="border-2 border-dashed border-admin-border rounded-2xl p-8 flex flex-col items-center justify-center bg-[#F9FAFB] text-center">
                <div className="w-16 h-16 bg-[#d6dbd7] rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-8 h-8 text-[#3e4944]" />
                </div>
                <p className="text-base font-semibold text-[#181d1a] mb-1">
                  Drag and drop images and videos here
                </p>
                <p className="text-sm text-[#3e4944] mb-4">
                  High-resolution photos recommended. Max 50MB per file.
                </p>
                <button
                  type="button"
                  className="px-4 py-2 bg-white border-admin border-admin-border text-[#181d1a] rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#F9FAFB] transition-colors"
                >
                  Browse Files
                </button>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <div className="bg-white border-admin border-admin-border rounded-2xl p-5 hover:shadow-admin-card-hover transition-shadow">
              <h3 className="text-lg font-serif font-semibold text-[#181d1a] mb-6 border-b-admin border-admin-border pb-4">
                Agent
              </h3>
              <div className="space-y-4">
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
          </aside>
        </div>
      </div>
    </form>
  );
}
