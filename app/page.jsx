
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
  "Dirt & Clean Fill","Topsoil & Aggregates","Asphalt Paving Support",
  "Grinding / Mill & Fill","Demolition Haul-out","Gravel / Sand",
  "Snow & Salt (seasonal)","Pond Clean-outs",
  "Contaminated / Impacted Soil (MOE/MECP)",
];
const HERO=["/hero-1.jpg","/hero-2.jpg","/hero-3.jpg"];

export default function Home(){
  const [i,setI]=useState(0);
  useEffect(()=>{ if(HERO.length<2) return; const t=setInterval(()=>setI(p=>(p+1)%HERO.length),5200); return()=>clearInterval(t); },[]);

  return(<div className="min-h-screen">
    <header className="navbar">
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-3">
          <a href="#home" className="flex items-center gap-3">
            <img src="/sgn-logo.png" alt="SGN Logo" className="h-12 md:h-14 w-auto" />
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">SGN Transport Inc.</div>
              <div className="text-xs text-neutral-500">Serving Ontario since 2004</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            {NAV.map(n=><a key={n.href} href={n.href} className="text-neutral-700 hover:text-neutral-900">{n.label}</a>)}
          </nav>
          <a href="#order" className="btn btn-primary">Order Trucks</a>
        </div>
      </div>
    </header>

    <section id="home" className="relative overflow-hidden">
      <div className="container">
        <div className="relative mt-6 rounded-3xl overflow-hidden shadow-soft">
          <img key={HERO[i]} src={HERO[i]} alt="SGN truck" className="h-[380px] w-full object-cover transition-opacity duration-700" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-10 max-w-3xl">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow">Reliable dump-truck hauling across the GTA</h1>
              <p className="mt-3 text-white/90 drop-shadow">Tri-axle specialists delivering on-time loads for subdivisions, roadworks and municipal projects.</p>
              <div className="mt-6"><a href="#order" className="btn btn-primary">Order Trucks</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-10">
      <div className="container grid gap-4 sm:grid-cols-3">
        <div className="card text-center">Since 2004</div>
        <div className="card text-center">CVOR • WSIB • Insured</div>
        <div className="card text-center">Tri-axle specialists • GTA wide</div>
      </div>
    </section>

    <section id="services" className="mt-14">
      <div className="container">
        <h2 className="text-xl font-semibold">Our Services</h2>
        <p className="text-sm text-neutral-600">Trusted hauling for contractors, builders and municipalities.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(s=><div key={s} className="card">{s}</div>)}
        </div>
      </div>
    </section>

    <section id="order" className="mt-16">
      <div className="container">
        <div className="rounded-3xl bg-white p-6 shadow border">
          <h3 className="text-lg font-semibold">Order Trucks</h3>
          <p className="text-neutral-700 mt-1">Call or email—fast confirmations and reliable dispatch.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="tel:+16479684422" className="btn btn-primary">Call 647-968-4422</a>
            <a href="mailto:Sgntransport94@gmail.com" className="btn btn-outline">Email Sgntransport94@gmail.com</a>
          </div>
        </div>
      </div>
    </section>

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
  </div>);
}
