import "./globals.css";
import type { Metadata } from "next";
import { clsx } from "clsx";

export const metadata: Metadata = {
  title: "SGN Transport Inc. | Dump Truck & Hauling Services in Ontario",
  description: "Professional dump truck hauling across GTA & Southwestern Ontario. Tri-axle fleet, asphalt, aggregates, soil removal, hourly & per-load work.",
  openGraph: {
    title: "SGN Transport Inc. | Dump Truck & Hauling",
    description: "Reliable dump-truck fleet for asphalt, aggregates, soil and site services.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx("min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
