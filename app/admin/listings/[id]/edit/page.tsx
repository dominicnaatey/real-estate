"use client";

import { useRouter, useParams } from "next/navigation";
import { type FormEvent, useMemo } from "react";
import { properties } from "../../../../../lib/data/Properties";
import {
  ListingFormHeader,
  BasicInformationSection,
  DescriptionHighlightsSection,
  MediaSection,
  AgentSection,
  useListingFormState,
} from "../../../../../components/admin/listings/form";

export default function AdminEditListingPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const listingId = Number(params.id);

  const property = useMemo(
    () => properties.find((p) => p.id === listingId),
    [listingId]
  );

  const state = useListingFormState({
    mode: "edit",
    listingId,
    initial: property,
  });

  if (!Number.isFinite(listingId) || !property) {
    return (
      <div className="p-6 w-full max-w-screen-2xl mx-auto">
        <p className="text-sm text-[#3e4944]">Listing not found.</p>
      </div>
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/listings");
  }

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
      <form onSubmit={onSubmit}>
        <ListingFormHeader mode="edit" listingId={listingId} />

        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <BasicInformationSection state={state} mode="edit" />
              <DescriptionHighlightsSection state={state} />
              <MediaSection />
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 self-start">
              <AgentSection state={state} />
            </aside>
          </div>
        </div>
      </form>
    </div>
  );
}
