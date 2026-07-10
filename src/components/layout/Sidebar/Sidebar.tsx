import { Link, useLocation } from "react-router-dom";
import type { ElementType } from "react";
import Logo from "../../../assets/logomesa.png";
import {
  ExternalLink,
  GraduationCap,
  HeadphonesIcon,
  Home,
  LayoutGrid,
  Newspaper,
  User,
  Users,
  Zap,
} from "lucide-react";

interface MenuItem {
  title: string;
  path: string;
  icon: ElementType;
}

const TICKETS_URL =
  "https://orange-sea-091f38210.7.azurestaticapps.net/";

const menuItems: MenuItem[] = [
  {
    title: "Inicio",
    path: "/",
    icon: Home,
  },
  {
    title: "Aplicaciones",
    path: "/aplicaciones",
    icon: LayoutGrid,
  },
  {
    title: "Noticias",
    path: "/noticias",
    icon: Newspaper,
  },
  {
    title: "Mi Departamento",
    path: "/departamento",
    icon: Users,
  },
  {
    title: "Capacitaciones",
    path: "/capacitaciones",
    icon: GraduationCap,
  },
  {
    title: "Mi Perfil",
    path: "/perfil",
    icon: User,
  },
];

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <aside
      className="
        relative z-20
        flex h-full
        w-[230px] min-w-[230px]
        flex-col overflow-hidden
        border-r border-blue-100
        bg-white
        shadow-[8px_0_35px_rgba(15,23,42,0.05)]
      "
    >
      {/* Iluminación ambiental superior */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-20 -top-20
          h-64 w-64
          rounded-full
          bg-blue-200/30
          blur-3xl
        "
      />

      {/* Iluminación central derecha */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 top-1/3
          h-64 w-64
          rounded-full
          bg-cyan-100/25
          blur-3xl
        "
      />

      {/* Patrón sutil */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(0,51,160,0.09)_1px,transparent_1px)]
          [background-size:22px_22px]
          opacity-[0.18]
        "
      />

      {/* Línea azul decorativa */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-0 right-0 top-0
          w-px
          bg-gradient-to-b
          from-transparent
          via-blue-300/70
          to-transparent
        "
      />

      {/* Área del logo */}
      <div
        className="
    relative z-10
    flex min-h-[142px]
    items-center justify-center
    border-b border-blue-100/80
    px-4 py-5
  "
      >
        <Link
          to="/"
          aria-label="Ir al inicio"
          className="
      group/logo relative
      flex cursor-pointer
      items-center justify-center
      focus:outline-none
      focus-visible:ring-2
      focus-visible:ring-blue-500
      focus-visible:ring-offset-2
    "
        >
          {/* Resplandor detrás del logo */}
          <div
            aria-hidden="true"
            className="
        absolute
        h-24 w-24
        rounded-full
        bg-blue-500/20
        blur-2xl
        transition-all duration-700
        group-hover/logo:scale-125
        group-hover/logo:bg-blue-400/35
      "
          />

          {/* Globo con meridianos detrás del logo */}
          <div
            aria-hidden="true"
            className="
        pointer-events-none absolute
        flex h-[122px] w-[122px] items-center justify-center
        opacity-90
        transition-transform duration-700
        group-hover/logo:scale-105
      "
          >
            <div
              className="
          relative h-full w-full
          animate-[spin_28s_linear_infinite]
        "
            >
              {/* Círculo exterior */}
              <div
                className="
            absolute inset-0 rounded-full
            border border-blue-200/70
            shadow-[0_0_18px_rgba(22,133,223,0.08)]
            transition-colors duration-500
            group-hover/logo:border-blue-400/75
          "
              />

              {/* Meridiano central */}
              <div
                className="
            absolute left-1/2 top-0 h-full w-px
            -translate-x-1/2
            bg-blue-200/65
            transition-colors duration-500
            group-hover/logo:bg-blue-300/80
          "
              />

              {/* Meridianos laterales */}
              <div
                className="
            absolute left-1/2 top-0 h-full w-[72%]
            -translate-x-1/2
            scale-x-[0.42]
            rounded-full
            border border-blue-200/55
            transition-colors duration-500
            group-hover/logo:border-blue-300/75
          "
              />

              <div
                className="
            absolute left-1/2 top-0 h-full w-[72%]
            -translate-x-1/2
            scale-x-[0.72]
            rounded-full
            border border-blue-200/45
            transition-colors duration-500
            group-hover/logo:border-blue-300/65
          "
              />

              {/* Ecuador */}
              <div
                className="
            absolute left-0 top-1/2 h-px w-full
            -translate-y-1/2
            bg-blue-200/65
            transition-colors duration-500
            group-hover/logo:bg-blue-300/80
          "
              />

              {/* Paralelos */}
              <div
                className="
            absolute left-1/2 top-1/2 h-[68%] w-full
            -translate-x-1/2 -translate-y-1/2
            scale-y-[0.42]
            rounded-full
            border border-blue-200/55
            transition-colors duration-500
            group-hover/logo:border-blue-300/75
          "
              />

              <div
                className="
            absolute left-1/2 top-1/2 h-[68%] w-full
            -translate-x-1/2 -translate-y-1/2
            scale-y-[0.72]
            rounded-full
            border border-blue-200/45
            transition-colors duration-500
            group-hover/logo:border-blue-300/65
          "
              />
            </div>
          </div>

          {/* Logo sin fondo rectangular */}
          <div
            className="
        relative flex
        h-[92px] w-[126px]
        items-center justify-center
      "
          >
            <img
              src={Logo}
              alt="MESA"
              draggable={false}
              className="
          relative z-10
          h-[80px] w-auto
          object-contain
          drop-shadow-[0_8px_12px_rgba(0,51,160,0.18)]
          transition-all duration-500 ease-out
          group-hover/logo:-translate-y-1
          group-hover/logo:scale-110
          group-hover/logo:drop-shadow-[0_15px_22px_rgba(0,51,160,0.32)]
        "
            />
          </div>
        </Link>
      </div>


      {/* Navegación */}
      <nav
        aria-label="Navegación principal"
        className="
          custom-scrollbar relative z-10
          flex flex-1 flex-col
          gap-1.5 overflow-y-auto
          px-3 py-4
        "
      >
        {menuItems.map((item) => {
          const active = isActive(item.path);
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              to={item.path}
              aria-current={active ? "page" : undefined}
              className={`
                group/menu relative
                flex min-h-[48px]
                cursor-pointer items-center
                gap-3 overflow-hidden
                rounded-xl
                px-3 py-2.5
                text-sm font-semibold
                transition-all duration-300
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-1
                ${active
                  ? `
                      bg-gradient-to-r
                      from-[#0033a0]
                      via-[#0757bb]
                      to-[#0874d1]
                      text-white
                      shadow-[0_10px_24px_rgba(0,51,160,0.22)]
                    `
                  : `
                      text-slate-600
                      hover:translate-x-1
                      hover:bg-blue-50/80
                      hover:text-[#0033a0]
                    `
                }
              `}
            >
              {/* Brillo del elemento activo */}
              {active && (
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    -right-8 -top-8
                    h-24 w-24
                    rounded-full
                    bg-white/15
                    blur-xl
                  "
                />
              )}

              {/* Indicador lateral */}
              <span
                aria-hidden="true"
                className={`
                  absolute bottom-2 left-0 top-2
                  w-1 rounded-r-full
                  transition-all duration-300
                  ${active
                    ? "bg-cyan-300 opacity-100 shadow-[0_0_12px_rgba(103,232,249,0.8)]"
                    : "bg-blue-500 opacity-0 group-hover/menu:opacity-100"
                  }
                `}
              />

              {/* Ícono */}
              <div
                className={`
                  relative z-10
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-xl
                  transition-all duration-300
                  ${active
                    ? "bg-white/15 text-white shadow-inner"
                    : `
                        bg-slate-50 text-slate-400
                        group-hover/menu:rotate-[-3deg]
                        group-hover/menu:scale-110
                        group-hover/menu:bg-white
                        group-hover/menu:text-[#0033a0]
                        group-hover/menu:shadow-sm
                      `
                  }
                `}
              >
                <Icon
                  className="h-[18px] w-[18px]"
                  strokeWidth={active ? 2.3 : 2}
                />
              </div>

              <span className="relative z-10 min-w-0 flex-1 truncate">
                {item.title}
              </span>

              {/* Punto activo */}
              {active && (
                <span
                  className="
                    relative z-10
                    h-2 w-2 shrink-0
                    animate-pulse
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_10px_rgba(103,232,249,0.9)]
                  "
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Soporte técnico */}
      <div className="relative z-10 m-3 mt-0">
        <div
          className="
            group/support relative
            overflow-hidden
            rounded-[22px]
            border border-blue-100
            bg-gradient-to-br
            from-[#f0f7ff]
            via-white
            to-[#e9f6ff]
            p-4
            shadow-[0_10px_28px_rgba(0,51,160,0.09)]
            transition-all duration-300
            hover:-translate-y-1
            hover:border-blue-200
            hover:shadow-[0_17px_35px_rgba(0,51,160,0.16)]
          "
        >
          {/* Círculo decorativo */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -right-10 -top-10
              h-28 w-28
              rounded-full
              border border-blue-200/50
              transition-transform duration-700
              group-hover/support:scale-125
            "
          />

          {/* Reflejo de tarjeta */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -left-1/2 top-0
              h-full w-1/3
              -skew-x-12
              bg-white/60
              opacity-0
              blur-md
              transition-all duration-700
              group-hover/support:left-[120%]
              group-hover/support:opacity-100
            "
          />

          <div className="relative z-10 mb-3 flex items-center gap-3">
            <div
              className="
                relative flex h-11 w-11
                shrink-0 items-center justify-center
                rounded-2xl
                bg-[#0033a0]
                text-white
                shadow-[0_8px_20px_rgba(0,51,160,0.25)]
                transition-transform duration-300
                group-hover/support:rotate-3
                group-hover/support:scale-105
              "
            >
              <HeadphonesIcon className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold text-[#123f7a]">
                Soporte técnico
              </p>

              <p className="mt-0.5 text-[11px] text-slate-500">

              </p>
            </div>
          </div>

          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative z-10
              flex cursor-pointer
              items-center justify-center
              gap-2 overflow-hidden
              rounded-xl
              bg-gradient-to-r
              from-[#0033a0]
              to-[#0874d1]
              px-3 py-2.5
              text-xs font-bold text-white
              shadow-[0_8px_18px_rgba(0,51,160,0.22)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_12px_24px_rgba(0,51,160,0.30)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              focus-visible:ring-offset-2
            "
          >
            <span
              aria-hidden="true"
              className="
                absolute inset-y-0 -left-10
                w-8 -skew-x-12
                bg-white/25
                blur-sm
                transition-all duration-700
                group-hover/support:left-[115%]
              "
            />

            <span className="relative">
              Levantar ticket
            </span>

            <ExternalLink
              className="
                relative h-3.5 w-3.5
                transition-transform duration-300
                group-hover/support:translate-x-0.5
                group-hover/support:-translate-y-0.5
              "
            />
          </a>
        </div>

        <p className="mt-3 text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-300">
          MANUFACTURAS ESPECIALIZADAS
        </p>
      </div>
    </aside>
  );
};