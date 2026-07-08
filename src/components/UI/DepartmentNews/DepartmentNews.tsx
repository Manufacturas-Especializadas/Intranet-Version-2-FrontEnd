import { Link } from "react-router-dom";
import {
  Map,
  Factory,
  ShoppingCart,
  UserCircle,
  ArrowRight,
} from "lucide-react";

interface DeptNewsItem {
  id: string;
  department: string;
  title: string;
  description: string;
  timeAgo: string;
  icon: React.ElementType;
}

const deptNews: DeptNewsItem[] = [
  {
    id: "1",
    department: "Ingeniería",
    title: "Actualización de protocolos de seguridad",
    description: "Se actualizaron los protocolos de seguridad en planta.",
    timeAgo: "Hoy",
    icon: Map,
  },
  {
    id: "2",
    department: "Producción",
    title: "Mejoras en la línea de ensamble",
    description: "Implementamos mejoras que optimizan los tiempos.",
    timeAgo: "Ayer",
    icon: Factory,
  },
  {
    id: "3",
    department: "Compras",
    title: "Nuevos proveedores aprobados",
    description: "Se incorporan nuevos proveedores para optimizar costos.",
    timeAgo: "2 días atrás",
    icon: ShoppingCart,
  },
  {
    id: "4",
    department: "RRHH",
    title: "Recordatorio: Evaluaciones de desempeño",
    description: "Ya están disponibles las evaluaciones en el portal.",
    timeAgo: "3 días atrás",
    icon: UserCircle,
  },
];

export const DepartmentNews = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-[#0033a0]">
          Noticias por departamento
        </h3>
        <Link
          to="/noticias/departamentos"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
        >
          Ver todas
        </Link>
      </div>

      <div className="flex flex-col gap-6 flex-1">
        {deptNews.map((news) => (
          <div
            key={news.id}
            className="flex gap-4 items-start group cursor-pointer"
          >
            <div
              className="shrink-0 w-12 h-12 bg-[#0033a0] rounded-full flex items-center 
              justify-center text-white group-hover:scale-105 transition-transform"
            >
              <news.icon className="w-6 h-6" strokeWidth={1.5} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="text-sm font-bold text-blue-600">
                  {news.department}
                </span>
                <span className="text-xs text-slate-400 whitespace-nowrap ml-2">
                  {news.timeAgo}
                </span>
              </div>
              <h4
                className="text-sm font-bold text-slate-800 truncate 
                group-hover:text-blue-700 transition-colors"
              >
                {news.title}
              </h4>
              <p className="text-sm text-slate-500 line-clamp-1 mt-0.5">
                {news.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <Link
          to="/noticias"
          className="flex items-center gap-1 text-sm font-bold text-[#0033a0] 
          hover:text-blue-800 transition-colors"
        >
          Ver todas las noticias
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
