import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SGN Transport Inc. | Dump Truck & Hauling Services in Ontario",
  description: "Professional dump truck hauling across GTA & Southwestern Ontario.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
