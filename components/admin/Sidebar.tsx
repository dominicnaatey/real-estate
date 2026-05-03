"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  HelpCircle,
  Home,
  LayoutDashboard,
  Mail,
  Settings,
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const nav = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/listings", label: "My Listings", icon: Home },
    { href: "#", label: "Inquiries", icon: Mail },
    { href: "#", label: "Analytics", icon: BarChart3 },
    { href: "#", label: "Settings", icon: Settings },
  ] as const;

  return (
    <aside className="hidden md:flex h-screen w-72 fixed left-0 top-0 bg-white border-r border-slate-200/70 flex-col gap-2 px-4 py-6 z-50">
      <div className="px-4 pt-1 pb-6">
        <h1 className="text-lg font-extrabold tracking-tight text-slate-900">
          FloHomes Admin
        </h1>
        <p className="mt-1 text-[11px] font-medium text-slate-500">
          Manage listings and inquiries
        </p>
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
            ? "flex items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm"
            : "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors";

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

      <div className="mt-auto flex flex-col gap-2 pt-6 border-t border-slate-200/70">
        <a className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
          <HelpCircle className="w-5 h-5" />
          <span className="font-semibold text-sm">Help Center</span>
        </a>
        <button className="mx-1 mt-3 bg-slate-900 text-white py-3 rounded-xl font-semibold text-sm shadow-sm hover:bg-slate-800 transition-colors active:scale-[0.99]">
          Create Listing
        </button>
      </div>
    </aside>
  );
}
