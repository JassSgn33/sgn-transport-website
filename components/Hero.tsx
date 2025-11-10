"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
const slides = [
  { src: "/hero/asphalt.jpg", headline: "Asphalt & Paving Support", sub: "Night work. Reliable hours. Experienced crews." },
  { src: "/hero/aggregates.jpg", headline: "Aggregates & Site Services", sub: "Gravel, stone, sand—per-load or hourly." },
  { src: "/hero/soil.jpg", headline: "Soil Removal & Disposal", sub: "Clean fill, contaminated—partner network ready." }
];
export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(()=>{ const t = setInterval(()=>setI(p => (p+1)%slides.length), 5000); return ()=>clearInterval(t); },[]);
  return (
    <section className="relative h-[72vh] min-h-[520px] w-full">
      {slides.map((s,idx)=> (
        <div key={s.src} className={`absolute inset-0 transition-opacity duration-700 ${idx===i?"opacity-100":"opacity-0"}`}>
          <Image src={s.src} alt="" fill priority className="object-cover object-center" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
      <div className="relative container h-full flex items-end pb-20">
        <div className="max-w-2xl">
          <div className="badge mb-4">Ontario • GTA • Waterloo</div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Professional Dump Truck &amp; Hauling</h1>
          <p className="mt-4 text-lg text-slate-300">Tri‑axle fleet for asphalt, aggregates, soil, and site services. Safety‑first, on‑time, and easy to schedule.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#quote" className="btn btn-primary">Get a Quote</a>
            <a href="#contact" className="btn btn-ghost">Call Dispatch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
