import Image from "next/image";
import Link from "next/link";

import { Bath, BedDouble, Heart, MapPin, Square } from "lucide-react";

import type { Property } from "./types";

type PropertiesGridProps = {
  properties: Property[];
};

function formatPrice(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "-")
    .replace(/-+/g, "-");
}

export function PropertiesGrid({ properties }: PropertiesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {properties.map((property) => (
        <article
          key={property.id}
          className="relative bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-[2px] transition-all duration-300"
        >
          <Link
            href={`/properties/${slugify(property.title)}`}
            className="absolute inset-0 z-10"
            aria-label={`View ${property.title}`}
          />
          <div className="relative w-full h-64">
            <Image
              alt={property.title}
              src={property.image}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority={property.id === 1}
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {property.listingType}
            </div>
          </div>

          <div className="bg-white p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xl font-extrabold text-navy">
                ${formatPrice(property.price)}
              </span>
              <button className="relative z-20 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <h3 className="text-lg font-semibold text-navy">{property.title}</h3>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <p className="text-sm">{property.location}</p>
            </div>

            <div className="flex gap-4 pt-4 pb-2 border-t border-gray-200/40 text-gray-600 font-medium">
              <div className="flex items-center gap-1.5 text-sm">
                <BedDouble className="w-4 h-4 text-accent" /> {property.beds} Beds
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Bath className="w-4 h-4 text-accent" /> {property.baths} Baths
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Square className="w-4 h-4 text-accent" /> {property.sqft} sqft
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
