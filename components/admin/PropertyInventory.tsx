import Image from "next/image";
import { Pencil } from "lucide-react";

export function PropertyInventory() {
  return (
    <section className="lg:col-span-2 bg-white rounded-lg border border-gray-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 overflow-hidden">
      <div className="p-5 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-serif font-semibold text-[#181d1a]">
          Property Inventory
        </h3>
        <button className="text-[11px] font-semibold text-[#008060] uppercase tracking-wider hover:underline px-2 py-1">
          View All Inventory
        </button>
      </div>
      <div className="overflow-x-auto p-5">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[#3e4944] text-[11px] uppercase tracking-wider border-b border-gray-200 font-semibold">
              <th className="pb-4 font-semibold">Listing</th>
              <th className="pb-4 font-semibold">Price</th>
              <th className="pb-4 font-semibold">Status</th>
              <th className="pb-4 text-right font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-[13px]">
            <tr className="hover:bg-[#F9FAFB] transition-colors">
              <td className="py-5">
                <div className="flex items-center gap-4">
                  <Image
                    alt="The Obsidian Pavilion"
                    className="w-14 h-10 rounded-lg object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-7YxeyiSUts0uP8n09v9J-yHa0ikMjTNkpGAJQUrShXtu2wJWWjsdhwIa0FIpr7oA9MWEG7j_mpAae7-c9-juVoU_qzxOdDJ9VsuSRV_iukYUX3mH_hbBFq4NoRa3_SbwbWorP1jw0A55LJHKmay7dd2Q2ZOpIXV9IT22QeOChCtK0xpIjyRUu3i4qM2BCPh6j2ubA4GGtGbV9TNxXRg8CbEGt2vFzhDNMZsUh7zKHTnQ5l-qqMVoZEA-LvkVff9E3FMCBZqV7O_t"
                    width={56}
                    height={40}
                  />
                  <div>
                    <p className="text-sm font-medium text-[#181d1a]">
                      The Obsidian Pavilion
                    </p>
                    <p className="text-xs text-slate-400">Malibu, California</p>
                  </div>
                </div>
              </td>
              <td className="py-5">
                <p className="text-sm font-bold text-[#181d1a]">
                  $12,450,000
                </p>
              </td>
              <td className="py-5">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgba(0,128,96,0.1)] text-[#008060]">
                  Active
                </span>
              </td>
              <td className="py-5 text-right">
                <button className="p-2 hover:bg-[#F0F5F0] rounded-full text-[#3e4944] transition-colors">
                  <Pencil className="w-5 h-5" />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-[#F9FAFB] transition-colors">
              <td className="py-5">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Azure Bay Estate"
                    className="w-14 h-10 rounded-lg object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcyhbGaqmWE83fiyr8PYNWlIU8ITxMSQkXaw9YUnPXbDN_X3CNRNXdx_64c5aViVf0iNXKvi5IsmCCo6E65kaPt1JMEfHHTNAT5wZA3kN8VlSguzijwL6MGcZFol5GDeEUkDPjmD7MvO-YIRB09hPmkeySrREp_aazSwL5wO5b7FwSW4ME88O_Ia6_BaLQMo6iaNZGdv5TosPtWphzJs2zERuccjUjlXGeWal2URHTxaVbhFuUIDLQ77FJrW0pRD3CqxvvvA-G4rIB"
                    width={56}
                    height={40}
                  />
                  <div>
                    <p className="text-sm font-medium text-[#181d1a]">
                      Azure Bay Estate
                    </p>
                    <p className="text-xs text-slate-400">Santorini, Greece</p>
                  </div>
                </div>
              </td>
              <td className="py-5">
                <p className="text-sm font-bold text-[#181d1a]">
                  $8,900,000
                </p>
              </td>
              <td className="py-5">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgba(245,158,11,0.1)] text-[#B45309]">
                  Pending
                </span>
              </td>
              <td className="py-5 text-right">
                <button className="p-2 hover:bg-[#F0F5F0] rounded-full text-[#3e4944] transition-colors">
                  <Pencil className="w-5 h-5" />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-[#F9FAFB] transition-colors">
              <td className="py-5">
                <div className="flex items-center gap-4">
                  <Image
                    alt="Marble Crest Villa"
                    className="w-14 h-10 rounded-lg object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqQdSAqKvzN9hIB377TWjjzKZTJzWPS51FZQrvxeP_TM9idGnGYFU6ZwGlnn18SVR22_dViHM4mRf6_eVagU1VN9jPU9l90LdIDxnyBVftVJZmfD8zm24FVbuXmfGuQqnmbyB2IdN4kraJQq3C7CARl7JEvUZrOWDH3ykomhd-cRWUxPa50oZ0eleGVnNck3fiFn1eX7CxIOhqqge4dHggpvo8RkUwgcWfS2WZr9CnDvmM4I2SyO_0jr4uMpz5enCUxPII3VRXzQ6c"
                    width={56}
                    height={40}
                  />
                  <div>
                    <p className="text-sm font-medium text-[#181d1a]">
                      Marble Crest Villa
                    </p>
                    <p className="text-xs text-slate-400">Aspen, Colorado</p>
                  </div>
                </div>
              </td>
              <td className="py-5">
                <p className="text-sm font-bold text-[#181d1a]">
                  $15,200,000
                </p>
              </td>
              <td className="py-5">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#dfe4df] text-[#3e4944]">
                  Sold
                </span>
              </td>
              <td className="py-5 text-right">
                <button className="p-2 hover:bg-[#F0F5F0] rounded-full text-[#3e4944] transition-colors">
                  <Pencil className="w-5 h-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
