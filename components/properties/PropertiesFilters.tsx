import { Search, SlidersHorizontal } from "lucide-react";

export function PropertiesFilters() {
  return (
    <section className="mb-12">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            className="w-full bg-white border border-black/10 rounded-full py-3 pl-11 pr-4 text-sm font-medium text-gray-900 outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 placeholder:text-gray-500"
            placeholder="Search location or address or city"
            type="text"
            aria-label="Search location or address or city"
          />
        </div>

        <div className="flex items-center justify-between sm:justify-start gap-3">
          <div className="flex items-center border border-black/10 rounded-full bg-white p-1">
            <button
              type="button"
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium"
            >
              Buy
            </button>
            <button
              type="button"
              className="text-gray-800 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Rent
            </button>
          </div>

          <button
            type="button"
            className="bg-white border border-black/10 rounded-full px-5 py-3 text-sm font-medium text-gray-900 flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5 text-gray-700" />
            Filters
          </button>
        </div>
      </div>
    </section>
  );
}
