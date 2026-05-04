import Image from "next/image";
import {
  AlertTriangle,
  Building2,
  Download,
  Landmark,
  Plus,
  TrendingUp,
  User,
} from "lucide-react";

type TransactionStatus = "Paid" | "Pending" | "Overdue";

type TransactionRow = {
  title: string;
  subtitle: string;
  date: string;
  amount: string;
  status: TransactionStatus;
  thumbnail?: { kind: "image"; src: string; alt: string };
  icon?: { kind: "icon"; type: "user" | "company" };
};

function StatusPill({ status }: { status: TransactionStatus }) {
  const className =
    status === "Paid"
      ? "bg-[rgba(0,128,96,0.10)] text-[#008060]"
      : status === "Pending"
        ? "bg-[rgba(245,158,11,0.20)] text-[#996b00]"
        : "bg-[rgba(239,68,68,0.10)] text-[#DC2626]";

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${className}`}>
      {status}
    </span>
  );
}

function MetricCard({
  title,
  value,
  meta,
  metaTone = "neutral",
}: {
  title: string;
  value: string;
  meta: React.ReactNode;
  metaTone?: "neutral" | "success" | "critical";
}) {
  const metaClassName =
    metaTone === "success"
      ? "text-[#008060]"
      : metaTone === "critical"
        ? "text-[#DC2626]"
        : "text-[#3e4944]";

  return (
    <div className="bg-white border border-gray-200 rounded p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
      <h3 className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider mb-2">
        {title}
      </h3>
      <div className="text-[28px] leading-none tracking-tight font-bold text-[#181d1a]">
        {value}
      </div>
      <div className={`mt-2 text-sm ${metaClassName}`}>{meta}</div>
    </div>
  );
}

function TransactionAvatar({ row }: { row: TransactionRow }) {
  if (row.thumbnail?.kind === "image") {
    return (
      <Image
        alt={row.thumbnail.alt}
        src={row.thumbnail.src}
        width={40}
        height={40}
        className="w-10 h-10 rounded object-cover"
        referrerPolicy="no-referrer"
      />
    );
  }

  const Icon = row.icon?.type === "company" ? Building2 : User;
  return (
    <div className="w-10 h-10 rounded bg-[#F0F5F0] border border-gray-200 flex items-center justify-center text-[#3e4944]">
      <Icon className="w-5 h-5" />
    </div>
  );
}

export default function AdminFinancialsPage() {
  const rows: TransactionRow[] = [
    {
      title: "The Belvedere Estate",
      subtitle: "INV-2023-089",
      date: "Oct 24, 2023",
      amount: "$45,000.00",
      status: "Paid",
      thumbnail: {
        kind: "image",
        alt: "Property Thumbnail",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK1dgWK2RrjfaQYpCpV63my1pH5GC3H5wIG6Aiqd4Dewtw45yGMWZDj2y2OUtTRxdDLye9vFh6tbUFWAkLyi_THeVvtjPxaVxIauAKiwyXznxJQxmtvGD1P_YUA6gto4kU1UneUg9qJvQ2XGizYAIUBhWwH5D6mX8pvno7oAWSE7Lqk-DAQVuxvgA-lEzkq5XZG8sWyJxNEuoam6RfH2Is8OONzY8EzZrz-VqOjy2G_ybtf0rNA38wxXWg5XqvxpNAv5RMgKAuteU2",
      },
    },
    {
      title: "Penthouse 4B - Azure",
      subtitle: "INV-2023-090",
      date: "Oct 22, 2023",
      amount: "$12,500.00",
      status: "Pending",
      thumbnail: {
        kind: "image",
        alt: "Property Thumbnail",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRRWGF2r1gJg8g80u2YuFFu_mMl49H9O5DZrirNPAky7EJ560hwJI5_XLfpbiK5rYmThS-MY9OddF8M6BaLk6egztHxo5_D697VaJyNmSYkYyojO3HAOI6ikaskWyZhxO2omwcwNaL3zElVIIpqfwxae1d7krzpHd1FR3n9GHiuPrxvT77qowsiybhEOxwSvc782QNX9E4V3IgolQAHUR-Yd_6lHsn6HYpupuUUCTCuw-g12uDMmuhFEJEMlgHlaliGMfOdC2mI6uw",
      },
    },
    {
      title: "Alexander Pierce",
      subtitle: "Retainer Fee",
      date: "Oct 20, 2023",
      amount: "$5,000.00",
      status: "Paid",
      icon: { kind: "icon", type: "user" },
    },
    {
      title: "Villa Nova",
      subtitle: "INV-2023-087",
      date: "Oct 15, 2023",
      amount: "$85,000.00",
      status: "Overdue",
      thumbnail: {
        kind: "image",
        alt: "Property Thumbnail",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC87R8Y4bqFVrMBQF5IE0zWtZ3i3YqzjafOz7Lxb1U34gECox6FB0ctdRV97HRlJVqWhwqzLT7FdsRbt81pB-hG6eWGh3Z0Tn7nQ-Ub7ZNmPV9teCgfGoc7z4faE6Dj7ZlEU1UIhNddy93gS_uQgVNYu5D_pQ40aq0i6V1c9yQx8_yJ1SNibwETVP31ejk6_CbRxmTyCSLdy9FrdXSmoRmg6D6wNjNFnbQgjmQOnEJd6BXG7pjj0BlQNbV9eAZ3o2orgegdmCnnSu4X",
      },
    },
    {
      title: "Starlight Holdings Group",
      subtitle: "Management Fee",
      date: "Oct 12, 2023",
      amount: "$18,750.00",
      status: "Paid",
      icon: { kind: "icon", type: "company" },
    },
  ];

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto space-y-8">
      <div className="flex justify-between items-end gap-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a]">
            Financials &amp; Invoicing
          </h1>
          <p className="text-sm text-[#3e4944] mt-1">
            Overview of recent transactions and revenue metrics.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="px-4 py-2 border border-gray-200 bg-white rounded text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] hover:bg-[#F0F5F0] transition-colors flex items-center gap-2"
          >
            <Download className="w-[18px] h-[18px]" />
            Export CSV
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-[#008060] text-white rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#00654b] transition-colors flex items-center gap-2"
          >
            <Plus className="w-[18px] h-[18px]" />
            Create Invoice
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Total Monthly Revenue"
          value="$1.24M"
          meta={
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>+12.5% from last month</span>
            </div>
          }
          metaTone="success"
        />
        <MetricCard
          title="Pending Invoices"
          value="$450K"
          meta={<span>24 invoices awaiting payment</span>}
          metaTone="neutral"
        />
        <MetricCard
          title="Overdue Payments"
          value="$85K"
          meta={
            <div className="flex items-center gap-1">
              <AlertTriangle className="w-4 h-4" />
              <span>Requires immediate action</span>
            </div>
          }
          metaTone="critical"
        />
        <MetricCard
          title="Active Contracts"
          value="142"
          meta={<span>Across 12 luxury properties</span>}
          metaTone="neutral"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200 bg-[#F9FAFB] flex justify-between items-center">
            <h2 className="text-lg font-semibold text-[#181d1a]">Recent Transactions</h2>
            <button type="button" className="text-[#008060] text-sm font-medium hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F0F5F0] border-b border-gray-200">
                  <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] w-1/3">
                    Property / Client
                  </th>
                  <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                    Date
                  </th>
                  <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]">
                    Amount
                  </th>
                  <th className="p-3 text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] text-right">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-200 bg-white">
                {rows.map((row) => (
                  <tr key={`${row.title}-${row.subtitle}`} className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <TransactionAvatar row={row} />
                        <div>
                          <div className="font-medium text-[#181d1a] group-hover:text-[#008060] transition-colors">
                            {row.title}
                          </div>
                          <div className="text-[#3e4944] text-[11px]">{row.subtitle}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-[#3e4944]">{row.date}</td>
                    <td className="p-3 font-medium text-[#181d1a]">{row.amount}</td>
                    <td className="p-3 text-right">
                      <StatusPill status={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded p-5">
            <h2 className="text-lg font-semibold text-[#181d1a] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[rgba(0,128,96,0.10)] text-[#008060]">
                <Landmark className="w-4 h-4" />
              </span>
              Quick Invoice
            </h2>

            <form className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-1">
                  Client / Entity
                </label>
                <select className="w-full border border-gray-200 rounded p-2 text-sm text-[#181d1a] bg-white focus:ring-1 focus:ring-[#008060] outline-none">
                  <option>Select Client...</option>
                  <option>The Belvedere Estate</option>
                  <option>Starlight Holdings Group</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] mb-1">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-[#3e4944] text-sm">$</span>
                  <input
                    className="w-full border border-gray-200 rounded py-2 pl-7 pr-3 text-sm text-[#181d1a] focus:ring-1 focus:ring-[#008060] outline-none"
                    placeholder="0.00"
                    type="text"
                  />
                </div>
              </div>
              <button
                className="w-full bg-[#F9FAFB] border border-gray-200 text-[#181d1a] rounded py-2 text-sm font-medium hover:bg-[#F0F5F0] transition-colors"
                type="button"
              >
                Generate Draft
              </button>
            </form>
          </div>

          <div className="bg-[#008060] border border-[#008060] rounded p-5 text-white overflow-hidden relative">
            <div className="absolute right-0 top-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
              <Landmark className="w-[120px] h-[120px]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-lg font-semibold mb-1">Q4 Projections</h2>
              <p className="text-sm text-white/80 mb-4">On track to exceed target by 8%</p>
              <div className="text-[28px] leading-none tracking-tight font-bold mb-2">$3.8M</div>
              <div className="w-full bg-white/20 rounded-full h-1.5 mt-4">
                <div className="bg-white h-1.5 rounded-full w-[85%]" />
              </div>
              <div className="flex justify-between mt-2 text-[11px] text-white/80 uppercase tracking-wider">
                <span>Current</span>
                <span>Target $4.1M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
