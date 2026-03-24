"use client";

import { motion } from "framer-motion";
import { Bath, BedDouble, Heart, MapPin, Square } from "lucide-react";

export type Listing = {
  id: number;
  image: string;
  price: number;
  oldPrice?: number;
  type: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  featured?: boolean;
  specialOffer?: boolean;
};

export type PropertyCardProps = Omit<Listing, "id">;

export function HomePropertyCard({
  image,
  price,
  oldPrice,
  type,
  address,
  beds,
  baths,
  sqft,
  featured,
  specialOffer,
}: PropertyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={address}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white text-gray-600 hover:text-accent transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        {featured && (
          <span className="absolute top-4 left-4 bg-navy text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </span>
        )}
        {specialOffer && (
          <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
            Special Offer
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-end gap-3 mb-2">
          <h3 className="text-2xl font-bold text-navy">
            ${price.toLocaleString()}
          </h3>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through mb-1">
              ${oldPrice.toLocaleString()}
            </span>
          )}
        </div>
        <p className="text-sm font-medium text-accent mb-1">{type}</p>
        <p className="text-sm text-gray-500 mb-6 flex items-start gap-1">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> {address}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <BedDouble className="w-4 h-4 text-gray-400" /> {beds} bds
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-gray-400" /> {baths} ba
          </div>
          <div className="flex items-center gap-2">
            <Square className="w-4 h-4 text-gray-400" /> {sqft} sqft
          </div>
        </div>
      </div>
    </motion.div>
  );
}
