"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV } from "@/const/nav";
import type { NavGroup, NavLeaf, NavTopItem } from "@/types/nav";
import { Menu, X, ChevronDown } from "lucide-react";

/* ===== util ===== */
function clsx(...a: Array<string | false | null | undefined>) {
  return a.filter(Boolean).join(" ");
}
function isTopLink(item: NavTopItem): item is import("@/types/nav").NavTopLink {
  return "href" in item && !("groups" in item) && !("children" in item);
}
function flattenLeaves(item: NavTopItem): NavLeaf[] {
  if ("children" in item && item.children) return item.children;
  if ("groups" in item && item.groups) return item.groups.flatMap((g) => g.items);
  return [];
}

/** Fondo premium para el navbar (gradiente azul/cian) */
const NAV_BG =
  "bg-slate-950/90 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(79,70,229,0.26),transparent_55%)]";

/* ===== component ===== */
export default function Navbar() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null); // desktop
  const navRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al click fuera (desktop)
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setHovered(null);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // Cerrar con ESC (desktop y mobile)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setHovered(null);
        setOpenMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={clsx(
        "relative fixed inset-x-0 top-0 z-50 border-b border-cyan-500/20 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.9)]",
        NAV_BG
      )}
      style={{ height: "var(--nav-height,72px)" }}
    >
      {/* Línea de luz inferior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
      />

      <nav
        ref={navRef}
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8"
        aria-label="Principal"
      >
        {/* Brand con marco/glow */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl bg-slate-950/80 px-3 py-1.5 ring-1 ring-cyan-400/40 shadow-[0_0_28px_rgba(56,189,248,0.45)]"
          aria-label="BitAndes"
        >
          <Image
            src="/assets/logobit.png"
            alt="BitAndes"
            width={120}
            height={28}
            priority
            className="h-auto w-[120px] brightness-[2.0] contrast-[1.25]"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-4 md:flex">
          {NAV.map((item, i) => {
            const leaves = flattenLeaves(item);
            const isActiveTop = isTopLink(item)
              ? pathname === item.href
              : leaves.some((l) => pathname.startsWith(l.href));

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered((v) => (v === i ? null : v))}
              >
                <TopLevel item={item} expanded={hovered === i} active={isActiveTop} />
                {/* Panels */}
                {"groups" in item && item.groups ? (
                  <MegaPanel groups={item.groups} show={hovered === i} />
                ) : "children" in item && item.children ? (
                  <DropdownPanel items={item.children} show={hovered === i} />
                ) : null}
              </li>
            );
          })}

          <li>
            <Link
              href="/#contacto"
              className="group relative inline-flex items-center justify-center gap-1 overflow-hidden rounded-full border border-cyan-400/70 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-5 py-2 text-[13px] font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-[0_0_45px_rgba(56,189,248,0.9)]"
            >
              <span>Cotiza tu web</span>
            </Link>
          </li>
        </ul>

        {/* Mobile toggler */}
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-cyan-500/20 bg-slate-900/70 shadow-[0_0_18px_rgba(15,23,42,0.9)] md:hidden"
          aria-label={openMobile ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpenMobile((v) => !v)}
          aria-expanded={openMobile}
          aria-controls="mobile-menu"
        >
          {openMobile ? <X className="w-5" /> : <Menu className="w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <MobileMenu open={openMobile} onClose={() => setOpenMobile(false)} />
    </header>
  );
}

/* ====================== Subcomponentes ====================== */

