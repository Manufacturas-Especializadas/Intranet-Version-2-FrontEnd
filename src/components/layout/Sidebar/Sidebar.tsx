import { X } from "lucide-react";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarNav } from "./SidebarNav";
import { SidebarSupport } from "./SidebarSupport";
import { useSidebar } from "../../../hooks/useSidebar";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { isActive } = useSidebar(isOpen, onClose);

  return (
    <>
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar menú lateral"
        className={`fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-[2px] 
            transition-opacity duration-300 md:hidden ${
              isOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
      />

      <aside
        aria-label="Menú lateral"
        className={`fixed inset-y-0 left-0 z-50 flex h-dvhw-70 min-w-70 flex-col 
          overflow-hidden border-r border-blue-100 
          bg-white shadow-[14px_0_45px_rgba(15,23,42,0.16)] transition-transform 
          duration-300 ease-out md:relative md:inset-auto md:z-20 md:h-full md:w-22 
          md:min-w-22 md:translate-x-0 md:shadow-[8px_0_35px_rgba(15,23,42,0.05)] 
          xl:w-57.5 xl:min-w-57.5 2xl:w-62 2xl:min-w-62 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full 
          bg-blue-200/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/3 h-64 w-64 rounded-full 
          bg-cyan-100/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(0,51,160,0.09)_1px,transparent_1px)] 
          bg-size-[22px_22px] opacity-[0.18]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 top-0 w-px 
          bg-linear-to-b from-transparent via-blue-300/70 to-transparent"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar menú"
          className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center 
          rounded-xl border border-blue-100 bg-white/90 text-slate-500 
          shadow-sm backdrop-blur-md transition-all duration-300 
          hover:border-blue-300 hover:bg-blue-50 hover:text-[#0033a0] 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
        >
          <X className="h-4 w-4" strokeWidth={2.2} />
        </button>

        <SidebarLogo onClose={onClose} />
        <SidebarNav onClose={onClose} isActive={isActive} />
        <SidebarSupport onClose={onClose} />
      </aside>
    </>
  );
};
