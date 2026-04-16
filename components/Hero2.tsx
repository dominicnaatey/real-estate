"use client";

import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";

export function Hero2() {
  return (
    <section className="px-4 md:px-8 max-w-full mx-auto w-full font-sans">
      <div className="relative w-full h-[63vh] rounded-[2.5rem] overflow-hidden">
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

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-12 px-4">
          <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 md:mb-12 tracking-tight text-center">
            Find Your Home
          </h1>

          <div className="w-full max-w-xl md:max-w-5xl">
            <div className="md:hidden bg-white/95 backdrop-blur-sm p-3 rounded-[1.75rem] shadow-xl border border-black/10 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-full border border-black/20 bg-white p-1">
                  <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
                    Buy
                  </button>
                  <button className="text-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                    Rent
                  </button>
                </div>

                <button className="flex-1 bg-[#E7ECE6] text-gray-900 px-5 py-3 rounded-full text-sm font-medium flex items-center justify-between gap-4 hover:bg-[#DDE3DB] transition-colors">
                  Property Type
                  <ChevronDown size={16} className="text-gray-700" />
                </button>
              </div>

              <div className="bg-[#E7ECE6] rounded-full p-1 flex items-center gap-2 w-full">
                <input
                  type="text"
                  placeholder="Search location"
                  aria-label="Search location"
                  className="bg-transparent px-4 py-3 text-sm text-gray-900 placeholder:text-gray-600 outline-none w-full"
                />
                <button className="bg-black text-white px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors shrink-0">
                  <Search size={18} />
                  Search
                </button>
              </div>
            </div>

            <div className="hidden md:flex bg-white p-2 rounded-full items-center gap-2 shadow-xl w-full">
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
      </div>
    </section>
  );
}
