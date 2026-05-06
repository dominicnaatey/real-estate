export default function AdminLoading() {
  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
      <div className="animate-pulse">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="h-7 w-56 bg-gray-200 rounded" />
            <div className="mt-3 h-4 w-96 bg-gray-200 rounded" />
          </div>
          <div className="h-10 w-36 bg-gray-200 rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="h-3 w-24 bg-gray-200 rounded" />
            <div className="mt-3 h-8 w-28 bg-gray-200 rounded" />
            <div className="mt-3 h-4 w-32 bg-gray-200 rounded" />
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="h-3 w-24 bg-gray-200 rounded" />
            <div className="mt-3 h-8 w-28 bg-gray-200 rounded" />
            <div className="mt-3 h-4 w-32 bg-gray-200 rounded" />
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="h-3 w-28 bg-gray-200 rounded" />
            <div className="mt-3 h-8 w-36 bg-gray-200 rounded" />
            <div className="mt-3 h-4 w-40 bg-gray-200 rounded" />
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="h-3 w-28 bg-gray-200 rounded" />
            <div className="mt-3 h-8 w-28 bg-gray-200 rounded" />
            <div className="mt-3 h-2 w-full bg-gray-200 rounded-full" />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-40 bg-gray-200 rounded" />
              <div className="h-9 w-40 bg-gray-200 rounded" />
              <div className="h-9 w-40 bg-gray-200 rounded" />
            </div>
            <div className="h-9 w-20 bg-gray-200 rounded" />
          </div>

          <div className="divide-y divide-gray-200">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[auto_1fr_1fr_auto_auto] gap-4 p-4 items-center"
              >
                <div className="w-16 h-12 rounded bg-gray-200" />
                <div>
                  <div className="h-4 w-56 bg-gray-200 rounded" />
                  <div className="mt-2 h-3 w-40 bg-gray-200 rounded" />
                </div>
                <div>
                  <div className="h-4 w-28 bg-gray-200 rounded" />
                  <div className="mt-2 h-3 w-44 bg-gray-200 rounded" />
                </div>
                <div className="w-24 flex justify-center">
                  <div className="h-5 w-16 bg-gray-200 rounded-full" />
                </div>
                <div className="w-32 flex justify-end">
                  <div className="h-8 w-20 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 bg-white flex items-center justify-between">
            <div className="h-4 w-56 bg-gray-200 rounded" />
            <div className="flex items-center gap-2">
              <div className="h-8 w-16 bg-gray-200 rounded" />
              <div className="h-8 w-8 bg-gray-200 rounded" />
              <div className="h-8 w-8 bg-gray-200 rounded" />
              <div className="h-8 w-8 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
