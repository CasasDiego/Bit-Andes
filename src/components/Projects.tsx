import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { PROJECTS } from "@/const/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="container-x py-12">
      <SectionTitle title="Proyectos" subtitle="Una muestra representativa de nuestro trabajo" />
      <div className="grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p) => (
          <article key={p.id} className="card overflow-hidden">
            {p.image && (
              <div className="relative aspect-[16/10]">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
            )}
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="opacity-80 mt-1">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10">{t}</span>
                ))}
              </div>
              {p.link && (
                <a className="btn btn-ghost mt-4" href={p.link} target="_blank">Ver detalle</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
