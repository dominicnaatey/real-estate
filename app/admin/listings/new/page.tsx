import { properties } from "../../../../lib/data/Properties";
import { ListingForm } from "../../../../components/admin/listings/ListingForm";

export default function AdminCreateListingPage() {
  const nextId =
    properties.length > 0
      ? Math.max(...properties.map((p) => p.id)) + 1
      : 1;

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
      <ListingForm mode="create" suggestedId={nextId} />
    </div>
  );
}

