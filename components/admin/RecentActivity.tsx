export function RecentActivity() {
  return (
    <section className="lg:col-span-1 bg-white rounded-2xl border-admin border-admin-border p-5 hover:shadow-admin-card-hover transition-shadow duration-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-serif font-semibold text-[#181d1a]">
          Recent Activity
        </h3>
        <button className="text-[11px] font-semibold text-[#008060] uppercase tracking-wider hover:underline">
          View All
        </button>
      </div>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-[#008060] shrink-0" />
          <div>
            <p className="text-sm text-[#181d1a] font-semibold">
              New inquiry for{" "}
              <span className="text-[#008060]">The Obsidian Pavilion</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              2 minutes ago • Elena Russo
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-[#575e70] shrink-0" />
          <div>
            <p className="text-sm text-[#181d1a] font-semibold">
              Tour scheduled for{" "}
              <span className="text-[#008060]">Azure Bay Villa</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              45 minutes ago • Marcus Thorne
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <div>
            <p className="text-sm text-[#181d1a] font-semibold">
              Payment confirmed for{" "}
              <span className="text-[#008060]">Marble Crest</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              2 hours ago • Transaction #8921
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-slate-300 shrink-0" />
          <div>
            <p className="text-sm text-[#181d1a] font-semibold">
              Document signed:{" "}
              <span className="text-[#008060]">Listing Agreement</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              5 hours ago • Sarah Jenkins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
