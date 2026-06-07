"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { Save } from "lucide-react";

const inputCls = "w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20";
const labelCls = "block text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5";

const TRANSACTION_TYPES = ["Income", "Expense", "Commission", "Refund"] as const;
const PAYMENT_METHODS = ["Cash", "Wire Transfer", "Cheque", "Bank Transfer", "Other"] as const;
const CURRENCIES = [{ value: "USD", label: "USD ($)" }, { value: "GBP", label: "GBP (£)" }, { value: "EUR", label: "EUR (€)" }];

export default function AdminNewTransactionPage() {
  const router = useRouter();

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [type, setType] = useState<typeof TRANSACTION_TYPES[number]>("Income");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [party, setParty] = useState("");
  const [property, setProperty] = useState("");
  const [method, setMethod] = useState<typeof PAYMENT_METHODS[number]>("Wire Transfer");
  const [reference, setReference] = useState("");
  const [notes, setNotes] = useState("");

  const isExpenseType = type === "Expense" || type === "Refund";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/financials");
  }

  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-[#9CA3AF] mb-6">
        <Link href="/admin/financials" className="hover:text-[#008060] transition-colors">Financials</Link>
        <span>/</span>
        <span className="text-[#181d1a] font-medium">Record Transaction</span>
      </nav>

      <form onSubmit={onSubmit}>
        {/* Header */}
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] leading-tight">
              Record Transaction
            </h2>
            <p className="text-sm text-[#9CA3AF] mt-0.5">
              Manually log a payment received or expense paid.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/admin/financials"
              className="px-4 py-2 border border-[#ECECEC] rounded text-sm font-medium text-[#3e4944] bg-white hover:bg-[#F9FAFB] transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-5 py-2 bg-[#008060] text-white rounded text-sm font-semibold hover:bg-[#00654b] transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Transaction
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main */}
          <div className="lg:col-span-2 space-y-6">

            {/* Core Details */}
            <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6 space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] border-b border-[#ECECEC] pb-4">
                Transaction Details
              </p>

              {/* Type selector */}
              <div>
                <p className={labelCls}>Type</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TRANSACTION_TYPES.map((t) => {
                    const isSelected = type === t;
                    const colorMap: Record<typeof TRANSACTION_TYPES[number], string> = {
                      Income:     "border-[#008060] bg-[#E6F4F0] text-[#005C45]",
                      Commission: "border-[#008060] bg-[#E6F4F0] text-[#005C45]",
                      Expense:    "border-red-400 bg-red-50 text-red-700",
                      Refund:     "border-amber-400 bg-amber-50 text-amber-700",
                    };
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setType(t)}
                        className={`py-2 px-3 rounded-(--admin-field-radius) text-sm font-medium border transition-colors ${
                          isSelected
                            ? colorMap[t]
                            : "border-[#ECECEC] bg-(--admin-field-bg) text-[#3e4944] hover:border-[#008060]/30"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date + Amount */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputCls}
                    required
                  />
                </div>
                <div>
                  <label className={labelCls}>Amount</label>
                  <div className="flex gap-2">
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="h-11 px-3 rounded-(--admin-field-radius) bg-white border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 appearance-none cursor-pointer w-28"
                    >
                      {CURRENCIES.map((c) => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className={`${inputCls} flex-1`}
                      placeholder="0.00"
                      min={0}
                      step={0.01}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Party + Property */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>
                    {isExpenseType ? "Paid To" : "Received From"}
                  </label>
                  <input
                    type="text"
                    value={party}
                    onChange={(e) => setParty(e.target.value)}
                    className={inputCls}
                    placeholder="Client or company name..."
                    required
                  />
                </div>
                <div>
                  <label className={labelCls}>Property (optional)</label>
                  <input
                    type="text"
                    value={property}
                    onChange={(e) => setProperty(e.target.value)}
                    className={inputCls}
                    placeholder="eg. Penthouse 4B, The Apex"
                  />
                </div>
              </div>

              {/* Method + Reference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Payment Method</label>
                  <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value as typeof PAYMENT_METHODS[number])}
                    className="w-full h-11 px-3 rounded-(--admin-field-radius) bg-white border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 appearance-none cursor-pointer"
                  >
                    {PAYMENT_METHODS.map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Reference / Invoice # (optional)</label>
                  <input
                    type="text"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    className={inputCls}
                    placeholder="eg. INV-2024-0082"
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6 space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] border-b border-[#ECECEC] pb-4">
                Notes
              </p>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-(--admin-field-radius) bg-(--admin-field-bg) border border-[#ECECEC] text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#008060]/20 resize-y"
                placeholder="Any additional context about this transaction..."
              />
            </div>
          </div>

          {/* Summary sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-5 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">Preview</p>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Type</span>
                  <span className={`font-medium ${isExpenseType ? "text-red-600" : "text-[#008060]"}`}>{type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Date</span>
                  <span className="text-[#181d1a]">{date || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Party</span>
                  <span className="text-[#181d1a] truncate max-w-[140px] text-right">{party || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Method</span>
                  <span className="text-[#181d1a]">{method}</span>
                </div>
                <div className="border-t border-[#ECECEC] pt-3 flex justify-between items-center">
                  <span className="font-semibold text-[#181d1a]">Amount</span>
                  <span className={`text-xl font-bold ${isExpenseType ? "text-red-600" : "text-[#008060]"}`}>
                    {isExpenseType ? "−" : "+"}{currency === "GBP" ? "£" : currency === "EUR" ? "€" : "$"}{amount ? parseFloat(amount).toLocaleString("en-GB", { minimumFractionDigits: 2 }) : "0.00"}
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </form>
    </div>
  );
}
