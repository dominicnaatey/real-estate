export function ListingsFilters() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white border border-admin-border rounded-2xl p-5 hover:shadow-admin-card-hover transition-shadow">
        <p className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider mb-2">
          Total Active
        </p>
        <p className="text-3xl font-bold text-[#181d1a] tracking-tight">142</p>
      </div>
      <div className="bg-white border border-admin-border rounded-2xl p-5 hover:shadow-admin-card-hover transition-shadow">
        <p className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider mb-2">
          Total Value
        </p>
        <p className="text-3xl font-bold text-[#181d1a] tracking-tight">$348.5M</p>
      </div>
      <div className="bg-white border border-admin-border rounded-2xl p-5 hover:shadow-admin-card-hover transition-shadow">
        <p className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider mb-2">
          Pending Sale
        </p>
        <p className="text-3xl font-bold text-[#181d1a] tracking-tight">28</p>
      </div>
      <div className="bg-white border border-admin-border rounded-2xl p-5 hover:shadow-admin-card-hover transition-shadow">
        <p className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider mb-2">
          Avg Days on Market
        </p>
        <p className="text-3xl font-bold text-[#181d1a] tracking-tight">42</p>
      </div>
    </div>
  );
}
