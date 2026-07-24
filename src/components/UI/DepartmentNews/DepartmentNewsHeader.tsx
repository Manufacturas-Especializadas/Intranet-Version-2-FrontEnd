import { Building2 } from "lucide-react";

export const DepartmentNewsHeader = () => {
  return (
    <>
      <header className="mb-4 flex items-start gap-3">
        <div
          className="
            flex h-12 w-12 shrink-0
            items-center justify-center
            rounded-2xl
            bg-linear-to-br
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
    </>
  );
};
