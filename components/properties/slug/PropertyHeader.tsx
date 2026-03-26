import { Bath, BedDouble, MapPin, Square } from "lucide-react";

function formatPrice(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

type PropertyHeaderProps = {
  title: string;
  location: string;
  price: number;
  listingType: string;
  beds: number;
  baths: number;
  sqft: string;
};

export function PropertyHeader({
  title,
  location,
  price,
  listingType,
  beds,
  baths,
  sqft,
}: PropertyHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-navy">
            {title}
          </h1>
          <p className="text-lg text-gray-500 font-medium flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            {location}
          </p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-black text-accent">
            ${formatPrice(price)}
            {listingType === "For Rent" ? "/mo" : ""}
          </div>
          <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">
            {listingType}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 pt-2">
        <div className="bg-gray-100 text-navy px-6 py-3 rounded-full flex items-center gap-3">
          <BedDouble className="w-5 h-5 text-accent" />
          <span className="font-semibold">{beds} Beds</span>
        </div>
        <div className="bg-gray-100 text-navy px-6 py-3 rounded-full flex items-center gap-3">
          <Bath className="w-5 h-5 text-accent" />
          <span className="font-semibold">{baths} Baths</span>
        </div>
        <div className="bg-gray-100 text-navy px-6 py-3 rounded-full flex items-center gap-3">
          <Square className="w-5 h-5 text-accent" />
          <span className="font-semibold">{sqft}</span>
        </div>
      </div>
    </div>
  );
}