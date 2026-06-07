import React from "react";
import { Invoice } from "./types";

interface InvoiceDetailsProps {
  invoice: Invoice;
}

export function InvoiceDetails({ invoice }: InvoiceDetailsProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
      <div>
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-[#202E3B] border-b border-[#E1E3E5] pb-2 mb-4">BILL TO</h2>
        <div className="text-sm">
          <p className="text-lg font-semibold text-[#202E3B] mb-1">{invoice.billTo.name}</p>
          <div className="text-[#6D7175] space-y-0.5">
            <p>{invoice.billTo.address}</p>
            <p>{invoice.billTo.email}</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-[#202E3B] border-b border-[#E1E3E5] pb-2 mb-4">ESTATE DETAILS</h2>
        <div className="text-sm">
          <p className="text-lg font-semibold text-[#202E3B] mb-1">{invoice.estateDetails.name}</p>
          <div className="text-[#6D7175] space-y-0.5">
            <p>Property Ref: {invoice.estateDetails.ref}</p>
            <p>Contract Status: {invoice.estateDetails.status}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
