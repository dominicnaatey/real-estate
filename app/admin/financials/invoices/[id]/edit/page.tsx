"use client";

import { useRouter, useParams } from "next/navigation";
import { type FormEvent, useMemo } from "react";
import { INVOICE_ROWS } from "@/components/admin/financials/data";
import {
  InvoiceFormHeader,
  ClientInvoiceSection,
  LineItemsSection,
  NotesSection,
  InvoiceSummary,
  AttachmentsSection,
  InvoiceOptionsSection,
  InvoiceStatusSection,
  useInvoiceFormState,
} from "@/components/admin/financials/invoice/form";

export default function AdminEditInvoicePage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const invoice = useMemo(
    () => INVOICE_ROWS.find((i) => i.id === params.id),
    [params.id]
  );

  // Helper to convert "Oct 14, 2023" to "2023-10-14"
  const formatDateForInput = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return "";
      return date.toISOString().split("T")[0];
    } catch {
      return "";
    }
  };

  const state = useInvoiceFormState(
    invoice
      ? {
          client: `${invoice.clientName}${invoice.propertyTitle ? ` - ${invoice.propertyTitle}` : ""}`,
          issueDate: formatDateForInput(invoice.issueDate),
          dueDate: formatDateForInput(invoice.dueDate),
          status: invoice.status,
          // We don't have detailed line items in INVOICE_ROWS, 
          // so we'll let useInvoiceFormState use its defaults or we could provide one based on the amount.
          lineItems: [
            { 
              id: 1, 
              description: invoice.propertyTitle ? `Professional Services - ${invoice.propertyTitle}` : "Professional Services", 
              note: `Invoice ${invoice.invoiceNumber}`, 
              qty: 1, 
              unitPrice: invoice.amount.replace(/[^0-9.]/g, "") 
            }
          ],
          clientNote: `Thank you for your business. Please make payments payable to LuxManagement Ltd via wire transfer. Use ${invoice.invoiceNumber} as your reference.`
        }
      : undefined
  );

  if (!invoice) {
    return (
      <div className="p-6 w-full max-w-4xl mx-auto">
        <p className="text-sm text-[#3e4944]">Invoice not found.</p>
      </div>
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/financials");
  }

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      <form onSubmit={onSubmit}>
        <InvoiceFormHeader mode="edit" state={state} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <ClientInvoiceSection state={state} />
            <LineItemsSection state={state} />
            <NotesSection state={state} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <InvoiceStatusSection state={state} />
            <InvoiceSummary state={state} />
            <AttachmentsSection />
            <InvoiceOptionsSection state={state} />
          </aside>
        </div>
      </form>
    </div>
  );
}
