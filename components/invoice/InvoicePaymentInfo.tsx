import React from "react";
import { Invoice } from "./types";

interface InvoicePaymentInfoProps {
  invoice: Invoice;
}

export function InvoicePaymentInfo({ invoice }: InvoicePaymentInfoProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#F0F5F0] p-8 rounded-lg">
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#202E3B] mb-4">Payment Instructions</h3>
        <div className="space-y-2 text-sm text-[#6D7175]">
          <p><span className="font-semibold text-[#3e4944] mr-2">Bank:</span> {invoice.paymentInstructions.bank}</p>
          <p><span className="font-semibold text-[#3e4944] mr-2">Account Name:</span> {invoice.paymentInstructions.accountName}</p>
          <p><span className="font-semibold text-[#3e4944] mr-2">Sort Code:</span> {invoice.paymentInstructions.sortCode}</p>
          <p><span className="font-semibold text-[#3e4944] mr-2">Account Number:</span> {invoice.paymentInstructions.accountNumber}</p>
          <p><span className="font-semibold text-[#3e4944] mr-2">Reference:</span> {invoice.paymentInstructions.reference}</p>
        </div>
      </div>
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#202E3B] mb-4">Important Notes</h3>
        <p className="text-sm text-[#6D7175] leading-relaxed">
          {invoice.notes || "Please ensure payment is made by the due date to maintain uninterrupted property services. For any queries regarding this invoice, please contact our accounts department at finance@luxmanagement.com."}
        </p>
      </div>
    </section>
  );
}
