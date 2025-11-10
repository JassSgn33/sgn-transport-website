"use client";
import { useState } from "react";
function Field({ label, ...props }: any) {
  return (<div className="grid gap-2"><label>{label}</label><input {...props} /></div>);
}
export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = async (e: any) => { e.preventDefault(); const data = new FormData(e.currentTarget); await fetch("/api/quote", { method: "POST", body: data }); setSent(true); e.currentTarget.reset(); };
  if (sent) return <p className="text-green-400">Thanks — dispatch will contact you shortly.</p>;
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Field label="Company / Site" name="company" placeholder="Land Eleven Construction" required />
      <Field label="Contact Name" name="name" placeholder="Jane Doe" required />
      <Field label="Phone" name="phone" placeholder="647-968-4422" required />
      <Field label="Email" name="email" type="email" placeholder="sgntransport94@gmail.com" />
      <Field label="Pickup / Dump Location" name="location" placeholder="Brampton • Kitchener • Cambridge" required />
      <div className="grid gap-2"><label>Material & Notes</label><textarea name="notes" rows={4} placeholder="Hot-mix, gravel A, clean fill… dates & shifts" /></div>
      <button className="btn btn-primary w-full">Request Quote</button>
    </form>
  );
}
export function DriverForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = async (e: any) => { e.preventDefault(); const data = new FormData(e.currentTarget); await fetch("/api/driver", { method: "POST", body: data }); setSent(true); e.currentTarget.reset(); };
  if (sent) return <p className="text-green-400">Thanks — hiring will contact you.</p>;
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Field label="Full Name" name="name" placeholder="John Singh" required />
      <Field label="Phone" name="phone" placeholder="647-968-4422" required />
      <Field label="Email" name="email" type="email" placeholder="you@example.com" />
      <Field label="Experience (years)" name="exp" type="number" min="0" />
      <div className="grid gap-2"><label>Notes</label><textarea name="notes" rows={4} placeholder="Tri-axle experience, night asphalt, tickets…" /></div>
      <button className="btn btn-primary w-full">Apply Now</button>
    </form>
  );
}
export function BrokerForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = async (e: any) => { e.preventDefault(); const data = new FormData(e.currentTarget); await fetch("/api/broker", { method: "POST", body: data }); setSent(true); e.currentTarget.reset(); };
  if (sent) return <p className="text-green-400">Thanks — we’ll reach out to onboard and schedule trucks.</p>;
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Field label="Company" name="company" placeholder="Your Company Ltd." required />
      <Field label="Contact Name" name="name" placeholder="Site/Dispatch Contact" required />
      <Field label="Phone" name="phone" placeholder="647-968-4422" required />
      <Field label="Email" name="email" type="email" placeholder="dispatch@company.com" />
      <Field label="Trucks Needed" name="trucks" type="number" min="1" placeholder="3" />
      <Field label="Start Date" name="start" type="date" />
      <div className="grid gap-2"><label>Job Details / Notes</label><textarea name="notes" rows={4} placeholder="Shifts, location, materials, plant times…"/></div>
      <button className="btn btn-primary w-full">Submit Broker Request</button>
    </form>
  );
}
