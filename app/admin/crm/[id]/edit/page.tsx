"use client";

import { useRouter, useParams } from "next/navigation";
import { type FormEvent, useMemo } from "react";
import { leads } from "../../../../../lib/data/Leads";
import {
  LeadFormHeader,
  ContactInfoSection,
  InterestBudgetSection,
  LeadNotesSection,
  LeadDetailsSection,
  AssignmentSection,
  useLeadFormState,
} from "../../../../../components/admin/crm/form";
import type { Priority } from "../../../../../components/admin/crm/form";

export default function AdminEditLeadPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const lead = useMemo(
    () => leads.find((l) => l.id === params.id),
    [params.id]
  );

  const state = useLeadFormState(
    lead
      ? {
          fullName: lead.name,
          email: lead.email,
          phone: lead.phone ?? "",
          contactMethod: lead.contactMethod ?? "Email",
          leadSource: lead.leadSource ?? "Website",
          leadStatus: lead.status,
          priority: (lead.priority as Priority) ?? "Medium",
          assignedAgent: lead.assignedAgent ?? "unassigned",
          propertyType: lead.propertyType ?? "Single Family",
          minBudget: lead.minBudget ?? "",
          maxBudget: lead.maxBudget ?? "",
          preferredLocations: lead.preferredLocations ?? "",
          notes: lead.notes ?? "",
        }
      : undefined
  );

  if (!lead) {
    return (
      <div className="p-6 w-full max-w-6xl mx-auto">
        <p className="text-sm text-[#3e4944]">Lead not found.</p>
      </div>
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/crm");
  }

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      <form onSubmit={onSubmit}>
        <LeadFormHeader mode="edit" leadName={lead.name} />

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
