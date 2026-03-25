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
          className="group bg-white rounded-4xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
        >
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              alt={property.title}
              src={property.image}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {property.tags.length > 0 && (
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {property.tags.map((tag) => (
                  <span
                    key={tag}
                    className={
                      tag === "Featured"
                        ? "bg-accent/90 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-xl"
                        : "bg-white/90 text-navy px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-xl"
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-accent transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-4 gap-6">
              <div>
                <h3 className="text-xl font-bold text-navy mb-1">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm gap-1">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{property.location}</span>
                </div>
              </div>
              <p className="text-2xl font-extrabold text-navy whitespace-nowrap">
                ${formatPrice(property.price)}
              </p>
            </div>

            <div className="flex items-center gap-6 py-4 border-t border-gray-200/40 text-gray-600">
              <div className="flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold">{property.beds} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold">{property.baths} Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold">{property.sqft} sqft</span>
              </div>
            </div>

            <button className="w-full mt-2 bg-gray-50 text-navy py-3 rounded-full font-bold hover:bg-accent hover:text-white transition-all duration-300">
              View details
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

