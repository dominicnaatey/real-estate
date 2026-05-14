"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { TextField, TextAreaField } from "../../listings/form/fields";
import type { AgentFormState } from "./types";

type Props = {
  state: Pick<AgentFormState,
    "name" | "setName" |
    "role" | "setRole" |
    "avatarUrl" | "setAvatarUrl" |
    "bio" | "setBio"
  >;
};

export function PersonalInfoSection({ state }: Props) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Personal Information
        </h3>
      </div>

      <div className="flex items-center gap-5">
        <div className="shrink-0 w-20 h-20 rounded-full bg-(--admin-field-bg) border-admin border-admin-border overflow-hidden flex items-center justify-center">
          {state.avatarUrl ? (
            <Image
              src={state.avatarUrl}
              alt="Avatar preview"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          ) : (
            <User className="w-8 h-8 text-[#9CA3AF]" />
          )}
        </div>
        <div className="flex-1">
          <TextField
            id="avatarUrl"
            label="Avatar URL"
            value={state.avatarUrl}
            onChange={state.setAvatarUrl}
            type="url"
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <TextField
          id="name"
          label="Full Name"
          value={state.name}
          onChange={state.setName}
          placeholder="eg. Jonathan Pierce"
          required
        />
        <TextField
          id="role"
          label="Role / Title"
          value={state.role}
          onChange={state.setRole}
          placeholder="eg. Senior Associate"
          required
        />
      </div>

      <TextAreaField
        id="bio"
        label="Bio"
        value={state.bio}
        onChange={state.setBio}
        placeholder="A brief professional bio about the agent..."
        rows={4}
      />
    </div>
  );
}
