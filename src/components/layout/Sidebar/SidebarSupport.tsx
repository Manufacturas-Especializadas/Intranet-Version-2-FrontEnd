import { ExternalLink, TicketCheck } from "lucide-react";
import { TICKETS_URL } from "../../../data/sidebar.data";

interface SidebarSupportProps {
  onClose: () => void;
}

export const SidebarSupport = ({ onClose }: SidebarSupportProps) => {
  return (
    <div className="relative z-10 m-3 mt-0 md:m-2 md:mt-0 xl:m-3 xl:mt-0">
      <div
        className="group/support relative overflow-hidden rounded-3xl border 
        border-blue-400/20 bg-linear-to-br from-[#06183f] via-[#0033a0] 
        to-[#0874d1] p-4 text-white shadow-[0_16px_34px_rgba(0,51,160,0.24)] 
        transition-all duration-300 hover:-translate-y-1 
        hover:shadow-[0_22px_42px_rgba(0,51,160,0.34)] md:hidden xl:block"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.17)_1px,transparent_1px)] 
          bg-size-[19px_19px] opacity-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full 
          border border-white/15 transition-transform duration-700 
          group-hover/support:scale-125"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 top-8 h-20 w-20 rounded-full 
          bg-cyan-300/15 blur-2xl transition-all duration-700 
          group-hover/support:bg-cyan-300/25"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 
          -skew-x-12 bg-linear-to-r from-transparent via-white/20 to-transparent 
          opacity-0 blur-md transition-all duration-700 group-hover/support:left-[125%] 
          group-hover/support:opacity-100"
        />

        <div className="relative z-10">
          <div className="mt-3">
            <p
              className="text-[10px] font-extrabold uppercase tracking-[0.2em] 
              text-cyan-200"
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
            className="group/ticket relative mt-4 flex cursor-pointer items-center 
            justify-between overflow-hidden rounded-[14px] border border-white/20 
            bg-white px-3 py-2.5 text-xs font-extrabold text-[#0033a0] 
            shadow-[0_10px_22px_rgba(3,20,60,0.24)] transition-all 
            duration-300 hover:-translate-y-0.5 hover:bg-blue-50
            hover:shadow-[0_14px_28px_rgba(3,20,60,0.32)] 
            focus:outline-none focus-visible:ring-2 
            focus-visible:ring-white focus-visible:ring-offset-2 
            focus-visible:ring-offset-[#0033a0]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -left-12 w-8 -skew-x-12 bg-blue-100/80 
              blur-sm transition-all duration-700 group-hover/ticket:left-[115%]"
            />
            <span className="relative flex items-center gap-2">
              <TicketCheck className="h-4 w-4" strokeWidth={2.2} /> Levantar
              ticket
            </span>
            <ExternalLink
              className="relative h-3.5 w-3.5 transition-transform duration-300 
              group-hover/ticket:translate-x-0.5 group-hover/ticket:-translate-y-0.5"
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
        className="group/support-compact hidden h-14.5 w-15 items-center 
        justify-center rounded-2xl bg-linear-to-br from-[#0033a0] 
        to-[#1685df] text-white shadow-[0_10px_24px_rgba(0,51,160,0.24)] 
        transition-all duration-300 hover:-translate-y-1 
        hover:shadow-[0_15px_30px_rgba(0,51,160,0.32)] focus:outline-none 
        focus-visible:ring-2 focus-visible:ring-blue-500 
        focus-visible:ring-offset-2 md:flex xl:hidden"
      >
        <TicketCheck
          className="h-5 w-5 transition-transform duration-300 
          group-hover/support-compact:scale-110"
          strokeWidth={2.2}
        />
      </a>

      <p
        className="mt-3 text-center text-[8px] font-bold uppercase tracking-[0.18em] 
        text-slate-300 md:hidden xl:block"
      >
        Manufacturas Especializadas
      </p>
    </div>
  );
};
