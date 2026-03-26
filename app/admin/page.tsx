import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Bell,
  Building2,
  CalendarDays,
  HelpCircle,
  Home,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Pencil,
  Search,
  Settings,
  CreditCard,
} from "lucide-react";

export default function AdminPage() {
  return (
    <div className="bg-[#faf8ff] text-[#131b2e] flex min-h-screen">
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

      <main className="flex-1 ml-72 min-h-screen flex flex-col">
        <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur-xl flex justify-between items-center px-8 h-20 shadow-[0_20px_40px_rgba(19,27,46,0.06)]">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-600 transition-colors w-5 h-5" />
              <input
                className="pl-12 pr-6 py-2.5 w-80 bg-slate-50/50 border-none rounded-full focus:ring-2 focus:ring-amber-200 transition-all text-sm outline-none"
                placeholder="Search properties or clients..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="p-2.5 rounded-full text-slate-500 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 active:scale-95">
              <Bell className="w-5 h-5" />
            </button>
            <div className="h-10 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">Admin User</p>
                <p className="text-[10px] text-slate-500 font-medium">
                  Head Curator
                </p>
              </div>
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-100 shadow-sm">
                <Image
                  alt="User profile avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQPW5bZNVPQ_o-jJxakFCGtUeCFbCLnyyLi2Ct90N5v5CyckSV4ELqR-SODSK82_D-ulReChYRXJYny5mUuylYooQ3n_bIk3qA_i_yl2wYw2T_fXc2GD7lPik1Ut7w6I8pcmyNnfvll3MRLowHH3yEykal3AIbKXdfpGGKSnBzFGYRyDAXBCmGR1GKyfX5ReNHghKEbFhf45Xq6WB5Pao4j6KRWGITedlZZGwCNoxWMXN3Oli3awkWTrdVXtiXAkRVm7RzQh9tQjVM"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="p-10 space-y-10">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-[#131b2e] mb-2">
                Welcome back, Admin
              </h2>
              <p className="text-slate-500">
                Here&apos;s what&apos;s happening across your luxury portfolio
                today.
              </p>
            </div>
            <button className="bg-gradient-to-br from-[#785a00] to-[#eab308] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-amber-200 flex items-center gap-2 hover:translate-y-[-2px] transition-all active:scale-95">
              Add New Listing
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-[0_20px_40px_rgba(19,27,46,0.06)] border border-white transition-transform hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-amber-50 rounded-2xl">
                  <Building2 className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
                  +12%
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium mb-1">
                Total Listings
              </p>
              <h3 className="text-3xl font-extrabold text-[#131b2e]">148</h3>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-[0_20px_40px_rgba(19,27,46,0.06)] border border-white transition-transform hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
                  +5.4%
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium mb-1">
                Active Inquiries
              </p>
              <h3 className="text-3xl font-extrabold text-[#131b2e]">42</h3>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-[0_20px_40px_rgba(19,27,46,0.06)] border border-white transition-transform hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-50 rounded-2xl">
                  <CalendarDays className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-slate-400 text-xs font-bold bg-slate-50 px-2 py-1 rounded-full">
                  Static
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium mb-1">
                Pending Tours
              </p>
              <h3 className="text-3xl font-extrabold text-[#131b2e]">18</h3>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-[0_20px_40px_rgba(19,27,46,0.06)] border border-white transition-transform hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-emerald-50 rounded-2xl">
                  <CreditCard className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
                  +24%
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium mb-1">
                Total Revenue
              </p>
              <h3 className="text-3xl font-extrabold text-[#131b2e]">$2.4M</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <section className="lg:col-span-1 bg-[#f2f3ff] rounded-lg p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-extrabold text-[#131b2e]">
                  Recent Activity
                </h3>
                <button className="text-[#785a00] text-xs font-bold hover:underline">
                  View All
                </button>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <div>
                    <p className="text-sm text-[#131b2e] font-semibold">
                      New inquiry for{" "}
                      <span className="text-[#785a00]">
                        The Obsidian Pavilion
                      </span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      2 minutes ago • Elena Russo
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <div>
                    <p className="text-sm text-[#131b2e] font-semibold">
                      Tour scheduled for{" "}
                      <span className="text-[#785a00]">Azure Bay Villa</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      45 minutes ago • Marcus Thorne
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <div>
                    <p className="text-sm text-[#131b2e] font-semibold">
                      Payment confirmed for{" "}
                      <span className="text-[#785a00]">Marble Crest</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      2 hours ago • Transaction #8921
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-slate-300 shrink-0" />
                  <div>
                    <p className="text-sm text-[#131b2e] font-semibold">
                      Document signed:{" "}
                      <span className="text-[#785a00]">Listing Agreement</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      5 hours ago • Sarah Jenkins
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="lg:col-span-2 bg-white rounded-lg p-8 shadow-[0_20px_40px_rgba(19,27,46,0.06)] border border-white">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-extrabold text-[#131b2e]">
                  Property Inventory
                </h3>
                <div className="flex gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-[#c7e7ff] text-[#001e2e] text-[10px] font-bold uppercase tracking-wider">
                    Top Performing
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-slate-400 text-[10px] uppercase tracking-widest border-b border-slate-50 font-bold">
                      <th className="pb-4 font-bold">Listing</th>
                      <th className="pb-4 font-bold">Price</th>
                      <th className="pb-4 font-bold">Status</th>
                      <th className="pb-4 text-right font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <tr>
                      <td className="py-5">
                        <div className="flex items-center gap-4">
                          <Image
                            alt="The Obsidian Pavilion"
                            className="w-14 h-10 rounded-lg object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-7YxeyiSUts0uP8n09v9J-yHa0ikMjTNkpGAJQUrShXtu2wJWWjsdhwIa0FIpr7oA9MWEG7j_mpAae7-c9-juVoU_qzxOdDJ9VsuSRV_iukYUX3mH_hbBFq4NoRa3_SbwbWorP1jw0A55LJHKmay7dd2Q2ZOpIXV9IT22QeOChCtK0xpIjyRUu3i4qM2BCPh6j2ubA4GGtGbV9TNxXRg8CbEGt2vFzhDNMZsUh7zKHTnQ5l-qqMVoZEA-LvkVff9E3FMCBZqV7O_t"
                            width={56}
                            height={40}
                          />
                          <div>
                            <p className="text-sm font-bold text-[#131b2e]">
                              The Obsidian Pavilion
                            </p>
                            <p className="text-xs text-slate-400">
                              Malibu, California
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-5">
                        <p className="text-sm font-semibold text-[#131b2e]">
                          $12,450,000
                        </p>
                      </td>
                      <td className="py-5">
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase">
                          Active
                        </span>
                      </td>
                      <td className="py-5 text-right">
                        <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors">
                          <Pencil className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-5">
                        <div className="flex items-center gap-4">
                          <Image
                            alt="Azure Bay Estate"
                            className="w-14 h-10 rounded-lg object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcyhbGaqmWE83fiyr8PYNWlIU8ITxMSQkXaw9YUnPXbDN_X3CNRNXdx_64c5aViVf0iNXKvi5IsmCCo6E65kaPt1JMEfHHTNAT5wZA3kN8VlSguzijwL6MGcZFol5GDeEUkDPjmD7MvO-YIRB09hPmkeySrREp_aazSwL5wO5b7FwSW4ME88O_Ia6_BaLQMo6iaNZGdv5TosPtWphzJs2zERuccjUjlXGeWal2URHTxaVbhFuUIDLQ77FJrW0pRD3CqxvvvA-G4rIB"
                            width={56}
                            height={40}
                          />
                          <div>
                            <p className="text-sm font-bold text-[#131b2e]">
                              Azure Bay Estate
                            </p>
                            <p className="text-xs text-slate-400">
                              Santorini, Greece
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-5">
                        <p className="text-sm font-semibold text-[#131b2e]">
                          $8,900,000
                        </p>
                      </td>
                      <td className="py-5">
                        <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-[10px] font-bold uppercase">
                          Pending
                        </span>
                      </td>
                      <td className="py-5 text-right">
                        <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors">
                          <Pencil className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-5">
                        <div className="flex items-center gap-4">
                          <Image
                            alt="Marble Crest Villa"
                            className="w-14 h-10 rounded-lg object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqQdSAqKvzN9hIB377TWjjzKZTJzWPS51FZQrvxeP_TM9idGnGYFU6ZwGlnn18SVR22_dViHM4mRf6_eVagU1VN9jPU9l90LdIDxnyBVftVJZmfD8zm24FVbuXmfGuQqnmbyB2IdN4kraJQq3C7CARl7JEvUZrOWDH3ykomhd-cRWUxPa50oZ0eleGVnNck3fiFn1eX7CxIOhqqge4dHggpvo8RkUwgcWfS2WZr9CnDvmM4I2SyO_0jr4uMpz5enCUxPII3VRXzQ6c"
                            width={56}
                            height={40}
                          />
                          <div>
                            <p className="text-sm font-bold text-[#131b2e]">
                              Marble Crest Villa
                            </p>
                            <p className="text-xs text-slate-400">
                              Aspen, Colorado
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-5">
                        <p className="text-sm font-semibold text-[#131b2e]">
                          $15,200,000
                        </p>
                      </td>
                      <td className="py-5">
                        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase">
                          Sold
                        </span>
                      </td>
                      <td className="py-5 text-right">
                        <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors">
                          <Pencil className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
