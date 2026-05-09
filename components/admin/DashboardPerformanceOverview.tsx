type PerformanceBar = { month: string; height: string; tone: "primary" | "warn" };

export function DashboardPerformanceOverview() {
  const bars: PerformanceBar[] = [
    { month: "Jan", height: "40%", tone: "primary" },
    { month: "Feb", height: "60%", tone: "primary" },
    { month: "Mar", height: "45%", tone: "primary" },
    { month: "Apr", height: "75%", tone: "primary" },
    { month: "May", height: "55%", tone: "primary" },
    { month: "Jun", height: "85%", tone: "warn" },
  ];

  return (
    <div className="lg:col-span-2 bg-white rounded-2xl border-admin border-admin-border p-5 hover:shadow-admin-card-hover transition-shadow duration-300 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-serif font-semibold text-[#181d1a]">
          Performance Overview
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            className="px-3 py-1 rounded border-admin border-admin-border text-sm text-[#3e4944] hover:bg-[#F0F5F0] transition-colors"
          >
            Week
          </button>
          <button
            type="button"
            className="px-3 py-1 rounded bg-[#d9dff5] text-[#5c6274] text-sm font-medium border border-transparent"
          >
            Month
          </button>
        </div>
      </div>

      <div className="flex-1 relative min-h-[240px] flex items-end gap-2 pt-8">
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-[#3e4944] py-2">
          <span>100k</span>
          <span>75k</span>
          <span>50k</span>
          <span>25k</span>
          <span>0</span>
        </div>

        <div className="absolute left-8 right-0 top-0 bottom-6 flex flex-col justify-between pointer-events-none">
          <div className="w-full border-b-admin border-admin-border/60 border-dashed" />
          <div className="w-full border-b-admin border-admin-border/60 border-dashed" />
          <div className="w-full border-b-admin border-admin-border/60 border-dashed" />
          <div className="w-full border-b-admin border-admin-border/60 border-dashed" />
          <div className="w-full border-b-admin border-admin-border" />
        </div>

        <div className="flex-1 flex items-end justify-between pl-10 pr-2 pb-6 relative z-10 h-full">
          {bars.map((bar) => (
            <div key={bar.month} className="flex flex-col items-center gap-1 w-1/6">
              <div
                className={
                  bar.tone === "warn"
                    ? "w-8 bg-gradient-to-t from-[#B45309]/80 to-[#B45309] rounded-t-sm"
                    : "w-8 bg-gradient-to-t from-[#008060]/80 to-[#008060] rounded-t-sm"
                }
                style={{ height: bar.height }}
              />
              <span className="text-xs text-[#3e4944] mt-2 absolute bottom-0">
                {bar.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

