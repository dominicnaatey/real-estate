"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";

export function HomeBottomCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
        Find the best home with us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-gray-100 shadow-sm"
        >
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Consultation
            </p>
            <h3 className="text-2xl font-bold text-navy mb-6">
              We are ready to help, consult your property options with us.
            </h3>
            <a
              href="#"
              className="text-accent font-medium hover:text-accent-hover flex items-center gap-2 transition-colors"
            >
              Start chat <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://picsum.photos/seed/consult/400/400"
              alt="Consultant"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-gray-100 shadow-sm"
        >
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Calculator
            </p>
            <h3 className="text-2xl font-bold text-navy mb-6">
              Find the best price for you, calculate your property now.
            </h3>
            <a
              href="#"
              className="text-accent font-medium hover:text-accent-hover flex items-center gap-2 transition-colors"
            >
              Calculate <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
            <Calculator className="w-16 h-16 text-emerald-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
