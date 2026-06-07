"use client";

import type { InvoiceFormState } from "./types";

type Props = {
  state: Pick<InvoiceFormState, "clientNote" | "setClientNote" | "internalNote" | "setInternalNote">;
};

const textareaCls = "w-full px-3 py-2 rounded-(--admin-field-radius) bg-white border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 resize-y";

export function NotesSection({ state }: Props) {
  return (
    <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-4">
        Payment Terms &amp; Private Notes
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#181d1a] mb-1">Notes to Client</label>
          <textarea
            rows={5}
            value={state.clientNote}
            onChange={(e) => state.setClientNote(e.target.value)}
            className={textareaCls}
            placeholder="Enter terms, bank details, or a friendly note..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#181d1a] mb-1">Internal Admin Note (Private)</label>
          <textarea
            rows={5}
            value={state.internalNote}
            onChange={(e) => state.setInternalNote(e.target.value)}
            className={textareaCls}
            placeholder="Private internal notes..."
          />
        </div>
      </div>
    </div>
  );
}
