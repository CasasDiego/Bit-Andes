import SectionTitle from "./SectionTitle";
import { SITE } from "@/const/site";

export default function Contact() {
  return (
    <section id="contacto" className="container-x py-12">
      <SectionTitle title="Contacto" subtitle="Cuéntanos sobre tu proyecto" />
      <div className="grid gap-6 md:grid-cols-2">
        <form className="card p-6 grid gap-4">
          <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" name="name" placeholder="Nombre y empresa" required />
          <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" name="email" type="email" placeholder="Email" required />
          <input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" name="phone" placeholder="Teléfono (opcional)" />
          <textarea className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 min-h-28" name="message" placeholder="Necesito una web para..." />
          <button type="submit" className="btn btn-brand">Enviar consulta</button>
          <p className="text-xs opacity-70">Al enviar aceptas ser contactad@ por BitAndes.</p>
        </form>

        <div className="card p-6">
          <h3 className="text-lg font-semibold">¿Prefieres hablar ahora?</h3>
          <p className="opacity-80 mt-2">Escríbenos por WhatsApp o envíanos un correo. Respondemos el mismo día.</p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>Email: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li>WhatsApp: <a className="underline" href={SITE.social.whatsapp} target="_blank">Chatear</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
