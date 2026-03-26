import {
  Building2,
  CalendarDays,
  CreditCard,
  MessageSquare,
} from "lucide-react";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(19,27,46,0.06)] border border-white transition-transform hover:scale-[1.01]">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-amber-50 rounded-2xl">
            <Building2 className="w-5 h-5 text-amber-600" />
          </div>
          <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
            +12%
          </span>
        </div>
        <p className="text-slate-500 text-sm font-medium mb-1">Total Listings</p>
        <h3 className="text-3xl font-extrabold text-[#131b2e]">148</h3>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(19,27,46,0.06)] border border-white transition-transform hover:scale-[1.01]">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-50 rounded-2xl">
            <MessageSquare className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
            +5.4%
          </span>
        </div>
        <p className="text-slate-500 text-sm font-medium mb-1">
          Active Inquiries
        </p>
        <h3 className="text-3xl font-extrabold text-[#131b2e]">42</h3>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(19,27,46,0.06)] border border-white transition-transform hover:scale-[1.01]">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-purple-50 rounded-2xl">
            <CalendarDays className="w-5 h-5 text-purple-600" />
          </div>
          <span className="text-slate-400 text-xs font-bold bg-slate-50 px-2 py-1 rounded-full">
            Static
          </span>
        </div>
        <p className="text-slate-500 text-sm font-medium mb-1">Pending Tours</p>
        <h3 className="text-3xl font-extrabold text-[#131b2e]">18</h3>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(19,27,46,0.06)] border border-white transition-transform hover:scale-[1.01]">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-emerald-50 rounded-2xl">
            <CreditCard className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
            +24%
          </span>
        </div>
        <p className="text-slate-500 text-sm font-medium mb-1">Total Revenue</p>
        <h3 className="text-3xl font-extrabold text-[#131b2e]">$2.4M</h3>
      </div>
    </div>
  );
}
