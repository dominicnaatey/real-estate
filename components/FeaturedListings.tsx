import { useMemo } from "react";

import {
  ArrowRight,
  Bath,
  BedDouble,
  Heart,
  MapPin,
  Square,
} from "lucide-react";
import Image from "next/image";

import { properties } from "./data/Properties";

function formatPrice(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

export function FeaturedListings() {
  const featuredListings = useMemo(
    () => properties.filter((property) => property.isFeatured),
    [],
  );

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-navy">Featured Listings</h2>
            <p className="text-gray-500 max-w-md">
              The most viewed and sought-after properties this month across our premium
              portfolio.
            </p>
          </div>
          <button className="text-accent font-bold flex items-center gap-2 group w-fit">
            Explore All{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing, index) => (
            <div
              key={listing.id}
              className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-[2px] transition-all duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  alt={listing.title}
                  src={listing.image}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  {listing.listingType}
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-extrabold text-navy">
                    ${formatPrice(listing.price)}
                    {listing.listingType === "For Rent" ? "/mo" : ""}
                  </span>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Heart className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-navy">{listing.title}</h3>

                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <p className="text-sm">{listing.location}</p>
                </div>

                <div className="flex gap-6 pt-4 border-t border-gray-200/40 text-gray-600">
                  <div className="flex items-center gap-1.5 text-sm">
                    <BedDouble className="w-4 h-4 text-accent" /> {listing.beds} Beds
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <Bath className="w-4 h-4 text-accent" /> {listing.baths} Baths
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <Square className="w-4 h-4 text-accent" /> {listing.sqft}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
