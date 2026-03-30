"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-20 sm:pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
      <div className="text-center max-w-6xl mx-auto mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold text-navy tracking-tight mb-16"
        >
          Find your home
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-20 bg-slate-100 rounded-full p-2 shadow-xl shadow-navy/20 flex flex-col sm:flex-row items-center max-w-3xl mx-auto mb-4 md:-mb-18"
        >
          <div className="flex w-full sm:w-auto px-4 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-gray-100 gap-4">
            {["Buy", "Rent", "Sell", "Home Value"].map((tab, i) => (
              <button
                key={tab}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${i === 0 ? "bg-navy text-white" : "text-gray-500 hover:text-navy"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex-1 flex items-center w-full px-4 py-2 sm:py-0">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search Address, City, Postcode, Agent"
              className="w-full bg-transparent border-none focus:ring-0 text-navy placeholder-gray-400 text-sm outline-none"
            />
          </div>
          <button className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2 mt-2 sm:mt-0">
            <Search className="w-4 h-4" /> Find out
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative rounded-4xl overflow-hidden aspect-[16/9] sm:aspect-[5/2] md:h-[600px] shadow-2xl"
      >
        <Image
          src="/images/hero-2.jpg"
          alt="Modern Home Architecture"
          fill
          sizes="(min-width: 1536px) 1536px, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/0 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-6 md:bottom-8 z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="bg-white/70 backdrop-blur-xl border border-white/0 rounded-2xl px-5 py-4 shadow-lg w-fit">
              <div className="text-black font-semibold text-base md:text-lg leading-tight">
                Kasa Global Villas Estates
              </div>
              <div className="mt-1 flex items-center gap-2 text-gray-900">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="text-sm">Labone, Accra</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* <div className="mt-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <div>
            <div className="flex items-center gap-2 font-bold text-navy">
              <CheckCircle className="w-5 h-5 text-emerald-500" /> Trustpilot
            </div>
            <p className="text-xs text-gray-500">Excellent. 10,000+ reviews</p>
          </div>
        </div>

        <div className="max-w-xl text-center md:text-right">
          <p className="text-lg md:text-xl font-medium text-navy italic">
            “FloHomes is just amazing, selling a house has never been easier
            like FloHomes.”
          </p>
          <p className="text-sm text-gray-500 mt-2">— Arthur J.</p>
        </div>
      </div> */}
    </section>
  );
}
