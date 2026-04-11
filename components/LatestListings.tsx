"use client";

import { ArrowRight, Bath, BedDouble, Heart, MapPin, Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "../lib/data/Properties";

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

export function LatestListings() {
  const listings = properties.slice(3, 6);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Latest listings
        </h2>
        <div className="flex items-center gap-2 text-gray-500">
          <span>FloHomes’s most popular watchlists.</span>
          <Link
            href="/properties"
            className="text-navy font-medium hover:text-accent flex items-center gap-1 transition-colors"
          >
            View all {properties.length} listings <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="relative bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-[2px] transition-all duration-300"
          >
            <Link
              href={`/properties/${slugify(listing.title)}`}
              className="absolute inset-0 z-10"
              aria-label={`View ${listing.title}`}
            />
            <div className="relative w-full h-64">
              <Image
                alt={listing.title}
                src={listing.image}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                {listing.listingType}
              </div>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-extrabold text-navy">
                  ${formatPrice(listing.price)}
                </span>
                <button className="relative z-20 p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Heart className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <h3 className="text-xl font-bold text-navy">{listing.title}</h3>

              <div className="flex items-start gap-2 text-gray-500">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <p className="text-sm leading-6">{listing.location}</p>
              </div>

              <div className="flex gap-6 pt-4 border-t border-gray-200/40 text-gray-600">
                <div className="flex items-center gap-1.5 text-sm">
                  <BedDouble className="w-4 h-4 text-accent" /> {listing.beds} Beds
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <Bath className="w-4 h-4 text-accent" /> {listing.baths} Baths
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <Square className="w-4 h-4 text-accent" /> {listing.sqft} sqft
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
