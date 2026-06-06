"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import {
  LeadFormHeader,
  ContactInfoSection,
  InterestBudgetSection,
  LeadNotesSection,
  LeadDetailsSection,
  AssignmentSection,
  useLeadFormState,
} from "../../../../components/admin/crm/form";

export default function AdminNewLeadPage() {
  const router = useRouter();
  const state = useLeadFormState();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/crm");
  }

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      <form onSubmit={onSubmit}>
        <LeadFormHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <ContactInfoSection state={state} />
            <InterestBudgetSection state={state} />
            <LeadNotesSection state={state} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <LeadDetailsSection state={state} />
            <AssignmentSection state={state} />
          </aside>
        </div>
      </form>
    </div>
  );
}
