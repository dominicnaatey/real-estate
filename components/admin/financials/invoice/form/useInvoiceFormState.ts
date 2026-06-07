"use client";

import { useState } from "react";
import type { InvoiceFormState, LineItem } from "./types";

export function useInvoiceFormState(): InvoiceFormState {
  const [client, setClient] = useState("Alexander Wright - Penthouse 4B");
  const [issueDate, setIssueDate] = useState("2024-05-24");
  const [dueDate, setDueDate] = useState("2024-06-07");
  const [currency, setCurrency] = useState("GBP");
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: 1, description: "Monthly Property Management - Penthouse 4B", note: "Full-service oversight for May 2024 period.", qty: 1, unitPrice: "2450.00" },
    { id: 2, description: "Professional Staging Services", note: "Living area and primary suite enhancement.", qty: 1, unitPrice: "850.00" },
    { id: 3, description: "Aerial Drone Photography", note: "4K resolution exterior shots and site context.", qty: 2, unitPrice: "175.00" },
  ]);
  const [clientNote, setClientNote] = useState(
    "Thank you for your business. Please make payments payable to LuxManagement Ltd via wire transfer. Use INV-2024-0082 as your reference."
  );
  const [internalNote, setInternalNote] = useState("");
  const [sendEmail, setSendEmail] = useState(true);
  const [onlinePayment, setOnlinePayment] = useState(true);
  const [hideTotals, setHideTotals] = useState(false);

  return {
    client, setClient,
    issueDate, setIssueDate,
    dueDate, setDueDate,
    currency, setCurrency,
    lineItems, setLineItems,
    clientNote, setClientNote,
    internalNote, setInternalNote,
    sendEmail, setSendEmail,
    onlinePayment, setOnlinePayment,
    hideTotals, setHideTotals,
  };
}
