"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Nuestra{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            dirección y propósito
          </span>
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Hacia dónde vamos y cómo lo hacemos
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Misión */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative overflow-hidden rounded-3xl p-[1px]"
        >
          <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(at_50%_50%,rgba(16,185,129,.25),rgba(34,211,238,.25),transparent_70%)] opacity-70 blur-sm" />

          <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_50%)]" />

            <div className="relative p-8 md:p-10">
              <div className="mb-6 inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <Target className="h-8 w-8 text-emerald-400" strokeWidth={2} />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Misión
              </h3>

              <p className="text-white/80 leading-relaxed text-lg">
                Desarrollar soluciones digitales inteligentes que ayuden a empresas y emprendedores a crecer, optimizar sus procesos y gestionar mejor sus relaciones con clientes, combinando tecnología moderna, diseño estratégico y un enfoque real en resultados.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Soluciones inteligentes", "Optimización de procesos", "Resultados reales"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visión */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group relative overflow-hidden rounded-3xl p-[1px]"
        >
          <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(at_50%_50%,rgba(59,130,246,.25),rgba(147,51,234,.25),transparent_70%)] opacity-70 blur-sm" />

          <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.12),transparent_50%)]" />

            <div className="relative p-8 md:p-10">
              <div className="mb-6 inline-flex rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4">
                <Eye className="h-8 w-8 text-blue-400" strokeWidth={2} />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Visión
              </h3>

              <p className="text-white/80 leading-relaxed text-lg">
                Ser un aliado tecnológico de referencia para empresas que buscan crecer y profesionalizar su gestión digital, ofreciendo soluciones integrales que evolucionen junto a sus negocios.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Aliado tecnológico", "Crecimiento profesional", "Evolución continua"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12"
      >
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-8 backdrop-blur-sm text-center">
          <h3 className="text-xl font-semibold text-white mb-3">
            Trabajamos con propósito
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Cada proyecto que desarrollamos está alineado con nuestra misión de ayudar a crecer negocios y nuestra visión de ser el aliado digital que las empresas necesitan.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            Comencemos tu proyecto
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
