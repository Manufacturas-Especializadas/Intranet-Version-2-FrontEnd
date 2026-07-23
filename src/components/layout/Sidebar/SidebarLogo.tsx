import { Link } from "react-router-dom";
import Logo from "../../../assets/logomesa.png";

interface SidebarLogoProps {
  onClose: () => void;
}

export const SidebarLogo = ({ onClose }: SidebarLogoProps) => {
  return (
    <div
      className="relative z-10 flex min-h-29.5 items-center justify-center border-b 
      border-blue-100/80 px-4 py-4 d:min-h-25 md:px-2 md:py-3 xl:min-h-35.5
      xl:px-4 xl:py-5"
    >
      <Link
        to="/"
        onClick={onClose}
        aria-label="Ir al inicio"
        className="group/logo relative flex cursor-pointer items-center justify-center 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
        focus-visible:ring-offset-2"
      >
        <div
          aria-hidden="true"
          className="absolute h-20 w-20 rounded-full bg-blue-500/20 blur-2xl 
          transition-all duration-700 group-hover/logo:scale-125 
          group-hover/logo:bg-blue-400/35 md:h-14 md:w-14 xl:h-24 xl:w-24"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute flex h-25] w-25 items-center 
          justify-center opacity-90 transition-transform duration-700 
          group-hover/logo:scale-105 md:h-18 md:w-18 xl:h-30.5 
          xl:w-30.5"
        >
          <div className="relative h-full w-full animate-[spin_28s_linear_infinite]">
            <div
              className="absolute inset-0 rounded-full border border-blue-200/70 
              shadow-[0_0_18px_rgba(22,133,223,0.08)] transition-colors duration-500 
              group-hover/logo:border-blue-400/75"
            />
            <div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 
              bg-blue-200/65 transition-colors duration-500 
              group-hover/logo:bg-blue-300/80"
            />
            <div
              className="absolute left-1/2 top-0 h-full w-[72%] -translate-x-1/2 
              scale-x-[0.42] rounded-full border border-blue-200/55 
              transition-colors duration-500 group-hover/logo:border-blue-300/75"
            />
            <div
              className="absolute left-1/2 top-0 h-full w-[72%] -translate-x-1/2 
              scale-x-[0.72] rounded-full border border-blue-200/45 transition-colors 
              duration-500 group-hover/logo:border-blue-300/65"
            />
            <div
              className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 
              bg-blue-200/65 transition-colors duration-500 
              group-hover/logo:bg-blue-300/80"
            />
            <div
              className="absolute left-1/2 top-1/2 h-[68%] w-full -translate-x-1/2 
              -translate-y-1/2 scale-y-[0.42] rounded-full border border-blue-200/55 
              transition-colors duration-500 group-hover/logo:border-blue-300/75"
            />
            <div
              className="absolute left-1/2 top-1/2 h-[68%] w-full -translate-x-1/2 
              -translate-y-1/2 scale-y-[0.72] rounded-full border border-blue-200/45 
              transition-colors duration-500 group-hover/logo:border-blue-300/65"
            />
          </div>
        </div>

        <div
          className="relative flex h-20.5w-29 items-center justify-center 
          md:h-15.5 md:w-18 xl:h-23 xl:w-31.5"
        >
          <img
            src={Logo}
            alt="MESA"
            draggable={false}
            className="relative z-10 h-17.5 w-auto object-contain 
            drop-shadow-[0_8px_12px_rgba(0,51,160,0.18)] transition-all 
            duration-500 ease-out group-hover/logo:-translate-y-1 
            group-hover/logo:scale-110 
            group-hover/logo:drop-shadow-[0_15px_22px_rgba(0,51,160,0.32)] 
            md:h-12 xl:h-20"
          />
        </div>
      </Link>
    </div>
  );
};
