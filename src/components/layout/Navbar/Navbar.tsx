import { NavbarGreetings } from "./NavbarGreetings";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarActions } from "./NavbarActions";

interface NavbarProps {
  onMenuClick?: () => void;
}

export const Navbar = ({ onMenuClick = () => undefined }: NavbarProps) => {
  return (
    <header
      className="sticky top-0 z-40 border-b border-blue-100/80 bg-white/94 
      shadow-[0_8px_30px_rgba(15,23,42,0.055)] backdrop-blur-xl"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-20 h-44 w-72 rounded-full 
        bg-blue-200/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 h-48 w-64 rounded-full 
        bg-cyan-100/30 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-52 top-1/2 hidden -translate-y-1/2 
        select-none text-[58px] font-black tracking-[-0.08em] text-[#0033a0]/2.5 
        2xl:block"
      >
        MESA
      </span>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-linear-to-r 
        from-transparent via-blue-400/60 to-transparent"
      />

      <div
        className="relative z-10 mx-auto grid w-full grid-cols-[auto_minmax(0,1fr)_auto] 
        items-center gap-x-2 gap-y-2 px-3 py-2 sm:px-4 md:gap-x-3 lg:px-5 xl:px-6"
      >
        <NavbarGreetings onMenuClick={onMenuClick} />
        <NavbarSearch />
        <NavbarActions />
      </div>
    </header>
  );
};
