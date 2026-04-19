"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Services() {
  const services = [
    {
      title: "We estimate your home and help you prepare to sell it.",
      image: "https://picsum.photos/seed/service1/600/400",
    },
    {
      title: "Find the best price that works for you",
      image: "https://picsum.photos/seed/service2/600/400",
    },
    {
      title: "We take care of the sale from start to finish.",
      image: "https://picsum.photos/seed/service3/600/400",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center max-w-2xl mx-auto mb-16">
          How to sell your home in FloHomes the easiest way
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-offwhite rounded-3xl p-8 flex flex-col items-center text-center group transition-all"
            >
              <h3 className="text-xl font-semibold text-navy mb-8 min-h-[60px]">
                {service.title}
              </h3>
              <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
