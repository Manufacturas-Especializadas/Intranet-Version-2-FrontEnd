import { Bell, ChevronDown, Mail, ShieldCheck } from "lucide-react";
import { currentUser } from "../../../data/navbar.data";

export const NavbarActions = () => {
  return (
    <div className="relative z-10 flex shrink-0 items-center gap-1.5 sm:gap-2 lg:gap-3">
      <button
        type="button"
        aria-label="Ver notificaciones"
        className="
          group/action relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl
          border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300
          hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-[#0033a0]
          hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
          sm:rounded-2xl xl:h-11 xl:w-11
        "
      >
        <Bell
          className="h-4.5 w-4.5 transition-transform duration-300 group-hover/action:rotate-12 xl:h-5 xl:w-5"
          strokeWidth={2}
        />
        <span
          className="absolute -right-1 -top-1 flex h-4.5 min-w-4.5 items-center 
          justify-center rounded-full bg-linear-to-br from-[#0033a0] to-[#1685df] px-1 
          text-[8px] font-extrabold text-white shadow-md ring-2 ring-white xl:h-5 
          xl:min-w-5 xl:text-[9px]"
        >
          3
        </span>
      </button>

      <button
        type="button"
        aria-label="Ver mensajes"
        className="
          group/action relative hidden h-10 w-10 cursor-pointer items-center justify-center rounded-xl
          border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300
          hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-[#0033a0]
          hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
          sm:flex sm:rounded-2xl xl:h-11 xl:w-11
        "
      >
        <Mail
          className="h-4.5 w-4.5 transition-transform duration-300 
          group-hover/action:-translate-y-0.5 xl:h-5 xl:w-5"
          strokeWidth={2}
        />
        <span
          className="absolute -right-1 -top-1 flex h-4.5 min-w-4.5 items-center 
          justify-center rounded-full bg-linear-to-br from-[#0033a0] to-[#1685df] px-1 
          text-[8px] font-extrabold text-white shadow-md ring-2 ring-white xl:h-5 
          xl:min-w-5 xl:text-[9px]"
        >
          2
        </span>
      </button>

      <div
        className="hidden h-9 w-px bg-linear-to-b from-transparent via-slate-300 
        to-transparent lg:block"
      />

      <button
        type="button"
        className="
          group/profile flex cursor-pointer items-center gap-2 rounded-xl border border-transparent
          p-1 text-left transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/70
          hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
          sm:rounded-2xl xl:gap-3 xl:p-1.5 xl:pr-2
        "
      >
        <div className="relative">
          <div
            className="flex h-10 w-10 items-center justify-center overflow-hidden 
            rounded-xl bg-linear-to-br from-[#0033a0] via-[#0757bb] to-[#1685df] 
            text-white shadow-[0_8px_20px_rgba(0,51,160,0.22)] ring-2 ring-blue-100 
            transition-all duration-300 group-hover/profile:scale-105 
            group-hover/profile:ring-blue-200 sm:rounded-2xl xl:h-11 xl:w-11"
          >
            <span className="text-sm font-extrabold">
              {currentUser.initials}
            </span>
          </div>
          <span
            className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full 
            border-2 border-white bg-emerald-500"
          />
        </div>

        <div className="hidden min-w-0 2xl:block">
          <div className="flex items-center gap-1.5">
            <p
              className="truncate text-sm font-extrabold leading-none 
              text-[#123f7a]"
            >
              {currentUser.fullName}
            </p>
            <ShieldCheck
              className="h-3.5 w-3.5 shrink-0 text-blue-500"
              strokeWidth={2}
            />
          </div>
          <p className="mt-1 truncate text-[11px] text-slate-500">
            {currentUser.department}
          </p>
        </div>
        <ChevronDown
          className="hidden h-4 w-4 shrink-0 text-slate-400 transition-transform 
          duration-300 group-hover/profile:translate-y-0.5 
          group-hover/profile:text-[#0033a0] 2xl:block"
          strokeWidth={2}
        />
      </button>
    </div>
  );
};
