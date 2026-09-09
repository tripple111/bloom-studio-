"use client";

import { usePathname } from "next/navigation";
import { QuickInquiry } from "@/components/quick-inquiry";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
          className={`flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-sm items-center ${
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
      </div>
    </header>
  );
}
