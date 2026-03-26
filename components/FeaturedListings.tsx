"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  ArrowRight,
  Bath,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  Square,
} from "lucide-react";
import Image from "next/image";

import { properties } from "./data/Properties";

function formatPrice(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

export function FeaturedListings() {
  const featuredListings = useMemo(
    () => properties.filter((property) => property.isFeatured),
    [],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const safeActiveIndex = Math.min(
    activeIndex,
    Math.max(0, featuredListings.length - 1),
  );

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;

      const clampedIndex = Math.max(0, Math.min(index, featuredListings.length - 1));
      const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-slide]"));
      const target = slides[clampedIndex];

      target?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    },
    [featuredListings.length],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-slide]"));
    if (slides.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (!best) return;

        const index = Number((best.target as HTMLElement).dataset.index ?? "0");
        setActiveIndex(index);
      },
      { root: track, threshold: [0.5, 0.75] },
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [featuredListings.length]);

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
          <div className="flex items-center gap-4">
            <button className="text-accent font-bold flex items-center gap-2 group w-fit">
              Explore All{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-navy hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:pointer-events-none"
                onClick={() => scrollToIndex(safeActiveIndex - 1)}
                disabled={safeActiveIndex === 0}
                aria-label="Previous featured listing"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-navy hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:pointer-events-none"
                onClick={() => scrollToIndex(safeActiveIndex + 1)}
                disabled={safeActiveIndex >= featuredListings.length - 1}
                aria-label="Next featured listing"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredListings.map((listing, index) => (
            <div
              key={listing.id}
              data-slide
              data-index={index}
              className="flex-none w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.333px)] snap-start"
            >
              <div className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-[2px] transition-all duration-300">
                <div className="relative w-full h-64">
                  <Image
                    alt={listing.title}
                    src={listing.image}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    priority={index === 0}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {listing.listingType}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-extrabold text-navy">
                      ${formatPrice(listing.price)}
                      {listing.listingType === "For Rent" ? "/mo" : ""}
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
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {featuredListings.map((listing, index) => (
            <button
              key={listing.id}
              type="button"
              aria-label={`Go to featured listing ${index + 1}`}
              onClick={() => scrollToIndex(index)}
              className={[
                "h-2 rounded-full transition-all",
                index === safeActiveIndex
                  ? "w-10 bg-accent"
                  : "w-2 bg-gray-300 hover:bg-gray-400",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
