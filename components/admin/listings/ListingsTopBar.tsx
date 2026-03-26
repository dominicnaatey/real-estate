import Image from "next/image";
import { Bell, HelpCircle, Search } from "lucide-react";

export function ListingsTopBar() {
  return (
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
  );
}
