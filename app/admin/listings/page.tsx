import { ListingsFilters } from "../../../components/admin/listings/ListingsFilters";
import { ListingsHeader } from "../../../components/admin/listings/ListingsHeader";
import { ListingsTable } from "../../../components/admin/listings/ListingsTable";

export default function ListingsPage() {
  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
      <ListingsHeader />
      <ListingsFilters />
      <ListingsTable />
    </div>
  );
}
