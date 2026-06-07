"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import {
  InvoiceFormHeader,
  ClientInvoiceSection,
  LineItemsSection,
  NotesSection,
  InvoiceSummary,
  AttachmentsSection,
  InvoiceOptionsSection,
  useInvoiceFormState,
} from "../../../../../components/admin/financials/form";

export default function AdminNewInvoicePage() {
  const router = useRouter();
  const state = useInvoiceFormState();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/financials");
  }

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      <form onSubmit={onSubmit}>
        <InvoiceFormHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <ClientInvoiceSection state={state} />
            <LineItemsSection state={state} />
            <NotesSection state={state} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <InvoiceSummary state={state} />
            <AttachmentsSection />
            <InvoiceOptionsSection state={state} />
          </aside>
        </div>
      </form>
    </div>
  );
}
