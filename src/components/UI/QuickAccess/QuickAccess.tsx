import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState, type ElementType } from "react";
import {
  ShieldCheck,
  Headset,
  Folder,
  ShoppingCart,
  BarChart3,
  GraduationCap,
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
  Home,
  Pin,
  Clock3,
  ExternalLink,
} from "lucide-react";

interface QuickAccessItem {
  id: string;
  title: string;
  icon: ElementType;
  path: string;
  external?: boolean;
}

const RECENTS_KEY = "mesa.quickAccess.recents";
const PINNED_KEY = "mesa.quickAccess.pinned";

const quickAccessRegistry: QuickAccessItem[] = [
  { id: "home", title: "Inicio", icon: Home, path: "/" },
  { id: "noticias", title: "Noticias", icon: Newspaper, path: "/noticias" },
  { id: "departamento", title: "Mi Depto.", icon: Users, path: "/departamento" },
  { id: "aplicaciones", title: "Apps", icon: LayoutGrid, path: "/aplicaciones" },
  { id: "posteos", title: "Posteos", icon: MessageSquare, path: "/posteos" },
  { id: "calendario", title: "Calendario", icon: Calendar, path: "/calendario" },
  { id: "directorio", title: "Directorio", icon: Phone, path: "/directorio" },
  { id: "cumpleanos", title: "Cumpleaños", icon: Gift, path: "/cumpleanos" },
  { id: "ingresos", title: "Ingresos", icon: UserPlus, path: "/ingresos" },
  { id: "accesos", title: "Mis Accesos", icon: Lock, path: "/accesos" },
  { id: "perfil", title: "Mi Perfil", icon: User, path: "/perfil" },
  { id: "sgi", title: "SGI", icon: ShieldCheck, path: "/sgi" },
  {
    id: "tickets",
    title: "Tickets",
    icon: Headset,
    path: "https://orange-sea-091f38210.7.azurestaticapps.net/",
    external: true,
  },
  { id: "documentos", title: "Documentos", icon: Folder, path: "/documentos" },
  { id: "compras", title: "Compras", icon: ShoppingCart, path: "/compras" },
  { id: "reportes", title: "Reportes", icon: BarChart3, path: "/reportes" },
  {
    id: "capacitaciones",
    title: "Capacitaciones",
    icon: GraduationCap,
    path: "/capacitaciones",
  },
];

const fallbackRecentIds = [
  "tickets",
  "documentos",
  "sgi",
  "compras",
  "reportes",
  "capacitaciones",
];

const readStorage = (key: string, fallback: string[]) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const writeStorage = (key: string, value: string[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItemById = (id: string) =>
  quickAccessRegistry.find((item) => item.id === id);

const getItemByPath = (path: string) =>
  quickAccessRegistry.find((item) => !item.external && item.path === path);

export const useRecentPagesTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const currentItem = getItemByPath(location.pathname);

    if (!currentItem || currentItem.path === "/") return;

    const currentRecents = readStorage(RECENTS_KEY, fallbackRecentIds);

    const nextRecents = [
      currentItem.id,
      ...currentRecents.filter((id) => id !== currentItem.id),
    ].slice(0, 10);

    writeStorage(RECENTS_KEY, nextRecents);
  }, [location.pathname]);
};

export const QuickAccess = () => {
  const [recentIds, setRecentIds] = useState<string[]>(() =>
    readStorage(RECENTS_KEY, fallbackRecentIds)
  );

  const [pinnedIds, setPinnedIds] = useState<string[]>(() =>
    readStorage(PINNED_KEY, [])
  );

  const pinnedItems = useMemo(
    () =>
      pinnedIds
        .map(getItemById)
        .filter((item): item is QuickAccessItem => Boolean(item)),
    [pinnedIds]
  );

  const recentItems = useMemo(
    () =>
      recentIds
        .filter((id) => !pinnedIds.includes(id))
        .map(getItemById)
        .filter((item): item is QuickAccessItem => Boolean(item)),
    [recentIds, pinnedIds]
  );

  const visibleItems = [...pinnedItems, ...recentItems].slice(0, 6);

  const registerRecentClick = (item: QuickAccessItem) => {
    const nextRecents = [
      item.id,
      ...recentIds.filter((id) => id !== item.id),
    ].slice(0, 10);

    setRecentIds(nextRecents);
    writeStorage(RECENTS_KEY, nextRecents);
  };

  const togglePinned = (item: QuickAccessItem) => {
    const nextPinned = pinnedIds.includes(item.id)
      ? pinnedIds.filter((id) => id !== item.id)
      : [item.id, ...pinnedIds].slice(0, 6);

    setPinnedIds(nextPinned);
    writeStorage(PINNED_KEY, nextPinned);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

      <div className="mb-3 flex items-center justify-between rounded-2xl bg-blue-50/70 px-4 py-2">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
          Accesos rápidos
        </p>

        <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-500 ring-1 ring-blue-100">
          {pinnedItems.length} fijados
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {visibleItems.map((item) => {
          const Icon = item.icon;
          const pinned = pinnedIds.includes(item.id);

          const appContent = (
            <>
              <div
                className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-200 ${pinned
                    ? "bg-[#0033a0] text-white shadow-sm"
                    : "bg-blue-50 text-[#0033a0] group-hover:scale-110 group-hover:bg-[#0033a0] group-hover:text-white"
                  }`}
              >
                <Icon className="h-7 w-7" strokeWidth={1.6} />
              </div>

              <div className="flex max-w-full items-center justify-center gap-1">
                <span className="line-clamp-2 text-center text-xs font-bold leading-tight text-[#0033a0]">
                  {item.title}
                </span>

                {item.external && (
                  <ExternalLink className="h-3 w-3 shrink-0 text-blue-500" />
                )}
              </div>
            </>
          );

          return (
            <div
              key={item.id}
              className="group relative h-[112px] rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/70 hover:shadow-md"
            >
              {item.external ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => registerRecentClick(item)}
                  className="flex h-full w-full cursor-pointer flex-col items-center justify-center p-4"
                >
                  {appContent}
                </a>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => registerRecentClick(item)}
                  className="flex h-full w-full cursor-pointer flex-col items-center justify-center p-2"
                >
                  {appContent}
                </Link>
              )}

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  togglePinned(item);
                }}
                title={pinned ? "Quitar de fijados" : "Fijar acceso"}
                className={`absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full transition ${pinned
                    ? "bg-blue-100 text-[#0033a0] opacity-100"
                    : "bg-white/90 text-slate-300 opacity-0 shadow-sm ring-1 ring-slate-200 hover:text-[#0033a0] group-hover:opacity-100"
                  }`}
              >
                <Pin
                  className="h-3.5 w-3.5"
                  strokeWidth={2}
                  fill={pinned ? "currentColor" : "none"}
                />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};