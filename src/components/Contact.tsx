import SectionTitle from "./SectionTitle";
import { SITE } from "@/const/site";

export default function Contact() {
  return (
    <section id="contacto" className="relative z-20 py-16 overflow-hidden bg-slate-950">
      <div aria-hidden className="absolute inset-0 -z-10 bg-slate-950" />

      <div className="container-x">
        <SectionTitle title="Contacto" subtitle="Cuéntanos sobre tu proyecto" />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* IZQUIERDA: Form premium (sin card) */}
          <form className="contact-panel contact-pad grid gap-4">
            <input className="contact-field" name="name" placeholder="Nombre y empresa" required />
            <input className="contact-field" name="email" type="email" placeholder="Email" required />
            <input className="contact-field" name="phone" placeholder="Teléfono (opcional)" />
            <textarea className="contact-field contact-textarea" name="message" placeholder="Necesito una web para..." />
            <button type="submit" className="btn btn-brand">Enviar consulta</button>
            <p className="text-xs opacity-70">Al enviar aceptas ser contactad@ por BitAndes.</p>
          </form>

          {/* DERECHA: Panel info, misma estética */}
          <div className="contact-panel contact-panel--alt contact-pad">
            <h3 className="text-lg font-semibold">¿Prefieres hablar ahora?</h3>
            <p className="opacity-80 mt-2">
              Escríbenos por WhatsApp o envíanos un correo. Respondemos el mismo día.
            </p>

            <div className="mt-4 contact-list">
              <div>
                <span className="opacity-80">Email: </span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div>
                <span className="opacity-80">WhatsApp: </span>
                <a href={SITE.social.whatsapp} target="_blank">Chatear</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
