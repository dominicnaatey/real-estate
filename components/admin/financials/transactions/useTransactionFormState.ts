"use client";

import { useState } from "react";
import type { TransactionFormState, TransactionType, PaymentMethod } from "./types";

type InitialTransaction = Partial<{
  date: string;
  type: TransactionType;
  amount: string;
  currency: string;
  party: string;
  property: string;
  method: PaymentMethod;
  reference: string;
  notes: string;
}>;

export function useTransactionFormState(initial?: InitialTransaction): TransactionFormState {
  const [date, setDate] = useState(initial?.date ?? new Date().toISOString().split("T")[0]);
  const [type, setType] = useState<TransactionType>(initial?.type ?? "Income");
  const [amount, setAmount] = useState(initial?.amount ?? "");
  const [currency, setCurrency] = useState(initial?.currency ?? "USD");
  const [party, setParty] = useState(initial?.party ?? "");
  const [property, setProperty] = useState(initial?.property ?? "");
  const [method, setMethod] = useState<PaymentMethod>(initial?.method ?? "Wire Transfer");
  const [reference, setReference] = useState(initial?.reference ?? "");
  const [notes, setNotes] = useState(initial?.notes ?? "");

  return {
    date, setDate,
    type, setType,
    amount, setAmount,
    currency, setCurrency,
    party, setParty,
    property, setProperty,
    method, setMethod,
    reference, setReference,
    notes, setNotes,
  };
}
