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
    <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-[#0033a0]">
            Noticias por departamento
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Actualizaciones recientes por área
          </p>
        </div>

        <Link
          to="/noticias/departamentos"
          className="group flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
        >
          Ver todas
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="space-y-3">
        {deptNews.map((news) => (
          <Link
            key={news.id}
            to="/noticias/departamentos"
            className="group grid min-h-[86px] grid-cols-[48px_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-transparent p-3 transition hover:border-blue-100 hover:bg-blue-50/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0033a0] transition group-hover:scale-105 group-hover:bg-[#0033a0] group-hover:text-white">
              <news.icon className="h-6 w-6" strokeWidth={1.7} />
            </div>

            <div className="min-w-0">
              <span className="text-sm font-bold text-blue-600">
                {news.department}
              </span>

              <h4 className="mt-0.5 truncate text-sm font-bold text-slate-800 transition-colors group-hover:text-[#0033a0]">
                {news.title}
              </h4>

              <p className="mt-1 line-clamp-1 text-sm text-slate-500">
                {news.description}
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500 transition group-hover:bg-white">
              {news.timeAgo}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};