import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../../assets/logomesa.png";
import {
  Menu,
  X,
  Home,
  Calendar,
  Phone,
  Building2,
  ChevronDown,
} from "lucide-react";

// --- Tipos de TypeScript ---
interface SubMenuItem {
  text: string;
  path: string;
}

interface NavItem {
  text: string;
  path?: string;
  icon: React.ElementType;
  submenu?: SubMenuItem[];
}

// --- Datos de Navegación ---
const navLinks: NavItem[] = [
  { text: "Inicio", path: "/", icon: Home },
  { text: "Calendario", path: "/calendario", icon: Calendar },
  { text: "Directorio", path: "/directorio", icon: Phone },
  {
    text: "Departamentos",
    icon: Building2, // Icono actualizado para Departamentos
    submenu: [
      { text: "Recursos Humanos", path: "/rh" },
      { text: "Capacitación", path: "/capacitacion" },
      { text: "Calidad", path: "/calidad" },
      { text: "Manufactura", path: "/manufactura" },
      { text: "EH&S y Responsabilidad Social", path: "/EH&S" },
      { text: "TI", path: "/TI" },
    ],
  },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Cerrar dropdown de escritorio al hacer clic afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Utilidad para saber si una ruta está activa
  const isActiveRoute = (path?: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* --- Logo y Marca --- */}
          <Link
            to="/"
            className="flex items-center gap-4 group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          >
            <div className="p-1 rounded-lg transition-colors group-hover:bg-slate-100">
              <img
                src={Logo}
                alt="MESA Logo"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="hidden md:block h-6 w-px bg-slate-200" />
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">
              INTRA<span className="text-blue-600">NET</span>
            </h1>
          </Link>

          {/* --- Menú de Escritorio --- */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div key={link.text} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!isDropdownOpen)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isDropdownOpen
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <link.icon className="w-4 h-4" strokeWidth={2.5} />
                      {link.text}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ease-in-out ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={2.5}
                      />
                    </button>

                    {/* Dropdown de Escritorio Animado */}
                    <div
                      className={`absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-xl shadow-lg py-2 z-50 transition-all duration-200 origin-top-right ${
                        isDropdownOpen
                          ? "opacity-100 scale-100 translate-y-0 visible"
                          : "opacity-0 scale-95 -translate-y-2 invisible"
                      }`}
                    >
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.text}
                          to={subItem.path}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isActiveRoute(subItem.path)
                              ? "bg-blue-50 text-blue-600 font-medium"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // Enlaces normales de escritorio
              return (
                <Link
                  key={link.text}
                  to={link.path!}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActiveRoute(link.path)
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <link.icon className="w-4 h-4" strokeWidth={2.5} />
                  {link.text}
                </Link>
              );
            })}
          </div>

          {/* --- Botón Hamburguesa Móvil --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Menú Móvil Desplegable --- */}
      <div
        className={`md:hidden grid transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "grid-rows-[1fr] border-b border-slate-200"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden bg-white/95 backdrop-blur-md">
          <div className="px-4 py-4 flex flex-col space-y-1">
            {navLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div key={link.text} className="flex flex-col">
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(!isMobileDropdownOpen)
                      }
                      className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <link.icon className="w-5 h-5 text-slate-400" />
                        {link.text}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          isMobileDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Submenú Móvil */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isMobileDropdownOpen
                          ? "grid-rows-[1fr] mt-1"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden pl-11 flex flex-col space-y-1">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.text}
                            to={subItem.path}
                            className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                              isActiveRoute(subItem.path)
                                ? "bg-blue-50 text-blue-600 font-semibold"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                          >
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Enlaces normales móviles
              return (
                <Link
                  key={link.text}
                  to={link.path!}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActiveRoute(link.path)
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <link.icon
                    className={`w-5 h-5 ${isActiveRoute(link.path) ? "text-blue-600" : "text-slate-400"}`}
                  />
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
