// src/types/nav.ts
import type { ElementType } from "react";

export type NavLeaf = {
  label: string;
  href: string;
  description?: string;
  icon?: ElementType;
  external?: boolean;
  badge?: { text: string; tone?: "brand" | "neutral" };
};

export type NavGroup = {
  title?: string;
  items: NavLeaf[];
};

export type NavTopLink = {
  label: string;
  href: string;          // link simple
  groups?: undefined;
  children?: undefined;
};

export type NavTopMenu = {
  label: string;
  href?: string;         // opcional si también es contenedor clickeable
  groups?: NavGroup[];   // -> mega menu
  children?: NavLeaf[];  // -> dropdown simple
};

export type NavTopItem = NavTopLink | NavTopMenu;
export type NavConfig = NavTopItem[];
