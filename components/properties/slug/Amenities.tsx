import { Bath, BedDouble, MapPin, Square } from "lucide-react";

type AmenitiesProps = {
  amenities?: string[];
};

export function Amenities({ amenities }: AmenitiesProps) {
  const propertyAmenities = amenities || [
    "Open Plan",
    "Guest Suite",
    "Spa Bath",
    "Prime Locale",
  ];

  return (
    <div className="bg-gray-50 rounded-3xl p-10 space-y-8 border border-gray-100">
      <h2 className="text-2xl font-bold">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-navy">
        {propertyAmenities.map((amenity, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-accent shadow-sm">
              {amenity.toLowerCase().includes("plan") ||
              amenity.toLowerCase().includes("space") ? (
                <Square className="w-7 h-7" />
              ) : amenity.toLowerCase().includes("bed") ||
                amenity.toLowerCase().includes("suite") ? (
                <BedDouble className="w-7 h-7" />
              ) : amenity.toLowerCase().includes("bath") ? (
                <Bath className="w-7 h-7" />
              ) : (
                <MapPin className="w-7 h-7" />
              )}
            </div>
            <span className="text-sm font-semibold">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}