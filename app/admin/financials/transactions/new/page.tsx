"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import {
  TransactionFormHeader,
  TransactionDetailsSection,
  TransactionNotesSection,
  TransactionPreviewSidebar,
  useTransactionFormState,
} from "../../../../../components/admin/financials/transactions/form";

export default function AdminNewTransactionPage() {
  const router = useRouter();
  const state = useTransactionFormState();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/financials/transactions");
  }

  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      <form onSubmit={onSubmit}>
        <TransactionFormHeader mode="create" />

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
