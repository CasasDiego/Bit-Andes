type SectionTitleProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;                  // texto pequeño encima (opcional)
  align?: "left" | "center";         // alineación
  accent?: "brand" | "cyan" | "violet";
  id?: string;
  className?: string;
};

const ACCENTS: Record<NonNullable<SectionTitleProps["accent"]>, string> = {
  brand:
    "from-[var(--color-brand)] via-cyan-400/70 to-transparent",
  cyan:
    "from-cyan-400 via-sky-400/70 to-transparent",
  violet:
    "from-fuchsia-400 via-violet-400/70 to-transparent",
};

export default function SectionTitle({
  title,
  subtitle,
  eyebrow,
  align = "left",
  accent = "brand",
  id,
  className = "",
}: SectionTitleProps) {
  const isCenter = align === "center";
  const accentClass = ACCENTS[accent];

  return (
    <div id={id} className={`relative mb-8 ${isCenter ? "text-center" : ""} ${className}`}>
      {/* Eyebrow / sobre-título */}
      {eyebrow ? (
        <p className={`text-[11px] tracking-[0.22em] uppercase text-white/60 ${isCenter ? "mx-auto" : ""}`}>
          {eyebrow}
        </p>
      ) : null}

      {/* Título con leve gradiente en el texto */}
      <h2
        className={[
          "mt-1 font-semibold leading-tight",
          "text-[clamp(20px,3.4vw,30px)] md:text-[clamp(24px,2.6vw,34px)]",
          "bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent",
        ].join(" ")}
      >
        {title}
      </h2>

      {/* Subtítulo controlado */}
      {subtitle ? (
        <p className={`mt-2 text-[15px] md:text-[16px] text-white/70 ${isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      ) : null}

      {/* Barra/acento premium */}
      <div className={`relative ${isCenter ? "mx-auto" : ""} mt-4 h-[2px] w-28 rounded-full bg-gradient-to-r ${accentClass}`} />

      {/* Divisor fino de respiro */}
      <div className="mt-3 h-px w-full bg-gradient-to-r from-white/12 via-white/6 to-transparent" />
    </div>
  );
}
