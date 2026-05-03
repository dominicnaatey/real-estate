import { PlusCircle } from "lucide-react";

export function ListingsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
          Inventory Overview
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
          My Listings
        </h1>
        <p className="text-slate-600 font-medium">
          Currently managing{" "}
          <span className="text-slate-900 font-bold">148 Properties</span> across 4
          regions.
        </p>
      </div>
      <div>
        <button className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold flex items-center gap-3 shadow-sm hover:bg-blue-700 transition-colors active:scale-[0.99]">
          <PlusCircle className="w-5 h-5 fill-current" />
          Add New Listing
        </button>
      </div>
    </div>
  );
}
