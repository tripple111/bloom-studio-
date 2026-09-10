"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { QuickInquiry } from "@/components/quick-inquiry";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={
        isHome
          ? "absolute top-0 left-0 right-0 z-10 px-16 py-2"
          : "relative z-10 px-16 py-2 bg-cream/80 backdrop-blur-sm"
      }
    >
      {isHome && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent -z-10"></div>
      )}
      <div className="flex items-center justify-between flex-wrap gap-y-2">
        <a
          href="/"
          className={`font-heading text-xl hover:opacity-70 transition ${
            isHome ? "text-cream" : "text-coffee"
          }`}
        >
          Bloom Studio
        </a>
        <nav
          className={`hidden md:flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-sm items-center ${
            isHome ? "text-cream" : "text-coffee"
          }`}
        >
          <a href="/about" className="hover:opacity-70 transition">
            About
          </a>
          <a href="/contact" className="hover:opacity-70 transition">
            Location
          </a>
          <QuickInquiry />
        </nav>
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className={`md:hidden p-2 -mr-2 rounded-full transition-all duration-200 hover:opacity-70 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2 ${
            isHome ? "text-cream" : "text-coffee"
          }`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className={`md:hidden flex flex-col gap-4 text-sm mt-4 pb-4 px-2 rounded-md ${
            isHome ? "text-cream bg-black/30 backdrop-blur-sm py-4" : "text-coffee"
          }`}
        >
          <a
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="hover:opacity-70 transition"
          >
            About
          </a>
          <a
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="hover:opacity-70 transition"
          >
            Location
          </a>
          <QuickInquiry />
        </nav>
      )}
    </header>
  );
}
