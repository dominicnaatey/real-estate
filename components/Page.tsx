"use client";

import { BottomCTA } from "./BottomCTA";
import { Categories } from "./Categories";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { LatestListings } from "./LatestListings";
import { PopularListings } from "./PopularListings";
import { Services } from "./Services";
import { Stats } from "./Stats";
import { Testimonial } from "./Testimonial";

export default function Page() {
  return (
    <div className="min-h-screen bg-offwhite font-sans">
      <Header />
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
      <Footer />
    </div>
  );
}
