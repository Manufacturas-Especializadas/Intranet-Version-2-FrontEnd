import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Headset,
  Folder,
  ShoppingCart,
  BarChart3,
  GraduationCap,
} from "lucide-react";

interface QuickAccessItem {
  id: string;
  title: string;
  icon: React.ElementType;
  path: string;
}

const quickAccessItems: QuickAccessItem[] = [
  { id: "1", title: "SGI", icon: ShieldCheck, path: "/sgi" },
  { id: "2", title: "Mesa Helpdesk", icon: Headset, path: "/helpdesk" },
  { id: "3", title: "Documentos", icon: Folder, path: "/documentos" },
  { id: "4", title: "Portal de Compras", icon: ShoppingCart, path: "/compras" },
  { id: "5", title: "Reportes", icon: BarChart3, path: "/reportes" },
  {
    id: "6",
    title: "Capacitaciones",
    icon: GraduationCap,
    path: "/capacitaciones",
  },
];

export const QuickAccess = () => {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 h-full 
      flex flex-col"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-[#0033a0]">Accesos rápidos</h3>
        <Link
          to="/accesos"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
        >
          Ver todos
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 flex-1">
        {quickAccessItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="group flex flex-col items-center justify-center p-4 rounded-xl border 
            border-slate-200 bg-white hover:bg-blue-50/50 hover:border-blue-200 transition-all 
            duration-200"
          >
            <div
              className="text-[#0033a0] mb-3 group-hover:scale-110 transition-transform 
              duration-200"
            >
              <item.icon className="w-8 h-8" strokeWidth={1.5} />
            </div>

            <span className="text-xs font-bold text-[#0033a0] text-center leading-tight">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
