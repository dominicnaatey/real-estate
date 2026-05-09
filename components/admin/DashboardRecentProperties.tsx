import Image from "next/image";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";

type PropertyStatusTone = "active" | "pending";

type RecentPropertyRow = {
  id: string;
  title: string;
  meta: string;
  location: string;
  status: { label: string; tone: PropertyStatusTone };
  price: string;
  image: string;
};

function StatusPill({ tone, label }: { tone: PropertyStatusTone; label: string }) {
  return (
    <span
      className={
        tone === "pending"
          ? "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-700"
          : "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#008060]/10 text-[#008060]"
      }
    >
      {label}
    </span>
  );
}

export function DashboardRecentProperties() {
  const rows: RecentPropertyRow[] = [
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
  ];

  return (
    <div className="bg-white rounded-2xl border border-admin-border hover:shadow-admin-card-hover transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="p-5 border-b border-admin-border flex justify-between items-center">
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
            <tr className="bg-[#F0F5F0] border-b border-admin-border">
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
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-admin-border hover:bg-[#F9FAFB] transition-colors"
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
                  <StatusPill tone={row.status.tone} label={row.status.label} />
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

      <div className="p-3 border-t border-admin-border bg-white flex items-center justify-between text-[13px] text-[#3e4944]">
        <span>Showing 1 to 3 of 84 entries</span>
        <div className="flex gap-1">
          <button
            type="button"
            className="px-2 py-1 rounded border border-admin-border hover:bg-[#F0F5F0] disabled:opacity-50"
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
            className="px-3 py-1 rounded border border-admin-border hover:bg-[#F0F5F0]"
            aria-label="Page 2"
          >
            2
          </button>
          <button
            type="button"
            className="px-3 py-1 rounded border border-admin-border hover:bg-[#F0F5F0]"
            aria-label="Page 3"
          >
            3
          </button>
          <span className="px-2 py-1">...</span>
          <button
            type="button"
            className="px-2 py-1 rounded border border-admin-border hover:bg-[#F0F5F0]"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
