import { ListingsFilters } from "../../../components/admin/listings/ListingsFilters";
import { ListingsHeader } from "../../../components/admin/listings/ListingsHeader";
import { ListingsTable } from "../../../components/admin/listings/ListingsTable";

export default function ListingsPage() {
  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <ListingsHeader />
      <ListingsFilters />
      <ListingsTable />
    </div>
  );
}
