import { AlertTriangle, TrendingUp } from "lucide-react";

import { FinancialsHeader } from "../../../components/admin/financials/FinancialsHeader";
import { FinancialsMetrics } from "../../../components/admin/financials/FinancialsMetrics";
import { FinancialsSideWidgets } from "../../../components/admin/financials/FinancialsSideWidgets";
import { FinancialsTransactionsTable } from "../../../components/admin/financials/FinancialsTransactionsTable";
import type { FinancialMetric, TransactionRow } from "../../../components/admin/financials/types";

export default function AdminFinancialsPage() {
  const rows: TransactionRow[] = [
    {
      title: "The Belvedere Estate",
      subtitle: "INV-2023-089",
      date: "Oct 24, 2023",
      amount: "$45,000.00",
      type: "Commission",
      method: "Wire Transfer",
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
      type: "Income",
      method: "Bank Transfer",
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
      type: "Income",
      method: "Cheque",
      icon: { kind: "icon", type: "user" },
    },
    {
      title: "Villa Nova",
      subtitle: "INV-2023-087",
      date: "Oct 15, 2023",
      amount: "$85,000.00",
      type: "Commission",
      method: "Wire Transfer",
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
      type: "Expense",
      method: "Bank Transfer",
      icon: { kind: "icon", type: "company" },
    },
  ];

  const metrics: FinancialMetric[] = [
    {
      title: "Total Monthly Revenue",
      value: "$1.24M",
      meta: (
        <div className="flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          <span>+12.5% from last month</span>
        </div>
      ),
      metaTone: "success",
    },
    {
      title: "Pending Invoices",
      value: "$450K",
      meta: <span>24 invoices awaiting payment</span>,
      metaTone: "neutral",
    },
    {
      title: "Overdue Payments",
      value: "$85K",
      meta: (
        <div className="flex items-center gap-1">
          <AlertTriangle className="w-4 h-4" />
          <span>Requires immediate action</span>
        </div>
      ),
      metaTone: "critical",
    },
    {
      title: "Active Contracts",
      value: "142",
      meta: <span>Across 12 luxury properties</span>,
      metaTone: "neutral",
    },
  ];

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto space-y-8">
      <FinancialsHeader />

      <FinancialsMetrics metrics={metrics} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FinancialsTransactionsTable rows={rows} />
        <FinancialsSideWidgets />
      </div>
    </div>
  );
}
