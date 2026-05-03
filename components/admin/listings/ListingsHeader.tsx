import { PlusCircle } from "lucide-react";

export function ListingsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <span className="inline-block px-3 py-1 bg-[#d9dff5] text-[#3e4944] text-[11px] font-semibold uppercase tracking-wider rounded-full mb-4">
          Inventory Overview
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-2">
          My Listings
        </h1>
        <p className="text-[#3e4944] font-medium">
          Currently managing{" "}
          <span className="text-[#181d1a] font-bold">148 Properties</span> across 4 regions.
        </p>
      </div>
      <div>
        <button className="bg-[#008060] text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-[#00654b] transition-colors active:scale-[0.98] shadow-sm">
          <PlusCircle className="w-5 h-5 fill-current" />
          Add New Listing
        </button>
      </div>
    </div>
  );
}
