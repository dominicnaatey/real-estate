import React from "react";
import { InvoiceLayout } from "@/components/invoice/InvoiceLayout";
import { InvoiceHeader } from "@/components/invoice/InvoiceHeader";
import { InvoiceDetails } from "@/components/invoice/InvoiceDetails";
import { InvoiceTable } from "@/components/invoice/InvoiceTable";
import { InvoiceSummary } from "@/components/invoice/InvoiceSummary";
import { InvoicePaymentInfo } from "@/components/invoice/InvoicePaymentInfo";
import { InvoiceFooter } from "@/components/invoice/InvoiceFooter";
import { InvoiceActions } from "@/components/invoice/InvoiceActions";
import { Invoice } from "@/components/invoice/types";
import { Download } from "lucide-react";

// This would normally come from a database based on the ID
const getInvoiceData = (id: string): Invoice => ({
  id,
  invoiceNumber: "INV-2024-0082",
  issueDate: "October 14, 2023",
  dueDate: "October 28, 2023",
  billTo: {
    name: "Alexander Wright",
    address: "42 Belgravia Mews North, London, SW1X 8RS",
    email: "alex.wright@example.com",
  },
  estateDetails: {
    name: "The Carlton Penthouse",
    ref: "PR-00892",
    status: "Active Managed",
  },
  items: [
    {
      description: "Monthly Property Oversight",
      details: "Full management and maintenance of The Carlton Penthouse for the period of Sept 2023.",
      quantity: 1,
      unitPrice: 2450,
      amount: 2450,
    },
    {
      description: "Professional Staging",
      details: "Curated furniture selection and layout for marketing showcase.",
      quantity: 1,
      unitPrice: 800,
      amount: 800,
    },
    {
      description: "Aerial Drone Photography",
      details: "4K resolution aerial video and 10 high-resolution external stills.",
      quantity: 1,
      unitPrice: 400,
      amount: 400,
    },
  ],
  subtotal: 3650,
  vatRate: 20,
  vatAmount: 730,
  totalAmount: 4380,
  currency: {
    symbol: "£",
    code: "GBP",
  },
  paymentInstructions: {
    bank: "National Westminster Bank",
    accountName: "EstatePro Management Ltd",
    sortCode: "60-00-01",
    accountNumber: "12345678",
    reference: "INV-2024-0082",
  },
});

export default async function InvoicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const invoice = getInvoiceData(id);

  return (
    <div className="relative min-h-screen bg-[#F9FAFB]">
      {/* Sticky Header */}
      <header className="no-print sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E1E3E5] h-16 flex items-center justify-center px-6">
        <div className="max-w-4xl w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00654b] rounded flex items-center justify-center text-white">
              <span className="text-xs font-bold">EP</span>
            </div>
            <span className="font-serif text-lg font-semibold text-[#202E3B]">EstatePro Elite</span>
          </div>
          <button 
            className="bg-[#008060] hover:bg-[#00654b] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 active:scale-95 text-[11px] font-semibold uppercase tracking-wider"
            onClick={() => window.print()}
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>
      </header>
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
