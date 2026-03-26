import Image from "next/image";
import { notFound } from "next/navigation";
import { Bath, BedDouble, MapPin, Square, Calendar, Clock, Mail } from "lucide-react";
import { properties } from "../../../components/data/Properties";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "-")
    .replace(/-+/g, "-");
}

function formatPrice(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const numericId = Number(slug);
  const property =
    properties.find((p) => p.id === numericId) ??
    properties.find((p) => slugify(p.title) === slug);

  if (!property) {
    return notFound();
  }

  const images = property.images || [property.image, property.image, property.image];

  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 h-[600px]">
        <div className="md:col-span-3 h-full rounded-3xl overflow-hidden relative group">
          <Image
            alt={property.title}
            src={images[0]}
            fill
            sizes="(min-width: 1024px) 75vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="hidden md:flex flex-col gap-4 h-full">
          <div className="h-1/2 rounded-3xl overflow-hidden relative group">
            <Image
              alt={property.title}
              src={images[1]}
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="h-1/2 rounded-3xl overflow-hidden relative group">
            <Image
              alt={property.title}
              src={images[2]}
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-navy">
                  {property.title}
                </h1>
                <p className="text-lg text-gray-500 font-medium flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  {property.location}
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-black text-accent">
                  ${formatPrice(property.price)}
                  {property.listingType === "For Rent" ? "/mo" : ""}
                </div>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                  {property.listingType}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="bg-gray-100 text-navy px-6 py-3 rounded-full flex items-center gap-3">
                <BedDouble className="w-5 h-5 text-accent" />
                <span className="font-semibold">{property.beds} Beds</span>
              </div>
              <div className="bg-gray-100 text-navy px-6 py-3 rounded-full flex items-center gap-3">
                <Bath className="w-5 h-5 text-accent" />
                <span className="font-semibold">{property.baths} Baths</span>
              </div>
              <div className="bg-gray-100 text-navy px-6 py-3 rounded-full flex items-center gap-3">
                <Square className="w-5 h-5 text-accent" />
                <span className="font-semibold">{property.sqft}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl">
              {property.description ||
                "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle."}
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-10 space-y-8 border border-gray-100">
            <h2 className="text-2xl font-bold">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-navy">
              {(property.amenities || ["Open Plan", "Guest Suite", "Spa Bath", "Prime Locale"]).map((amenity, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-accent shadow-sm">
                    {amenity.toLowerCase().includes("plan") || amenity.toLowerCase().includes("space") ? <Square className="w-7 h-7" /> :
                     amenity.toLowerCase().includes("bed") || amenity.toLowerCase().includes("suite") ? <BedDouble className="w-7 h-7" /> :
                     amenity.toLowerCase().includes("bath") ? <Bath className="w-7 h-7" /> :
                     <MapPin className="w-7 h-7" />}
                  </div>
                  <span className="text-sm font-semibold">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Location</h2>
              <button className="text-accent font-bold hover:opacity-80 flex items-center gap-2">
                View on Map <MapPin className="w-5 h-5" />
              </button>
            </div>
            <div className="h-[400px] w-full bg-gray-100 rounded-3xl overflow-hidden relative">
              <Image
                alt={property.location}
                src={property.mapImage || property.image}
                fill
                sizes="100vw"
                className="object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="sticky top-28 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_rgba(19,27,46,0.06)] border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-navy">Experience the Estate</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Select Date
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                    </span>
                    <input
                      className="w-full bg-gray-50 rounded-full px-10 py-4 focus:ring-2 focus:ring-accent/40 border border-gray-200 font-medium outline-none"
                      type="date"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Clock className="w-4 h-4" />
                    </span>
                    <select className="w-full bg-gray-50 rounded-full px-10 py-4 focus:ring-2 focus:ring-accent/40 border border-gray-200 font-medium outline-none appearance-none">
                      <option>10:00 AM</option>
                      <option>12:00 PM</option>
                      <option>02:00 PM</option>
                      <option>04:00 PM</option>
                    </select>
                  </div>
                </div>
                <button
                  className="w-full bg-accent text-white py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all active:scale-95 shadow-lg"
                  type="submit"
                >
                  Request Tour
                </button>
                <p className="text-center text-xs text-gray-500 italic">
                  No commitment required for initial inquiry.
                </p>
              </form>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                  <Image
                    alt={property.agent?.name || "Agent"}
                    src={property.agent?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuD6VjvKduUMIpVRQS_sAquIACrsXp7oEijk7uGzJpKTelxOHGbMcpGPpodPuzQHsLIvfwvYcYE2UB51yQElUrvBgDjesu6kCMBZRgHE01Q_eG5SWSl0x38TL-ygNBqortAJ8zwbTwWTRZRkG71S6xgQDWql_LJjSy4BEpF-ikoEM5G_E3dPVkr9nqp_9XP6epqUgWjojGFnzPhgRV642WLTBnUwcxJtu41pRFRdYRSA1l1YuH5jT0Hvc4Quzm8TKqnJBJdn-m_vQy8q"}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-navy">{property.agent?.name || "Johnathan Wick"}</h4>
                  <p className="text-accent text-sm font-semibold uppercase tracking-wide">
                    {property.agent?.role || "Senior Associate"}
                  </p>
                </div>
              </div>
              <button className="w-full bg-white text-navy py-4 rounded-full font-bold hover:bg-gray-100 transition-colors border border-gray-200 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Agent
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

