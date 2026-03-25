import { ChevronLeft, ChevronRight } from "lucide-react";

export function PropertiesPagination() {
  return (
    <nav className="mt-20 flex items-center justify-center gap-4">
      <button className="w-12 h-12 rounded-full bg-offwhite border border-black/5 flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div className="flex items-center gap-2">
        <button className="w-12 h-12 rounded-full bg-accent text-white font-bold">
          1
        </button>
        <button className="w-12 h-12 rounded-full bg-white text-navy font-bold hover:bg-offwhite transition-colors border border-black/5">
          2
        </button>
        <button className="w-12 h-12 rounded-full bg-white text-navy font-bold hover:bg-offwhite transition-colors border border-black/5">
          3
        </button>
        <span className="mx-2 text-gray-500">...</span>
        <button className="w-12 h-12 rounded-full bg-white text-navy font-bold hover:bg-offwhite transition-colors border border-black/5">
          12
        </button>
      </div>
      <button className="w-12 h-12 rounded-full bg-offwhite border border-black/5 flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}
