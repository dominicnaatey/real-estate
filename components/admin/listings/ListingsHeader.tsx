import { PlusCircle } from "lucide-react";

export function ListingsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <span className="inline-block px-3 py-1 bg-[#c7e7ff] text-[#001e2e] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
          Inventory Overview
        </span>
        <h1 className="text-5xl font-extrabold text-[#131b2e] tracking-tight mb-2">
          My Listings
        </h1>
        <p className="text-[#4f4633] font-medium">
          Currently managing{" "}
          <span className="text-[#785a00] font-bold">148 Properties</span> across
          4 regions.
        </p>
      </div>
      <div>
        <button className="bg-linear-to-r from-[#785a00] to-[#eab308] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-xl hover:shadow-[#eab308]/20 transition-all hover:-translate-y-1">
          <PlusCircle className="w-5 h-5 fill-current" />
          Add New Listing
        </button>
      </div>
    </div>
  );
}
