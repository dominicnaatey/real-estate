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
          className="group bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              alt={property.title}
              src={property.image}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              priority={property.id === 1}
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-accent transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-extrabold text-navy">
                ${formatPrice(property.price)}
              </h3>
            </div>
            <p className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">
              {property.title}
            </p>
            <p className="text-sm text-gray-500 mb-6 flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {property.location}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-200/40 text-gray-600">
              <div className="flex items-center gap-1.5">
                <BedDouble className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold">{property.beds} Beds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bath className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold">{property.baths} Baths</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Square className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold">{property.sqft} sqft</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
