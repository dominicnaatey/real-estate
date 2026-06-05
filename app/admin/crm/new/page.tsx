"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import {
  FileText,
  Home,
  Lightbulb,
  UserPlus,
} from "lucide-react";
import { AdminDropdown } from "../../../../components/admin/ui/AdminDropdown";

const inputCls =
  "w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-admin-field-text outline-none focus:ring-2 focus:ring-[#008060]/20";
const labelCls = "block text-[11px] font-semibold uppercase tracking-wider text-[#3e4944]";

const LEAD_SOURCES = [
  { value: "Website", label: "Website" },
  { value: "Referral", label: "Referral" },
  { value: "Social Media", label: "Social Media" },
  { value: "Cold Call", label: "Cold Call" },
  { value: "Open House", label: "Open House" },
  { value: "Portal", label: "Portal" },
];

const LEAD_STATUSES = [
  { value: "New", label: "New" },
  { value: "Contacted", label: "Contacted" },
  { value: "Viewing Scheduled", label: "Viewing Scheduled" },
  { value: "Offer Pending", label: "Offer Pending" },
  { value: "Closed Won", label: "Closed Won" },
  { value: "Closed Lost", label: "Closed Lost" },
];

const CONTACT_METHODS = [
  { value: "Email", label: "Email" },
  { value: "Phone", label: "Phone" },
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "In Person", label: "In Person" },
];

const AGENTS = [
  { value: "unassigned", label: "Unassigned" },
  { value: "sarah-jenkins", label: "Sarah Jenkins" },
  { value: "michael-chen", label: "Michael Chen" },
  { value: "david-ross", label: "David Ross" },
];

const PROPERTY_TYPES = [
  { value: "Condo", label: "Condo", icon: "🏢" },
  { value: "Single Family", label: "Single Family", icon: "🏡" },
  { value: "Land", label: "Land", icon: "🌿" },
  { value: "Commercial", label: "Commercial", icon: "🏬" },
];

const PRIORITY_LEVELS = ["Low", "Medium", "High"] as const;
type Priority = (typeof PRIORITY_LEVELS)[number];

