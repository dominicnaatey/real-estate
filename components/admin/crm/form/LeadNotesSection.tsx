"use client";

import { FileText, Lightbulb } from "lucide-react";
import type { LeadFormState } from "./types";

type Props = {
  state: Pick<LeadFormState, "notes" | "setNotes">;
};

export function LeadNotesSection({ state }: Props) {
  return (
    <section className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6">
      <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-4 mb-6">
        <FileText className="w-4 h-4 text-[#3e4944]" />
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Lead Notes &amp; Discovery Details
        </h3>
      </div>

      <textarea
        rows={5}
        value={state.notes}
        onChange={(e) => state.setNotes(e.target.value)}
        className="w-full px-4 py-3 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-admin-field-text outline-none focus:ring-2 focus:ring-[#008060]/20 resize-y"
        placeholder="Enter specific requirements, client lifestyle notes, or referral context..."
      />

      <div className="mt-4 flex gap-3 p-4 bg-[#F0FAF7] rounded-(--admin-field-radius) border border-[#008060]/10">
        <Lightbulb className="w-4 h-4 text-[#008060] shrink-0 mt-0.5" />
        <p className="text-xs text-[#3e4944] italic leading-relaxed">
          &ldquo;Luxury buyers often prioritize privacy and integrated smart home systems.
          Note if the prospect mentioned specific architectural styles like Brutalist or Mid-Century Modern.&rdquo;
        </p>
      </div>
    </section>
  );
}
