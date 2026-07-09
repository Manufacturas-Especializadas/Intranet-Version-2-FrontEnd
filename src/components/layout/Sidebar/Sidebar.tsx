import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/logomesa.png";
import {
  Home,
  Newspaper,
  Users,
  LayoutGrid,
  GraduationCap,
  User,
  HeadphonesIcon,
  ExternalLink,
} from "lucide-react";

interface MenuItem {
  title: string;
  path: string;
  icon: React.ElementType;
}

const TICKETS_URL = "https://orange-sea-091f38210.7.azurestaticapps.net/";

const menuItems: MenuItem[] = [
  { title: "Inicio", path: "/", icon: Home },
  { title: "Noticias", path: "/noticias", icon: Newspaper },
  { title: "Mi Departamento", path: "/departamento", icon: Users },
  { title: "Aplicaciones", path: "/aplicaciones", icon: LayoutGrid },
  { title: "Capacitaciones", path: "/capacitaciones", icon: GraduationCap },
  { title: "Mi Perfil", path: "/perfil", icon: User },
];

export const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className="w-50 bg-white border-r border-slate-200 flex flex-col h-full 
      z-20 shadow-sm"
    >
      <div className="h-20 flex items-center justify-center border-b border-slate-100">
        <Link to="/" className="flex items-center justify-center">
          <img
            src={Logo}
            alt="MESA Logo"
            className="h-18 w-auto object-contain"
          />
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1 custom-scrollbar">
        {menuItems.map((item) => {
          const active = isActive(item.path);

          return (
            <Link
              key={item.title}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium 
                transition-all duration-200 ${
                  active
                    ? "bg-blue-700 text-white shadow-md shadow-blue-700/20"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                }`}
            >
              <item.icon
                className={`w-5 h-5 ${
                  active ? "text-white" : "text-slate-400"
                }`}
                strokeWidth={active ? 2.5 : 2}
              />

              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="m-3 mt-0 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-3 text-blue-700">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <HeadphonesIcon className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-bold text-[#0033a0]">
              Tickets de Sistemas
            </p>
            <p className="text-xs text-slate-500">
              Soporte técnico
            </p>
          </div>
        </div>

        <a
          href={TICKETS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#0033a0] px-3 py-2.5 text-xs font-bold text-white transition hover:bg-blue-800"
        >
          Levantar ticket
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </aside>
  );
};