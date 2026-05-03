export function RecentActivity() {
  return (
    <section className="lg:col-span-1 bg-white rounded-2xl border border-slate-200/70 p-6 md:p-8 shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-extrabold text-slate-900">
          Recent Activity
        </h3>
        <button className="text-blue-600 text-xs font-semibold hover:underline">
          View All
        </button>
      </div>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-violet-500 shrink-0" />
          <div>
            <p className="text-sm text-slate-900 font-semibold">
              New inquiry for{" "}
              <span className="text-blue-600">The Obsidian Pavilion</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              2 minutes ago • Elena Russo
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
          <div>
            <p className="text-sm text-slate-900 font-semibold">
              Tour scheduled for{" "}
              <span className="text-blue-600">Azure Bay Villa</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              45 minutes ago • Marcus Thorne
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <div>
            <p className="text-sm text-slate-900 font-semibold">
              Payment confirmed for{" "}
              <span className="text-blue-600">Marble Crest</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              2 hours ago • Transaction #8921
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-1 w-2 h-2 rounded-full bg-slate-300 shrink-0" />
          <div>
            <p className="text-sm text-slate-900 font-semibold">
              Document signed:{" "}
              <span className="text-blue-600">Listing Agreement</span>
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
