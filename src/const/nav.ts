import { Code2, Smartphone, Cloud, Palette, Users2, ShieldCheck, Target } from "lucide-react";
import type { NavConfig } from "@/types/nav";

export const NAV: NavConfig = [
  { label: "Inicio", href: "/" },

  // ----- Menú simple (dropdown en una columna)
  {
    label: "Quiénes somos",
    children: [
      {
        label: "Nosotros",
        href: "/quienes-somos/nosotros",
        description: "Historia, equipo y experiencia.",
        icon: Users2,
      },
      {
        label: "Nuestros valores",
        href: "/quienes-somos/valores",
        description: "Seriedad, calidad y confianza.",
        icon: ShieldCheck,
      },
      {
        label: "Misión y visión",
        href: "/quienes-somos/mision-vision",
        description: "Hacia dónde vamos y cómo.",
        icon: Target,
      },
    ],
  },

  // ----- Mega-menu (varias columnas con grupos)
  {
    label: "Servicios",
    groups: [
      {
        title: "Desarrollo",
        items: [
          { label: "Web (Next.js)", href: "/servicios/desarrollo-web", icon: Code2, description: "Sitios, landings y apps web." },
          { label: "Apps móviles", href: "/servicios/apps-moviles", icon: Smartphone, description: "Expo/React Native." },
        ],
      },
      {
        title: "Cloud & DevOps",
        items: [
          { label: "Cloud & Kubernetes", href: "/servicios/cloud", icon: Cloud, description: "CI/CD, k3s y observabilidad." },
        ],
      },
      {
        title: "Diseño",
        items: [
          { label: "UI/UX & Branding", href: "/servicios/ui-ux", icon: Palette, description: "Identidad visual y prototipos." },
        ],
      },
    ],
  },

  // ----- Link directo
  { label: "Proyectos", href: "/#proyectos" },

  // ----- Link directo
  { label: "Contacto", href: "/#contacto" },
];
