import { Fraunces, Inter, Geist } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: "Bloom Studio",
  description:
    "Bloom Studio is a boutique Pilates and yoga studio offering mindful movement classes — Reformer Pilates, Mat Pilates, Vinyasa Flow, and Restorative Yoga — for all levels of experience.",
  openGraph: {
    title: "Bloom Studio",
    description:
      "A boutique Pilates and yoga studio offering mindful movement classes for all levels of experience.",
    url: SITE_URL,
    siteName: "Bloom Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bloom Studio",
      },
    ],
    type: "website",
  },
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
