import { Calendar, Filter } from "lucide-react";

export function ListingsFilters() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <div className="flex flex-wrap gap-2">
        <button className="px-6 py-2.5 bg-[#131b2e] text-white rounded-full text-sm font-semibold transition-all">
          All
        </button>
        <button className="px-6 py-2.5 bg-[#f2f3ff] text-[#4f4633] rounded-full text-sm font-semibold hover:bg-[#e2e7ff] transition-all">
          Active
        </button>
        <button className="px-6 py-2.5 bg-[#f2f3ff] text-[#4f4633] rounded-full text-sm font-semibold hover:bg-[#e2e7ff] transition-all">
          Pending
        </button>
        <button className="px-6 py-2.5 bg-[#f2f3ff] text-[#4f4633] rounded-full text-sm font-semibold hover:bg-[#e2e7ff] transition-all">
          Sold
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button className="h-10 px-4 bg-[#f2f3ff] rounded-full flex items-center gap-2 text-sm text-[#4f4633] font-medium hover:bg-[#e2e7ff] transition-colors">
          <Filter className="w-4 h-4" />
          Property Type
        </button>
        <button className="h-10 px-4 bg-[#f2f3ff] rounded-full flex items-center gap-2 text-sm text-[#4f4633] font-medium hover:bg-[#e2e7ff] transition-colors">
          <Calendar className="w-4 h-4" />
          Date Range
        </button>
      </div>
    </div>
  );
}
