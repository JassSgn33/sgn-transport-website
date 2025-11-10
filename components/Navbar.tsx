"use client";
import Link from "next/link";
import { useState } from "react";
const links = [
  { href: "#services", label: "Services" },
  { href: "#fleet", label: "Fleet" },
  { href: "#moe", label: "Compliance" },
  { href: "#drivers", label: "Drivers" },
  { href: "#brokers", label: "Brokers" },
  { href: "#contact", label: "Contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-sgn-accent grid place-items-center font-black">SGN</div>
          <div className="leading-tight">
            <div className="font-bold">SGN Transport Inc.</div>
            <div className="text-xs text-slate-400 -mt-1">Dump Truck & Hauling</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
          <a href="#quote" className="btn btn-primary">Request Quote</a>
        </nav>
        <button className="md:hidden p-2 border border-slate-800 rounded-xl" onClick={()=>setOpen(!open)} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="container py-4 flex flex-col gap-3">
            {links.map(l => <a key={l.href} href={l.href} className="nav-link" onClick={()=>setOpen(false)}>{l.label}</a>)}
            <a href="#quote" className="btn btn-primary mt-2 w-full" onClick={()=>setOpen(false)}>Request Quote</a>
          </div>
        </div>
      )}
    </header>
  );
}
