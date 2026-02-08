"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap, Target, TrendingUp, Shield, Clock } from "lucide-react";

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Transformamos ideas en{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            soluciones digitales reales
          </span>
        </h2>
      </motion.div>

      {/* Main content card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="group relative mx-auto mb-12 overflow-hidden rounded-3xl p-[1px]"
      >
        <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(at_50%_50%,rgba(59,130,246,.25),rgba(16,185,129,.25),transparent_70%)] opacity-70 blur-sm" />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.12),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(52,211,153,0.10),transparent_50%)]" />

          <div className="relative grid gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-12">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="flex h-full items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-20 blur-2xl" />
                    <Code2 className="relative h-24 w-24 text-emerald-400/40" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                BitAndes
              </h3>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  BitAndes es una empresa enfocada en el desarrollo de soluciones digitales estratégicas.
                </p>
                <p>
                  Diseñamos plataformas web a medida y las integramos con nuestro CRM, permitiendo a nuestros clientes tener mayor control sobre sus relaciones comerciales, optimizar procesos y tomar decisiones basadas en información real.
                </p>
                <p>
                  Trabajamos con tecnología moderna, procesos claros y una visión a largo plazo que acompaña el crecimiento de cada negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Why choose us section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12"
      >
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-white md:text-3xl">¿Por qué elegirnos?</h3>
          <p className="mt-2 text-white/70">No solo construimos sitios web, construimos herramientas que impulsan tu negocio</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              title: "Enfoque estratégico",
              description: "No hacemos páginas genéricas. Cada proyecto comienza entendiendo tu negocio, tus objetivos y tu audiencia. Diseñamos soluciones que resuelven problemas reales y generan resultados medibles.",
            },
            {
              icon: TrendingUp,
              title: "Crecimiento sostenible",
              description: "Construimos plataformas escalables que crecen contigo. Desde un sitio corporativo hasta un sistema complejo con CRM integrado, nuestra arquitectura está lista para evolucionar sin necesidad de empezar de cero.",
            },
            {
              icon: Shield,
              title: "Tecnología confiable",
              description: "Usamos frameworks modernos y probados como Next.js, React y TypeScript. Tu sitio será rápido, seguro y fácil de mantener. Además, seguimos las mejores prácticas de la industria en cada línea de código.",
            },
            {
              icon: Clock,
              title: "Acompañamiento continuo",
              description: "No desaparecemos después del lanzamiento. Te acompañamos con soporte técnico, actualizaciones y mejoras continuas. Tu éxito digital es nuestro compromiso a largo plazo.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl p-[1px]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-6 backdrop-blur-sm">
                <div className="mb-3 inline-flex rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-2.5">
                  <item.icon className="h-5 w-5 text-emerald-400" strokeWidth={2} />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mb-12"
      >
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-white md:text-3xl">Nuestros valores</h3>
          <p className="mt-2 text-white/70">Los principios que guían cada proyecto</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Rocket,
              title: "Innovación",
              description: "Tecnología moderna para soluciones que escalan con tu negocio",
              color: "from-blue-500 to-cyan-400",
            },
            {
              icon: Users,
              title: "Enfoque humano",
              description: "Acompañamos cada etapa de tu transformación digital con cercanía",
              color: "from-emerald-500 to-green-400",
            },
            {
              icon: Zap,
              title: "Resultados",
              description: "Decisiones basadas en datos reales y métricas que importan",
              color: "from-purple-500 to-pink-400",
            },
            {
              icon: Code2,
              title: "Calidad",
              description: "Código limpio, procesos claros y buenas prácticas siempre",
              color: "from-cyan-500 to-blue-400",
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl p-[1px]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-6 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1">
                <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                  <feature.icon className={`h-6 w-6 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} strokeWidth={2} />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-white">{feature.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">{feature.description}</p>
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-10 blur-xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-center"
      >
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-8 backdrop-blur-sm">
          <p className="text-lg text-white/90">¿Listo para llevar tu negocio al siguiente nivel?</p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            Conversemos
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
