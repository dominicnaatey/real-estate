import { notFound } from "next/navigation";

import { properties } from "../../../../../lib/data/Properties";
import { ListingForm } from "../../../../../components/admin/listings/ListingForm";

export default async function AdminEditListingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listingId = Number(id);

  if (!Number.isFinite(listingId)) {
    return notFound();
  }

  const property = properties.find((p) => p.id === listingId);

  if (!property) {
    return notFound();
  }

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
      <ListingForm mode="edit" listingId={listingId} initial={property} />
    </div>
  );
}

