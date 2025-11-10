
export const metadata = {
  title: "SGN Transport Inc. — Dump-Truck Hauling GTA",
  description: "Tri-axle dump-truck hauling for subdivisions, roadworks and municipal projects. Serving Ontario since 2004.",
  icons: { icon: "/favicon.ico" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-neutral-900 bg-neutral-50">
        {children}
      </body>
    </html>
  );
}
