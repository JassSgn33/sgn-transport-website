import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FleetGrid from "@/components/FleetGrid";
import Footer from "@/components/Footer";
import { QuoteForm, DriverForm, BrokerForm } from "@/components/Forms";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Section id="services" title="Services" subtitle="Asphalt • Aggregates • Soil • Hourly or Per‑Load">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Asphalt & Paving", desc: "Night paving, highway work, experienced with plant timing and QC." },
            { title: "Aggregates & Quarry Runs", desc: "Gravel, A/B, stone, sand — fast turnarounds and neat dumps." },
            { title: "Soil Removal & Disposal", desc: "Clean fill, contaminated soil through partnered sites." }
          ].map((s) => (
            <article key={s.title} className="card card-hover p-6">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-slate-300 mt-2">{s.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="fleet" title="Fleet" subtitle="Well‑maintained trucks with Eaton transmissions and experienced operators.">
        <FleetGrid />
      </Section>

      <Section id="drivers" title="Drivers" subtitle="Apply to join our tri‑axle team.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="font-semibold text-lg">Driver Application</h3>
            <p className="text-slate-300 text-sm mt-1">We prioritize safety, professionalism, and on‑time delivery.</p>
            <div className="mt-4"><DriverForm /></div>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-lg">Requirements</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc pl-5">
              <li>Clean abstract preferred, CVOR awareness</li>
              <li>Tri‑axle dump experience (asphalt and aggregates)</li>
              <li>Night shifts available; reliability is key</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="brokers" title="Brokers" subtitle="Need extra trucks? We partner with vetted owner‑operators.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "WSIB & insurance verified",
            "Safety‑first orientation",
            "Consistent work with on‑time pay"
          ].map((b) => (
            <div key={b} className="card p-6">{b}</div>
          ))}
        </div>
      </Section>


      <Section id="moe" title="MOE & Environmental Compliance" subtitle="Ontario ECA for excess soils, aggregates, and contaminated material transport.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="font-semibold text-lg">Our Commitment</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc pl-5">
              <li>Registered and compliant with Ontario MOE guidelines</li>
              <li>Authorized to haul clean fill and contaminated soils via partner sites</li>
              <li>Fully insured & WSIB-covered</li>
              <li>Driver training and safe work procedures</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-lg">Documentation</h3>
            <p className="text-slate-300 text-sm">Provide site-specific paperwork and disposal site details and we’ll handle the rest.</p>
            <p className="text-slate-400 text-xs mt-3">Yard: 273 Glidden Rd, Brampton, ON</p>
          </div>
        </div>
      </Section>
    

      <Section id="quote" title="Request a Quote" subtitle="Tell us about your job — we’ll get back fast.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <QuoteForm />
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-lg">Why SGN</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc pl-5">
              <li>Experienced dispatch and professional drivers</li>
              <li>On‑time, neat dumps, respectful on site</li>
              <li>Serving GTA, Peel, Halton, Durham, Waterloo</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="card p-6 grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-semibold">Dispatch</div>
            <div className="text-slate-300 text-sm">+1 (416) 555‑0123</div>
          </div>
          <div>
            <div className="font-semibold">Email</div>
            <div className="text-slate-300 text-sm">dispatch@sgntransport.ca</div>
          </div>
          <div>
            <div className="font-semibold">Address</div>
            <div className="text-slate-300 text-sm">Brampton, Ontario</div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
