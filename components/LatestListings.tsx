"use client";

import { ArrowRight, Bath, BedDouble, Heart, MapPin, Square } from "lucide-react";
import Image from "next/image";

export function LatestListings() {
  const listings = [
    {
      id: 4,
      image:
        "https://cdn.pixabay.com/photo/2017/02/25/18/31/bulgaria-2098435_1280.jpg",
      price: 99000,
      type: "Apartment",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 4,
      baths: 3,
      sqft: "1,209",
    },
    {
      id: 5,
      image:
        "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
      price: 237839,
      type: "Apartment",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 3,
      baths: 2,
      sqft: "700",
    },
    {
      id: 6,
      image:
        "https://cdn.pixabay.com/photo/2018/03/20/17/35/furniture-3243991_1280.jpg",
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
          <div
            key={listing.id}
            className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-[2px] transition-all duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                alt={listing.type}
                src={listing.image}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                For Sale
              </div>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-extrabold text-navy">
                  ${listing.price.toLocaleString()}
                </span>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Heart className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <h3 className="text-xl font-bold text-navy">{listing.type}</h3>

              <div className="flex items-start gap-2 text-gray-500">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <p className="text-sm leading-6">{listing.address}</p>
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