function TopLevel({
  item,
  expanded,
  active,
}: {
  item: NavTopItem;
  expanded: boolean;
  active: boolean;
}) {
  const isMenu = "groups" in item || "children" in item;

  const baseClasses =
    "relative flex items-center gap-1 px-3 py-2.5 text-[13px] font-medium tracking-tight transition-colors";

  if (isTopLink(item) && !isMenu) {
    return (
      <div className="flex">
        <Link
          href={item.href}
          className={clsx(
            baseClasses,
            active
              ? "text-sky-50 after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-sky-500 after:content-['']"
              : "text-slate-200 hover:text-sky-50 hover:bg-white/[0.03]"
          )}
        >
          {item.label}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex">
      <button
        className={clsx(
          baseClasses,
          (expanded || active) &&
            "text-sky-50 after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-sky-500 after:content-['']",
          !expanded &&
            !active &&
            "text-slate-200 hover:text-sky-50 hover:bg-white/[0.03]"
        )}
        aria-haspopup="menu"
        aria-expanded={expanded}
        type="button"
      >
        <span>{item.label}</span>
        <ChevronDown
          className={clsx("transition-transform duration-200", expanded && "rotate-180")}
          size={16}
          aria-hidden
        />
      </button>
    </div>
  );
}

/* Dropdown simple (una columna) */
function DropdownPanel({ items, show }: { items: NavLeaf[]; show: boolean }) {
  return (
    <div
      className={clsx(
        "absolute left-1/2 -translate-x-1/2 pt-2",
        show ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        className={clsx(
          "w-[320px] overflow-hidden rounded-2xl border border-cyan-400/25 bg-slate-950/95 p-2 shadow-2xl ring-1 ring-cyan-500/20 transition-all",
          show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        )}
        role="menu"
      >
        {items.map((link) => (
          <Leaf key={link.label} link={link} />
        ))}
      </div>
    </div>
  );
}

/* Mega-menu (multi-columna) */
function MegaPanel({ groups, show }: { groups: NavGroup[]; show: boolean }) {
  return (
    <div
      className={clsx(
        "absolute left-1/2 -translate-x-1/2 pt-2",
        show ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        className={clsx(
          "grid w-[720px] grid-cols-1 gap-4 rounded-2xl border border-cyan-400/25 bg-slate-950/95 p-4 shadow-2xl ring-1 ring-cyan-500/20 transition-all md:grid-cols-3",
          show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        )}
        role="menu"
      >
        {groups.map((g, idx) => (
          <div key={idx} className="space-y-2">
            {g.title && (
              <p className="px-2 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                {g.title}
              </p>
            )}
            <div className="rounded-xl bg-white/[0.02] p-2">
              {g.items.map((link) => (
                <Leaf key={link.label} link={link} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Ítem hoja con icono, descripción y badge */
function Leaf({ link }: { link: NavLeaf }) {
  const pathname = usePathname();
  const Icon = link.icon;
  const isActive = pathname.startsWith(link.href);

  return (
    <Link
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
      className={clsx(
        "flex items-start gap-3 rounded-lg px-2 py-2.5 text-sm transition-colors",
        isActive
          ? "bg-cyan-500/15 text-sky-50"
          : "text-slate-200 hover:bg-white/[0.05] hover:text-sky-50"
      )}
      role="menuitem"
    >
      {Icon ? (
        <span className="mt-0.5 rounded-md bg-white/[0.04] p-1.5 text-cyan-300">
          <Icon size={16} />
        </span>
      ) : null}
      <span className="min-w-0">
        <span className="inline-flex items-center gap-2">
          {link.label}
          {link.badge && (
            <span
              className={clsx(
                "rounded-full px-1.5 py-0.5 text-[10px]",
                link.badge.tone === "brand"
                  ? "bg-cyan-500/20 text-cyan-200"
                  : "bg-white/10 text-slate-300"
              )}
            >
              {link.badge.text}
            </span>
          )}
        </span>
        {link.description && (
          <p className="mt-0.5 line-clamp-2 text-[12px] text-slate-400">
            {link.description}
          </p>
        )}
      </span>
    </Link>
  );
}

/* Menú mobile con acordeones */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

  return (
    <div
      id="mobile-menu"
      className={clsx(
        "md:hidden transition-[max-height] duration-300",
        open
          ? "max-h-[85vh] overflow-auto border-t border-cyan-500/20 bg-slate-950/95 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(79,70,229,0.22),transparent_55%)] backdrop-blur-xl"
          : "max-h-0 overflow-hidden"
      )}
    >
      <ul className="px-4 py-3">
        {NAV.map((item, i) => {
          const isMenu = "groups" in item || "children" in item;

          if (isTopLink(item) && !isMenu) {
            const active = pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  onClick={onClose}
                  href={item.href}
                  className={clsx(
                    "block rounded-lg px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-cyan-500/20 text-sky-50"
                      : "text-slate-200 hover:bg-white/[0.04]"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          // Acordeón
          const leaves: NavLeaf[] = flattenLeaves(item);
          const openAcc = expanded === i;
          const anyActive = leaves.some((l) => pathname.startsWith(l.href));

          return (
            <li key={item.label} className="border-t border-white/5 first:border-t-0">
              <button
                className={clsx(
                  "flex w-full items-center justify-between px-3 py-3 text-sm transition-colors",
                  anyActive ? "text-sky-50" : "text-slate-200"
                )}
                onClick={() => setExpanded(openAcc ? null : i)}
                aria-expanded={openAcc}
                type="button"
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={clsx("transition-transform", openAcc && "rotate-180")}
                  size={18}
                />
              </button>
              <div className={clsx(openAcc ? "block" : "hidden")}>
                {leaves.map((l) => {
                  const activeLeaf = pathname.startsWith(l.href);
                  return (
                    <Link
                      key={l.label}
                      href={l.href}
                      onClick={onClose}
                      className={clsx(
                        "block rounded-lg px-4 py-2 text-sm transition-colors",
                        activeLeaf
                          ? "bg-cyan-500/20 text-sky-50"
                          : "text-slate-300 hover:bg-white/[0.04]"
                      )}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            </li>
          );
        })}

        <li className="mt-3">
          <Link
            href="/#contacto"
            onClick={onClose}
            className="block rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-4 py-2 text-center text-[13px] font-semibold text-white shadow-[0_0_26px_rgba(56,189,248,0.8)]"
          >
            Cotiza tu web
          </Link>
        </li>
      </ul>
    </div>
  );
}
