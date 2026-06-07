"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import {
  FileText,
  Send,
  FilePdf,
  Save,
  Plus,
  Trash2,
  Upload,
  X,
  Info,
} from "lucide-react";

// ── Types ───────────────────────────────────────────────────────────────────

type LineItem = {
  id: number;
  description: string;
  note: string;
  qty: number;
  unitPrice: string;
};

// ── Shared styles ────────────────────────────────────────────────────────────

const inputCls =
  "w-full h-10 px-3 rounded-(--admin-field-radius) bg-white border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 focus:border-[#008060]/40";
const labelCls = "block text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-1";

// ── Toggle Switch ────────────────────────────────────────────────────────────

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-[#008060]/30 ${
        checked ? "bg-[#008060]" : "bg-[#D1D5DB]"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function AdminNewInvoicePage() {
  const router = useRouter();

  // Client
  const [client, setClient] = useState("Alexander Wright - Penthouse 4B");

  // Invoice details
  const [issueDate, setIssueDate] = useState("2024-05-24");
  const [dueDate, setDueDate] = useState("2024-06-07");
  const [currency, setCurrency] = useState("GBP");

  // Line items
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: 1, description: "Monthly Property Management - Penthouse 4B", note: "Full-service oversight for May 2024 period.", qty: 1, unitPrice: "2450.00" },
    { id: 2, description: "Professional Staging Services", note: "Living area and primary suite enhancement.", qty: 1, unitPrice: "850.00" },
    { id: 3, description: "Aerial Drone Photography", note: "4K resolution exterior shots and site context.", qty: 2, unitPrice: "175.00" },
  ]);

  // Notes
  const [clientNote, setClientNote] = useState(
    "Thank you for your business. Please make payments payable to LuxManagement Ltd via wire transfer. Use INV-2024-0082 as your reference."
  );
  const [internalNote, setInternalNote] = useState("");

  // Options
  const [sendEmail, setSendEmail] = useState(true);
  const [onlinePayment, setOnlinePayment] = useState(true);
  const [hideTotals, setHideTotals] = useState(false);

  // Calculations
  const subtotal = lineItems.reduce((sum, item) => {
    return sum + item.qty * parseFloat(item.unitPrice || "0");
  }, 0);
  const vatRate = 0.2;
  const vat = subtotal * vatRate;
  const total = subtotal + vat;

  const currencySymbol = currency === "GBP" ? "£" : currency === "EUR" ? "€" : "$";

  function addLineItem() {
    setLineItems((prev) => [
      ...prev,
      { id: Date.now(), description: "", note: "", qty: 1, unitPrice: "0.00" },
    ]);
  }

  function removeLineItem(id: number) {
    setLineItems((prev) => prev.filter((item) => item.id !== id));
  }

  function updateLineItem(id: number, field: keyof LineItem, value: string | number) {
    setLineItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/financials");
  }

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-[#9CA3AF] mb-6">
        <Link href="/admin/financials" className="hover:text-[#008060] transition-colors">Financials</Link>
        <span>/</span>
        <Link href="/admin/financials" className="hover:text-[#008060] transition-colors">Invoices</Link>
        <span>/</span>
        <span className="text-[#181d1a] font-medium">Create New Invoice</span>
      </nav>

      <form onSubmit={onSubmit}>
        {/* Header */}
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] leading-tight">
              Create New Invoice
            </h2>
            <p className="text-sm text-[#9CA3AF] mt-0.5">
              Issue a professional statement for agency services and staging.
            </p>
          </div>
          <div className="flex gap-3 shrink-0 flex-wrap">
            <button
              type="button"
              className="px-4 py-2 border border-[#ECECEC] rounded text-sm font-medium text-[#3e4944] bg-white hover:bg-[#F9FAFB] transition-colors"
            >
              Save as Draft
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-[#ECECEC] rounded text-sm font-medium text-[#3e4944] bg-white hover:bg-[#F9FAFB] transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Preview PDF
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#008060] text-white rounded text-sm font-semibold hover:bg-[#00654b] transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Invoice
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ── Left / Main ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Client Information & Invoice Details */}
            <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Client Information */}
                <div className="space-y-4">
                  <p className={labelCls}>Client Information</p>
                  <div>
                    <label className="block text-sm font-medium text-[#181d1a] mb-1">Select Client or Lead</label>
                    <select
                      value={client}
                      onChange={(e) => setClient(e.target.value)}
                      className="w-full h-10 px-3 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 appearance-none cursor-pointer"
                    >
                      <option>Eleanor Pemberton - 142 Park Lane</option>
                      <option>Marcus Aurelius - Villa Del Mar</option>
                      <option>Sarah Jenkins - The Heights Loft</option>
                      <option>Alexander Wright - Penthouse 4B</option>
                    </select>
                  </div>
                  <div className="p-4 bg-[#F9FAFB] rounded-(--admin-field-radius) border border-[#ECECEC]">
                    <p className="text-sm font-semibold text-[#181d1a]">Alexander Wright</p>
                    <p className="text-xs text-[#6B7280] mt-0.5">a.wright@wright-holdings.co.uk</p>
                    <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                      12 Knightsbridge Gardens,<br />London, SW1X 7LY
                    </p>
                  </div>
                </div>

                {/* Invoice Details */}
                <div className="space-y-4">
                  <p className={labelCls}>Invoice Details</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#181d1a] mb-1">Invoice Number</label>
                      <input
                        type="text"
                        value="INV-2024-0082"
                        readOnly
                        className="w-full h-10 px-3 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-[#9CA3AF] outline-none cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#181d1a] mb-1">Issue Date</label>
                      <input
                        type="date"
                        value={issueDate}
                        onChange={(e) => setIssueDate(e.target.value)}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#181d1a] mb-1">Due Date</label>
                      <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#181d1a] mb-1">Currency</label>
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-full h-10 px-3 rounded-(--admin-field-radius) bg-white border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 appearance-none cursor-pointer"
                      >
                        <option value="GBP">GBP (£)</option>
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services & Line Items */}
            <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) overflow-hidden">
              <div className="px-6 py-4 border-b border-[#ECECEC] flex items-center justify-between">
                <p className={labelCls + " mb-0"}>Services &amp; Items</p>
                <button
                  type="button"
                  onClick={addLineItem}
                  className="flex items-center gap-1 text-sm font-semibold text-[#008060] hover:text-[#00654b] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Service Line
                </button>
              </div>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#F9FAFB]">
                    <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">Description</th>
                    <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] w-20">Qty</th>
                    <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] w-36">Unit Price</th>
                    <th className="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] w-32">Amount</th>
                    <th className="px-4 py-3 w-10" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6]">
                  {lineItems.map((item) => {
                    const amount = item.qty * parseFloat(item.unitPrice || "0");
                    return (
                      <tr key={item.id}>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => updateLineItem(item.id, "description", e.target.value)}
                            className="w-full border-none p-0 text-sm font-medium text-[#181d1a] outline-none bg-transparent"
                            placeholder="Service description..."
                          />
                          <input
                            type="text"
                            value={item.note}
                            onChange={(e) => updateLineItem(item.id, "note", e.target.value)}
                            className="w-full border-none p-0 text-xs text-[#6B7280] outline-none bg-transparent mt-1"
                            placeholder="Optional note..."
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            type="number"
                            value={item.qty}
                            min={1}
                            onChange={(e) => updateLineItem(item.id, "qty", Number(e.target.value))}
                            className="w-16 border border-[#ECECEC] rounded px-2 py-1 text-sm text-center outline-none focus:ring-2 focus:ring-[#008060]/20"
                          />
                        </td>
                        <td className="px-4 py-4">
                          <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-[#9CA3AF]">{currencySymbol}</span>
                            <input
                              type="text"
                              value={item.unitPrice}
                              onChange={(e) => updateLineItem(item.id, "unitPrice", e.target.value)}
                              className="w-full border border-[#ECECEC] rounded pl-5 pr-2 py-1 text-sm outline-none focus:ring-2 focus:ring-[#008060]/20"
                            />
                          </div>
                        </td>
                        <td className="px-4 py-4 text-right text-sm font-semibold text-[#181d1a]">
                          {currencySymbol}{amount.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="px-4 py-4 text-center">
                          <button
                            type="button"
                            onClick={() => removeLineItem(item.id)}
                            className="text-[#9CA3AF] hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="px-6 py-4">
                <button
                  type="button"
                  onClick={addLineItem}
                  className="w-full py-3 border-2 border-dashed border-[#ECECEC] rounded-(--admin-field-radius) text-sm text-[#9CA3AF] hover:border-[#008060]/40 hover:text-[#008060] transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add another item
                </button>
              </div>
            </div>

            {/* Payment Terms & Notes */}
            <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6">
              <p className={labelCls}>Payment Terms &amp; Private Notes</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-sm font-medium text-[#181d1a] mb-1">Notes to Client</label>
                  <textarea
                    rows={5}
                    value={clientNote}
                    onChange={(e) => setClientNote(e.target.value)}
                    className="w-full px-3 py-2 rounded-(--admin-field-radius) bg-white border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 resize-y"
                    placeholder="Enter terms, bank details, or a friendly note..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#181d1a] mb-1">Internal Admin Note (Private)</label>
                  <textarea
                    rows={5}
                    value={internalNote}
                    onChange={(e) => setInternalNote(e.target.value)}
                    className="w-full px-3 py-2 rounded-(--admin-field-radius) bg-white border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 resize-y"
                    placeholder="Private internal notes..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">

            {/* Summary */}
            <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) overflow-hidden">
              <div className="px-5 py-4 bg-[#F9FAFB] border-b border-[#ECECEC]">
                <p className={labelCls + " mb-0"}>Summary</p>
              </div>
              <div className="px-5 py-4 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#6B7280]">Subtotal</span>
                  <span className="font-medium text-[#181d1a]">
                    {currencySymbol}{subtotal.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-[#6B7280]">VAT</span>
                    <span className="bg-[#F3F4F6] px-1.5 py-0.5 rounded text-[10px] font-bold text-[#6B7280]">20%</span>
                  </div>
                  <span className="font-medium text-[#181d1a]">
                    {currencySymbol}{vat.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="border-t border-[#ECECEC] pt-3 flex justify-between items-center">
                  <span className="text-base font-semibold text-[#181d1a]">Total Due</span>
                  <span className="text-2xl font-bold text-[#008060]">
                    {currencySymbol}{total.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
              <div className="px-5 py-3 bg-[#F0FAF7] border-t border-[#008060]/10 flex gap-3">
                <Info className="w-4 h-4 text-[#008060] shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed text-[#008060]/80">
                  This amount will be automatically ledgered to the Property Expenses account for Alexander Wright upon sending.
                </p>
              </div>
            </div>

            {/* Attachments */}
            <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-5 space-y-4">
              <p className={labelCls}>Attachments</p>
              <div className="flex items-center justify-between px-3 py-2 border border-[#ECECEC] rounded-(--admin-field-radius) bg-[#F9FAFB]">
                <div className="flex items-center gap-2 overflow-hidden">
                  <FileText className="w-4 h-4 text-[#6B7280] shrink-0" />
                  <span className="text-sm truncate text-[#181d1a]">drone_shot_1.jpg</span>
                </div>
                <button type="button" className="text-[#9CA3AF] hover:text-red-500 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <button
                type="button"
                className="w-full py-2 border border-dashed border-[#ECECEC] rounded-(--admin-field-radius) text-sm text-[#9CA3AF] hover:border-[#008060]/40 hover:text-[#008060] transition-colors flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Upload Receipt
              </button>
            </div>

            {/* Invoice Options */}
            <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-5 space-y-4">
              <p className={labelCls}>Invoice Options</p>
              <div className="space-y-4">
                {[
                  { label: "Send via Email automatically", value: sendEmail, onChange: () => setSendEmail((v) => !v) },
                  { label: "Enable online payment", value: onlinePayment, onChange: () => setOnlinePayment((v) => !v) },
                  { label: "Hide totals from summary", value: hideTotals, onChange: () => setHideTotals((v) => !v) },
                ].map(({ label, value, onChange }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-sm text-[#181d1a]">{label}</span>
                    <Toggle checked={value} onChange={onChange} />
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </form>
    </div>
  );
}
