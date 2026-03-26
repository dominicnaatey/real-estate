import { ListingsFilters } from "../../../components/admin/listings/ListingsFilters";
import { ListingsHeader } from "../../../components/admin/listings/ListingsHeader";
import { ListingsSidebar } from "../../../components/admin/listings/ListingsSidebar";
import { ListingsTable } from "../../../components/admin/listings/ListingsTable";
import { ListingsTopBar } from "../../../components/admin/listings/ListingsTopBar";

export default function ListingsPage() {
  return (
    <div className="bg-[#faf8ff] text-[#131b2e] min-h-screen font-sans flex">
      <ListingsSidebar />

      <main className="ml-72 flex-1 min-h-screen">
        <ListingsTopBar />

        <div className="p-10 max-w-7xl mx-auto">
          <ListingsHeader />
          <ListingsFilters />
          <ListingsTable />
        </div>
      </main>
    </div>
  );
}
