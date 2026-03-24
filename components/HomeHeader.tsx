"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Menu, X } from "lucide-react";

export function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-navy">
              FloHomes
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-navy hover:text-accent transition-colors px-4 py-2">
              Sign In
            </button>
            <button className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
              List Property
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="text-navy"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <Link
            href="/about"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-accent hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-accent hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-4 flex flex-col gap-2">
            <button className="w-full text-center text-sm font-medium text-navy hover:text-accent transition-colors px-4 py-2 border border-gray-200 rounded-full">
              Sign In
            </button>
            <button className="w-full bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
              List Property
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
