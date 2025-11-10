
"use client";
import Image from "next/image";
import "./globals.css";
import { useEffect, useState } from "react";

const BUSINESS = {
  name: "SGN Transport Inc.",
  tagline: "Reliable dump‑truck hauling across the GTA",
  phone: "+1 (647) 968‑4422",
  email: "sgntransport94@gmail.com",
  address: "273 Glidden Rd, Brampton, ON",
  since: "Serving Ontario since 2004",
  hours: "Mon–Sat 6:00am–7:00pm",
  social: { instagram: "https://instagram.com/sgntransport" }
};

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Coverage", href: "#coverage" },
  { label: "Compliance", href: "/moe" },
  { label: "Drivers", href: "/drivers" },
  { label: "Brokers", href: "/brokers" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Dirt & Clean Fill",
  "Topsoil & Aggregates",
  "Asphalt Paving Support",
  "Grinding / Mill & Fill",
  "Demolition Haul‑off",
  "Gravel / Sand",
  "Snow & Salt Operations",
  "Pond Clean‑out Jobs",
  "Contaminated / Impacted Soil (MOE/MECP compliant)",
];

function Slideshow() {
  const slides = ["/truck-1.jpg"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative h-[46vh] sm:h-[56vh] lg:h-[62vh] w-full overflow-hidden rounded-3xl shadow-soft">
      <Image
        src={slides[i]}
        alt="SGN Truck"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Reliable dump‑truck hauling across the GTA
            </h1>
            <p className="mt-3 opacity-90">
              Tri‑axle specialists for subdivisions, roadworks and municipal projects.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#order" className="btn btn-primary">Order Trucks</a>
              <a href="#services" className="btn btn-outline text-white border-white/70">Our Services</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen">
      {/* Header A */}
      <header className="navbar">
        <div className="container">
          <div className="flex h-16 items-center justify-between gap-3">
            <a href="#home" className="flex items-center gap-3">
              <Image src="/sgn-logo.png" alt="SGN Logo" width={56} height={56} className="rounded-md" />
              <div className="leading-tight">
                <div className="font-semibold">{BUSINESS.name}</div>
                <div className="text-xs text-neutral-500">{BUSINESS.since}</div>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {NAV.map(n => (
                <a key={n.href} href={n.href} className="text-neutral-700 hover:text-neutral-900">{n.label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href="#order" className="btn btn-primary">Order Trucks</a>
              <button className="md:hidden p-2" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Menu">
                <span>☰</span>
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-3">
              <div className="flex flex-wrap items-center gap-4 text-sm">
                {NAV.map(n => (
                  <a key={n.href} href={n.href} className="text-neutral-700 hover:text-neutral-900">{n.label}</a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Slideshow */}
      <section id="home" className="container mt-6">
        <Slideshow />
      </section>

      {/* Services */}
      <section id="services" className="container mt-16">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <p className="text-neutral-600 mt-1">Trusted hauling for contractors, builders and municipalities.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(s => (
            <div key={s} className="rounded-2xl border bg-white p-4 shadow-soft">{s}</div>
          ))}
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="container mt-16">
        <h2 className="text-2xl font-semibold">Fleet</h2>
        <p className="text-neutral-600 mt-1">Tri‑axle dump trucks — Kenworth, Peterbilt and Western Star.</p>
      </section>

      {/* Coverage */}
      <section id="coverage" className="container mt-16">
        <h2 className="text-2xl font-semibold">Coverage</h2>
        <p className="text-neutral-600 mt-1">Peel, Halton, Durham and the Greater Toronto Area.</p>
      </section>

      {/* Order Trucks */}
      <section id="order" className="container mt-16">
        <h2 className="text-2xl font-semibold">Order Trucks</h2>
        <form
          action="https://formspree.io/f/your-id-here"
          method="POST"
          className="mt-6 grid sm:grid-cols-2 gap-4"
        >
          <input required name="company" placeholder="Company" className="rounded-xl border p-3" />
          <input required name="contact" placeholder="Contact Name" className="rounded-xl border p-3" />
          <input required name="email" type="email" placeholder="Email" className="rounded-xl border p-3" />
          <input name="phone" placeholder="Phone" className="rounded-xl border p-3" />
          <input name="location" placeholder="Job Location" className="rounded-xl border p-3 sm:col-span-2" />
          <textarea name="details" placeholder="Material, # of trucks, dates…" className="rounded-xl border p-3 sm:col-span-2" />
          <button className="btn btn-primary sm:col-span-2">Send Request</button>
        </form>
      </section>

      {/* Contact */}
      <section id="contact" className="container mt-16 mb-20">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border bg-white p-4 shadow-soft">
            <div className="font-medium">{BUSINESS.phone}</div>
            <div className="text-neutral-600">{BUSINESS.email}</div>
            <div className="text-neutral-600">{BUSINESS.address}</div>
            <div className="text-neutral-600">{BUSINESS.hours}</div>
          </div>
          <div className="rounded-2xl border bg-white p-4 shadow-soft">
            <div className="text-neutral-600">Instagram: <a className="underline" href={BUSINESS.social.instagram}>@sgntransport</a></div>
            <div className="text-neutral-600 mt-2">{BUSINESS.since}</div>
          </div>
        </div>
      </section>

      <footer className="border-t py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} SGN Transport Inc. • Serving Ontario since 2004
      </footer>
    </div>
  );
}
