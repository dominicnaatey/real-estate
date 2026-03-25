export function PropertiesFilters() {
  return (
    <aside className="hidden lg:flex flex-col p-6 gap-y-6 h-[calc(100vh-8rem)] w-80 rounded-3xl sticky top-24 bg-offwhite border border-black/5 overflow-y-auto">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Filters
          </span>
        </div>
        <h2 className="font-bold text-lg tracking-tight text-navy">
          Advanced filters
        </h2>
        <p className="text-xs text-gray-500 mt-1">Refine your property search</p>
      </div>

      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
          Category
        </span>
        <nav className="space-y-2">
          <button className="w-full bg-white text-navy rounded-full shadow-sm px-4 py-3 flex items-center justify-between border border-black/5">
            <span className="text-sm font-semibold">All Properties</span>
            <span className="text-xs font-bold text-gray-400">124</span>
          </button>
          <button className="w-full text-gray-600 px-4 py-3 rounded-full hover:bg-white/70 transition-colors flex items-center justify-between">
            <span className="text-sm font-medium">Residential</span>
            <span className="text-xs font-bold text-gray-400">86</span>
          </button>
          <button className="w-full text-gray-600 px-4 py-3 rounded-full hover:bg-white/70 transition-colors flex items-center justify-between">
            <span className="text-sm font-medium">Commercial</span>
            <span className="text-xs font-bold text-gray-400">21</span>
          </button>
          <button className="w-full text-gray-600 px-4 py-3 rounded-full hover:bg-white/70 transition-colors flex items-center justify-between">
            <span className="text-sm font-medium">Land</span>
            <span className="text-xs font-bold text-gray-400">17</span>
          </button>
        </nav>
      </div>

      <div className="mt-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-3">
          Price range
        </span>
        <div className="px-2">
          <div className="h-1 w-full bg-black/10 rounded-full relative">
            <div className="absolute h-full w-2/3 bg-accent left-4 rounded-full"></div>
            <div className="absolute h-4 w-4 bg-white border-2 border-accent rounded-full -top-1.5 left-4 shadow-sm"></div>
            <div className="absolute h-4 w-4 bg-white border-2 border-accent rounded-full -top-1.5 right-1/4 shadow-sm"></div>
          </div>
          <div className="flex justify-between mt-3 text-[10px] font-bold text-gray-500">
            <span>$500k</span>
            <span>$5.5M+</span>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
          Bedrooms
        </span>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-white border border-black/10 flex items-center justify-center text-sm font-bold text-navy">
            1+
          </button>
          <button className="w-10 h-10 rounded-xl bg-white border border-black/10 flex items-center justify-center text-sm font-bold text-navy">
            2+
          </button>
          <button className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center text-sm font-bold">
            3+
          </button>
          <button className="w-10 h-10 rounded-xl bg-white border border-black/10 flex items-center justify-center text-sm font-bold text-navy">
            4+
          </button>
        </div>
      </div>

      <div className="mt-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
          Amenities
        </span>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/60 cursor-pointer transition-colors">
            <input
              defaultChecked
              className="rounded text-accent focus:ring-accent border-black/20"
              type="checkbox"
            />
            <span className="text-xs font-medium text-navy">Pool</span>
          </label>
          <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/60 cursor-pointer transition-colors">
            <input
              className="rounded text-accent focus:ring-accent border-black/20"
              type="checkbox"
            />
            <span className="text-xs font-medium text-navy">Garage</span>
          </label>
          <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/60 cursor-pointer transition-colors">
            <input
              defaultChecked
              className="rounded text-accent focus:ring-accent border-black/20"
              type="checkbox"
            />
            <span className="text-xs font-medium text-navy">Gym</span>
          </label>
          <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/60 cursor-pointer transition-colors">
            <input
              className="rounded text-accent focus:ring-accent border-black/20"
              type="checkbox"
            />
            <span className="text-xs font-medium text-navy">Garden</span>
          </label>
        </div>
      </div>

      <button className="mt-auto bg-accent hover:bg-accent-hover text-white py-4 rounded-full font-bold shadow-lg shadow-accent/15 active:scale-[0.98] transition-all">
        Apply filters
      </button>
    </aside>
  );
}

