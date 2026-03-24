"use client";

import { HomeBottomCTA } from "./HomeBottomCTA";
import { HomeCategories } from "./HomeCategories";
import { HomeFooter } from "./HomeFooter";
import { HomeHeader } from "./HomeHeader";
import { HomeHero } from "./HomeHero";
import { HomeLatestListings } from "./HomeLatestListings";
import { HomePopularListings } from "./HomePopularListings";
import { HomeServices } from "./HomeServices";
import { HomeStats } from "./HomeStats";
import { HomeTestimonial } from "./HomeTestimonial";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-offwhite font-sans">
      <HomeHeader />
      <main>
        <HomeHero />
        <HomePopularListings />
        <HomeServices />
        <HomeCategories />
        <HomeLatestListings />
        <HomeStats />
        <HomeTestimonial />
        <HomeBottomCTA />
      </main>
      <HomeFooter />
    </div>
  );
}
