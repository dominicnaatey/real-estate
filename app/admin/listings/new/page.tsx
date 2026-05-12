"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { properties } from "../../../../lib/data/Properties";
import {
  ListingFormHeader,
  BasicInformationSection,
  DescriptionHighlightsSection,
  FeaturesAmenitiesSection,
  MediaSection,
  AgentSection,
  useListingFormState,
} from "../../../../components/admin/listings/form";

export default function AdminCreateListingPage() {
  const router = useRouter();
  const nextId =
    properties.length > 0
      ? Math.max(...properties.map((p) => p.id)) + 1
      : 1;

  const state = useListingFormState({ mode: "create", suggestedId: nextId });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/listings");
  }

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
      <form onSubmit={onSubmit}>
        <ListingFormHeader mode="create" />

        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <BasicInformationSection state={state} mode="create" />
              <DescriptionHighlightsSection state={state} />
              <FeaturesAmenitiesSection state={state} />
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
