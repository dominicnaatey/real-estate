"use client";

import { ArrowRight } from "lucide-react";
import { PropertyCard, type Listing } from "./PropertyCard";

export function PopularListings() {
  const listings: Listing[] = [
    {
      id: 1,
      image: "https://picsum.photos/seed/house1/800/600",
      price: 549000,
      oldPrice: 599000,
      type: "Single Family House",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 4,
      baths: 3,
      sqft: "1,209",
      specialOffer: true,
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/house2/800/600",
      price: 354809,
      type: "Single Family House",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 3,
      baths: 2,
      sqft: "700",
      featured: true,
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/house3/800/600",
      price: 199900,
      type: "Single Family House",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 4,
      baths: 3,
      sqft: "1,209",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Popular listings
          </h2>
          <div className="flex items-center gap-2 text-gray-500">
            <span>FloHomes’s most popular watchlists.</span>
            <a
              href="#"
              className="text-navy font-medium hover:text-accent flex items-center gap-1 transition-colors"
            >
              View all 2,412 listings <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex gap-2">
          {["House", "Apartment", "Villa"].map((tab, i) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-navy text-white" : "bg-white text-gray-600 border border-gray-200 hover:border-navy"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing) => (
          <PropertyCard key={listing.id} {...listing} />
        ))}
      </div>
    </section>
  );
}
