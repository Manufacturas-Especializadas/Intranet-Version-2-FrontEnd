import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import type { ElementType } from "react";
import Logo from "../../../assets/logomesa.png";
import {
  ExternalLink,
  GraduationCap,
  Home,
  LayoutGrid,
  Newspaper,
  TicketCheck,
  User,
  Users,
  X,
} from "lucide-react";

interface MenuItem {
  title: string;
  path: string;
  icon: ElementType;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
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
    title: "Capacitación",
    path: "/capacitacion",
    icon: GraduationCap,
  },
  {
    title: "Mi Perfil",
    path: "/perfil",
    icon: User,
  },
];

export const Sidebar = ({
  isOpen,
  onClose,
}: SidebarProps) => {
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

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar menú lateral"
        className={`
          fixed inset-0 z-40
          bg-slate-950/35
          backdrop-blur-[2px]
          transition-opacity duration-300
          md:hidden
          ${isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }
        `}
      />

      <aside
        aria-label="Menú lateral"
        className={`
          fixed inset-y-0 left-0 z-50
          flex h-dvh
          w-70 min-w-70
          flex-col overflow-hidden
          border-r border-blue-100
          bg-white
          shadow-[14px_0_45px_rgba(15,23,42,0.16)]
          transition-transform duration-300 ease-out

          md:relative
          md:inset-auto
          md:z-20
          md:h-full
          md:w-22
          md:min-w-22
          md:translate-x-0
          md:shadow-[8px_0_35px_rgba(15,23,42,0.05)]

          xl:w-57.5
          xl:min-w-57.5

          2xl:w-62
          2xl:min-w-62

          ${isOpen
            ? "translate-x-0"
            : "-translate-x-full"
          }
        `}
      >
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

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(0,51,160,0.09)_1px,transparent_1px)]
            bg-size-[22px_22px]
            opacity-[0.18]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            bottom-0 right-0 top-0
            w-px
            bg-linear-to-b
            from-transparent
            via-blue-300/70
            to-transparent
          "
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar menú"
          className="
            absolute right-3 top-3 z-30
            flex h-9 w-9
            items-center justify-center
            rounded-xl
            border border-blue-100
            bg-white/90
            text-slate-500
            shadow-sm
            backdrop-blur-md
            transition-all duration-300
            hover:border-blue-300
            hover:bg-blue-50
            hover:text-[#0033a0]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
            md:hidden
          "
        >
          <X className="h-4 w-4" strokeWidth={2.2} />
        </button>

        <div
          className="
            relative z-10
            flex min-h-29.5
            items-center justify-center
            border-b border-blue-100/80
            px-4 py-4

            md:min-h-25
            md:px-2
            md:py-3

            xl:min-h-35.5
            xl:px-4
            xl:py-5
          "
        >
          <Link
            to="/"
            onClick={onClose}
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
            <div
              aria-hidden="true"
              className="
                absolute
                h-20 w-20
                rounded-full
                bg-blue-500/20
                blur-2xl
                transition-all duration-700
                group-hover/logo:scale-125
                group-hover/logo:bg-blue-400/35

                md:h-14
                md:w-14

                xl:h-24
                xl:w-24
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                flex h-25 w-25
                items-center justify-center
                opacity-90
                transition-transform duration-700
                group-hover/logo:scale-105

                md:h-18
                md:w-18

                xl:h-30.5
                xl:w-30.5
              "
            >
              <div
                className="
                  relative h-full w-full
                  animate-[spin_28s_linear_infinite]
                "
              >
                <div
                  className="
                    absolute inset-0
                    rounded-full
                    border border-blue-200/70
                    shadow-[0_0_18px_rgba(22,133,223,0.08)]
                    transition-colors duration-500
                    group-hover/logo:border-blue-400/75
                  "
                />

                <div
                  className="
                    absolute left-1/2 top-0
                    h-full w-px
                    -translate-x-1/2
                    bg-blue-200/65
                    transition-colors duration-500
                    group-hover/logo:bg-blue-300/80
                  "
                />

                <div
                  className="
                    absolute left-1/2 top-0
                    h-full w-[72%]
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
                    absolute left-1/2 top-0
                    h-full w-[72%]
                    -translate-x-1/2
                    scale-x-[0.72]
                    rounded-full
                    border border-blue-200/45
                    transition-colors duration-500
                    group-hover/logo:border-blue-300/65
                  "
                />

                <div
                  className="
                    absolute left-0 top-1/2
                    h-px w-full
                    -translate-y-1/2
                    bg-blue-200/65
                    transition-colors duration-500
                    group-hover/logo:bg-blue-300/80
                  "
                />

                <div
                  className="
                    absolute left-1/2 top-1/2
                    h-[68%] w-full
                    -translate-x-1/2
                    -translate-y-1/2
                    scale-y-[0.42]
                    rounded-full
                    border border-blue-200/55
                    transition-colors duration-500
                    group-hover/logo:border-blue-300/75
                  "
                />

                <div
                  className="
                    absolute left-1/2 top-1/2
                    h-[68%] w-full
                    -translate-x-1/2
                    -translate-y-1/2
                    scale-y-[0.72]
                    rounded-full
                    border border-blue-200/45
                    transition-colors duration-500
                    group-hover/logo:border-blue-300/65
                  "
                />
              </div>
            </div>

            <div
              className="
                relative flex
                h-20.5 w-29
                items-center justify-center

                md:h-15.5
                md:w-18

                xl:h-23
                xl:w-31.5
              "
            >
              <img
                src={Logo}
                alt="MESA"
                draggable={false}
                className="
                  relative z-10
                  h-17.5 w-auto
                  object-contain
                  drop-shadow-[0_8px_12px_rgba(0,51,160,0.18)]
                  transition-all duration-500 ease-out
                  group-hover/logo:-translate-y-1
                  group-hover/logo:scale-110
                  group-hover/logo:drop-shadow-[0_15px_22px_rgba(0,51,160,0.32)]

                  md:h-12

                  xl:h-20
                "
              />
            </div>
          </Link>
        </div>

        <nav
          aria-label="Navegación principal"
          className="
            custom-scrollbar relative z-10
            flex flex-1 flex-col
            gap-1.5 overflow-y-auto
            px-3 py-4

            md:items-center
            md:px-2
            md:py-3

            xl:items-stretch
            xl:px-3
            xl:py-4
          "
        >
          {menuItems.map((item) => {
            const active = isActive(item.path);
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.path}
                onClick={onClose}
                title={item.title}
                aria-current={active ? "page" : undefined}
                className={`
                  group/menu relative
                  flex min-h-12
                  w-full cursor-pointer
                  items-center gap-3
                  overflow-hidden
                  rounded-xl
                  px-3 py-2.5
                  text-sm font-semibold
                  transition-all duration-300
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                  focus-visible:ring-offset-1

                  md:min-h-13
                  md:w-15
                  md:justify-center
                  md:gap-0
                  md:px-2

                  xl:w-full
                  xl:justify-start
                  xl:gap-3
                  xl:px-3

                  2xl:min-h-13
                  2xl:text-[15px]

                  ${active
                    ? `
                          bg-linear-to-r
                          from-[#0033a0]
                          via-[#0757bb]
                          to-[#0874d1]
                          text-white
                          shadow-[0_10px_24px_rgba(0,51,160,0.22)]
                        `
                    : `
                          text-slate-600
                          hover:bg-blue-50/80
                          hover:text-[#0033a0]
                          xl:hover:translate-x-1
                        `
                  }
                `}
              >
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
                            group-hover/menu:-rotate-3
                            group-hover/menu:scale-110
                            group-hover/menu:bg-white
                            group-hover/menu:text-[#0033a0]
                            group-hover/menu:shadow-sm
                          `
                    }
                  `}
                >
                  <Icon
                    className="h-4.5 w-4.5"
                    strokeWidth={active ? 2.3 : 2}
                  />
                </div>

                <span
                  className="
                    relative z-10
                    min-w-0 flex-1 truncate
                    md:hidden
                    xl:block
                  "
                >
                  {item.title}
                </span>

                {active && (
                  <span
                    className="
                      relative z-10
                      h-2 w-2 shrink-0
                      animate-pulse
                      rounded-full
                      bg-cyan-300
                      shadow-[0_0_10px_rgba(103,232,249,0.9)]
                      md:hidden
                      xl:block
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div
          className="
            relative z-10
            m-3 mt-0

            md:m-2
            md:mt-0

            xl:m-3
            xl:mt-0
          "
        >
          <div
            className="
              group/support relative
              overflow-hidden
              rounded-3xl
              border border-blue-400/20
              bg-linear-to-br
              from-[#06183f]
              via-[#0033a0]
              to-[#0874d1]
              p-4
              text-white
              shadow-[0_16px_34px_rgba(0,51,160,0.24)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_22px_42px_rgba(0,51,160,0.34)]

              md:hidden
              xl:block
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.17)_1px,transparent_1px)]
                bg-size-[19px_19px]
                opacity-20
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -right-12 -top-14
                h-36 w-36
                rounded-full
                border border-white/15
                transition-transform duration-700
                group-hover/support:scale-125
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -right-2 top-8
                h-20 w-20
                rounded-full
                bg-cyan-300/15
                blur-2xl
                transition-all duration-700
                group-hover/support:bg-cyan-300/25
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -left-1/2 top-0
                h-full w-1/3
                -skew-x-12
                bg-linear-to-r
                from-transparent
                via-white/20
                to-transparent
                opacity-0
                blur-md
                transition-all duration-700
                group-hover/support:left-[125%]
                group-hover/support:opacity-100
              "
            />

            <div className="relative z-10">
              <div className="mt-3">
                <p
                  className="
                    text-[10px] font-extrabold
                    uppercase tracking-[0.2em]
                    text-cyan-200
                  "
                >
                  Soporte MESA
                </p>

                <p className="mt-2 text-xs leading-5 text-blue-100/80">
                  Reporta una incidencia o solicita apoyo al equipo de Sistemas.
                </p>
              </div>

              <a
                href={TICKETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                aria-label="Abrir portal de tickets de Sistemas"
                className="
                  group/ticket relative mt-4
                  flex cursor-pointer
                  items-center justify-between
                  overflow-hidden
                  rounded-[14px]
                  border border-white/20
                  bg-white
                  px-3 py-2.5
                  text-xs font-extrabold
                  text-[#0033a0]
                  shadow-[0_10px_22px_rgba(3,20,60,0.24)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-50
                  hover:shadow-[0_14px_28px_rgba(3,20,60,0.32)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#0033a0]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute inset-y-0 -left-12
                    w-8 -skew-x-12
                    bg-blue-100/80
                    blur-sm
                    transition-all duration-700
                    group-hover/ticket:left-[115%]
                  "
                />

                <span className="relative flex items-center gap-2">
                  <TicketCheck
                    className="h-4 w-4"
                    strokeWidth={2.2}
                  />

                  Levantar ticket
                </span>

                <ExternalLink
                  className="
                    relative h-3.5 w-3.5
                    transition-transform duration-300
                    group-hover/ticket:translate-x-0.5
                    group-hover/ticket:-translate-y-0.5
                  "
                  strokeWidth={2.2}
                />
              </a>
            </div>
          </div>

          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Levantar ticket de soporte"
            aria-label="Levantar ticket de soporte"
            className="
              group/support-compact
              hidden h-14.5 w-15
              items-center justify-center
              rounded-2xl
              bg-linear-to-br
              from-[#0033a0]
              to-[#1685df]
              text-white
              shadow-[0_10px_24px_rgba(0,51,160,0.24)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_30px_rgba(0,51,160,0.32)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              focus-visible:ring-offset-2

              md:flex
              xl:hidden
            "
          >
            <TicketCheck
              className="
                h-5 w-5
                transition-transform duration-300
                group-hover/support-compact:scale-110
              "
              strokeWidth={2.2}
            />
          </a>

          <p
            className="
              mt-3 text-center
              text-[8px] font-bold
              uppercase tracking-[0.18em]
              text-slate-300
              md:hidden
              xl:block
            "
          >
            Manufacturas Especializadas
          </p>
        </div>
      </aside>
    </>
  );
};