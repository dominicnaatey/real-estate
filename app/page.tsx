"use client";

import { BottomCTA } from "../components/BottomCTA";
import { Categories } from "../components/Categories";
import { Hero } from "../components/Hero";
import { LatestListings } from "../components/LatestListings";
import { PopularListings } from "../components/PopularListings";
import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { Testimonial } from "../components/Testimonial";

export default function Page() {
  return (
    <div className="bg-offwhite font-sans">
      <main>
        <Hero />
        <PopularListings />
        <Services />
        <Categories />
        <LatestListings />
        <Stats />
        <Testimonial />
        <BottomCTA />
      </main>
    </div>
  );
}
