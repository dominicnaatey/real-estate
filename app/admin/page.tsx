import { DashboardLeadConversion } from "../../components/admin/DashboardLeadConversion";
import { DashboardPerformanceOverview } from "../../components/admin/DashboardPerformanceOverview";
import { DashboardRecentProperties } from "../../components/admin/DashboardRecentProperties";
import { DashboardSummaryCards } from "../../components/admin/DashboardSummaryCards";

export default function AdminPage() {
  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto space-y-6">
      <DashboardSummaryCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DashboardPerformanceOverview />
        <DashboardLeadConversion />
      </div>
      <DashboardRecentProperties />
    </div>
  );
}
