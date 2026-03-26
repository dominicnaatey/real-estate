export function RecentActivity() {
  return (
    <section className="lg:col-span-1 bg-gray-100 rounded-3xl p-8">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-extrabold text-[#131b2e]">
          Recent Activity
        </h3>
        <button className="text-[#785a00] text-xs font-bold hover:underline">
          View All
        </button>
      </div>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
          <div>
            <p className="text-sm text-[#131b2e] font-semibold">
              New inquiry for{" "}
              <span className="text-[#785a00]">The Obsidian Pavilion</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              2 minutes ago • Elena Russo
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
          <div>
            <p className="text-sm text-[#131b2e] font-semibold">
              Tour scheduled for{" "}
              <span className="text-[#785a00]">Azure Bay Villa</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              45 minutes ago • Marcus Thorne
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <div>
            <p className="text-sm text-[#131b2e] font-semibold">
              Payment confirmed for{" "}
              <span className="text-[#785a00]">Marble Crest</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              2 hours ago • Transaction #8921
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-slate-300 shrink-0" />
          <div>
            <p className="text-sm text-[#131b2e] font-semibold">
              Document signed:{" "}
              <span className="text-[#785a00]">Listing Agreement</span>
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
