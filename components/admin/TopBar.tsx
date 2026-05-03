import Image from "next/image";
import { Bell, Search } from "lucide-react";

export function TopBar() {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 flex justify-between items-center px-6 md:px-8 h-16 md:h-20">
      <div className="flex items-center gap-6">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
          <input
            className="pl-12 pr-6 py-2.5 w-72 md:w-80 bg-slate-100 border border-transparent rounded-full focus:ring-2 focus:ring-blue-200 focus:border-blue-200 transition-all text-sm outline-none"
            placeholder="Search properties or clients..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="p-2.5 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-200 active:scale-[0.98]">
          <Bell className="w-5 h-5" />
        </button>
        <div className="h-10 w-px bg-slate-200 hidden sm:block" />
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900">Admin User</p>
            <p className="text-[10px] text-slate-500 font-medium">
              Head Curator
            </p>
          </div>
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
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
  );
}
