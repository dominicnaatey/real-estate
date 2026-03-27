import { ListingsFilters } from "../../../components/admin/listings/ListingsFilters";
import { ListingsHeader } from "../../../components/admin/listings/ListingsHeader";
import { ListingsTable } from "../../../components/admin/listings/ListingsTable";

export default function ListingsPage() {
  return (
    <div className="bg-[#faf8ff] text-[#131b2e] min-h-screen font-sans">
      <div className="p-10 max-w-7xl mx-auto">
        <ListingsHeader />
        <ListingsFilters />
        <ListingsTable />
      </div>
    </div>
  );
}
