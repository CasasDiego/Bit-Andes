"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { SITE } from "@/const/site";

const metricContainer: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const metricItem: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type MetricKey = "speed" | "mobile" | "seo" | "security" | "scalable" | "support";

type Metric = {
  title: string;
  subtitle: string;
  icon: MetricKey;
};

const METRICS: Metric[] = [
  {
    icon: "speed",
    title: "Carga rápida",
    subtitle: "Tu web abre en pocos segundos, incluso con muchas visitas.",
  },
  {
    icon: "mobile",
    title: "Pantalla adaptable",
    subtitle: "Diseño pensado primero para móvil y luego para desktop.",
  },
  {
    icon: "seo",
    title: "Te encuentran en Google",
    subtitle: "Estructura preparada para posicionar mejor tu negocio.",
  },
  {
    icon: "security",
    title: "Segura y estable",
    subtitle: "Buenas prácticas y servidores confiables para que no se caiga.",
  },
  {
    icon: "scalable",
    title: "Lista para crecer",
    subtitle: "Puedes añadir secciones o funciones sin rehacer todo.",
  },
  {
    icon: "support",
    title: "Acompañamiento",
    subtitle: "Te ayudamos después del lanzamiento, no te dejamos solo.",
  },
];

const METRIC_META: Record<
  MetricKey,
  {
    label: string;
    value: number;
  }
> = {
  speed: { label: "Performance", value: 96 },
  mobile: { label: "Mobile first", value: 94 },
  seo: { label: "SEO ready", value: 92 },
  security: { label: "Seguridad", value: 95 },
  scalable: { label: "Escalabilidad", value: 93 },
  support: { label: "Soporte", value: 97 },
};

