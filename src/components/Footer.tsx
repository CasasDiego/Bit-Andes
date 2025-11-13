import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/const/site";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#070C12] text-slate-300">
      {/* ====== GLOW DECORATIVE BACKGROUND ====== */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -bottom-40 left-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.08),transparent)] blur-3xl" />
        <div className="absolute -top-20 right-0 h-[20rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.08),transparent)] blur-3xl" />
      </div>

      {/* ====== MAIN GRID ====== */}
      <div className="relative container-x py-16 grid gap-10 md:grid-cols-3">
        {/* --- Brand --- */}
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logobitandes.png"
              alt="BitAndes logo"
              width={28}
              height={28}
              className="opacity-90"
            />
            <span className="text-base font-semibold text-white">BitAndes</span>
          </div>
          <p className="mt-3 max-w-xs text-sm opacity-75 leading-relaxed">
            {SITE.slogan}. Sitios rápidos, seguros y escalables.
          </p>
        </div>

        {/* --- Contact --- */}
        <div>
          <h4 className="font-semibold text-white">Contacto</h4>
          <ul className="mt-3 space-y-1.5 text-sm opacity-80">
            <li>
              <span className="text-slate-400">Email:</span>{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-white transition-colors"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <span className="text-slate-400">Tel:</span>{" "}
              <a
                href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                className="hover:text-white transition-colors"
              >
                {SITE.phone}
              </a>
            </li>
          </ul>
        </div>

        {/* --- Social --- */}
        <div>
          <h4 className="font-semibold text-white">Redes</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href={SITE.social.linkedin}
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href={SITE.social.github}
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github size={16} />
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href={SITE.social.whatsapp}
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ====== BOTTOM STRIP ====== */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} BitAndes. Todos los derechos reservados.
      </div>
    </footer>
  );
}
