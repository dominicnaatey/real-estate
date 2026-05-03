export function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-slate-900 mb-1">
          Main Dashboard
        </h2>
        <p className="text-sm text-[#3e4944]">
          Overview of listings, leads, and pipeline activity.
        </p>
      </div>
      <button className="bg-[#008060] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#00654b] transition-colors active:scale-[0.98]">
        New Listing
      </button>
    </div>
  );
}
