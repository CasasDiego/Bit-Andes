import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { PROJECTS } from "@/const/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="container-x py-16">
      <SectionTitle
        title="Proyectos"
        subtitle="Una muestra representativa de nuestro trabajo"
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {PROJECTS.map((p) => {
          const CardTag = p.link ? Link : "div";
          const cardProps = p.link
            ? { href: p.link, target: "_blank", rel: "noreferrer" }
            : {};

          return (
            <CardTag
              key={p.id}
              {...(cardProps as any)}
              className="card group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.65)]"
            >
              {p.image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base md:text-lg font-semibold tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  {p.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.link && (
                  <span className="mt-4 inline-flex items-center text-[12px] font-medium text-sky-300/90 group-hover:text-sky-200">
                    Ver detalle
                    <span className="ml-1 inline-block translate-y-[1px] transition-transform duration-200 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </span>
                )}
              </div>
            </CardTag>
          );
        })}
      </div>
    </section>
  );
}
