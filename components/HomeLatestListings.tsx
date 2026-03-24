"use client";

import { ArrowRight } from "lucide-react";
import { HomePropertyCard, type Listing } from "./HomePropertyCard";

export function HomeLatestListings() {
  const listings: Listing[] = [
    {
      id: 4,
      image: "https://picsum.photos/seed/apt1/800/600",
      price: 99000,
      type: "Apartment",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 4,
      baths: 3,
      sqft: "1,209",
    },
    {
      id: 5,
      image: "https://picsum.photos/seed/apt2/800/600",
      price: 237839,
      type: "Apartment",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 3,
      baths: 2,
      sqft: "700",
    },
    {
      id: 6,
      image: "https://picsum.photos/seed/apt3/800/600",
      price: 757894,
      type: "Apartment",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 4,
      baths: 3,
      sqft: "1,209",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Latest listings
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing) => (
          <HomePropertyCard key={listing.id} {...listing} />
        ))}
      </div>
    </section>
  );
}
