"use client";

import type { AgentFormState } from "./types";

const inputCls = "w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-admin-field-text outline-none focus:ring-2 focus:ring-[#008060]/20";
const labelCls = "block text-admin-label-color text-admin-label-size font-admin-label";

type Props = {
  state: Pick<AgentFormState,
    "email" | "setEmail" |
    "phone" | "setPhone"
  >;
};

export function ContactSection({ state }: Props) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Contact Details
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="block space-y-2">
          <span className={`block ${labelCls}`}>Email Address</span>
          <input
            type="email"
            value={state.email}
            onChange={(e) => state.setEmail(e.target.value)}
            className={inputCls}
            placeholder="agent@luxmanagement.com"
            required
          />
        </label>

        <label className="block space-y-2">
          <span className={`block ${labelCls}`}>Phone Number</span>
          <input
            type="tel"
            value={state.phone}
            onChange={(e) => state.setPhone(e.target.value)}
            className={inputCls}
            placeholder="+1 (416) 555-0100"
            required
          />
        </label>
      </div>
    </div>
  );
}
