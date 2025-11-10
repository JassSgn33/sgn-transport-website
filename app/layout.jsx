export const metadata = {
  title: "SGN Transport Inc. — Dump‑Truck Hauling GTA",
  description: "Reliable tri‑axle dump‑truck hauling for subdivisions, roadworks and municipal projects across Peel, Halton & Durham. Serving Ontario since 2004.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}