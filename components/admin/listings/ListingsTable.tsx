import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Edit2,
  Eye,
  MapPin,
  Trash2,
} from "lucide-react";

export function ListingsTable() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(19,27,46,0.04)]">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f2f3ff]/50">
              <th className="px-8 py-5 text-[11px] font-bold text-[#817660] uppercase tracking-widest whitespace-nowrap">
                Property Details
              </th>
              <th className="px-6 py-5 text-[11px] font-bold text-[#817660] uppercase tracking-widest whitespace-nowrap">
                Price
              </th>
              <th className="px-6 py-5 text-[11px] font-bold text-[#817660] uppercase tracking-widest whitespace-nowrap">
                Status
              </th>
              <th className="px-6 py-5 text-[11px] font-bold text-[#817660] uppercase tracking-widest whitespace-nowrap">
                Added Date
              </th>
              <th className="px-8 py-5 text-[11px] font-bold text-[#817660] uppercase tracking-widest text-right whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eaedff]">
            <tr className="hover:bg-[#f2f3ff]/30 transition-colors group">
              <td className="px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF__JWBRlQQls1W0xmQ0ZujyX6ZkdMBYZo56N6bQX4bbm0Ps5yvkXIM2DE6Ml2hd5a-ow7Ul3wb4gsFDi9zwrHSIPuZ1R1vZR5h6ePqsYbfG7xQltrS6PE-L3wpvvPJ0m0yyF7JQfAjeLIMcY33Unn3MgNjFUO5py8bZ31xo6E80GocdiNmEqbbZoxV5p8itTlDo5aVRYgQEfOfo33nhWhN6f_tvpxPl2QwQG5vzc0aGk0klVcU5Z6ox6A1kSTRCXE2T2SNH1uN9b5"
                      alt="Property thumbnail"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#131b2e] group-hover:text-[#785a00] transition-colors whitespace-nowrap">
                      Azure Horizon Villa
                    </h4>
                    <p className="text-xs text-[#4f4633] flex items-center gap-1 mt-1 whitespace-nowrap">
                      <MapPin className="w-3.5 h-3.5" />
                      Malibu, California
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-6">
                <span className="font-extrabold text-[#131b2e] whitespace-nowrap">
                  $4,250,000
                </span>
              </td>
              <td className="px-6 py-6">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                  Active
                </span>
              </td>
              <td className="px-6 py-6 text-sm text-[#4f4633] whitespace-nowrap">
                Oct 12, 2023
              </td>
              <td className="px-8 py-6 text-right">
                <div className="flex justify-end gap-2">
                  <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                    <Eye className="w-5 h-5 text-[#785a00]" />
                  </button>
                  <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                    <Edit2 className="w-5 h-5 text-[#4f4633]" />
                  </button>
                  <button className="p-2 hover:bg-[#ffdad6]/20 rounded-full transition-colors">
                    <Trash2 className="w-5 h-5 text-[#ba1a1a]" />
                  </button>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-[#f2f3ff]/30 transition-colors group">
              <td className="px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwr6mjD-ahMZRaLSKGLRPVrmmqLizcnbO5VgpOnDCuVSr73TOYZgBiGEb4eCph_qYMwApu6XfsJcKB5NlnCddWe6Y1Jb3chucFe3AQ9_WZdr8mWRM9KCxTDgPbjnMIsHLNKcDdAeKt2-7yhF1LzKOEkVkGapcpUW168zKKCG4TM5RlBxjbTJtzU9gqNGje8BDfkZzjZye7qbfZ5uZB_z1-0zNhEHSz2hRTc0I8LokOfvylpMJpk_U1ebv7fKVqLr0zweoRkR9K-5og"
                      alt="Property thumbnail"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#131b2e] group-hover:text-[#785a00] transition-colors whitespace-nowrap">
                      Golden Sands Estate
                    </h4>
                    <p className="text-xs text-[#4f4633] flex items-center gap-1 mt-1 whitespace-nowrap">
                      <MapPin className="w-3.5 h-3.5" />
                      Miami, Florida
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-6">
                <span className="font-extrabold text-[#131b2e] whitespace-nowrap">
                  $2,890,000
                </span>
              </td>
              <td className="px-6 py-6">
                <span className="px-3 py-1 bg-[#fcdc97] text-[#775f27] text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                  Pending
                </span>
              </td>
              <td className="px-6 py-6 text-sm text-[#4f4633] whitespace-nowrap">
                Nov 05, 2023
              </td>
              <td className="px-8 py-6 text-right">
                <div className="flex justify-end gap-2">
                  <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                    <Eye className="w-5 h-5 text-[#785a00]" />
                  </button>
                  <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                    <Edit2 className="w-5 h-5 text-[#4f4633]" />
                  </button>
                  <button className="p-2 hover:bg-[#ffdad6]/20 rounded-full transition-colors">
                    <Trash2 className="w-5 h-5 text-[#ba1a1a]" />
                  </button>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-[#f2f3ff]/30 transition-colors group">
              <td className="px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrGRWJzkfqCcEqYbbRBvyKhDeWlB_nMoiUAEuS3VpzIFqe0nUrF-_JtfJ9pZ1fhK3LxmHaBPNGFUSfLb42kpQjm1hQQGjNBW5AeryQQLLCCu8dfQL9jtJaYXAhmqyehtS5zkRjZbe0N-ihz3gC80LOLE5CWqBi__JRPxI24gu64QzsjVn7r3OLXFe4udwZgxVLxVWducnEtJ5FXFVCLXI6R3KYPq5k_JUbo5NL5wege0HNWdY9AY3iS3GFA3x8k1Ttrj3nsa5FRZsL"
                      alt="Property thumbnail"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#131b2e] group-hover:text-[#785a00] transition-colors whitespace-nowrap">
                      The Nordic Retreat
                    </h4>
                    <p className="text-xs text-[#4f4633] flex items-center gap-1 mt-1 whitespace-nowrap">
                      <MapPin className="w-3.5 h-3.5" />
                      Aspen, Colorado
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-6">
                <span className="font-extrabold text-[#131b2e] whitespace-nowrap">
                  $1,450,000
                </span>
              </td>
              <td className="px-6 py-6">
                <span className="px-3 py-1 bg-[#eaedff] text-[#4f4633] text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                  Sold
                </span>
              </td>
              <td className="px-6 py-6 text-sm text-[#4f4633] whitespace-nowrap">
                Sept 28, 2023
              </td>
              <td className="px-8 py-6 text-right">
                <div className="flex justify-end gap-2">
                  <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                    <Eye className="w-5 h-5 text-[#785a00]" />
                  </button>
                  <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                    <Edit2 className="w-5 h-5 text-[#4f4633]" />
                  </button>
                  <button className="p-2 hover:bg-[#ffdad6]/20 rounded-full transition-colors">
                    <Trash2 className="w-5 h-5 text-[#ba1a1a]" />
                  </button>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-[#f2f3ff]/30 transition-colors group">
              <td className="px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8PQjO_qX9Uy_yM7oDK3_CDWbyZfMfdFgr1O6g6kUvpsEAB73S8a_Z_GAn8msEJZSd1YuDj_qa_m5aigLOP3QCwHygfHPyGDLlpT1l56o4bNyhSlZ8CiosekS4vWSTvSOCrVJzmLSXIMPSc_HHMImuNpGr-iuKFoCULvKAR20ch66cTDrdW258DyiRJZjGWcL2oGWkgon3RyQdnkuWJXLr-J-BKiNJJboKtrHnFasgBReo52ABfvrjlVczMb0jpB4EO07Dqdb6-q_L"
                      alt="Property thumbnail"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#131b2e] group-hover:text-[#785a00] transition-colors whitespace-nowrap">
                      Urban Loft Suites
                    </h4>
                    <p className="text-xs text-[#4f4633] flex items-center gap-1 mt-1 whitespace-nowrap">
                      <MapPin className="w-3.5 h-3.5" />
                      Austin, Texas
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-6">
                <span className="font-extrabold text-[#131b2e] whitespace-nowrap">
                  $895,000
                </span>
              </td>
              <td className="px-6 py-6">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                  Active
                </span>
              </td>
              <td className="px-6 py-6 text-sm text-[#4f4633] whitespace-nowrap">
                Oct 20, 2023
              </td>
              <td className="px-8 py-6 text-right">
                <div className="flex justify-end gap-2">
                  <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                    <Eye className="w-5 h-5 text-[#785a00]" />
                  </button>
                  <button className="p-2 hover:bg-[#e2e7ff] rounded-full transition-colors">
                    <Edit2 className="w-5 h-5 text-[#4f4633]" />
                  </button>
                  <button className="p-2 hover:bg-[#ffdad6]/20 rounded-full transition-colors">
                    <Trash2 className="w-5 h-5 text-[#ba1a1a]" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="px-8 py-6 border-t border-[#eaedff] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#4f4633]">
          Showing <span className="font-bold text-[#131b2e]">1 - 10</span> of 148
          listings
        </p>
        <div className="flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#eaedff] text-[#817660] hover:bg-[#f2f3ff] transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#785a00] text-white font-bold transition-all shadow-md">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#eaedff] text-[#817660] hover:bg-[#f2f3ff] transition-all">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#eaedff] text-[#817660] hover:bg-[#f2f3ff] transition-all">
            3
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#eaedff] text-[#817660] hover:bg-[#f2f3ff] transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
