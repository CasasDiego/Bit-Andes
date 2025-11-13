import Link from "next/link";
import { SITE } from "@/const/site";

export default function Hero() {
  return (
    <section className="relative pt-[calc(var(--nav-height)+32px)] pb-16">
      {/* Glows */}
      <div aria-hidden className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,var(--color-brand)/25,transparent)]" />
      <div aria-hidden className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,var(--color-brand-2)/20,transparent)]" />

      <div className="container-x grid gap-8 md:grid-cols-2 items-center">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] opacity-70">Agencia de desarrollo web</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">
            Integra toda tu <span className="text-[var(--color-brand)]">transformación digital</span> con BitAndes
          </h1>
          <p className="mt-4 opacity-80 max-w-prose">
            Construimos páginas web de alto desempeño con Next.js, accesibilidad y SEO técnico. Diseño modular para crecer sin fricción.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={SITE.cta.href} className="btn btn-brand">{SITE.cta.label}</Link>
            <a href="#proyectos" className="btn btn-ghost">Ver proyectos</a>
          </div>
        </div>

        <div className="card p-6">
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              ["95+", "Lighthouse Perf"],
              ["<1s", "TTFB Edge"],
              ["AA", "Accesibilidad"],
              ["SEO", "Listo para crecer"],
              ["SSR", "y SSG"],
              ["DevOps", "Observabilidad"],
            ].map(([big, small]) => (
              <div key={small} className="rounded-xl p-4 bg-white/5">
                <div className="text-2xl font-bold">{big}</div>
                <div className="mt-1 text-xs opacity-70">{small}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
