type OverviewProps = {
  description?: string;
};

export function Overview({ description }: OverviewProps) {
  const overviewText =
    description ||
    "The undercroft comprises 4 self-contained units of varying size. The units have separate secured access, from a central private access road at lower ground level. access road routes through to a central pedestrianised area, within which the IMAX Multiplex Cinema is situated. The accommodation is unheated.";

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {overviewText}{" "}
        <button className="font-bold text-gray-900 hover:underline">Read More</button>
      </p>
    </div>
  );
}
