import React from "react";
import { InvoiceLayout } from "@/components/invoice/InvoiceLayout";
import { InvoiceHeader } from "@/components/invoice/InvoiceHeader";
import { InvoiceDetails } from "@/components/invoice/InvoiceDetails";
import { InvoiceTable } from "@/components/invoice/InvoiceTable";
import { InvoiceSummary } from "@/components/invoice/InvoiceSummary";
import { InvoicePaymentInfo } from "@/components/invoice/InvoicePaymentInfo";
import { InvoiceFooter } from "@/components/invoice/InvoiceFooter";
import { InvoiceActions } from "@/components/invoice/InvoiceActions";
import { PublicInvoiceHeader } from "@/components/invoice/PublicInvoiceHeader";
import { getInvoiceData } from "@/components/invoice/data";

export default async function InvoicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const invoice = getInvoiceData(id);

  return (
    <div className="relative min-h-screen bg-[#F9FAFB]">
      {/* Sticky Header */}
      <PublicInvoiceHeader />

      {/* Visual Polish: Background Flourish */}
      <div className="fixed top-0 right-0 -z-10 opacity-5 pointer-events-none no-print">
        <svg fill="none" height="600" viewBox="0 0 600 600" width="600" xmlns="http://www.w3.org/2000/svg">
          <circle cx="450" cy="150" r="300" stroke="#008060" strokeWidth="1"></circle>
          <circle cx="450" cy="150" r="250" stroke="#008060" strokeWidth="0.5"></circle>
          <circle cx="450" cy="150" r="200" stroke="#008060" strokeWidth="0.25"></circle>
        </svg>
      </div>

      <InvoiceLayout>
        <InvoiceHeader invoice={invoice} />
        <InvoiceDetails invoice={invoice} />
        <InvoiceTable invoice={invoice} />
        <InvoiceSummary invoice={invoice} />
        <InvoicePaymentInfo invoice={invoice} />
        <InvoiceFooter />
      </InvoiceLayout>

      <div className="flex justify-center">
        <InvoiceActions />
      </div>
    </div>
  );
}
