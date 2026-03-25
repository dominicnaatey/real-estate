import { ChevronLeft, ChevronRight } from "lucide-react";

export function PropertiesPagination() {
  return (
    <div className="mt-16 flex justify-center items-center gap-4">
      <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-navy">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div className="flex gap-2">
        <button className="w-12 h-12 rounded-full bg-accent text-white font-bold">
          1
        </button>
        <button className="w-12 h-12 rounded-full hover:bg-gray-50 font-bold text-navy">
          2
        </button>
        <button className="w-12 h-12 rounded-full hover:bg-gray-50 font-bold text-navy">
          3
        </button>
        <span className="w-12 h-12 flex items-center justify-center text-navy">
          ...
        </span>
        <button className="w-12 h-12 rounded-full hover:bg-gray-50 font-bold text-navy">
          12
        </button>
      </div>
      <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-navy">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

