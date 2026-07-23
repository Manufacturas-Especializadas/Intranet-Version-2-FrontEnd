import { Link } from "react-router-dom";
import { menuItems } from "../../../data/sidebar.data";

interface SidebarNavProps {
  onClose: () => void;
  isActive: (path: string) => boolean;
}

export const SidebarNav = ({ onClose, isActive }: SidebarNavProps) => {
  return (
    <nav
      aria-label="Navegación principal"
      className="custom-scrollbar relative z-10 flex flex-1 flex-col gap-1.5 
      overflow-y-auto px-3 py-4 md:items-center md:px-2 md:py-3 xl:items-stretch 
      xl:px-3 xl:py-4"
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
              group/menu relative flex min-h-12 w-full cursor-pointer items-center 
              gap-3 overflow-hidden rounded-xl px-3 py-2.5 text-sm font-semibold 
              transition-all duration-300 focus:outline-none focus-visible:ring-2 
              focus-visible:ring-blue-500 focus-visible:ring-offset-1 md:min-h-13 
              md:w-15 md:justify-center md:gap-0 md:px-2 xl:w-full xl:justify-start 
              xl:gap-3 xl:px-3 2xl:min-h-13 2xl:text-[15px]
              ${
                active
                  ? "bg-linear-to-r from-[#0033a0] via-[#0757bb] to-[#0874d1] text-white shadow-[0_10px_24px_rgba(0,51,160,0.22)]"
                  : "text-slate-600 hover:bg-blue-50/80 hover:text-[#0033a0] xl:hover:translate-x-1"
              }
            `}
          >
            {active && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 
                rounded-full bg-white/15 blur-xl"
              />
            )}

            <span
              aria-hidden="true"
              className={`absolute bottom-2 left-0 top-2 w-1 rounded-r-full transition-all 
                  duration-300 ${
                    active
                      ? "bg-cyan-300 opacity-100 shadow-[0_0_12px_rgba(103,232,249,0.8)]"
                      : "bg-blue-500 opacity-0 group-hover/menu:opacity-100"
                  }`}
            />

            <div
              className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center 
                  rounded-xl transition-all duration-300 ${
                    active
                      ? "bg-white/15 text-white shadow-inner"
                      : "bg-slate-50 text-slate-400 group-hover/menu:-rotate-3 group-hover/menu:scale-110 group-hover/menu:bg-white group-hover/menu:text-[#0033a0] group-hover/menu:shadow-sm"
                  }`}
            >
              <Icon className="h-4.5w-4.5" strokeWidth={active ? 2.3 : 2} />
            </div>

            <span className="relative z-10 min-w-0 flex-1 truncate md:hidden xl:block">
              {item.title}
            </span>

            {active && (
              <span
                className="relative z-10 h-2 w-2 shrink-0 animate-pulse rounded-full 
                bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)] md:hidden xl:block"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};
