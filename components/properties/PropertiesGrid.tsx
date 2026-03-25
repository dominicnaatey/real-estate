import Image from "next/image";

import { Bath, BedDouble, Heart, MapPin, Square } from "lucide-react";

import type { Property } from "./types";

type PropertiesGridProps = {
  properties: Property[];
};

function formatPrice(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

export function PropertiesGrid({ properties }: PropertiesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {properties.map((property) => (
        <article
          key={property.id}
          className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-[2px] transition-all duration-300"
        >
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

            <button className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full transition-colors">
              <Heart className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="p-8 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-extrabold text-navy">
                ${formatPrice(property.price)}
              </span>
            </div>

            <h3 className="text-xl font-bold text-navy">{property.title}</h3>

            <div className="flex items-center gap-2 text-gray-500">
              <MapPin className="w-4 h-4" />
              <p className="text-sm">{property.location}</p>
            </div>

            <div className="flex gap-6 pt-4 border-t border-gray-200/40 text-gray-600">
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

            <button className="w-full bg-gray-50 text-navy py-3 rounded-full font-bold hover:bg-accent hover:text-white transition-all duration-300">
              View details
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
