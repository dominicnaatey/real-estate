import { DashboardHeader } from "../../components/admin/DashboardHeader";
import { PropertyInventory } from "../../components/admin/PropertyInventory";
import { RecentActivity } from "../../components/admin/RecentActivity";
import { StatsGrid } from "../../components/admin/StatsGrid";

export default function AdminPage() {
  return (
    <div className="p-10 space-y-10">
      <DashboardHeader />
      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <RecentActivity />
        <PropertyInventory />
      </div>
    </div>
  );
}
