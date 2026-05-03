export function DashboardHeader() {
  return (
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
          Welcome back, Admin
        </h2>
        <p className="text-slate-500">
          Here&apos;s what&apos;s happening across your luxury portfolio today.
        </p>
      </div>
      <button className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold shadow-sm hover:bg-blue-700 transition-colors active:scale-[0.99]">
        Add New Listing
      </button>
    </div>
  );
}
