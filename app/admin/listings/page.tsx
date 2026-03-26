import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Bell,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Edit2,
  Eye,
  HeadphonesIcon,
  HelpCircle,
  Home,
  LayoutDashboard,
  LogOut,
  Mail,
  MapPin,
  Filter,
  PlusCircle,
  Search,
  Settings,
  Trash2,
} from "lucide-react";

export default function ListingsPage() {
  return (
    <div className="bg-[#faf8ff] text-[#131b2e] min-h-screen font-sans flex">
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
            href="#"
            className="flex items-center space-x-3 px-4 py-3 rounded-full transition-all duration-300 ease-in-out text-[#131b2e] opacity-70 hover:opacity-100 hover:bg-[#f2f3ff]"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm tracking-wide uppercase font-semibold">
              Dashboard
            </span>
          </Link>
          <Link
            href="#"
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
          <button className="w-full bg-gradient-to-tr from-[#785a00] to-[#eab308] text-white font-bold py-4 px-6 rounded-full shadow-lg hover:scale-[1.02] active:scale-95 transition-all mb-4">
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

      <main className="ml-72 flex-1 min-h-screen">
        <header className="sticky top-0 z-40 h-20 w-full flex justify-between items-center px-10 bg-white/80 backdrop-blur-md shadow-[0_20px_40px_rgba(19,27,46,0.06)]">
          <div className="flex items-center space-x-6 w-1/3">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#817660]" />
              <input
                type="text"
                placeholder="Search listings..."
                className="w-full pl-12 pr-4 py-2.5 bg-[#f2f3ff] border-none rounded-full text-sm focus:ring-2 focus:ring-[#785a00]/20 placeholder:text-[#817660]/60 outline-none"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-[#f2f3ff] transition-colors">
              <Bell className="w-5 h-5 text-[#131b2e]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#f2f3ff] transition-colors">
              <HelpCircle className="w-5 h-5 text-[#131b2e]" />
            </button>
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-[#eab308]/30 relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu4gAwqhSZ6gpP7qpLZLDRHEbSMwhq6xI5l9Z_GORG116x2_hJk5HA9BrkUOEIGrOcbs3Az7JEPlBXTrITvTZ7lCFW5OrCJ1yeIccYFaGxNkQukN-ZQHECQ3_hnzxJbZUyBohQY6RKGfUJuwGD5J91isYwc9-bIXCai77NJKJUQPzVAIMAvKxNT42YEGkKGn-LckNUd10v0RurdU4Lvk35vrKk_oZaJrUuRLd9mlgLPgucignzKvBQ1yAs8sB-pWht0jTDUrWrpaHu"
                alt="Admin profile photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <div className="p-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-3 py-1 bg-[#c7e7ff] text-[#001e2e] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                Inventory Overview
              </span>
              <h1 className="text-5xl font-extrabold text-[#131b2e] tracking-tight mb-2">
                My Listings
              </h1>
              <p className="text-[#4f4633] font-medium">
                Currently managing{" "}
                <span className="text-[#785a00] font-bold">148 Properties</span>{" "}
                across 4 regions.
              </p>
            </div>
            <div>
              <button className="bg-gradient-to-r from-[#785a00] to-[#eab308] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-xl hover:shadow-[#eab308]/20 transition-all hover:-translate-y-1">
                <PlusCircle className="w-5 h-5 fill-current" />
                Add New Listing
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <button className="px-6 py-2.5 bg-[#131b2e] text-white rounded-full text-sm font-semibold transition-all">
                All
              </button>
              <button className="px-6 py-2.5 bg-[#f2f3ff] text-[#4f4633] rounded-full text-sm font-semibold hover:bg-[#e2e7ff] transition-all">
                Active
              </button>
              <button className="px-6 py-2.5 bg-[#f2f3ff] text-[#4f4633] rounded-full text-sm font-semibold hover:bg-[#e2e7ff] transition-all">
                Pending
              </button>
              <button className="px-6 py-2.5 bg-[#f2f3ff] text-[#4f4633] rounded-full text-sm font-semibold hover:bg-[#e2e7ff] transition-all">
                Sold
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="h-10 px-4 bg-[#f2f3ff] rounded-full flex items-center gap-2 text-sm text-[#4f4633] font-medium hover:bg-[#e2e7ff] transition-colors">
                <Filter className="w-4 h-4" />
                Property Type
              </button>
              <button className="h-10 px-4 bg-[#f2f3ff] rounded-full flex items-center gap-2 text-sm text-[#4f4633] font-medium hover:bg-[#e2e7ff] transition-colors">
                <Calendar className="w-4 h-4" />
                Date Range
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(19,27,46,0.04)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f2f3ff]/50">
                    <th className="px-8 py-5 text-[11px] font-bold text-[#817660] uppercase tracking-widest whitespace-nowrap">
                      Property Details
                    </th>
                    <th className="px-6 py-5 text-[11px] font-bold text-[#817660] uppercase tracking-widest whitespace-nowrap">
                      Price
                    </th>
                    <th className="px-6 py-5 text-[11px] font-bold text-[#817660] uppercase tracking-widest whitespace-nowrap">
                      Status
                    </th>
                    <th className="px-6 py-5 text-[11px] font-bold text-[#817660] uppercase tracking-widest whitespace-nowrap">
                      Added Date
                    </th>
                    <th className="px-8 py-5 text-[11px] font-bold text-[#817660] uppercase tracking-widest text-right whitespace-nowrap">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eaedff]">
                  <tr className="hover:bg-[#f2f3ff]/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                          <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF__JWBRlQQls1W0xmQ0ZujyX6ZkdMBYZo56N6bQX4bbm0Ps5yvkXIM2DE6Ml2hd5a-ow7Ul3wb4gsFDi9zwrHSIPuZ1R1vZR5h6ePqsYbfG7xQltrS6PE-L3wpvvPJ0m0yyF7JQfAjeLIMcY33Unn3MgNjFUO5py8bZ31xo6E80GocdiNmEqbbZoxV5p8itTlDo5aVRYgQEfOfo33nhWhN6f_tvpxPl2QwQG5vzc0aGk0klVcU5Z6ox6A1kSTRCXE2T2SNH1uN9b5"
                            alt="Property thumbnail"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#131b2e] group-hover:text-[#785a00] transition-colors whitespace-nowrap">
                            Azure Horizon Villa
                          </h4>
                          <p className="text-xs text-[#4f4633] flex items-center gap-1 mt-1 whitespace-nowrap">
                            <MapPin className="w-3.5 h-3.5" />
                            Malibu, California
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="font-extrabold text-[#131b2e] whitespace-nowrap">
                        $4,250,000
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-6 text-sm text-[#4f4633] whitespace-nowrap">
                      Oct 12, 2023
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                          <Eye className="w-5 h-5 text-[#785a00]" />
                        </button>
                        <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                          <Edit2 className="w-5 h-5 text-[#4f4633]" />
                        </button>
                        <button className="p-2 hover:bg-[#ffdad6]/20 rounded-full transition-colors">
                          <Trash2 className="w-5 h-5 text-[#ba1a1a]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#f2f3ff]/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                          <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwr6mjD-ahMZRaLSKGLRPVrmmqLizcnbO5VgpOnDCuVSr73TOYZgBiGEb4eCph_qYMwApu6XfsJcKB5NlnCddWe6Y1Jb3chucFe3AQ9_WZdr8mWRM9KCxTDgPbjnMIsHLNKcDdAeKt2-7yhF1LzKOEkVkGapcpUW168zKKCG4TM5RlBxjbTJtzU9gqNGje8BDfkZzjZye7qbfZ5uZB_z1-0zNhEHSz2hRTc0I8LokOfvylpMJpk_U1ebv7fKVqLr0zweoRkR9K-5og"
                            alt="Property thumbnail"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#131b2e] group-hover:text-[#785a00] transition-colors whitespace-nowrap">
                            Golden Sands Estate
                          </h4>
                          <p className="text-xs text-[#4f4633] flex items-center gap-1 mt-1 whitespace-nowrap">
                            <MapPin className="w-3.5 h-3.5" />
                            Miami, Florida
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="font-extrabold text-[#131b2e] whitespace-nowrap">
                        $2,890,000
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <span className="px-3 py-1 bg-[#fcdc97] text-[#775f27] text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-6 text-sm text-[#4f4633] whitespace-nowrap">
                      Nov 05, 2023
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                          <Eye className="w-5 h-5 text-[#785a00]" />
                        </button>
                        <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                          <Edit2 className="w-5 h-5 text-[#4f4633]" />
                        </button>
                        <button className="p-2 hover:bg-[#ffdad6]/20 rounded-full transition-colors">
                          <Trash2 className="w-5 h-5 text-[#ba1a1a]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#f2f3ff]/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                          <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrGRWJzkfqCcEqYbbRBvyKhDeWlB_nMoiUAEuS3VpzIFqe0nUrF-_JtfJ9pZ1fhK3LxmHaBPNGFUSfLb42kpQjm1hQQGjNBW5AeryQQLLCCu8dfQL9jtJaYXAhmqyehtS5zkRjZbe0N-ihz3gC80LOLE5CWqBi__JRPxI24gu64QzsjVn7r3OLXFe4udwZgxVLxVWducnEtJ5FXFVCLXI6R3KYPq5k_JUbo5NL5wege0HNWdY9AY3iS3GFA3x8k1Ttrj3nsa5FRZsL"
                            alt="Property thumbnail"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#131b2e] group-hover:text-[#785a00] transition-colors whitespace-nowrap">
                            The Nordic Retreat
                          </h4>
                          <p className="text-xs text-[#4f4633] flex items-center gap-1 mt-1 whitespace-nowrap">
                            <MapPin className="w-3.5 h-3.5" />
                            Aspen, Colorado
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="font-extrabold text-[#131b2e] whitespace-nowrap">
                        $1,450,000
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <span className="px-3 py-1 bg-[#eaedff] text-[#4f4633] text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                        Sold
                      </span>
                    </td>
                    <td className="px-6 py-6 text-sm text-[#4f4633] whitespace-nowrap">
                      Sept 28, 2023
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                          <Eye className="w-5 h-5 text-[#785a00]" />
                        </button>
                        <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                          <Edit2 className="w-5 h-5 text-[#4f4633]" />
                        </button>
                        <button className="p-2 hover:bg-[#ffdad6]/20 rounded-full transition-colors">
                          <Trash2 className="w-5 h-5 text-[#ba1a1a]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#f2f3ff]/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                          <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8PQjO_qX9Uy_yM7oDK3_CDWbyZfMfdFgr1O6g6kUvpsEAB73S8a_Z_GAn8msEJZSd1YuDj_qa_m5aigLOP3QCwHygfHPyGDLlpT1l56o4bNyhSlZ8CiosekS4vWSTvSOCrVJzmLSXIMPSc_HHMImuNpGr-iuKFoCULvKAR20ch66cTDrdW258DyiRJZjGWcL2oGWkgon3RyQdnkuWJXLr-J-BKiNJJboKtrHnFasgBReo52ABfvrjlVczMb0jpB4EO07Dqdb6-q_L"
                            alt="Property thumbnail"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#131b2e] group-hover:text-[#785a00] transition-colors whitespace-nowrap">
                            Urban Loft Suites
                          </h4>
                          <p className="text-xs text-[#4f4633] flex items-center gap-1 mt-1 whitespace-nowrap">
                            <MapPin className="w-3.5 h-3.5" />
                            Austin, Texas
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="font-extrabold text-[#131b2e] whitespace-nowrap">
                        $895,000
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-6 text-sm text-[#4f4633] whitespace-nowrap">
                      Oct 20, 2023
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                          <Eye className="w-5 h-5 text-[#785a00]" />
                        </button>
                        <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                          <Edit2 className="w-5 h-5 text-[#4f4633]" />
                        </button>
                        <button className="p-2 hover:bg-[#ffdad6]/20 rounded-full transition-colors">
                          <Trash2 className="w-5 h-5 text-[#ba1a1a]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-8 py-6 border-t border-[#eaedff] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[#4f4633]">
                Showing <span className="font-bold text-[#131b2e]">1 - 10</span>{" "}
                of 148 listings
              </p>
              <div className="flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#eaedff] text-[#817660] hover:bg-[#f2f3ff] transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#785a00] text-white font-bold transition-all shadow-md">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#eaedff] text-[#817660] hover:bg-[#f2f3ff] transition-all">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#eaedff] text-[#817660] hover:bg-[#f2f3ff] transition-all">
                  3
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#eaedff] text-[#817660] hover:bg-[#f2f3ff] transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
