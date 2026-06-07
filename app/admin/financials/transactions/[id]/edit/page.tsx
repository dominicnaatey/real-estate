"use client";

import { useRouter, useParams } from "next/navigation";
import { type FormEvent, useMemo } from "react";
import { transactions } from "../../../../../../lib/data/Transactions";
import {
  TransactionFormHeader,
  TransactionDetailsSection,
  TransactionNotesSection,
  TransactionPreviewSidebar,
  useTransactionFormState,
} from "../../../../../../components/admin/financials/transactions/form";
import type { TransactionType, PaymentMethod } from "../../../../../../components/admin/financials/transactions/form";

export default function AdminEditTransactionPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const transaction = useMemo(
    () => transactions.find((t) => t.id === params.id),
    [params.id]
  );

  const state = useTransactionFormState(
    transaction
      ? {
          date: transaction.date,
          type: transaction.type as TransactionType,
          amount: transaction.amount,
          currency: transaction.currency,
          party: transaction.party,
          property: transaction.property ?? "",
          method: transaction.method as PaymentMethod,
          reference: transaction.reference ?? "",
          notes: transaction.notes ?? "",
        }
      : undefined
  );

  if (!transaction) {
    return (
      <div className="p-6 w-full max-w-4xl mx-auto">
        <p className="text-sm text-[#3e4944]">Transaction not found.</p>
      </div>
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/financials/transactions");
  }

  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      <form onSubmit={onSubmit}>
        <TransactionFormHeader mode="edit" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <TransactionDetailsSection state={state} />
            <TransactionNotesSection state={state} />
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <TransactionPreviewSidebar state={state} />
          </aside>
        </div>
      </form>
    </div>
  );
}
