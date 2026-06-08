import { ArchivedListingsHeader } from "../../../../components/admin/listings/ArchivedListingsHeader";
import { ArchivedListingsTable } from "../../../../components/admin/listings/ArchivedListingsTable";

export default function ArchivedListingsPage() {
  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
      <ArchivedListingsHeader />
      <ArchivedListingsTable />
    </div>
  );
}
