"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  Camera,
  HelpCircle,
  Home,
  LayoutDashboard,
  ReceiptText,
  Settings,
  Users,
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const nav = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/listings", label: "Listings", icon: Home },
    { href: "/admin/crm", label: "CRM", icon: Users },
    { href: "/admin/financials", label: "Financials", icon: ReceiptText },
    { href: "#", label: "Agents", icon: Building2 },
    { href: "#", label: "Media", icon: Camera },
  ] as const;

  return (
    <aside className="hidden md:flex h-screen w-60 fixed left-0 top-0 bg-[#FDFBF7] border-r border-gray-200 flex-col py-6 z-50">
      <div className="px-6 mb-8 flex flex-col gap-1">
        <h1 className="text-2xl font-serif text-slate-900 tracking-tight">
          EstatePro
        </h1>
        <span className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider">
          Luxury Real Estate
        </span>
      </div>

      <div className="px-4 mb-6">
        <button className="w-full bg-[#008060] text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#00654b] transition-colors scale-95 active:scale-90 shadow-sm">
          <span className="text-lg leading-none">+</span>
          New Listing
        </button>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {nav.map((item) => {
          const isActive =
            item.href !== "#"
              ? item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href)
              : false;
          const Icon = item.icon;

          const className = isActive
            ? "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#008060] font-bold border-r-2 border-[#008060] bg-[rgba(0,128,96,0.1)] scale-95 active:scale-90"
            : "flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200 scale-95 active:scale-90";

          if (item.href === "#") {
            return (
              <a key={item.label} className={className} href="#">
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.href}
              className={className}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-3 pt-4 border-t border-gray-200 mt-auto">
        <div className="pt-2 pb-2 px-3">
          <span className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider">
            Business
          </span>
        </div>
        <Link
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200 scale-95 active:scale-90"
          href="/admin/financials"
        >
          <ReceiptText className="w-5 h-5" />
          <span className="text-sm font-medium">Transactions</span>
        </Link>
        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200 scale-95 active:scale-90" href="#">
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </a>
        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200 scale-95 active:scale-90" href="#">
          <HelpCircle className="w-5 h-5" />
          <span className="font-semibold text-sm">Help Center</span>
        </a>
      </div>
    </aside>
  );
}
