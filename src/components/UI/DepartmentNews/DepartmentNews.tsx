import type { ElementType } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Clock3,
  Factory,
  Map,
  ShoppingCart,
  UserCircle,
} from "lucide-react";

interface DeptNewsItem {
  id: string;
  department: string;
  title: string;
  description: string;
  timeAgo: string;
  icon: ElementType;
  iconBackground: string;
  badgeClassName: string;
}

const deptNews: DeptNewsItem[] = [
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

const visibleDeptNews = deptNews.slice(0, 3);

export const DepartmentNews = () => {
  return (
    <section
      className="
        group/section relative
        h-full
        overflow-hidden
        rounded-[28px]
        border border-blue-100
        bg-white
        p-5
        shadow-[0_12px_36px_rgba(15,23,42,0.07)]
        transition-all duration-300
        hover:border-blue-200
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.11)]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-x-0 top-0 h-36
          bg-gradient-to-br
          from-blue-50
          via-white
          to-sky-50
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-20 -top-20
          h-52 w-52
          rounded-full
          bg-blue-200/35
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-20 bottom-0
          h-44 w-44
          rounded-full
          bg-sky-100/60
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(0,51,160,0.08)_1px,transparent_1px)]
          [background-size:22px_22px]
          opacity-[0.14]
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        <header className="mb-4 flex items-start gap-3">
          <div
            className="
              flex h-12 w-12 shrink-0
              items-center justify-center
              rounded-2xl
              bg-gradient-to-br
              from-[#0033a0]
              to-[#1685df]
              text-white
              shadow-[0_10px_24px_rgba(0,51,160,0.24)]
              transition-all duration-300
              group-hover/section:-rotate-3
              group-hover/section:scale-105
            "
          >
            <Building2 className="h-5 w-5" strokeWidth={2.2} />
          </div>

          <div className="min-w-0 pt-0.5">
            <p
              className="
                text-[10px] font-extrabold
                uppercase tracking-[0.22em]
                text-blue-600
              "
            >
              Áreas MESA
            </p>

            <h2
              className="
                mt-1 text-[20px] font-black
                leading-tight text-[#123f7a]
              "
            >
              Noticias por departamento
            </h2>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Actualizaciones, avisos y comunicados de cada área.
            </p>
          </div>
        </header>

        <div className="mb-4 flex items-center gap-2">
          <div className="h-1 w-12 rounded-full bg-[#0033a0]" />
          <div className="h-1 w-5 rounded-full bg-sky-400" />
          <div className="h-1 w-2 rounded-full bg-blue-200" />
        </div>

        <div className="flex flex-1 flex-col gap-2.5">
          {visibleDeptNews.map((news, index) => {
            const Icon = news.icon;

            return (
              <Link
                key={news.id}
                to="/noticias/departamentos"
                aria-label={`Leer noticia de ${news.department}: ${news.title}`}
                className="
                  group/news relative
                  grid min-h-[90px]
                  grid-cols-[48px_minmax(0,1fr)_36px]
                  items-center gap-3
                  overflow-hidden
                  rounded-[20px]
                  border border-slate-200
                  bg-white
                  p-3
                  shadow-[0_6px_20px_rgba(15,23,42,0.05)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-300
                  hover:bg-gradient-to-br
                  hover:from-blue-50/70
                  hover:via-white
                  hover:to-sky-50/70
                  hover:shadow-[0_14px_28px_rgba(0,51,160,0.11)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                  focus-visible:ring-offset-2
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    -right-14 -top-14
                    h-32 w-32
                    rounded-full
                    bg-blue-50
                    transition-transform duration-500
                    group-hover/news:scale-125
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute bottom-0 left-0 top-0
                    w-1
                    bg-gradient-to-b
                    from-[#0033a0]
                    to-[#1685df]
                    opacity-0
                    transition-opacity duration-300
                    group-hover/news:opacity-100
                  "
                />

                <div
                  className={`
                    relative z-10 flex
                    h-12 w-12
                    shrink-0 items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    text-white
                    shadow-[0_8px_18px_rgba(0,51,160,0.18)]
                    transition-all duration-300
                    group-hover/news:-rotate-3
                    group-hover/news:scale-105
                    ${news.iconBackground}
                  `}
                >
                  <div
                    aria-hidden="true"
                    className="
                      absolute -right-3 -top-3
                      h-8 w-8
                      rounded-full
                      bg-white/15
                    "
                  />

                  <Icon className="relative h-5 w-5" strokeWidth={1.9} />
                </div>

                <div className="relative z-10 min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className={`
                        inline-flex max-w-full
                        truncate rounded-lg
                        border px-2 py-0.5
                        text-[8px] font-extrabold
                        uppercase tracking-[0.1em]
                        ${news.badgeClassName}
                      `}
                    >
                      {news.department}
                    </span>
                  </div>

                  <h3
                    className="
                      truncate text-[13px]
                      font-extrabold text-[#123f7a]
                      transition-colors duration-300
                      group-hover/news:text-[#0033a0]
                    "
                  >
                    {news.title}
                  </h3>

                  <p
                    className="
                      mt-0.5 line-clamp-1
                      text-[11px] leading-4
                      text-slate-500
                    "
                  >
                    {news.description}
                  </p>

                  <div
                    className="
                      mt-1.5 flex items-center gap-1.5
                      text-[9px] font-semibold
                      text-slate-400
                    "
                  >
                    <Clock3 className="h-3 w-3" strokeWidth={2} />
                    {news.timeAgo}
                  </div>
                </div>

                <div
                  className="
                    relative z-10
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-xl
                    border border-slate-200
                    bg-white
                    text-slate-400
                    shadow-sm
                    transition-all duration-300
                    group-hover/news:translate-x-1
                    group-hover/news:border-[#0033a0]
                    group-hover/news:bg-[#0033a0]
                    group-hover/news:text-white
                  "
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
                </div>

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    bottom-2 right-12
                    text-[32px] font-black
                    leading-none text-blue-100/60
                    opacity-0
                    transition-opacity duration-300
                    group-hover/news:opacity-100
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            );
          })}
        </div>

        <Link
          to="/noticias/departamentos"
          className="
            group/more mt-auto
            flex items-center justify-center
            gap-2 rounded-xl
            border border-blue-100
            bg-blue-50/60
            px-4 py-2.5
            text-[11px] font-extrabold
            text-[#0033a0]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-blue-300
            hover:bg-blue-100/70
            hover:shadow-sm
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
          "
        >
          Ver más noticias

          <ArrowRight
            className="
              h-3.5 w-3.5
              transition-transform duration-300
              group-hover/more:translate-x-1
            "
            strokeWidth={2.2}
          />
        </Link>
      </div>
    </section>
  );
};