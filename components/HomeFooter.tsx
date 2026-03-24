"use client";

import Link from "next/link";
import { Calculator, Home, MapPin, MessageSquare } from "lucide-react";

export function HomeFooter() {
  return (
    <footer className="bg-navy-light text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight">FloHomes</span>
            </div>
            <div className="flex gap-4">
              {[MessageSquare, MapPin, Calculator].map((Icon, i) => (
                <Link
                  key={i}
                  href="/contact"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sell
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Buy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Advertise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our agent
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Getting started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Server status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Report a bug
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chat support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contacts us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> contact@flohomes.com
              </li>
              <li className="flex items-center gap-2">
                <Calculator className="w-4 h-4" /> (414) 687 - 5892
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" /> 794 Mcallister St
                <br />
                San Francisco, 94102
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>Copyright © 2026 FloHomes</p>
          <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