export default function AdminNewLeadPage() {
  const router = useRouter();

  // Contact
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("Email");

  // Lead details
  const [leadSource, setLeadSource] = useState("Website");
  const [leadStatus, setLeadStatus] = useState("New");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [assignedAgent, setAssignedAgent] = useState("unassigned");

  // Interest & Budget
  const [propertyType, setPropertyType] = useState("Single Family");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [preferredLocations, setPreferredLocations] = useState("");

  // Notes
  const [notes, setNotes] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/crm");
  }

  const systemId = "LMX-" + Math.floor(10000 + Math.random() * 90000) + "-CRM";
  const createdAt = new Date().toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  }) + " • " + new Date().toLocaleTimeString("en-US", {
    hour: "numeric", minute: "2-digit",
  });

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
        <div>
          <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-1 font-medium">
            CRM / Add New Lead
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] leading-tight">
            Prospect Registration
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-0.5">
            Initialize a new relationship in your luxury pipeline.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link
            href="/admin/crm"
            className="px-5 py-2 border border-[#ECECEC] rounded text-sm font-medium text-[#3e4944] bg-white hover:bg-[#F9FAFB] transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            form="lead-form"
            className="px-5 py-2 bg-[#008060] text-white rounded text-sm font-semibold hover:bg-[#00654b] transition-colors"
          >
            Save Lead
          </button>
        </div>
      </div>

      <form id="lead-form" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Left / main ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Contact Information */}
            <section className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6">
              <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-4 mb-6">
                <FileText className="w-4 h-4 text-[#3e4944]" />
                <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
                  Contact Information
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="space-y-1.5 block">
                  <span className={labelCls}>Full Name</span>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={inputCls}
                    placeholder="e.g. Alexander Sterling"
                    required
                  />
                </label>

                <label className="space-y-1.5 block">
                  <span className={labelCls}>Email Address</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputCls}
                    placeholder="alexander@sterling-estates.com"
                    required
                  />
                </label>

                <label className="space-y-1.5 block">
                  <span className={labelCls}>Phone Number</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputCls}
                    placeholder="+1 (555) 000-0000"
                  />
                </label>

                <div className="space-y-1.5">
                  <AdminDropdown
                    label="Preferred Contact Method"
                    value={contactMethod}
                    onChange={setContactMethod}
                    options={CONTACT_METHODS}
                    placeholder="Select method..."
                  />
                </div>
              </div>
            </section>

            {/* Interest & Budget */}
            <section className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6">
              <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-4 mb-6">
                <Home className="w-4 h-4 text-[#3e4944]" />
                <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
                  Interest &amp; Budget
                </h3>
              </div>

              {/* Property Type Pills */}
              <div className="space-y-2 mb-5">
                <span className={labelCls}>Property Type Interest</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {PROPERTY_TYPES.map((pt) => (
                    <button
                      key={pt.value}
                      type="button"
                      onClick={() => setPropertyType(pt.value)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-(--admin-field-radius) text-sm font-medium border transition-colors ${
                        propertyType === pt.value
                          ? "bg-[#E6F4F0] border-[#008060] text-[#005C45]"
                          : "bg-(--admin-field-bg) border-[#ECECEC] text-[#3e4944] hover:border-[#008060]/40"
                      }`}
                    >
                      <span>{pt.icon}</span>
                      {pt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <label className="space-y-1.5 block">
                  <span className={labelCls}>Minimum Budget</span>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9CA3AF]">$</span>
                    <input
                      type="text"
                      value={minBudget}
                      onChange={(e) => setMinBudget(e.target.value)}
                      className={`${inputCls} pl-8`}
                      placeholder="500,000"
                    />
                  </div>
                </label>

                <label className="space-y-1.5 block">
                  <span className={labelCls}>Maximum Budget</span>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9CA3AF]">$</span>
                    <input
                      type="text"
                      value={maxBudget}
                      onChange={(e) => setMaxBudget(e.target.value)}
                      className={`${inputCls} pl-8`}
                      placeholder="2,500,000"
                    />
                  </div>
                </label>
              </div>

              <label className="space-y-1.5 block">
                <span className={labelCls}>Preferred Locations</span>
                <input
                  type="text"
                  value={preferredLocations}
                  onChange={(e) => setPreferredLocations(e.target.value)}
                  className={inputCls}
                  placeholder="e.g. Aspen, Beverly Hills, Miami Beach"
                />
              </label>
            </section>

            {/* Lead Notes */}
            <section className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6">
              <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-4 mb-6">
                <FileText className="w-4 h-4 text-[#3e4944]" />
                <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
                  Lead Notes &amp; Discovery Details
                </h3>
              </div>

              <textarea
                rows={5}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-admin-field-text outline-none focus:ring-2 focus:ring-[#008060]/20 resize-y"
                placeholder="Enter specific requirements, client lifestyle notes, or referral context..."
              />

              {/* AI hint */}
              <div className="mt-4 flex gap-3 p-4 bg-[#F0FAF7] rounded-(--admin-field-radius) border border-[#008060]/10">
                <Lightbulb className="w-4 h-4 text-[#008060] shrink-0 mt-0.5" />
                <p className="text-xs text-[#3e4944] italic leading-relaxed">
                  "Luxury buyers often prioritize privacy and integrated smart home systems.
                  Note if the prospect mentioned specific architectural styles like Brutalist or Mid-Century Modern."
                </p>
              </div>
            </section>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-[#9CA3AF] pt-2 pb-6">
              <span>CREATED: {createdAt}</span>
              <span>SYSTEM ID: {systemId}</span>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">

            {/* Lead Details */}
            <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6 space-y-5">
              <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-4">
                <UserPlus className="w-4 h-4 text-[#3e4944]" />
                <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
                  Lead Details
                </h3>
              </div>

              <AdminDropdown
                label="Lead Source"
                value={leadSource}
                onChange={setLeadSource}
                options={LEAD_SOURCES}
                placeholder="Select source..."
              />

              <AdminDropdown
                label="Lead Status"
                value={leadStatus}
                onChange={setLeadStatus}
                options={LEAD_STATUSES}
                placeholder="Select status..."
              />

              {/* Priority */}
              <fieldset className="space-y-2">
                <legend className={labelCls}>Priority Level</legend>
                <div className="flex items-center gap-4">
                  {PRIORITY_LEVELS.map((lvl) => (
                    <label key={lvl} className="flex items-center gap-1.5 cursor-pointer text-sm text-[#181d1a]">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                        priority === lvl ? "border-[#008060]" : "border-[#D1D5DB]"
                      }`}>
                        {priority === lvl && <div className="w-2 h-2 rounded-full bg-[#008060]" />}
                      </div>
                      {lvl}
                      <input
                        type="radio"
                        name="priority"
                        value={lvl}
                        checked={priority === lvl}
                        onChange={() => setPriority(lvl)}
                        className="sr-only"
                      />
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* Internal Assignment */}
            <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6 space-y-5">
              <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-4">
                <UserPlus className="w-4 h-4 text-[#3e4944]" />
                <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
                  Internal Assignment
                </h3>
              </div>

              <AdminDropdown
                label="Assigned Agent"
                value={assignedAgent}
                onChange={setAssignedAgent}
                options={AGENTS}
                placeholder="Unassigned"
              />
            </div>

          </aside>
        </div>
      </form>
    </div>
  );
}
