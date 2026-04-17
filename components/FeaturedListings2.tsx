"use client";

import { useMemo } from "react";

import Link from "next/link";

import { properties } from "../lib/data/Properties";
import { PropertyCard } from "./ui/PropertyCard";

function formatPrice(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

export function FeaturedListings2() {
  const featuredListings = useMemo(() => {
    const featured = properties.filter((property) => property.isFeatured);
    return (featured.length ? featured : properties).slice(0, 3);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Hand Picked For You
          </h2>
          <p className="mt-2 text-sm font-semibold text-gray-500">
            Featured Properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredListings.map((listing, index) => (
            <PropertyCard
              key={listing.id}
              href={`/properties/${listing.id}`}
              image={listing.image}
              status={listing.listingType}
              isFavorite={index === 1}
              title={listing.title}
              price={`$${formatPrice(listing.price)}${listing.listingType === "For Rent" ? "/mo" : ""}`}
              location={listing.location}
              beds={listing.beds}
              baths={listing.baths}
              sqft={listing.sqft}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
          >
            Explore Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
