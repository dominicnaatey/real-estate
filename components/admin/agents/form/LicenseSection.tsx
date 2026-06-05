"use client";

import { AdminDropdown } from "../../ui/AdminDropdown";
import type { AgentFormState } from "./types";

const inputCls = "w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-admin-field-text outline-none focus:ring-2 focus:ring-[#008060]/20";
const labelCls = "block text-admin-label-color text-admin-label-size font-admin-label";

const LICENSE_TYPES = [
  { value: "Salesperson", label: "Salesperson" },
  { value: "Broker", label: "Broker" },
  { value: "Managing Broker", label: "Managing Broker" },
  { value: "Associate Broker", label: "Associate Broker" },
];

type Props = {
  state: Pick<AgentFormState, "licenseType" | "setLicenseType" | "licenseId" | "setLicenseId">;
};

export function LicenseSection({ state }: Props) {
  return (
    <div className="space-y-4 bg-white p-4 md:py-6 md:px-6 rounded-(--admin-form-card-radius) border border-[#ECECEC]">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          License
        </h3>
      </div>

      <AdminDropdown
        label="License Type"
        value={state.licenseType}
        onChange={state.setLicenseType}
        options={LICENSE_TYPES}
        placeholder="License Type"
      />

      <label className="block space-y-2">
        <span className={`block ${labelCls}`}>License ID</span>
        <input
          type="text"
          value={state.licenseId}
          onChange={(e) => state.setLicenseId(e.target.value)}
          className={inputCls}
          placeholder="eg. #LAG/2020A/X0006"
        />
      </label>
    </div>
  );
}
