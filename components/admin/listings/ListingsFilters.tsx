import { Calendar, Filter } from "lucide-react";

export function ListingsFilters() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <div className="flex flex-wrap gap-2">
        <button className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold transition-colors">
          All
        </button>
        <button className="px-5 py-2.5 bg-white border border-slate-200/70 text-slate-700 rounded-full text-sm font-semibold hover:bg-slate-50 transition-colors">
          Active
        </button>
        <button className="px-5 py-2.5 bg-white border border-slate-200/70 text-slate-700 rounded-full text-sm font-semibold hover:bg-slate-50 transition-colors">
          Pending
        </button>
        <button className="px-5 py-2.5 bg-white border border-slate-200/70 text-slate-700 rounded-full text-sm font-semibold hover:bg-slate-50 transition-colors">
          Sold
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button className="h-10 px-4 bg-white border border-slate-200/70 rounded-full flex items-center gap-2 text-sm text-slate-700 font-medium hover:bg-slate-50 transition-colors">
          <Filter className="w-4 h-4" />
          Property Type
        </button>
        <button className="h-10 px-4 bg-white border border-slate-200/70 rounded-full flex items-center gap-2 text-sm text-slate-700 font-medium hover:bg-slate-50 transition-colors">
          <Calendar className="w-4 h-4" />
          Date Range
        </button>
      </div>
    </div>
  );
}
