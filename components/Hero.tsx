"use client";

import { motion } from "framer-motion";
import { CheckCircle, Search, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold text-navy tracking-tight mb-8"
        >
          Find your home
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-20 bg-white rounded-full p-2 shadow-xl shadow-navy/5 flex flex-col sm:flex-row items-center max-w-3xl mx-auto border border-gray-100 -mb-10 md:-mb-18"
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
        className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl"
      >
        <img
          src="images/hero-1.jpg"
          alt="Modern Home Architecture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
      </motion.div>

      <div className="mt-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
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
            “FloHomes is just amazing, selling a house has never been easier like
            FloHomes.”
          </p>
          <p className="text-sm text-gray-500 mt-2">— Arthur J.</p>
        </div>
      </div>
    </section>
  );
}
