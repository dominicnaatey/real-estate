type PropertiesResultsHeaderProps = {
  title: string;
  subtitle: string;
};

export function PropertiesResultsHeader({
  title,
  subtitle,
}: PropertiesResultsHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-10">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-navy">
          {title}
        </h1>
        <p className="text-gray-500 font-medium">{subtitle}</p>
      </div>

      <div className="bg-offwhite px-4 py-2 rounded-full flex items-center gap-2 border border-black/5 w-fit">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Sort by:
        </span>
        <select className="bg-transparent border-none text-xs font-bold text-navy focus:ring-0 cursor-pointer">
          <option>Price: High to Low</option>
          <option>Newest Listed</option>
          <option>Price: Low to High</option>
        </select>
      </div>
    </div>
  );
}

