"use client";

import { useMemo } from "react";

import { ShowerHead, BedDouble, Heart, MapPin, VectorSquare } from "lucide-react";
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

interface PropertyCardProps {
  href: string;
  image: string;
  status: "For Sale" | "For Rent";
  isFavorite?: boolean;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
}

export function PropertyCard({
  href,
  image,
  status,
  isFavorite = false,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
}: PropertyCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl mb-4">
        <Link href={href} className="absolute inset-0 z-10" aria-label={`View ${title}`} />
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-102"
          referrerPolicy="no-referrer"
        />

        <div className="absolute top-4 left-4 z-20">
          <span
            className={`px-3 py-1.5 text-sm font-medium rounded-full ${
              status === "For Sale"
                ? "bg-white/901 text-gray-900/90"
                : "bg-gray-900 text-white"
            }`}
          >
            {status}
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
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <span className="text-lg font-bold text-[#FF5A3D]">{price}</span>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <BedDouble size={16} />
            <span>{beds} Bedrooms</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShowerHead size={16} />
            <span>{baths} Bathrooms</span>
          </div>
          <div className="flex items-center gap-1.5">
            <VectorSquare size={16} />
            <span>{sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedListings2() {
  const featuredListings = useMemo(() => {
    const featured = properties.filter((property) => property.isFeatured);
    return (featured.length ? featured : properties).slice(0, 3);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
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
              href={`/properties/${slugify(listing.title)}`}
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
