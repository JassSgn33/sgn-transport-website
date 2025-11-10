export const metadata = {
  title: "Environmental Soil Hauling (MOE/MECP) | SGN Transport Inc.",
  description: "Contaminated & impacted soil hauling — fully compliant, ticketed and insured.",
};
export default function MOEPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-semibold">Environmental Soil Hauling (MOE/MECP)</h1>
      <p className="mt-3 text-neutral-700">
        We provide fully compliant hauling for contaminated and impacted soils under Ontario MOE/MECP guidance.
        Ticketed, insured and experienced with chain‑of‑custody, manifests and disposal sites.
      </p>
      <ul className="mt-6 list-disc pl-6 space-y-2 text-neutral-700">
        <li>Certified, insured tri‑axle dump trucks</li>
        <li>Contaminated, impacted, excess soils</li>
        <li>Ticketing & disposal site coordination</li>
        <li>On‑time service & clean equipment</li>
      </ul>
    </div>
  );
}
