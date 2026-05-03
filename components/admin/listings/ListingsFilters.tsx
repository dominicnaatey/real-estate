import { Calendar, Filter } from "lucide-react";

export function ListingsFilters() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 bg-[#d9dff5] text-[#181d1a] rounded-lg text-sm font-medium border border-gray-200 hover:bg-[#dce2f7] transition-colors">
          All
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-[#3e4944] rounded-lg text-sm font-medium hover:bg-[#F0F5F0] transition-colors">
          Active
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-[#3e4944] rounded-lg text-sm font-medium hover:bg-[#F0F5F0] transition-colors">
          Pending
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-[#3e4944] rounded-lg text-sm font-medium hover:bg-[#F0F5F0] transition-colors">
          Sold
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button className="h-10 px-4 bg-white border border-gray-200 rounded-lg flex items-center gap-2 text-sm text-[#3e4944] font-medium hover:bg-[#F0F5F0] transition-colors">
          <Filter className="w-4 h-4" />
          Property Type
        </button>
        <button className="h-10 px-4 bg-white border border-gray-200 rounded-lg flex items-center gap-2 text-sm text-[#3e4944] font-medium hover:bg-[#F0F5F0] transition-colors">
          <Calendar className="w-4 h-4" />
          Date Range
        </button>
      </div>
    </div>
  );
}
