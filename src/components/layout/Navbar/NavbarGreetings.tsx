import { Menu } from "lucide-react";
import { currentUser } from "../../../data/navbar.data";

interface NavbarGreetingsProps {
  onMenuClick?: () => void;
}

export const NavbarGreetings = ({ onMenuClick }: NavbarGreetingsProps) => {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Abrir menú principal"
        className="
          flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl
          border border-blue-100 bg-white text-[#0033a0] shadow-sm
          transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300
          hover:bg-blue-50 hover:shadow-md focus:outline-none focus-visible:ring-2
          focus-visible:ring-blue-500 md:hidden
        "
      >
        <Menu className="h-5 w-5" strokeWidth={2.2} />
      </button>

      <div className="min-w-0 md:hidden">
        <div className="flex items-center gap-1.5">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 
            shadow-[0_0_8px_rgba(16,185,129,0.6)]"
          />
          <p
            className="truncate text-[9px] font-extrabold uppercase tracking-[0.18em] 
            text-blue-600"
          >
            Intranet MESA
          </p>
        </div>
        <p className="mt-0.5 truncate text-sm font-black text-[#123f7a]">
          Hola, {currentUser.firstName}
        </p>
      </div>

      <div className="hidden shrink-0 flex-col xl:flex">
        <div className="mb-1 flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span
              className="absolute h-full w-full animate-ping rounded-full 
              bg-emerald-400 opacity-60"
            />
            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-600">
            Intranet MESA
          </p>
        </div>
        <h1 className="text-xl font-black leading-tight text-[#123f7a] 2xl:text-2xl">
          ¡Hola, {currentUser.firstName}!
        </h1>
        <p className="mt-0.5 text-xs text-slate-500">
          Bienvenido al portal corporativo
        </p>
      </div>
    </div>
  );
};
