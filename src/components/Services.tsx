"use client";

import SectionTitle from "./SectionTitle";
import { SERVICES } from "@/const/services";
import { useRef, useState, MouseEvent } from "react";

type Props = { id?: string };

export default function Services({ id = "servicios" }: Props) {
  return (
    <section id={id} className="relative py-20 overflow-hidden">
      {/* Fondo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70rem_50rem_at_0%_20%,rgba(34,197,94,0.15),transparent),radial-gradient(60rem_50rem_at_100%_0%,rgba(59,130,246,0.12),transparent)]" />
        <div className="absolute -top-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.06),transparent_70%)] blur-2xl" />
      </div>

      {/* 👇 Cortina que mata el glow hacia abajo */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-28 z-0 bg-slate-950
                   [mask-image:linear-gradient(to_bottom,transparent,black)]
                   [-webkit-mask-image:linear-gradient(to_bottom,transparent,black)]"
      />

      <div className="container-x relative z-10">
        <SectionTitle title="Servicios" subtitle="Soluciones web a medida para cada etapa" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {SERVICES.map((s, i) => (
                <ServiceCard
                key={s.id}
                title={s.title}
                description={s.description}
                features={s.features}
                cta={s.cta}
                delay={i * 80}
                />
            ))}
            </div>
        </div>
        </section>
  );
}

/* ---------- Card interactiva (versión con alturas iguales) ---------- */
function ServiceCard({
  title,
  description,
  features,
  cta,
  delay = 0,
}: {
  title: string;
  description: string;
  features: string[];
  cta?: { href: string; label: string };
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--rx", `${(py - 0.5) * -8}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 10}deg`);
  }

  function onLeave() {
    const el = ref.current!;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "-1000px");
    el.style.setProperty("--my", "-1000px");
    setHovered(false);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{ animationDelay: `${delay}ms` }}
      className="group relative isolate animate-services-pop will-change-transform h-full" // 👈 forzamos altura completa
    >
      {/* borde degradado reactivo */}
      <div className="h-full rounded-2xl p-[1px] [background:linear-gradient(120deg,rgba(255,255,255,.12),rgba(255,255,255,.04))_padding-box,conic-gradient(from_180deg_at_var(--mx)_var(--my),var(--color-brand),#22d3ee_30%,var(--color-brand-2)_60%,transparent_100%)_border-box] transition-[background] duration-300">
        {/* contenido (glass) con spotlight */}
        <div
          className="service-spotlight flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#0f172acc,#1e3a8acc)] p-6 shadow-[0_18px_45px_rgba(15,23,42,.28)] backdrop-blur-xl"
          style={{
            transform:
              "perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateZ(0)",
            transition: "transform 180ms ease",
          }}
        >
          {/* top mini-badges animadas */}
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="badge-soft">Next.js</span>
              <span className="badge-soft">SEO</span>
              <span className="badge-soft">Accesible</span>
            </div>

            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm text-white/80">{description}</p>

            <ul className="mt-4 grid gap-2 text-[13px] text-white/90">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <svg
                    className="mt-[3px] h-3.5 w-3.5 opacity-90"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      className="fill-[var(--color-brand)]/85"
                    />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {cta && (
            <MagneticButton
              href={cta.href}
              label={cta.label}
              hovered={hovered}
            />
          )}
        </div>
      </div>
    </div>
  );
}


/* ---------- Botón magnético ---------- */
function MagneticButton({
  href,
  label,
  hovered,
}: {
  href: string;
  label: string;
  hovered: boolean;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.setProperty("--tx", `${dx * 6}px`);
    el.style.setProperty("--ty", `${dy * 6}px`);
  }
  function onLeave() {
    const el = ref.current!;
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="btn mt-6 w-full select-none rounded-xl border border-white/10 bg-[var(--color-brand)] text-slate-900 hover:brightness-110"
      style={{
        transform: hovered
          ? "translate3d(var(--tx,0px),var(--ty,0px),0)"
          : "translate3d(0,0,0)",
        transition: "transform 120ms ease",
      }}
    >
      {label}
    </a>
  );
}
