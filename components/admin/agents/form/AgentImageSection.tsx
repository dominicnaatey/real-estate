"use client";

import Image from "next/image";
import { Upload, User } from "lucide-react";
import type { AgentFormState } from "./types";

type Props = {
  state: Pick<AgentFormState, "avatarUrl" | "setAvatarUrl">;
};

export function AgentImageSection({ state }: Props) {
  return (
    <div className="space-y-4 bg-white p-4 md:py-6 md:px-6 rounded-(--admin-form-card-radius) border border-[#ECECEC]">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Agent Photo
        </h3>
      </div>

      {/* Preview */}
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-(--admin-field-bg) border border-[#ECECEC] overflow-hidden flex items-center justify-center shrink-0">
          {state.avatarUrl ? (
            <Image
              src={state.avatarUrl}
              alt="Agent photo preview"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          ) : (
            <User className="w-10 h-10 text-[#9CA3AF]" />
          )}
        </div>
      </div>

      {/* URL input */}
      <div className="space-y-2">
        <span className="block text-admin-label-color text-admin-label-size font-admin-label">
          Image URL
        </span>
        <input
          type="url"
          value={state.avatarUrl}
          onChange={(e) => state.setAvatarUrl(e.target.value)}
          placeholder="https://..."
          className="w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-admin-field-text outline-none focus:ring-2 focus:ring-[#008060]/20"
        />
      </div>

      {/* Upload button */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-(--admin-field-radius) border border-[#ECECEC] bg-(--admin-field-bg) text-[#3e4944] text-[11px] font-semibold uppercase tracking-wider hover:border-[#008060]/40 hover:text-[#008060] transition-colors"
      >
        <Upload className="w-4 h-4" />
        Upload Photo
      </button>
    </div>
  );
}
