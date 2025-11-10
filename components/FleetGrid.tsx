type Truck = { name: string; spec: string; features: string[]; img: string; };
const fleet: Truck[] = [
  { name: "Tri‑Axle Dump", spec: "Eaton / Cummins / Detroit", features: ["Legal 22–24t", "Asphalt ready (tarps)", "Salter compatible"], img: "/fleet/triaxle.jpg" },
  { name: "Tandem Dump", spec: "PACCAR / Eaton", features: ["Urban sites", "Tight turns", "Day & night"], img: "/fleet/tandem.jpg" },
  { name: "Live-Bottom (Brokered)", spec: "Partner network", features: ["Hot-mix haul", "Even spread", "Long pulls"], img: "/fleet/livebottom.jpg" }
];
export default function FleetGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {fleet.map(t => (
        <article key={t.name} className="card card-hover overflow-hidden">
          <div className="aspect-[16/10] bg-slate-800" style={{backgroundImage:`url(${t.img})`, backgroundSize:"cover", backgroundPosition:"center"}} />
          <div className="p-5">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="text-sm text-slate-400">{t.spec}</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc pl-5">
              {t.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
