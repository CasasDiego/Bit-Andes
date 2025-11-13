import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BitAndes — Desarrollo de Páginas Web",
  description: "Creamos sitios rápidos, escalables y listos para crecer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
