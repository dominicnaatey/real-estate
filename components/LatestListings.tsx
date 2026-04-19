import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { properties } from "../lib/data/Properties";
import { PropertyCard } from "./ui/PropertyCard";

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
        {listings.map((listing, index) => (
          <PropertyCard
            key={listing.id}
            property={listing}
            isFavorite={index === 1}
          />
        ))}
      </div>
    </section>
  );
}
