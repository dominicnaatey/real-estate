import Link from "next/link";
import {
  BarChart3,
  HeadphonesIcon,
  Home,
  LayoutDashboard,
  LogOut,
  Mail,
  Settings,
} from "lucide-react";

export function ListingsSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-white flex flex-col p-6 space-y-4 shadow-[0_20px_40px_rgba(19,27,46,0.06)] z-50">
      <div className="mb-10 px-2">
        <h2 className="text-2xl font-black text-[#131b2e] uppercase tracking-tight">
          AuraHomes
        </h2>
        <p className="text-[10px] tracking-widest uppercase font-semibold text-[#785a00] opacity-70">
          Admin Portal
        </p>
      </div>
      <nav className="flex-1 space-y-2">
        <Link
          href="/admin"
          className="flex items-center space-x-3 px-4 py-3 rounded-full transition-all duration-300 ease-in-out text-[#131b2e] opacity-70 hover:opacity-100 hover:bg-[#f2f3ff]"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-sm tracking-wide uppercase font-semibold">
            Dashboard
          </span>
        </Link>
        <Link
          href="/admin/listings"
          className="flex items-center space-x-3 px-4 py-3 rounded-full transition-all duration-300 ease-in-out text-[#785a00] border-r-4 border-[#eab308] bg-[#f2f3ff]"
        >
          <Home className="w-5 h-5" />
          <span className="text-sm tracking-wide uppercase font-semibold">
            My Listings
          </span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-3 rounded-full transition-all duration-300 ease-in-out text-[#131b2e] opacity-70 hover:opacity-100 hover:bg-[#f2f3ff]"
        >
          <Mail className="w-5 h-5" />
          <span className="text-sm tracking-wide uppercase font-semibold">
            Inquiries
          </span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-3 rounded-full transition-all duration-300 ease-in-out text-[#131b2e] opacity-70 hover:opacity-100 hover:bg-[#f2f3ff]"
        >
          <BarChart3 className="w-5 h-5" />
          <span className="text-sm tracking-wide uppercase font-semibold">
            Analytics
          </span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-3 rounded-full transition-all duration-300 ease-in-out text-[#131b2e] opacity-70 hover:opacity-100 hover:bg-[#f2f3ff]"
        >
          <Settings className="w-5 h-5" />
          <span className="text-sm tracking-wide uppercase font-semibold">
            Settings
          </span>
        </Link>
      </nav>
      <div className="pt-6 border-t border-[#d3c5ac]/10 space-y-2">
        <button className="w-full bg-linear-to-tr from-[#785a00] to-[#eab308] text-white font-bold py-4 px-6 rounded-full shadow-lg hover:scale-[1.02] active:scale-95 transition-all mb-4">
          Add New Property
        </button>
        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-2 rounded-full text-[#131b2e] opacity-70 hover:opacity-100"
        >
          <HeadphonesIcon className="w-5 h-5" />
          <span className="text-sm tracking-wide uppercase font-semibold">
            Support
          </span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-2 rounded-full text-[#131b2e] opacity-70 hover:opacity-100"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm tracking-wide uppercase font-semibold">
            Logout
          </span>
        </Link>
      </div>
    </aside>
  );
}
