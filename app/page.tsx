"use client";

import { BottomCTA } from "../components/BottomCTA";
import { Categories } from "../components/Categories";
import { FeaturedListings } from "../components/FeaturedListings";
import { Hero } from "../components/Hero";
import { LatestListings } from "../components/LatestListings";
import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { Testimonial } from "../components/Testimonial";

export default function Page() {
  return (
    <div className="bg-white font-sans">
      <main>
        <Hero />
        <FeaturedListings />
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
