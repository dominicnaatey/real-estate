"use client";

import { ArrowRight } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <p className="text-2xl md:text-3xl font-medium text-navy leading-relaxed mb-8">
        “The site is good, helpful in providing information to find a house,
        especially for me who likes to search for information via cellphone,
        good luck for FloHomes and continue to help for housing seekers like me.”
      </p>
      <div className="flex flex-col items-center">
        <h4 className="font-bold text-navy text-lg">Pamela S.</h4>
        <p className="text-sm text-gray-500 mb-6">Lake Forest, CA</p>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors">
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          <button className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
