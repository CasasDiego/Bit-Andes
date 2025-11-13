import { SITE } from "@/const/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-x py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <h4 className="font-semibold">BitAndes</h4>
          <p className="opacity-70 mt-2 max-w-sm">
            {SITE.slogan}. Sitios rápidos, seguros y escalables.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Contacto</h4>
          <ul className="mt-2 opacity-80">
            <li>Email: {SITE.email}</li>
            <li>Tel: {SITE.phone}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Redes</h4>
          <ul className="mt-2 opacity-80">
            <li><a href={SITE.social.linkedin} target="_blank">LinkedIn</a></li>
            <li><a href={SITE.social.github} target="_blank">GitHub</a></li>
            <li><a href={SITE.social.whatsapp} target="_blank">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs opacity-60 py-4 border-t border-white/10">
        © {new Date().getFullYear()} BitAndes. Todos los derechos reservados.
      </div>
    </footer>
  );
}
