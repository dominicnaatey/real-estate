"use client";

function CardSkeleton() {
  return (
    <div className="rounded-2xl bg-white border border-black/5 overflow-hidden">
      <div className="aspect-[4/3] bg-gray-100" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 bg-gray-100 rounded" />
        <div className="h-3 w-1/2 bg-gray-100 rounded" />
        <div className="h-4 w-2/3 bg-gray-100 rounded" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="bg-gray-50">
      <main className="pt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <div className="mb-12 max-w-2xl mx-auto animate-pulse">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="h-12 rounded-full bg-white border border-black/10 flex-1" />
            <div className="flex items-center justify-between sm:justify-start gap-3">
              <div className="h-12 w-44 rounded-full bg-white border border-black/10" />
              <div className="h-12 w-28 rounded-full bg-white border border-black/10" />
            </div>
          </div>
        </div>

        <div className="animate-pulse mb-8">
          <div className="h-6 w-56 bg-gray-100 rounded mb-3" />
          <div className="h-4 w-96 max-w-full bg-gray-100 rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 animate-pulse">
          {Array.from({ length: 12 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </main>
    </div>
  );
}

