import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function QuienesSomosLayout({
  children,
}: { children: React.ReactNode }) {
  const SECTION_TITLE = "Quiénes somos";
  return (
    <>
      <Navbar />
      <main className="relative min-h-[60vh] pt-[calc(var(--nav-height)+24px)] pb-16">
        {/* fondo sutil */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_10%_0%,rgba(16,185,129,0.06),transparent),radial-gradient(40rem_30rem_at_110%_0%,rgba(59,130,246,0.06),transparent)]" />
        <div className="container-x">
          <header className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
              BitAndes · {SECTION_TITLE}
            </p>
            <h1 className="mt-1 text-2xl font-semibold"> {SECTION_TITLE} </h1>
          </header>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
