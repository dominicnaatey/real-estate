"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Building2,
  Camera,
  ChevronDown,
  FileText,
  HelpCircle,
  Home,
  LayoutDashboard,
  Receipt,
  ReceiptText,
  Settings,
  Users,
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const isFinancialsActive = pathname.startsWith("/admin/financials");
  const [financialsManuallyToggled, setFinancialsManuallyToggled] = useState<boolean | null>(null);
  const financialsOpen = financialsManuallyToggled ?? isFinancialsActive;

  type NavItem = {
    href: string;
    label: string;
    icon: LucideIcon;
  };

  const nav: NavItem[] = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/listings", label: "Listings", icon: Home },
    { href: "/admin/crm", label: "CRM", icon: Users },
    { href: "/admin/agents", label: "Agents", icon: Building2 },
    { href: "/admin/media-library", label: "Media", icon: Camera },
  ];

  const financialsChildren = [
    { href: "/admin/financials/transactions", label: "Transactions", icon: Receipt },
    { href: "/admin/financials/invoices", label: "Invoices", icon: FileText },
  ];

  return (
    <aside className="hidden md:flex h-screen w-60 fixed left-0 top-0 bg-white border-r-admin border-admin-border flex-col py-6 z-50">
      <div className="px-6 mb-8 flex flex-col gap-1">
        <h1 className="text-2xl font-serif text-slate-900 tracking-tight">
          EstatePro
        </h1>
        <span className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider">
          Luxury Real Estate
        </span>
      </div>

      <div className="px-4 mb-6">
        <Link
          href="/admin/listings/new"
          className="w-full bg-[#008060] text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#00654b] transition-colors scale-95 active:scale-90 shadow-sm"
        >
          <span className="text-lg leading-none">+</span>
          New Listing
        </Link>
      </div>

      <nav className="flex-1 flex flex-col gap-1 px-3">
        {/* Regular nav items */}
        {nav.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`group flex items-center px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? "text-[#008060] font-bold border-r-2 border-[#008060] bg-[rgba(0,128,96,0.1)]"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span className="flex items-center gap-3 transition-transform duration-200 group-hover:translate-x-1">
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </span>
            </Link>
          );
        })}

        {/* Financials with submenu */}
        <div>
          <div className={`flex items-center rounded-lg transition-colors cursor-pointer ${
              isFinancialsActive
                ? "text-[#008060] font-bold bg-[rgba(0,128,96,0.1)]"
                : "text-slate-700 hover:bg-slate-50"
            }`}>
            <button
              type="button"
              onClick={() => { router.push("/admin/financials"); setFinancialsOpen(true); }}
              className="flex-1 flex items-center gap-3 px-3 py-2.5 transition-transform duration-200 hover:translate-x-1"
            >
              <ReceiptText className="h-5 w-5" />
              <span>Financials</span>
            </button>
            <button
              type="button"
              onClick={() => setFinancialsManuallyToggled((o) => !(o ?? isFinancialsActive))}
              className="px-2 py-2.5"
              aria-label="Toggle financials submenu"
            >
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${financialsOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          {financialsOpen && (
            <div className="mt-1 ml-4 pl-3 border-l border-[#ECECEC] flex flex-col gap-1">
              {financialsChildren.map((child) => {
                const isActive = pathname.startsWith(child.href);
                const Icon = child.icon;
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive
                        ? "text-[#008060] font-semibold bg-[rgba(0,128,96,0.08)]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {child.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      <div className="px-3 pt-4 border-t-admin border-admin-border mt-auto">
        <div className="pt-2 pb-2 px-3">
          <span className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider">
            System
          </span>
        </div>
        <a className="group flex items-center px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors" href="#">
          <span className="flex items-center gap-3 transition-transform duration-200 group-hover:translate-x-1">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </span>
        </a>
        <a className="group flex items-center px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors" href="#">
          <span className="flex items-center gap-3 transition-transform duration-200 group-hover:translate-x-1">
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Help Center</span>
          </span>
        </a>
      </div>
    </aside>
  );
}
