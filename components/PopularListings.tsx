"use client";

import { ArrowRight, Bath, BedDouble, Heart, MapPin, Square } from "lucide-react";
import Image from "next/image";

export function PopularListings() {
  const listings = [
    {
      id: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAewja7GoZSQWSNs6NX84rLiLBsw4yqirc0e8Xqo-cap6wFOp2IDeo4Rcs484K7n9heRTWN_SRNqWF-dPcDjxKAzxtQFjd0QAw5hkMch6NDitCFkaU3WjK987A6xXH6G965vxapORYlFi7_DCpSTq9Ly0QxVyqXegnx8JWE-v6ffXfmZ5Qf0MexfVXr82WI7Ak5304xloJ458qnHno6UySi6cgIVsgP_BSkBZNEF9zelJtJ-Q2WtpDnjmChGpUJsyiPcAXhFZRg7xef",
      status: "For Sale",
      priceLabel: "$2,450,000",
      title: "Horizon Peak Villa",
      location: "Malibu, California",
      beds: 5,
      baths: 4,
      sqft: "4,200 sqft",
    },
    {
      id: 2,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAz3sQ79HIjhQ0zxztBIgzJQOe88RPiknxuWWLSNyvGG_mWq3Il9_aQF_IYk84PdYMCxgzSCIp10UZcaAdjnEC22HKcFyEhyHckxMj7BG77PUdCJkH2cqLSujMhTpViotGesQVhoFmwLVxJwmNgqN0Uq7k583Mtwg5LzVEU799T7W2u0yOYYphv-kEVsQW6-zJ3uZBduLW1-mjnrDNP9kN06PX5_GShoUEnGCXctOtGCxGAlh0N_bP3AWPEdM2SmQXfAvbqqcnQodu9",
      status: "For Sale",
      priceLabel: "$1,890,000",
      title: "The Glass Pavilion",
      location: "Austin, Texas",
      beds: 4,
      baths: 3,
      sqft: "3,150 sqft",
    },
    {
      id: 3,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCm2NTu2mvhsTqk_fLPQfQBLL5CtUCFeCYOZ8WG5xhEQuozz5iSB3QcRhV_WA58AKb6Qyx5nDQBRrliMpF6Qmgwt4v_rYW-zTL-UdiefkViMaL4uLvNqGMu5TzRUWHqfLDEjJVTUcwDh1aEesk_p7zyNKbG2DvulmLKNkhHzwIU0hdMr8Uj_s6n_BZX5djTqd0qscG2kgw8K6aGvwYxkcLDegIIIYCCnjLhGgX1iOaOCtzYxrNQ6xKQ1P4MAQ3pdonBjjRuUC9pRrZG",
      status: "For Rent",
      priceLabel: "$8,500/mo",
      title: "Midnight Manor",
      location: "Seattle, Washington",
      beds: 3,
      baths: 2,
      sqft: "2,800 sqft",
    },
  ];

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
          {listings.map((listing) => (
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
                  priority={listing.id === 1}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  {listing.status}
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-extrabold text-navy">
                    {listing.priceLabel}
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
