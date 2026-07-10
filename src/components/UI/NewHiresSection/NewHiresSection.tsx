import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, UserPlus } from "lucide-react";

const newHires = [
  {
    name: "Martín Suárez",
    position: "Analista de Datos - IT",
    date: "13/05/2024",
  },
];

export const NewHiresSection = () => {
  return (
    <section className="relative h-[200px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1 bg-[#0033a0]" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/70 blur-2xl" />

      <div className="relative mb-4 flex items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-[#123f7a]">
          Nuevos ingresos
        </h2>

        <Link
          to="/ingresos"
          className="group flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
        >
          Ver todos
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {newHires.map((person) => (
        <Link
          key={person.name}
          to="/ingresos"
          className="group relative flex h-[96px] items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition hover:border-blue-300 hover:shadow-md"
        >
          <div className="absolute inset-y-4 left-0 w-1 rounded-r-full bg-[#0033a0]" />

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0033a0] text-white shadow-sm transition group-hover:scale-105">
            <UserPlus className="h-7 w-7" strokeWidth={1.8} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
              <CalendarDays className="h-4 w-4" strokeWidth={1.8} />
              <span>Ingreso</span>
              <span className="tracking-normal text-[#0033a0]">
                {person.date}
              </span>
            </div>

            <p className="text-base font-bold leading-tight text-slate-800">
              {person.name}
            </p>

            <p className="mt-1 text-sm leading-tight text-slate-500">
              {person.position}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
};