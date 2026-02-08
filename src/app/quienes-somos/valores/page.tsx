"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Users, TrendingUp, Award } from "lucide-react";

export default function Page() {
  const valores = [
    {
      icon: Shield,
      title: "Seriedad",
      description: "Cumplimos lo que prometemos. Cada proyecto es un compromiso que tomamos con responsabilidad y profesionalismo.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Award,
      title: "Calidad",
      description: "No hacemos las cosas a medias. Código limpio, diseño cuidado y atención al detalle en cada línea que escribimos.",
      color: "from-emerald-500 to-green-400",
    },
    {
      icon: Heart,
      title: "Confianza",
      description: "Construimos relaciones a largo plazo. Tu éxito es nuestro éxito, y trabajamos para ganarnos tu confianza cada día.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Usamos tecnología moderna y buscamos siempre la mejor solución, no la más fácil. Evolucionamos constantemente.",
      color: "from-yellow-500 to-orange-400",
    },
    {
      icon: Users,
      title: "Cercanía",
      description: "Hablamos claro, sin tecnicismos innecesarios. Estamos disponibles y te acompañamos en cada etapa del proceso.",
      color: "from-cyan-500 to-blue-400",
    },
    {
      icon: TrendingUp,
      title: "Resultados",
      description: "Nos enfocamos en lo que realmente importa: que tu inversión digital genere valor y ayude a crecer tu negocio.",
      color: "from-pink-500 to-rose-400",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Los principios que{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            guían nuestro trabajo
          </span>
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Estos valores no son solo palabras en una página, son la base de cómo trabajamos y nos relacionamos con cada cliente.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {valores.map((valor, i) => (
          <motion.div
            key={valor.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl p-[1px]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-6 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-2">
              <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                <valor.icon
                  className={`h-7 w-7 bg-gradient-to-br ${valor.color} bg-clip-text text-transparent`}
                  strokeWidth={2}
                />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {valor.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {valor.description}
              </p>

              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${valor.color} opacity-10 blur-xl`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-8 backdrop-blur-sm">
          <p className="text-lg text-white/90">¿Quieres trabajar con un equipo que vive estos valores?</p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            Hablemos de tu proyecto
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
