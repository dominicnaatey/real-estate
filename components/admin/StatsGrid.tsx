import {
  Building2,
  CalendarDays,
  CreditCard,
  MessageSquare,
} from "lucide-react";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-2xl border border-admin-border p-5 hover:shadow-admin-card-hover transition-shadow duration-300">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#008060]/20 to-[#008060]/5 flex items-center justify-center border border-[#008060]/10">
            <Building2 className="w-5 h-5 text-[#008060]" />
          </div>
          <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
            +12%
          </span>
        </div>
        <p className="text-sm text-[#3e4944] mb-1">Total Listings</p>
        <h3 className="text-3xl font-bold text-[#181d1a] tracking-tight">148</h3>
      </div>

      <div className="bg-white rounded-2xl border border-admin-border p-5 hover:shadow-admin-card-hover transition-shadow duration-300">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#92f6cf]/30 to-[#92f6cf]/5 flex items-center justify-center border border-[#92f6cf]/20">
            <MessageSquare className="w-5 h-5 text-[#00654b]" />
          </div>
          <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
            +5.4%
          </span>
        </div>
        <p className="text-sm text-[#3e4944] mb-1">Active Inquiries</p>
        <h3 className="text-3xl font-bold text-[#181d1a] tracking-tight">42</h3>
      </div>

      <div className="bg-white rounded-2xl border border-admin-border p-5 hover:shadow-admin-card-hover transition-shadow duration-300">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ae564d]/20 to-[#ae564d]/5 flex items-center justify-center border border-[#ae564d]/10">
            <CalendarDays className="w-5 h-5 text-[#8f3f37]" />
          </div>
          <span className="text-slate-400 text-xs font-bold bg-slate-50 px-2 py-1 rounded-full">
            Static
          </span>
        </div>
        <p className="text-sm text-[#3e4944] mb-1">Pending Tours</p>
        <h3 className="text-3xl font-bold text-[#181d1a] tracking-tight">18</h3>
      </div>

      <div className="bg-white rounded-2xl border border-admin-border p-5 hover:shadow-admin-card-hover transition-shadow duration-300">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d9dff5]/50 to-[#d9dff5]/10 flex items-center justify-center border border-[#d9dff5]/30">
            <CreditCard className="w-5 h-5 text-[#5c6274]" />
          </div>
          <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
            +24%
          </span>
        </div>
        <p className="text-sm text-[#3e4944] mb-1">Total Revenue</p>
        <h3 className="text-3xl font-bold text-[#181d1a] tracking-tight">$2.4M</h3>
      </div>
    </div>
  );
}
