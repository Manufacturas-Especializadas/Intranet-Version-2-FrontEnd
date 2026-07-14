import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  UserPlus,
  UsersRound,
} from "lucide-react";

interface NewHire {
  id: string;
  name: string;
  position: string;
  department: string;
  date: string;
  photo?: string;
}

const newHires: NewHire[] = [
  {
    id: "1",
    name: "Martín Suárez",
    position: "Analista de Datos",
    department: "Sistemas",
    date: "13/05/2024",
  },
];

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const NewHiresSection = () => {
  const featuredHire = newHires[0];

  return (
    <section
      className="
        group/section relative flex h-full
        min-h-[220px] flex-col overflow-hidden
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
          inset-x-0 top-0 h-40
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

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-0 right-0 top-0
          w-1
          bg-gradient-to-b
          from-[#0033a0]
          via-[#1685df]
          to-sky-300
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        <header className="mb-4 flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3">
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
              <UserPlus
                className="h-5 w-5"
                strokeWidth={2.2}
              />
            </div>

            <div className="min-w-0 pt-0.5">

              <h2
                className="
                  mt-1 text-[20px] font-black
                  leading-tight text-[#123f7a]
                "
              >
                Nuevos ingresos
              </h2>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Damos la bienvenida a nuevos colaboradores.
              </p>
            </div>
          </div>

          <Link
            to="/ingresos"
            className="
              group/link flex shrink-0
              items-center gap-1.5
              rounded-xl
              border border-blue-100
              bg-white/90
              px-3 py-2
              text-[11px] font-extrabold
              text-[#0033a0]
              shadow-sm
              backdrop-blur-md
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-blue-300
              hover:bg-blue-50
              hover:shadow-md
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
            "
          >
            Ver todos

            <ArrowRight
              className="
                h-3.5 w-3.5
                transition-transform duration-300
                group-hover/link:translate-x-1
              "
              strokeWidth={2.2}
            />
          </Link>
        </header>

        <div className="mb-4 flex items-center gap-2">
          <div className="h-1 w-12 rounded-full bg-[#0033a0]" />
          <div className="h-1 w-5 rounded-full bg-sky-400" />
          <div className="h-1 w-2 rounded-full bg-blue-200" />
        </div>

        {featuredHire ? (
          <Link
            to="/ingresos"
            aria-label={`Consultar información de ${featuredHire.name}`}
            className="
              group/hire relative flex flex-1
              items-center gap-4 overflow-hidden
              rounded-[22px]
              border border-blue-100
              bg-gradient-to-br
              from-blue-50/80
              via-white
              to-sky-50/80
              p-4
              shadow-[0_7px_22px_rgba(15,23,42,0.06)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-blue-300
              hover:shadow-[0_16px_34px_rgba(0,51,160,0.13)]
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
                -right-16 -top-16
                h-36 w-36
                rounded-full
                border border-blue-100/80
                transition-transform duration-700
                group-hover/hire:scale-125
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute bottom-3 left-0 top-3
                w-1 rounded-r-full
                bg-gradient-to-b
                from-[#0033a0]
                to-[#1685df]
              "
            />

            <div className="relative shrink-0">
              {featuredHire.photo ? (
                <img
                  src={featuredHire.photo}
                  alt={featuredHire.name}
                  draggable={false}
                  className="
                    h-16 w-16 rounded-[20px]
                    object-cover
                    shadow-[0_9px_22px_rgba(0,51,160,0.18)]
                    ring-2 ring-white
                    transition-all duration-300
                    group-hover/hire:-rotate-2
                    group-hover/hire:scale-105
                  "
                />
              ) : (
                <div
                  className="
                    flex h-16 w-16
                    items-center justify-center
                    rounded-[20px]
                    bg-gradient-to-br
                    from-[#0033a0]
                    via-[#0757bb]
                    to-[#1685df]
                    text-lg font-black
                    text-white
                    shadow-[0_9px_22px_rgba(0,51,160,0.22)]
                    ring-2 ring-white
                    transition-all duration-300
                    group-hover/hire:-rotate-2
                    group-hover/hire:scale-105
                  "
                >
                  {getInitials(featuredHire.name)}
                </div>
              )}

              <span
                className="
                  absolute -bottom-1 -right-1
                  flex h-6 w-6
                  items-center justify-center
                  rounded-lg
                  border-2 border-white
                  bg-sky-400
                  text-white
                  shadow-sm
                "
              >
                <UserPlus
                  className="h-3 w-3"
                  strokeWidth={2.5}
                />
              </span>
            </div>

            <div className="relative min-w-0 flex-1">
              <div
                className="
                  mb-1.5 flex flex-wrap
                  items-center gap-2
                "
              >
                <span
                  className="
                    flex items-center gap-1.5
                    rounded-lg
                    border border-blue-100
                    bg-white
                    px-2.5 py-1
                    text-[9px] font-extrabold
                    uppercase tracking-[0.12em]
                    text-blue-700
                    shadow-sm
                  "
                >
                  <CalendarDays
                    className="h-3 w-3"
                    strokeWidth={2}
                  />

                  Ingreso {featuredHire.date}
                </span>
              </div>

              <h3
                className="
                  truncate text-base font-black
                  leading-tight text-[#123f7a]
                  transition-colors duration-300
                  group-hover/hire:text-[#0033a0]
                "
              >
                {featuredHire.name}
              </h3>

              <div className="mt-2 flex flex-col gap-1">
                <p
                  className="
                    flex min-w-0 items-center
                    gap-1.5 text-xs
                    font-semibold text-slate-600
                  "
                >
                  <BriefcaseBusiness
                    className="h-3.5 w-3.5 shrink-0 text-blue-500"
                    strokeWidth={2}
                  />

                  <span className="truncate">
                    {featuredHire.position}
                  </span>
                </p>

                <p
                  className="
                    flex min-w-0 items-center
                    gap-1.5 text-[11px]
                    font-medium text-slate-400
                  "
                >
                  <UsersRound
                    className="h-3.5 w-3.5 shrink-0"
                    strokeWidth={2}
                  />

                  <span className="truncate">
                    {featuredHire.department}
                  </span>
                </p>
              </div>
            </div>

            <div
              className="
                relative flex h-9 w-9
                shrink-0 items-center justify-center
                rounded-xl
                border border-blue-100
                bg-white
                text-slate-400
                shadow-sm
                transition-all duration-300
                group-hover/hire:translate-x-1
                group-hover/hire:border-[#0033a0]
                group-hover/hire:bg-[#0033a0]
                group-hover/hire:text-white
              "
            >
              <ArrowRight
                className="h-4 w-4"
                strokeWidth={2.2}
              />
            </div>
          </Link>
        ) : (
          <div
            className="
              flex min-h-[110px] flex-1
              flex-col items-center justify-center
              rounded-[22px]
              border border-dashed border-blue-200
              bg-blue-50/40
              px-5 text-center
            "
          >
            <div
              className="
                mb-3 flex h-11 w-11
                items-center justify-center
                rounded-2xl
                bg-white
                text-[#0033a0]
                shadow-sm
              "
            >
              <UserPlus className="h-5 w-5" strokeWidth={2} />
            </div>

            <h3 className="text-sm font-extrabold text-[#123f7a]">
              No hay ingresos recientes
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Los nuevos colaboradores aparecerán aquí.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};