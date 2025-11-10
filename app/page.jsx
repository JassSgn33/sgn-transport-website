// app/page.jsx
"use client";
import { useEffect, useState } from "react";
import "./globals.css";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Compliance", href: "/moe" },
  { label: "Drivers", href: "/drivers" },
  { label: "Brokers", href: "/brokers" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Dirt & Clean Fill",
  "Topsoil & Aggregates",
  "Asphalt Paving Support",
  "Grinding / Mill & Fill",
  "Demolition Haul-out",
  "Gravel / Sand",
  "Snow & Salt (seasonal)",
  "Pond Clean-outs",
  "Contaminated / Impacted Soil (MOE/MECP)",
];

const HERO = ["/hero-1.jpg","/hero-2.jpg","/hero-3.jpg"]; // put your real truck photos in /public

export default function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (HERO.length < 2) return;
    const t = setInterval(() => setI(p => (p + 1) % HERO.length), 5200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header A */}
      <header className="navbar">
        <div className="container">
          <div className="flex h-20 items-center justify-between gap-6">
            {/* Left: Logo + Company */}
            <a href="#home" className="flex items-center gap-4">
              <img src="/sgn-logo.png" alt="SGN Logo" className="h-16 w-auto" />
              <div className="leading-tight">
                <div className="text-lg md:text-xl font-semibold tracking-tight">SGN Transport Inc.</div>
                <div className="text-xs text-neutral-500">Serving Ontario since 2004</div>
              </div>
            </a>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm">
              {NAV.map(n => (
                <a key={n.href} href={n.href} className="text-neutral-700 hover:text-neutral-900">
                  {n.label}
                </a>
              ))}
            </nav>

            {/* Single CTA */}
            <a href="#order" className="btn btn-primary">Order Trucks</a>
          </div>
        </div>
      </header>

      {/* HERO — full width slideshow */}
      <section id="home" className="container section">
        <div className="hero-wrap">
          <img key={HERO[i]} src={HERO[i]} alt="SGN truck" className="hero-img" />
          <div className="hero-grad" />
          <div className="hero-copy">
            <div className="px-6 sm:px-10 max-w-3xl">
              <h1 className="h1">Reliable dump-truck hauling across the GTA</h1>
              <p className="lead">
                Tri-axle specialists for subdivisions, roadworks and municipal projects.
              </p>
              <div className="mt-6">
                <a href="#order" className="btn btn-primary">Order Trucks</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="container section">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="badge">Since 2004</div>
          <div className="badge">CVOR • WSIB • Insured</div>
          <div className="badge">Tri-axle specialists • GTA-wide</div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container section">
        <h2 className="text-xl font-semibold">Our Services</h2>
        <p className="text-sm text-neutral-600">Trusted hauling for contractors, builders and municipalities.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(s => (
            <div key={s} className="card">{s}</div>
          ))}
        </div>
      </section>

      {/* Order CTA */}
      <section id="order" className="container section">
        <div className="rounded-3xl bg-white p-6 shadow border">
          <h3 className="text-lg font-semibold">Order Trucks</h3>
          <p className="text-neutral-700 mt-1">Call or email—fast confirmations and reliable dispatch.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="tel:+16479684422" className="btn btn-primary">Call 647-968-4422</a>
            <a href="mailto:Sgntransport94@gmail.com" className="btn btn-outline">Email Sgntransport94@gmail.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="mt-16 border-t bg-white">
        <div className="container py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="font-semibold">SGN Transport Inc.</div>
            <div className="text-sm text-neutral-600">Serving Ontario since 2004</div>
          </div>
          <div className="text-sm">
            <a href="tel:+16479684422" className="hover:underline">647-968-4422</a> •
            <a href="mailto:Sgntransport94@gmail.com" className="hover:underline"> Sgntransport94@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
