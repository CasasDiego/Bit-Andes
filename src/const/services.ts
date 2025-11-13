import type { Service } from "@/types/content";

export const SERVICES: Service[] = [
  {
    id: "landing",
    title: "Landing Page de Alto Impacto",
    description: "Capta leads y valida tu propuesta con una página veloz, SEO básico y analítica.",
    features: ["Next.js + Tailwind", "Hosting en Vercel", "Optimización Core Web Vitals", "Integración con formularios"],
    cta: { label: "Quiero mi landing", href: "#contacto" },
  },
  {
    id: "corporativo",
    title: "Web Corporativa Escalable",
    description: "Sitio multi-página con CMS, blog y componentes reutilizables para crecer sin fricción.",
    features: ["App Router", "Headless CMS (opcional)", "Accesibilidad AA", "Diseño modular"],
  },
  {
    id: "ecommerce",
    title: "E-commerce Performance",
    description: "Catálogo, carrito y checkout integrados con pasarela de pago y panel administrativo.",
    features: ["Next.js + API", "Optimización de conversión", "Medios de pago", "Integraciones ERP"],
  },
];
