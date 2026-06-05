"use client";

import { Home, TrendingUp, Key, DollarSign } from "lucide-react";

type Metric = {
  value: string | number;
  label: string;
  icon: React.ReactNode;
};

type Props = {
  activeListings?: number;
  sold?: number;
  rented?: number;
  totalRevenue?: string;
};

export function AgentMetricsBar({
  activeListings = 0,
  sold = 0,
  rented = 0,
  totalRevenue = "$0",
}: Props) {
  const metrics: Metric[] = [
    { value: activeListings, label: "Active Listing", icon: <Home className="w-5 h-5 text-[#9CA3AF]" /> },
    { value: sold, label: "Sold", icon: <TrendingUp className="w-5 h-5 text-[#9CA3AF]" /> },
    { value: rented, label: "Rented", icon: <Key className="w-5 h-5 text-[#9CA3AF]" /> },
    { value: totalRevenue, label: "Total Revenue", icon: <DollarSign className="w-5 h-5 text-[#9CA3AF]" /> },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) px-5 py-4 flex items-center justify-between"
        >
          <div>
            <p className="text-2xl font-semibold text-[#181d1a] leading-tight">{m.value}</p>
            <p className="text-xs text-[#9CA3AF] mt-0.5">{m.label}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-(--admin-field-bg) flex items-center justify-center shrink-0">
            {m.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
