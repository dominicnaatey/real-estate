import { ArrowUpDown, ChevronDown } from "lucide-react";

export function PropertiesFilters() {
  return (
    <section className="mb-12">
      <div className="bg-offwhite rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-black/5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group">
            <button className="bg-white px-6 py-2.5 rounded-full text-sm font-semibold border border-black/10 flex items-center gap-2 hover:bg-offwhite transition-colors">
              Property Type <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="relative group">
            <button className="bg-white px-6 py-2.5 rounded-full text-sm font-semibold border border-black/10 flex items-center gap-2 hover:bg-offwhite transition-colors">
              Price Range <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="relative group">
            <button className="bg-white px-6 py-2.5 rounded-full text-sm font-semibold border border-black/10 flex items-center gap-2 hover:bg-offwhite transition-colors">
              Bedrooms <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="relative group">
            <button className="bg-white px-6 py-2.5 rounded-full text-sm font-semibold border border-black/10 flex items-center gap-2 hover:bg-offwhite transition-colors">
              Amenities <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-500">Sort by:</span>
          <button className="bg-white px-5 py-2.5 rounded-full text-sm font-bold text-accent flex items-center gap-2 shadow-sm border border-black/5">
            Newest First <ArrowUpDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
