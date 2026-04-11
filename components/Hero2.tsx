"use client";

import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";

export function Hero2() {
  return (
    <section className="px-4 md:px-8 max-w-full mx-auto w-full mb-16 font-sans">
      <div className="relative w-full h-[88vh] rounded-[2.5rem] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/13041126/pexels-photo-13041126.jpeg?_gl=1*13so0km*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MTQxMjgkbzQkZzEkdDE3NzU5MTQxNDUkajQzJGwwJGgw"
          alt="Modern home exterior"
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-b from-transparent from-40% via-black/50 via-75% to-black/95" />

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12">
          <h1 className="text-5xl md:text-6xl font-medium text-white mb-12 tracking-tight">
            Find Your Home
          </h1>

          <div className="bg-white p-2 rounded-full flex flex-col md:flex-row items-center gap-2 shadow-xl w-11/12 md:w-auto max-w-5xl">
            <div className="flex items-center">
              <button className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium">
                Buy
              </button>
              <button className="text-gray-900 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                Rent
              </button>
            </div>

            <button className="bg-[#E5E7EB] text-gray-900 px-6 py-3.5 rounded-full text-sm font-medium flex items-center gap-4 hover:bg-gray-300 transition-colors">
              Property Type
              <ChevronDown size={16} className="text-gray-600" />
            </button>

            <button className="bg-[#E5E7EB] text-gray-900 px-6 py-3.5 rounded-full text-sm font-medium flex items-center justify-between min-w-[200px] hover:bg-gray-300 transition-colors">
              Location
              <ChevronDown size={16} className="text-gray-600" />
            </button>

            <button className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors ml-1">
              <Search size={18} />
              Find Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
