import Link from "next/link";
import { SITE } from "@/const/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[calc(var(--nav-height)+40px)] pb-20">
      {/* ===== Background (layers) ===== */}
      {/* Animated gradient mesh */}
      <div aria-hidden className="hero-mesh absolute inset-0" />
      {/* Sutil grid con máscara radial */}
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.18]"
      />
      {/* Glows adicionales */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent)] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.18),transparent)] blur-3xl" />
      {/* Ruido muy sutil */}
      <div aria-hidden className="hero-noise absolute inset-0 opacity-[0.06] mix-blend-overlay" />

      <div className="container-x relative grid items-center gap-10 md:grid-cols-2">
        {/* ===== Left: copy ===== */}
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/70">
            Agencia de desarrollo web
          </p>

          <h1 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">
            Integra toda tu{" "}
            <span className="bg-gradient-to-r from-[var(--color-brand)] via-emerald-400 to-[var(--color-brand-2)] bg-clip-text text-transparent">
              transformación digital
            </span>{" "}
            con BitAndes
          </h1>

          <p className="mt-4 max-w-prose text-white/80">
            Construimos páginas web de alto desempeño con Next.js, accesibilidad y
            SEO técnico. Diseño modular para crecer sin fricción.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={SITE.cta.href} className="btn btn-brand">
              {SITE.cta.label}
            </Link>
            <a href="#proyectos" className="btn btn-ghost">
              Ver proyectos
            </a>
          </div>

          {/* Badges de confianza */}
          <ul className="mt-6 flex flex-wrap gap-2 text-[11px] text-white/70">
            {["Next.js App Router", "AA Accesibilidad", "SEO técnico", "Edge & SSR"].map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        
        {/* ===== Right: metric cards (premium, self-contained) ===== */}
        <div className="relative">
        <div className="group relative rounded-3xl p-[1px]">
            {/* halo degradado alrededor */}
            <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(at_50%_50%,rgba(59,130,246,.28),rgba(16,185,129,.28),transparent_70%)] opacity-60 blur-[6px]" />
            {/* panel vidrio */}
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.28)]">
            <div className="rounded-[calc(1.5rem-1px)] p-5 ring-1 ring-white/5">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                    ["95+", "Lighthouse Perf"],
                    ["<1s", "TTFB Edge"],
                    ["AA", "Accesibilidad"],
                    ["SEO", "Listo para crecer"],
                    ["SSR", "y SSG"],
                    ["DevOps", "Observabilidad"],
                ].map(([big, small], i) => (
                    <div key={i} className="relative rounded-2xl p-[1px] overflow-hidden bg-gradient-to-br from-white/15 via-white/5 to-white/10">
                    {/* glow al hover */}
                    <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300
                                    bg-[radial-gradient(60%_60%_at_30%_0%,rgba(59,130,246,.22),transparent_60%),radial-gradient(60%_60%_at_70%_100%,rgba(16,185,129,.22),transparent_60%)]
                                    group-hover:opacity-100" />
                    {/* tile vidrio */}
                    <div className="relative z-[1] rounded-[1rem] border border-white/10 bg-white/[0.06]
                                    px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_24px_rgba(2,6,23,0.35)]
                                    transition-transform duration-300 h-24 flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold tracking-tight text-white">{big}</div>
                        <div className="mt-1 text-xs text-white/70">{small}</div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* brillo lateral sutil al hover del panel */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-[1px] rounded-3xl bg-[radial-gradient(60%_60%_at_0%_50%,rgba(59,130,246,.14),transparent),radial-gradient(60%_60%_at_100%_50%,rgba(16,185,129,.14),transparent)]" />
            </div>
            </div>
        </div>

        {/* glow de flotación */}
        <div aria-hidden className="pointer-events-none absolute inset-x-8 -bottom-6 h-12 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.35),transparent)] blur-2xl" />
        </div>


      </div>
    </section>
  );
}
