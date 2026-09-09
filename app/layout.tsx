import { Fraunces, Inter, Geist } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Bloom Studio",
  description: "Boutique Pilates & Yoga Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${fraunces.variable} ${inter.variable} font-sans min-h-full flex flex-col bg-cream text-coffee`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <footer className="bg-tea/30 border-t border-tea px-8 py-8 text-sm text-coffee">
          © {new Date().getFullYear()} Bloom Studio
        </footer>
      </body>
    </html>
  );
}
