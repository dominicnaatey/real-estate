import { DashboardHeader } from "../../components/admin/DashboardHeader";
import { PropertyInventory } from "../../components/admin/PropertyInventory";
import { RecentActivity } from "../../components/admin/RecentActivity";
import { Sidebar } from "../../components/admin/Sidebar";
import { StatsGrid } from "../../components/admin/StatsGrid";
import { TopBar } from "../../components/admin/TopBar";

export default function AdminPage() {
  return (
    <div className="bg-[#faf8ff] text-[#131b2e] flex min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-72 min-h-screen flex flex-col">
        <TopBar />

        <div className="p-10 space-y-10">
          <DashboardHeader />
          <StatsGrid />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <RecentActivity />
            <PropertyInventory />
          </div>
        </div>
      </main>
    </div>
  );
}
