import { BedDouble, Heart, MapPin, ShowerHead, VectorSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Property } from "../properties/types";

type PropertyCardListing = Pick<
  Property,
  "id" | "title" | "price" | "location" | "beds" | "baths" | "sqft" | "image" | "listingType"
>;

function formatPrice(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

export interface PropertyCardProps {
  property: PropertyCardListing;
  href?: string;
  isFavorite?: boolean;
}

export function PropertyCard({
  property,
  href,
  isFavorite = false,
}: PropertyCardProps) {
  const cardHref = href ?? `/properties/${property.id}`;
  const priceLabel = `$${formatPrice(property.price)}${property.listingType === "For Rent" ? "/mo" : ""}`;

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl mb-4">
        <Link href={cardHref} className="absolute inset-0 z-10" aria-label={`View ${property.title}`} />
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-102"
          referrerPolicy="no-referrer"
        />

        <div className="absolute top-4 left-4 z-20">
          <span
            className={`px-3 py-1.25 text-[13px] font-medium rounded-full ${
              property.listingType === "For Sale"
                ? "bg-white/80 backdrop-blur-3xl text-gray-900"
                : "bg-gray-900/80 backdrop-blur-3xl text-white"
            }`}
          >
            {property.listingType}
          </span>
        </div>

        <button
          type="button"
          className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full shadow-sm hover:scale-105 transition-transform"
          aria-label="Save property"
        >
          <Heart
            size={20}
            className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-900"}
          />
        </button>
      </div>

      <div className="px-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-gray-900">{property.title}</h3>
          <span className="text-lg font-bold text-[#FF5A3D]">{priceLabel}</span>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-1" />
          <span>{property.location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <BedDouble size={16} />
            <span>{property.beds} Bedroom</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShowerHead size={16} />
            <span>{property.baths} Bath</span>
          </div>
          <div className="flex items-center gap-1.5">
            <VectorSquare size={16} />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
