"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollYRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY || 0;

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;

        const y = window.scrollY || 0;
        const lastY = lastScrollYRef.current;
        const delta = y - lastY;

        setIsScrolled(y > 8);

        if (isOpen) {
          setIsHidden(false);
          lastScrollYRef.current = y;
          return;
        }

        if (y <= 8) {
          setIsHidden(false);
          lastScrollYRef.current = y;
          return;
        }

        if (Math.abs(delta) < 6) {
          lastScrollYRef.current = y;
          return;
        }

        if (delta > 0) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }

        lastScrollYRef.current = y;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isOpen]);

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="max-w-7xl mx-auto mb-1 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/logo.svg"
              alt="FloHomes"
              width={170}
              height={30}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/properties"
              className="text-sm font-medium text-gray-600 hover:text-accent transition-colors"
            >
              Properties
            </Link>
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
            <button className="text-sm font-medium text-navy hover:text-accent transition-colors px-4 py-2 cursor-pointer">
              Sign In
            </button>
            <button className="bg-black hover:bg-black/80 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm cursor-pointer">
              List Property
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="text-navy"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <Link
            href="/properties"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-accent hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Properties
          </Link>
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
