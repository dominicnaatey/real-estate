type LeadConversionMetric = { label: string; value: string; dotClassName: string };

export function DashboardLeadConversion() {
  const metrics: LeadConversionMetric[] = [
    { label: "Closed", value: "34", dotClassName: "bg-[#008060]" },
    { label: "Total Leads", value: "142", dotClassName: "bg-[#e5e9e5]" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 flex flex-col items-center justify-center relative overflow-hidden">
      <h2 className="text-xl font-serif font-semibold text-[#181d1a] w-full text-left absolute top-5 left-5">
        Lead Conversion
      </h2>
      <div className="relative w-48 h-48 mt-10 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#eaefea"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#008060"
            strokeDasharray="251.2"
            strokeDashoffset="190.9"
            strokeLinecap="round"
            strokeWidth="8"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-4xl font-serif font-bold text-[#181d1a]">24%</span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mt-1">
            Avg. Closing Rate
          </span>
        </div>
      </div>
      <div className="w-full mt-6 space-y-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex justify-between items-center text-sm"
          >
            <span className="text-[#3e4944] flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${metric.dotClassName}`} />
              {metric.label}
            </span>
            <span className="font-medium text-[#181d1a]">{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