function MetricIcon({ icon }: { icon: MetricKey }) {
  const common = "h-4 w-4";

  switch (icon) {
    case "speed":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path
            d="M4.5 19.5A9 9 0 1 1 19.5 4.5L13 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <rect
            x="7"
            y="3"
            width="10"
            height="18"
            rx="2"
            ry="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="17.5" r="0.9" fill="currentColor" />
        </svg>
      );
    case "seo":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <circle
            cx="11"
            cy="11"
            r="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M15 15l3.5 3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "security":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <path
            d="M12 3.5L7 5.5v5.1c0 3.2 2.1 6.1 5 6.9 2.9-.8 5-3.7 5-6.9V5.5L12 3.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 11.5l1.3 1.4 2.2-2.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "scalable":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <rect
            x="4"
            y="10"
            width="5"
            height="7"
            rx="1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <rect
            x="10"
            y="7"
            width="5"
            height="10"
            rx="1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <rect
            x="16"
            y="5"
            width="4"
            height="12"
            rx="1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden>
          <circle
            cx="12"
            cy="8"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M5.5 18.5a6.5 6.5 0 0 1 13 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[calc(var(--nav-height)+40px)] pb-20">
      {/* ===== Background (layers) ===== */}
      <div aria-hidden className="hero-mesh absolute inset-0" />
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.18]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.18),transparent)] blur-3xl"
      />
      <div
        aria-hidden
        className="hero-noise absolute inset-0 opacity-[0.06] mix-blend-overlay"
      />

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
            Diseñamos y desarrollamos sitios web claros, rápidos y listos para
            crecer con tu negocio. Tú te enfocas en tus clientes, nosotros en
            que la parte digital funcione y se vea profesional.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={SITE.cta.href} className="btn btn-brand">
              {SITE.cta.label}
            </Link>
            <a href="#proyectos" className="btn btn-ghost">
              Ver proyectos
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2 text-[11px] text-white/70">
            {[
              "Sitios rápidos y optimizados",
              "Pensado para móvil y desktop",
              "Acompañamiento después del lanzamiento",
              "Proceso claro paso a paso",
            ].map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Right: metric cards sci-fi ===== */}
        <div className="relative">
          <motion.div
            className="group relative ml-15 rounded-3xl p-[1px] md:-translate-x-[5%] lg:-translate-x-[8%] xl:-translate-x-[10%]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* halo degradado alrededor */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[conic-gradient(at_50%_50%,rgba(59,130,246,.28),rgba(16,185,129,.28),transparent_70%)] opacity-60 blur-[6px]" />

            {/* panel vidrio */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.32)]">
              {/* halo interior suave */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(52,211,153,0.16),transparent_55%)] opacity-80" />

              <div className="relative rounded-[calc(1.5rem-1px)] p-5 ring-1 ring-white/10">
                {/* ===== Header etiquetas pro ===== */}
                <div className="mb-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2 text-[11px] text-white/70">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 backdrop-blur">
                      <span className="relative flex h-4 w-4 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
                        <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                      </span>
                      <span className="font-medium tracking-tight">
                        Suite de beneficios BitAndes
                      </span>
                    </div>

                    <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/30 px-2 py-0.5 text-[10px] text-white/60 md:inline-flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>Panel de rendimiento en tiempo real</span>
                    </div>
                  </div>

                  {/* chips mini */}
                  <div className="flex flex-wrap gap-1.5 text-[10px] text-white/65">
                    {[
                      "Core Web Vitals cuidado",
                      "Arquitectura lista para escalar",
                      "Mantenimiento y soporte continuo",
                    ].map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 backdrop-blur-sm"
                      >
                        <span className="h-1 w-1 rounded-full bg-emerald-300" />
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* === Mobile: grid clásico === */}
                <motion.div
                  variants={metricContainer}
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.08 }}
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:hidden"
                >
                  {METRICS.map((m, i) => {
                    const meta = METRIC_META[m.icon];
                    return (
                      <motion.div
                        key={m.title}
                        variants={metricItem}
                        className={
                          "relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-white/18 via-white/6 to-white/10 " +
                          (i === 0 ? "sm:col-span-2" : "")
                        }
                        whileHover={{ translateY: -4, scale: 1.02 }}
                      >
                        <div
                          className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0
                                     transition-opacity duration-300
                                     bg-[radial-gradient(60%_60%_at_30%_0%,rgba(59,130,246,.22),transparent_60%),radial-gradient(60%_60%_at_70%_100%,rgba(16,185,129,.22),transparent_60%)]
                                     group-hover:opacity-100"
                        />
                        <div
                          className="relative z-[1] flex min-h-[5.4rem] flex-col justify-between rounded-[1rem]
                                     border border-white/10 bg-white/[0.06] px-4 py-3 text-left
                                     shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_24px_rgba(2,6,23,0.35)]
                                     transition-transform duration-300"
                        >
                          <div className="mb-1 flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                                <span className="pointer-events-none absolute inset-0 rounded-xl bg-[conic-gradient(from_140deg_at_50%_50%,rgba(56,189,248,0.5),rgba(45,212,191,0.4),transparent_60%)] opacity-40 blur-[6px]" />
                                <MetricIcon icon={m.icon} />
                              </div>
                              <div className="flex flex-col">
                                <div className="text-[13px] font-semibold tracking-tight text-white">
                                  {m.title}
                                </div>
                                <span className="text-[10px] text-emerald-300/80">
                                  {meta.label}
                                </span>
                              </div>
                            </div>
                            <span className="text-[10px] text-white/60">
                              {meta.value}%
                            </span>
                          </div>
                          <div className="text-[11px] leading-snug text-white/70">
                            {m.subtitle}
                          </div>
                          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-cyan-300"
                              style={{ width: `${meta.value}%` }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Glow central general */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.22),transparent_70%)] blur-xl" />

                {/* === Desktop: layout circular sci-fi === */}
                <motion.div
                  variants={metricContainer}
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.1 }}
                  className="relative hidden md:flex items-center justify-center md:mt-6 lg:mt-8"
                >
                  <div className="relative mx-auto aspect-square w-[400px]">
                    {/* anillo exterior girando lentamente */}
                    <motion.div
                      className="pointer-events-none absolute inset-4 rounded-full border border-dashed border-white/15"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* mini puntos sobre el anillo que orbitan */}
                    <motion.div
                      className="pointer-events-none absolute inset-4"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 70,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {[0, 1, 2].map((idx) => (
                        <div
                          key={idx}
                          className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]"
                          style={{
                            transform: `rotate(${idx * 120}deg) translateY(-4px)`,
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* núcleo central */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.9),transparent_70%)] blur-xl" />
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/50 bg-emerald-300/10 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />

                    {/* líneas que conectan al centro */}
                    {METRICS.map((_, i) => {
                      const total = METRICS.length;
                      const angleDeg = (i / total) * 360 - 90;

                      return (
                        <div
                          key={`line-${i}`}
                          className="pointer-events-none absolute left-1/2 top-1/2 origin-left"
                          style={{
                            transform: `translate(-50%, -50%) rotate(${angleDeg}deg)`,
                          }}
                        >
                          <div className="h-[1px] w-[120px] bg-gradient-to-r from-emerald-300/40 via-cyan-300/60 to-transparent" />
                        </div>
                      );
                    })}

                    {/* anillo de cards SIN oscilación, estático */}
                    <div className="relative">
                    {METRICS.map((m, i) => {
                      const total = METRICS.length;
                      const angle = (i / total) * 2 * Math.PI - Math.PI / 2;

                      // ✅ Ajustes recomendados
                      const radius = 150;      // tamaño del anillo
                      const baseTop = 52;      // "altura" del centro del anillo en %
                      const offsetX = -93;     // corrige un poco a la izquierda

                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;

                      const meta = METRIC_META[m.icon];

                      return (
                        <div
                          key={m.title}
                          className="absolute"
                          style={{
                            top: `calc(${baseTop}% + ${y}px)`,          // 👈 aquí usamos baseTop
                            left: `calc(50% + ${x + offsetX}px)`,
                          }}
                        >
                          <motion.div
                            variants={metricItem}
                            whileHover={{ scale: 1.06 }}
                            className="relative lg:mt-34 overflow-hidden rounded-[999px] p-[1px] bg-white/12 backdrop-blur-lg border border-white/15 shadow-[0_8px_22px_rgba(0,0,0,0.45)] min-w-[160px] max-w-[185px]"
                          >
                            <div className="flex flex-col gap-1.5 px-3 py-2.5">
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2 min-w-0">
                                  <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                                    <span className="pointer-events-none absolute inset-0 rounded-full bg-[conic-gradient(from_200deg_at_50%_50%,rgba(56,189,248,0.6),rgba(52,211,153,0.5),transparent_60%)] opacity-70 blur-[5px]" />
                                    <MetricIcon icon={m.icon} />
                                  </div>
                                  <span className="truncate text-[12px] font-semibold text-white leading-tight">
                                    {m.title}
                                  </span>
                                </div>
                                <span className="text-[10px] text-white/65">
                                  {meta.value}%
                                </span>
                              </div>
                              <span className="text-[10px] text-emerald-300/80">
                                {meta.label}
                              </span>
                              <span className="line-clamp-3 text-[10px] text-white/70">
                                {m.subtitle}
                              </span>
                              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/10">
                                <div
                                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-cyan-300"
                                  style={{ width: `${meta.value}%` }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}

                    </div>
                  </div>
                </motion.div>
              </div>

              {/* brillo lateral sutil al hover del panel */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-[1px] rounded-3xl bg-[radial-gradient(60%_60%_at_0%_50%,rgba(59,130,246,.14),transparent),radial-gradient(60%_60%_at_100%_50%,rgba(16,185,129,.14),transparent)]" />
              </div>
            </div>
          </motion.div>

          {/* glow de flotación */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 -bottom-6 h-12 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.35),transparent)] blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}
