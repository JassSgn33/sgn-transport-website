import { ReactNode } from "react";

export default function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          {subtitle && <p className="mt-2 text-slate-400">{subtitle}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
