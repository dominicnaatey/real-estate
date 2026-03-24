"use client";

import { BottomCTA } from "../components/BottomCTA";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { LatestListings } from "../components/LatestListings";
import { PopularListings } from "../components/PopularListings";
import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { Testimonial } from "../components/Testimonial";

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
