import { AdminDashboardHeader } from "../../components/admin/AdminDashboardHeader";
import { AdminPropertyInventory } from "../../components/admin/AdminPropertyInventory";
import { AdminRecentActivity } from "../../components/admin/AdminRecentActivity";
import { AdminSidebar } from "../../components/admin/AdminSidebar";
import { AdminStatsGrid } from "../../components/admin/AdminStatsGrid";
import { AdminTopBar } from "../../components/admin/AdminTopBar";

export default function AdminPage() {
  return (
    <div className="bg-[#faf8ff] text-[#131b2e] flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-72 min-h-screen flex flex-col">
        <AdminTopBar />

        <div className="p-10 space-y-10">
          <AdminDashboardHeader />
          <AdminStatsGrid />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <AdminRecentActivity />
            <AdminPropertyInventory />
          </div>
        </div>
      </main>
    </div>
  );
}
