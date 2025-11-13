export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta?: { label: string; href: string };
};

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  image?: string; // ruta pública
};
