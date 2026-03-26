import Image from "next/image";
import { Pencil } from "lucide-react";

export function PropertyInventory() {
  return (
    <section className="lg:col-span-2 bg-white rounded-lg p-8 shadow-[0_20px_40px_rgba(19,27,46,0.06)] border border-white">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-extrabold text-[#131b2e]">
          Property Inventory
        </h3>
        <div className="flex gap-2">
          <span className="px-4 py-1.5 rounded-full bg-[#c7e7ff] text-[#001e2e] text-[10px] font-bold uppercase tracking-wider">
            Top Performing
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-400 text-[10px] uppercase tracking-widest border-b border-slate-50 font-bold">
              <th className="pb-4 font-bold">Listing</th>
              <th className="pb-4 font-bold">Price</th>
              <th className="pb-4 font-bold">Status</th>
              <th className="pb-4 text-right font-bold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            <tr>
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
                    <p className="text-sm font-bold text-[#131b2e]">
                      The Obsidian Pavilion
                    </p>
                    <p className="text-xs text-slate-400">Malibu, California</p>
                  </div>
                </div>
              </td>
              <td className="py-5">
                <p className="text-sm font-semibold text-[#131b2e]">
                  $12,450,000
                </p>
              </td>
              <td className="py-5">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase">
                  Active
                </span>
              </td>
              <td className="py-5 text-right">
                <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors">
                  <Pencil className="w-5 h-5" />
                </button>
              </td>
            </tr>
            <tr>
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
                    <p className="text-sm font-bold text-[#131b2e]">
                      Azure Bay Estate
                    </p>
                    <p className="text-xs text-slate-400">Santorini, Greece</p>
                  </div>
                </div>
              </td>
              <td className="py-5">
                <p className="text-sm font-semibold text-[#131b2e]">
                  $8,900,000
                </p>
              </td>
              <td className="py-5">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-[10px] font-bold uppercase">
                  Pending
                </span>
              </td>
              <td className="py-5 text-right">
                <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors">
                  <Pencil className="w-5 h-5" />
                </button>
              </td>
            </tr>
            <tr>
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
                    <p className="text-sm font-bold text-[#131b2e]">
                      Marble Crest Villa
                    </p>
                    <p className="text-xs text-slate-400">Aspen, Colorado</p>
                  </div>
                </div>
              </td>
              <td className="py-5">
                <p className="text-sm font-semibold text-[#131b2e]">
                  $15,200,000
                </p>
              </td>
              <td className="py-5">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase">
                  Sold
                </span>
              </td>
              <td className="py-5 text-right">
                <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors">
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
