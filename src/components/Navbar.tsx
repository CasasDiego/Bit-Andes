"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV } from "@/const/nav";
import { SITE } from "@/const/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onHash = () => setHash(location.hash || "");
    onScroll();
    onHash();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 isolate transition-all ${
        scrolled
          ? "backdrop-blur bg-black/30 border-b border-white/10"
          : "bg-slate-950/25" // base sutil para que el color destaque
      }`}
      style={{ height: "var(--nav-height)" }}
    >
      {/* ====== CAPAS DE FONDO (vidrio + color + grid + ruido) ====== */}
      <div aria-hidden className="navbg" />
      <div aria-hidden className="glasscoat" />
      <div aria-hidden className={`navgrid ${scrolled ? "animate prism" : ""}`} />
      <div aria-hidden className="navnoise" />

      {/* ====== CONTENIDO (por encima de las capas) ====== */}
      <nav className="relative z-10 container-x h-full flex items-center justify-between gap-4">
        {/* LOGO con pill de vidrio */}
        <Link href="/" className="group relative flex items-center" aria-label="Ir al inicio">
        <div className="logo-pill px-1.5 py-0.5 rounded-2xl overflow-hidden">
            <div className="relative h-10 w-36 md:h-18 md:w-48 rounded-xl overflow-hidden">
            <Image
                src="/assets/logobit.png"
                alt="BitAndes"
                fill
                className="object-cover rounded-xl drop-shadow-[0_0_6px_rgba(0,0,0,0.45)]"
                priority
            />
            </div>
        </div>
        </Link>

        {/* MENÚ DESKTOP */}
        <ul className="hidden md:flex items-center gap-7 text-sm">
          {NAV.map((i) => {
            const isActive = hash === i.href || (i.href === "/" && pathname === "/");
            return (
              <li key={i.href} className="relative group">
                <a
                  href={i.href}
                  className="relative inline-flex items-center gap-1.5 py-1 transition opacity-80 hover:opacity-100"
                >
                  {i.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-2)] transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
          <li>
            {/* CTA con borde neón animado */}
            <a
              href={SITE.cta.href}
              className="relative inline-flex items-center justify-center rounded-[1.25rem] px-4 py-2 font-semibold text-black transition focus:outline-none"
            >
              <span
                aria-hidden
                className="absolute -inset-[2px] rounded-[1.35rem] bg-[conic-gradient(from_180deg_at_50%_50%,var(--color-brand)_0deg,transparent_120deg,var(--color-brand-2)_240deg,var(--color-brand)_360deg)] blur-[6px] opacity-60 animate-[spin_6s_linear_infinite]"
              />
              <span className="relative z-[1] btn btn-brand">{SITE.cta.label}</span>
            </a>
          </li>
        </ul>

        {/* TOGGLE MÓVIL */}
        <button
          className="md:hidden inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </nav>

        {/* DRAWER MÓVIL */}
        <div
        className={`md:hidden fixed top-[var(--nav-height)] inset-x-0 z-[70]
                    transition-[max-height] duration-500 ease-in-out
                    ${open ? "max-h-[calc(100dvh-var(--nav-height))]" : "max-h-0"}
                    bg-slate-950/90 backdrop-blur-xl border-t border-white/10
                    overflow-y-auto overscroll-contain`}
        >
        <div className="relative px-4 py-6 space-y-4 animate-[fadeIn_0.4s_ease-out]">
            <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-3 h-6 bg-gradient-to-b from-[var(--color-brand)/25] to-transparent blur-xl"
            />

            <ul className="grid gap-3">
            {NAV.map((i, idx) => (
                <li key={i.href} className="animate-[slideIn_0.3s_ease-out_forwards]" style={{ animationDelay: `${idx * 0.05}s` }}>
                <a
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03]
                            px-4 py-3 text-base text-slate-100 font-medium hover:bg-white/10 hover:border-white/20 transition-all"
                >
                    <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-brand)] shadow-[0_0_8px_var(--color-brand)]" />
                    {i.label}
                </a>
                </li>
            ))}
            </ul>

            <div className="pt-4 border-t border-white/10">
            <a
                href={SITE.cta.href}
                onClick={() => setOpen(false)}
                className="relative block text-center rounded-xl py-3 font-semibold
                        bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-2)]
                        text-white shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:opacity-90 transition"
            >
                {SITE.cta.label}
            </a>
            </div>
        </div>
        </div>


    </header>
  );
}
