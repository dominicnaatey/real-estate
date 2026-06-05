"use client";

import Image from "next/image";
import { User } from "lucide-react";
import type { AgentFormState } from "./types";

type Props = {
  state: Pick<AgentFormState, "avatarUrl" | "setAvatarUrl">;
};

export function AgentImageSection({ state }: Props) {
  return (
    <div className="space-y-4 bg-white p-4 md:py-6 md:px-6 rounded-(--admin-form-card-radius) border border-[#ECECEC]">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Avatar
        </h3>
      </div>

      {/* Preview */}
      <div className="w-full aspect-4/3 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] overflow-hidden flex items-center justify-center">
        {state.avatarUrl ? (
          <Image
            src={state.avatarUrl}
            alt="Agent photo preview"
            width={240}
            height={180}
            className="object-cover w-full h-full"
          />
        ) : (
          <User className="w-12 h-12 text-[#9CA3AF]" />
        )}
      </div>

      {/* URL input (hidden label, placeholder only) */}
      <input
        type="url"
        value={state.avatarUrl}
        onChange={(e) => state.setAvatarUrl(e.target.value)}
        placeholder="Paste image URL..."
        className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-admin-field-text outline-none focus:ring-2 focus:ring-[#008060]/20"
        aria-label="Avatar URL"
      />

      {/* Actions */}
      <div className="flex items-center justify-between pt-1">
        <button
          type="button"
          className="text-sm text-[#3e4944] hover:text-[#008060] transition-colors font-medium"
        >
          Change
        </button>
        <button
          type="button"
          onClick={() => state.setAvatarUrl("")}
          className="text-sm text-red-500 hover:text-red-600 transition-colors font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
