import Link from "next/link";
import {
  BarChart3,
  HelpCircle,
  Home,
  LayoutDashboard,
  Mail,
  Settings,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="h-screen w-72 fixed left-0 top-0 rounded-r-[2rem] overflow-hidden bg-slate-50 flex flex-col gap-2 py-8 px-4 z-50">
      <div className="px-6 mb-10">
        <h1 className="text-xl font-extrabold text-slate-900">AuraHomes</h1>
        <p className="text-[10px] uppercase tracking-widest text-amber-600 font-bold mt-1">
          Luxury Curator
        </p>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        <Link
          className="bg-gradient-to-br from-amber-700 to-amber-500 text-white rounded-full shadow-lg flex items-center gap-4 px-6 py-3 transition-all active:opacity-90 scale-[0.98]"
          href="/admin"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="font-semibold text-sm">Dashboard</span>
        </Link>
        <Link
          className="text-slate-600 px-6 py-3 flex items-center gap-4 hover:translate-x-1 hover:text-amber-700 transition-all"
          href="/admin/listings"
        >
          <Home className="w-5 h-5" />
          <span className="font-semibold text-sm">My Listings</span>
        </Link>
        <a
          className="text-slate-600 px-6 py-3 flex items-center gap-4 hover:translate-x-1 hover:text-amber-700 transition-all"
          href="#"
        >
          <Mail className="w-5 h-5" />
          <span className="font-semibold text-sm">Inquiries</span>
        </a>
        <a
          className="text-slate-600 px-6 py-3 flex items-center gap-4 hover:translate-x-1 hover:text-amber-700 transition-all"
          href="#"
        >
          <BarChart3 className="w-5 h-5" />
          <span className="font-semibold text-sm">Analytics</span>
        </a>
        <a
          className="text-slate-600 px-6 py-3 flex items-center gap-4 hover:translate-x-1 hover:text-amber-700 transition-all"
          href="#"
        >
          <Settings className="w-5 h-5" />
          <span className="font-semibold text-sm">Settings</span>
        </a>
      </nav>

      <div className="mt-auto flex flex-col gap-2 pt-6 border-t border-slate-200/50">
        <a
          className="text-slate-600 px-6 py-3 flex items-center gap-4 hover:translate-x-1 hover:text-amber-700 transition-all"
          href="#"
        >
          <HelpCircle className="w-5 h-5" />
          <span className="font-semibold text-sm">Help Center</span>
        </a>
        <button className="mx-4 mt-4 bg-white border border-amber-100 text-amber-700 py-3 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95">
          Schedule Tour
        </button>
      </div>
    </aside>
  );
}
