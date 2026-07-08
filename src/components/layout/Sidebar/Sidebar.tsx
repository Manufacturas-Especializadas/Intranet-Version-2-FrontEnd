import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/logomesa.png";
import {
  Home,
  Newspaper,
  Users,
  LayoutGrid,
  MessageSquare,
  Calendar,
  Phone,
  Gift,
  UserPlus,
  Lock,
  User,
  HeadphonesIcon,
} from "lucide-react";

interface MenuItem {
  title: string;
  path: string;
  icon: React.ElementType;
}

const menuItems: MenuItem[] = [
  { title: "Inicio", path: "/", icon: Home },
  { title: "Noticias", path: "/noticias", icon: Newspaper },
  { title: "Mi Departamento", path: "/departamento", icon: Users },
  { title: "Aplicaciones", path: "/aplicaciones", icon: LayoutGrid },
  { title: "Posteos", path: "/posteos", icon: MessageSquare },
  { title: "Calendario", path: "/calendario", icon: Calendar },
  { title: "Directorio", path: "/directorio", icon: Phone },
  { title: "Cumpleaños", path: "/cumpleanos", icon: Gift },
  { title: "Nuevos Ingresos", path: "/ingresos", icon: UserPlus },
  { title: "Mis Accesos", path: "/accesos", icon: Lock },
  { title: "Mi Perfil", path: "/perfil", icon: User },
];

export const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className="w-65 bg-white border-r border-slate-200 flex flex-col h-full 
      z-20 shadow-sm"
    >
      <div className="h-20 flex items-center px-6 border-b border-slate-100">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="MESA Logo"
            className="h-10 w-auto object-contain"
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
                className={`w-5 h-5 ${active ? "text-white" : "text-slate-400"}`}
                strokeWidth={active ? 2.5 : 2}
              />
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-slate-100 m-3 mt-0 rounded-xl bg-slate-50 border">
        <div className="flex items-center gap-3 text-blue-700 mb-2">
          <HeadphonesIcon className="w-5 h-5" />
          <span className="font-semibold text-sm">¿Necesitas ayuda?</span>
        </div>
        <a
          href="/soporte"
          className="text-xs text-blue-600 hover:underline font-medium ml-8 block"
        >
          Mesa de ayuda
        </a>
      </div>
    </aside>
  );
};
