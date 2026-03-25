type PropertiesResultsHeaderProps = {
  title: string;
  subtitle: string;
};

export function PropertiesResultsHeader({
  title,
  subtitle,
}: PropertiesResultsHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-navy">
        {title}
      </h1>
      <p className="text-gray-500 font-medium">{subtitle}</p>
    </div>
  );
}
