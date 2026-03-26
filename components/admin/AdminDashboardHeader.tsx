export function AdminDashboardHeader() {
  return (
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-4xl font-extrabold tracking-tight text-[#131b2e] mb-2">
          Welcome back, Admin
        </h2>
        <p className="text-slate-500">
          Here&apos;s what&apos;s happening across your luxury portfolio today.
        </p>
      </div>
      <button className="bg-gradient-to-br from-[#785a00] to-[#eab308] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-amber-200 flex items-center gap-2 hover:translate-y-[-2px] transition-all active:scale-95">
        Add New Listing
      </button>
    </div>
  );
}
