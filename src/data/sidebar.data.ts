import type { ElementType } from "react";
import {
  GraduationCap,
  Home,
  LayoutGrid,
  Newspaper,
  User,
  Users,
} from "lucide-react";

export interface MenuItem {
  title: string;
  path: string;
  icon: ElementType;
}

export const TICKETS_URL =
  "https://orange-sea-091f38210.7.azurestaticapps.net/";

export const menuItems: MenuItem[] = [
  { title: "Inicio", path: "/", icon: Home },
  { title: "Aplicaciones", path: "/aplicaciones", icon: LayoutGrid },
  { title: "Noticias", path: "/noticias", icon: Newspaper },
  { title: "Mi Departamento", path: "/departamento", icon: Users },
  { title: "Capacitación", path: "/capacitacion", icon: GraduationCap },
  { title: "Mi Perfil", path: "/perfil", icon: User },
];
