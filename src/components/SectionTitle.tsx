export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-brand)]">{title}</h2>
      {subtitle ? <p className="opacity-70 mt-1">{subtitle}</p> : null}
      <div className="mt-4 h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
    </div>
  );
}
