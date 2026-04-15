import Image from "next/image";

export type TourSection = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  layout: "layout-a" | "layout-b" | "layout-c" | "layout-d" | "layout-e";
  images: string[];
};

type PhotoTourSectionsProps = {
  sections: TourSection[];
};

function PhotoTourSectionLayout({ section }: { section: TourSection }) {
  if (section.layout === "layout-a") {
    return (
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <div className="relative aspect-3/4 rounded-xl overflow-hidden">
          <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </div>
        <div className="grid grid-rows-2 gap-2 md:gap-4">
          <div className="relative rounded-xl overflow-hidden">
            <Image src={section.images[1]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image src={section.images[2]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    );
  }

  if (section.layout === "layout-b") {
    return (
      <div className="relative aspect-3/2 rounded-xl overflow-hidden">
        <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
      </div>
    );
  }

  if (section.layout === "layout-c") {
    return (
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="relative aspect-2/1 rounded-xl overflow-hidden">
          <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <div className="relative aspect-3/4 rounded-xl overflow-hidden">
            <Image src={section.images[1]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </div>
          <div className="grid grid-rows-2 gap-2 md:gap-4">
            <div className="relative rounded-xl overflow-hidden">
              <Image src={section.images[2]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image src={section.images[3]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (section.layout === "layout-d") {
    return (
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
          <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </div>
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
          <Image src={section.images[1]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4">
      {section.images.map((img, i) => (
        <div key={`${section.id}-${i}`} className="relative aspect-square rounded-xl overflow-hidden">
          <Image src={img} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </div>
      ))}
    </div>
  );
}

export function PhotoTourSections({ sections }: PhotoTourSectionsProps) {
  return (
    <div className="space-y-16 md:space-y-24">
      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="flex flex-col md:flex-row gap-6 md:gap-12 scroll-mt-24"
        >
          <div className="md:w-1/3 lg:w-1/4 shrink-0">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h2>
            <p className="text-sm text-gray-500 leading-relaxed">{section.description}</p>
          </div>

          <div className="md:w-2/3 lg:w-3/4">
            <PhotoTourSectionLayout section={section} />
          </div>
        </div>
      ))}
    </div>
  );
}

