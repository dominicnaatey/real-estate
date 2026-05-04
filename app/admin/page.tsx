import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Handshake,
  Home,
  MoreVertical,
  TrendingDown,
  TrendingUp,
  UserPlus,
  Wallet,
} from "lucide-react";

export default function AdminPage() {
  return (
    <div className="p-6 w-full max-w-[1600px] mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 relative group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#008060]/20 to-[#008060]/5 flex items-center justify-center border border-[#008060]/10">
              <Wallet className="w-5 h-5 text-[#008060]" />
            </div>
            <button
              type="button"
              className="text-[11px] font-semibold uppercase tracking-wider text-[#008060] hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
            >
              View More
            </button>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm text-[#3e4944]">Total Revenue</h3>
            <div className="text-[32px] leading-none font-bold text-[#181d1a] tracking-tight">
              $4.2M
            </div>
            <div className="flex items-center gap-1 text-sm text-[#008060]">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">+12.5%</span>
              <span className="text-[#3e4944] text-xs">vs last month</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 relative group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#92f6cf]/30 to-[#92f6cf]/5 flex items-center justify-center border border-[#92f6cf]/20">
              <Home className="w-5 h-5 text-[#00654b]" />
            </div>
            <button
              type="button"
              className="text-[11px] font-semibold uppercase tracking-wider text-[#008060] hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
            >
              View More
            </button>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm text-[#3e4944]">Active Listings</h3>
            <div className="text-[32px] leading-none font-bold text-[#181d1a] tracking-tight">
              84
            </div>
            <div className="flex items-center gap-1 text-sm text-[#008060]">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">+3 new</span>
              <span className="text-[#3e4944] text-xs">this week</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 relative group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ae564d]/20 to-[#ae564d]/5 flex items-center justify-center border border-[#ae564d]/10">
              <UserPlus className="w-5 h-5 text-[#ae564d]" />
            </div>
            <button
              type="button"
              className="text-[11px] font-semibold uppercase tracking-wider text-[#008060] hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
            >
              View More
            </button>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm text-[#3e4944]">New Leads</h3>
            <div className="text-[32px] leading-none font-bold text-[#181d1a] tracking-tight">
              142
            </div>
            <div className="flex items-center gap-1 text-sm text-[#B45309]">
              <TrendingDown className="w-4 h-4" />
              <span className="font-medium">-2.1%</span>
              <span className="text-[#3e4944] text-xs">vs last month</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 relative group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d9dff5]/50 to-[#d9dff5]/10 flex items-center justify-center border border-[#d9dff5]/30">
              <Handshake className="w-5 h-5 text-[#5c6274]" />
            </div>
            <button
              type="button"
              className="text-[11px] font-semibold uppercase tracking-wider text-[#008060] hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
            >
              View More
            </button>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm text-[#3e4944]">Pending Closings</h3>
            <div className="text-[32px] leading-none font-bold text-[#181d1a] tracking-tight">
              12
            </div>
            <div className="flex items-center gap-1 text-sm text-[#3e4944]">
              <Clock className="w-4 h-4" />
              <span className="font-medium text-[#181d1a]">Est. $1.8M</span>
              <span className="text-xs">in pipeline</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-serif font-semibold text-[#181d1a]">
              Performance Overview
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                className="px-3 py-1 rounded border border-gray-200 text-sm text-[#3e4944] hover:bg-[#F0F5F0] transition-colors"
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
              <div className="w-full border-b border-gray-200/60 border-dashed" />
              <div className="w-full border-b border-gray-200/60 border-dashed" />
              <div className="w-full border-b border-gray-200/60 border-dashed" />
              <div className="w-full border-b border-gray-200/60 border-dashed" />
              <div className="w-full border-b border-gray-200" />
            </div>

            <div className="flex-1 flex items-end justify-between pl-10 pr-2 pb-6 relative z-10 h-full">
              {[
                { month: "Jan", height: "40%", tone: "primary" },
                { month: "Feb", height: "60%", tone: "primary" },
                { month: "Mar", height: "45%", tone: "primary" },
                { month: "Apr", height: "75%", tone: "primary" },
                { month: "May", height: "55%", tone: "primary" },
                { month: "Jun", height: "85%", tone: "warn" },
              ].map((bar) => (
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

        <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 flex flex-col items-center justify-center relative overflow-hidden">
          <h2 className="text-xl font-serif font-semibold text-[#181d1a] w-full text-left absolute top-5 left-5">
            Lead Conversion
          </h2>
          <div className="relative w-48 h-48 mt-10 flex items-center justify-center">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
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
              <span className="text-4xl font-serif font-bold text-[#181d1a]">
                24%
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mt-1">
                Avg. Closing Rate
              </span>
            </div>
          </div>
          <div className="w-full mt-6 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#3e4944] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#008060]" />
                Closed
              </span>
              <span className="font-medium text-[#181d1a]">34</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#3e4944] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e5e9e5]" />
                Total Leads
              </span>
              <span className="font-medium text-[#181d1a]">142</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 overflow-hidden flex flex-col">
        <div className="p-5 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-serif font-semibold text-[#181d1a]">
            Recent Properties
          </h2>
          <button
            type="button"
            className="text-[11px] font-semibold uppercase tracking-wider text-[#008060] hover:underline px-2 py-1"
          >
            View All Inventory
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F0F5F0] border-b border-gray-200">
                <th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-12" />
                <th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                  Property Details
                </th>
                <th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                  Location
                </th>
                <th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                  Status
                </th>
                <th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] text-right">
                  Price
                </th>
                <th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-12 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              {[
                {
                  id: "belvedere",
                  title: "The Belvedere Estate",
                  meta: "5 Beds • 6.5 Baths • 8,400 sqft",
                  location: "Beverly Hills, CA",
                  status: { label: "Active", tone: "active" },
                  price: "$12,500,000",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDqZ6H_55QnQ-jE2Hi5vxYd-rhZg8UUCvjQkpKmobRnjVZih7kgBhXTca6W0Pee2bBJs27H-RsXcLKnRuPpSy4i9NIyBkjYsjGF1pzHfJ3rxfO0JK9xiw81yh7MPPDMM2yOX5bTvAIyXG4MUgxg_v31-5t53GF3_W-s8cEeDCUqZyCS8VIF1NYOAAReaI5EV3_ooF3A6agH6n2pVeoQmwjIkEfyUBPHk7lyIRjw4tEEqZY8wG4_ocJ3ZTsToQRiQJSPzb1ws5MDsIl_",
                },
                {
                  id: "skyline",
                  title: "Skyline Penthouse",
                  meta: "3 Beds • 3 Baths • 3,200 sqft",
                  location: "Manhattan, NY",
                  status: { label: "Pending", tone: "pending" },
                  price: "$8,950,000",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCpVefCoRX8cO7BhQpZTvQMkdadKpzms-fqvov0I9id66YcgjU-9EYZpumG2mmXvMNu4cygDyvtQ4e9jqxHiW0LvyNHdn10QWgvTAfD5vcgSIaWKVd2F_EwvOTBUP84xILKzbeq8kbExJNRiSp920TMjjHvp0LW_bq1RtyTdxrSLEXQKtEW5ye4EttALXqlxVaWYkNAdyQuqju5h5Btr2_HLYhpYIW-AykLasJ1cLXN6nKPYNqGdXfUSG7E3AlaBAIV1FU00MMzTWQ7",
                },
                {
                  id: "oakwood",
                  title: "Oakwood Manor",
                  meta: "6 Beds • 5 Baths • 6,100 sqft",
                  location: "Greenwich, CT",
                  status: { label: "Active", tone: "active" },
                  price: "$5,200,000",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCb6-0AIUMlGkLsbh8_rTTe7BfI0KBoGkAqikZsxmk6STpv7BL4uEiz1toBG2mp5wEG-R09Itm9l4PCppd1zUgHi2b54oKIsf3V9J2ZkX417-HYraAORVG2_rlCq7zEOFxJgUGNtaeobPqeo2f217fiFApk8yMw2miCROmdNLpNuI82lplmzDoC2hac_RFnvqXZf93-8TSGbJSuo6NKIq2b_sp_cAk4LdVAzRQTxBhY9BioMk74JUlFvK2xDPOarry2gEuPNiEXBfJ8",
                },
              ].map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-200 hover:bg-[#F9FAFB] transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-[#e5e9e5] relative">
                      <Image
                        alt={`${row.title} thumbnail`}
                        src={row.image}
                        fill
                        sizes="40px"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-[#181d1a] mb-0.5">
                      {row.title}
                    </div>
                    <div className="text-[#3e4944] text-xs">{row.meta}</div>
                  </td>
                  <td className="py-3 px-4 text-[#3e4944]">{row.location}</td>
                  <td className="py-3 px-4">
                    <span
                      className={
                        row.status.tone === "pending"
                          ? "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-700"
                          : "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#008060]/10 text-[#008060]"
                      }
                    >
                      {row.status.label}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-bold text-[#181d1a]">
                    {row.price}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      type="button"
                      className="text-[#3e4944] hover:text-[#008060] transition-colors"
                      aria-label={`Actions for ${row.title}`}
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 border-t border-gray-200 bg-white flex items-center justify-between text-[13px] text-[#3e4944]">
          <span>Showing 1 to 3 of 84 entries</span>
          <div className="flex gap-1">
            <button
              type="button"
              className="px-2 py-1 rounded border border-gray-200 hover:bg-[#F0F5F0] disabled:opacity-50"
              disabled
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="px-3 py-1 rounded bg-[#008060] text-white font-medium"
              aria-label="Page 1"
            >
              1
            </button>
            <button
              type="button"
              className="px-3 py-1 rounded border border-gray-200 hover:bg-[#F0F5F0]"
              aria-label="Page 2"
            >
              2
            </button>
            <button
              type="button"
              className="px-3 py-1 rounded border border-gray-200 hover:bg-[#F0F5F0]"
              aria-label="Page 3"
            >
              3
            </button>
            <span className="px-2 py-1">...</span>
            <button
              type="button"
              className="px-2 py-1 rounded border border-gray-200 hover:bg-[#F0F5F0]"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
