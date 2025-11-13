import type { Project } from "@/types/content";

export const PROJECTS: Project[] = [
  {
    id: "burbuclean",
    title: "Burbuclean",
    description: "Landing animada con efectos de vidrio y componentes de conversión.",
    stack: ["Next.js", "Tailwind v4", "SEO"],
    image: "/assets/project-placeholder-1.jpg",
    link: "#",
  },
  {
    id: "voltsegur",
    title: "VoltSegur",
    description: "Sitio corporativo técnico con tabla de servicios y blog.",
    stack: ["Next.js", "MDX", "Shad Components"],
    image: "/assets/project-placeholder-2.jpg",
    link: "#",
  },
  {
    id: "ferco",
    title: "Ferco Medical",
    description: "Catálogo e-commerce con filtros, SSR y optimización de caché.",
    stack: ["Next.js", "Edge", "Analytics"],
    image: "/assets/project-placeholder-3.jpg",
    link: "#",
  },
];
