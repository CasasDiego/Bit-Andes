import SectionTitle from "./SectionTitle";
import { SERVICES } from "@/const/services";

export default function Services() {
  return (
    <section id="servicios" className="container-x py-12">
      <SectionTitle title="Servicios" subtitle="Soluciones web a medida para cada etapa" />
      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((s) => (
          <article key={s.id} className="card p-6 flex flex-col">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="opacity-80 mt-2">{s.description}</p>
            <ul className="mt-4 grid gap-2 text-sm opacity-90">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-brand)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            {s.cta && (
              <a href={s.cta.href} className="btn btn-brand mt-6 w-full">{s.cta.label}</a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
