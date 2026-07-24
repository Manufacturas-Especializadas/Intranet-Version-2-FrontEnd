import type { ElementType } from "react";
import { Factory, Map, ShoppingCart, UserCircle } from "lucide-react";

export interface DeptNewsItem {
  id: string;
  department: string;
  title: string;
  description: string;
  timeAgo: string;
  icon: ElementType;
  iconBackground: string;
  badgeClassName: string;
}

export const deptNews: DeptNewsItem[] = [
  {
    id: "1",
    department: "Ingeniería",
    title: "Actualización de protocolos de seguridad",
    description:
      "Se actualizaron los protocolos de seguridad aplicables dentro de la planta.",
    timeAgo: "Hoy",
    icon: Map,
    iconBackground: "from-[#0033a0] via-[#0757bb] to-[#1685df]",
    badgeClassName: "border-blue-100 bg-blue-50 text-blue-700",
  },
  {
    id: "2",
    department: "Producción",
    title: "Mejoras en la línea de ensamble",
    description:
      "Se implementaron mejoras que optimizan los tiempos de producción.",
    timeAgo: "Ayer",
    icon: Factory,
    iconBackground: "from-sky-500 via-blue-500 to-[#0033a0]",
    badgeClassName: "border-sky-100 bg-sky-50 text-sky-700",
  },
  {
    id: "3",
    department: "Compras",
    title: "Nuevos proveedores aprobados",
    description:
      "Se incorporaron nuevos proveedores para fortalecer costos y disponibilidad.",
    timeAgo: "Hace 2 días",
    icon: ShoppingCart,
    iconBackground: "from-indigo-500 via-blue-600 to-[#0033a0]",
    badgeClassName: "border-indigo-100 bg-indigo-50 text-indigo-700",
  },
  {
    id: "4",
    department: "Recursos Humanos",
    title: "Recordatorio: Evaluaciones de desempeño",
    description:
      "Las evaluaciones de desempeño ya se encuentran disponibles en el portal.",
    timeAgo: "Hace 3 días",
    icon: UserCircle,
    iconBackground: "from-cyan-500 via-sky-600 to-[#0033a0]",
    badgeClassName: "border-cyan-100 bg-cyan-50 text-cyan-700",
  },
];
