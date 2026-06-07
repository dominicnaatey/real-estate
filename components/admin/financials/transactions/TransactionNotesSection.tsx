"use client";

import type { TransactionFormState } from "./types";

type Props = { state: Pick<TransactionFormState, "notes" | "setNotes"> };

export function TransactionNotesSection({ state }: Props) {
  return (
    <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6 space-y-3">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] border-b border-[#ECECEC] pb-4">
        Notes
      </p>
      <textarea
        rows={4}
        value={state.notes}
        onChange={(e) => state.setNotes(e.target.value)}
        className="w-full px-4 py-3 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 resize-y"
        placeholder="Any additional context about this transaction..."
      />
    </div>
  );
}
