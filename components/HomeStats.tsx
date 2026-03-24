"use client";

export function HomeStats() {
  const stats = [
    { value: "500M+", label: "In property sales" },
    { value: "43,652", label: "Homes for sale" },
    { value: "12,579", label: "Recently sold" },
    { value: "5,892", label: "Home for rent" },
  ];

  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What’s happening in FloHomes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
