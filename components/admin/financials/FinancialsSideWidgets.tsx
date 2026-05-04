import { Landmark } from "lucide-react";

export function FinancialsSideWidgets() {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded p-5">
        <h2 className="text-lg font-semibold text-[#181d1a] mb-4 flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[rgba(0,128,96,0.10)] text-[#008060]">
            <Landmark className="w-4 h-4" />
          </span>
          Quick Invoice
        </h2>

        <form className="space-y-3">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-1">
              Client / Entity
            </label>
            <select className="w-full border border-gray-200 rounded p-2 text-sm text-[#181d1a] bg-white focus:ring-1 focus:ring-[#008060] outline-none">
              <option>Select Client...</option>
              <option>The Belvedere Estate</option>
              <option>Starlight Holdings Group</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-1">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-[#3e4944] text-sm">$</span>
              <input
                className="w-full border border-gray-200 rounded py-2 pl-7 pr-3 text-sm text-[#181d1a] focus:ring-1 focus:ring-[#008060] outline-none"
                placeholder="0.00"
                type="text"
              />
            </div>
          </div>
          <button
            className="w-full bg-[#F9FAFB] border border-gray-200 text-[#181d1a] rounded py-2 text-sm font-medium hover:bg-[#F0F5F0] transition-colors"
            type="button"
          >
            Generate Draft
          </button>
        </form>
      </div>

      <div className="bg-[#008060] border border-[#008060] rounded p-5 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Landmark className="w-[120px] h-[120px]" />
        </div>
        <div className="relative z-10">
          <h2 className="text-lg font-semibold mb-1">Q4 Projections</h2>
          <p className="text-sm text-white/80 mb-4">On track to exceed target by 8%</p>
          <div className="text-[28px] leading-none tracking-tight font-bold mb-2">$3.8M</div>
          <div className="w-full bg-white/20 rounded-full h-1.5 mt-4">
            <div className="bg-white h-1.5 rounded-full w-[85%]" />
          </div>
          <div className="flex justify-between mt-2 text-[11px] text-white/80 uppercase tracking-wider">
            <span>Current</span>
            <span>Target $4.1M</span>
          </div>
        </div>
      </div>
    </div>
  );
}

