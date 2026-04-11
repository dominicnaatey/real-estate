"use client";

import { BottomCTA } from "../components/BottomCTA";
import { Categories } from "../components/Categories";
import { FeaturedListings2 } from "../components/FeaturedListings2";
import { HeroSection } from "../components/Hero";
import { Hero2 } from "../components/Hero2";
import { LatestListings } from "../components/LatestListings";
import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { Testimonial } from "../components/Testimonial";

export default function Page() {
  return (
    <div className="bg-white font-sans">
      <main>
        <Hero2 />
        <FeaturedListings2 />
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
