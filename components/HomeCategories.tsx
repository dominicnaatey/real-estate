"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HomeCategories() {
  const categories = [
    {
      name: "House",
      count: "1,068 listings",
      image: "https://picsum.photos/seed/cat1/400/300",
    },
    {
      name: "Apartment",
      count: "312 listings",
      image: "https://picsum.photos/seed/cat2/400/300",
    },
    {
      name: "Villa",
      count: "742 listings",
      image: "https://picsum.photos/seed/cat3/400/300",
    },
    {
      name: "Condo",
      count: "185 listings",
      image: "https://picsum.photos/seed/cat4/400/300",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Listing category
        </h2>
        <div className="flex items-center gap-2 text-gray-500">
          <span>Type of our property.</span>
          <a
            href="#"
            className="text-navy font-medium hover:text-accent flex items-center gap-1 transition-colors"
          >
            View all 2,412 listings <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-4 flex items-center gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.count}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
