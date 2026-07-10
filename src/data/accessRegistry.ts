import {
    Building2,
    Calendar,
    Factory,
    Folder,
    Gift,
    GraduationCap,
    Headset,
    Home,
    LayoutGrid,
    Lightbulb,
    Lock,
    MessageSquare,
    Monitor,
    Newspaper,
    Phone,
    ShieldCheck,
    ShoppingCart,
    TicketCheck,
    User,
    UserPlus,
    Users,
    Wrench,
    BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface QuickAccessItem {
    id: string;
    title: string;
    icon: LucideIcon;
    path: string;
    external?: boolean;
}

export interface CompanyApplication {
    id: string;
    title: string;
    shortTitle: string;
    description: string;
    category: string;
    icon: LucideIcon;
    path: string;
    iconBackground: string;
    internal?: boolean;
}

export const RECENTS_KEY = "mesa.quickAccess.recents";
export const PINNED_KEY = "mesa.quickAccess.pinned";

export const companyApplications: CompanyApplication[] = [
    {
        id: "app-failtrack-mesa",
        title: "FailTrack MESA",
        shortTitle: "FailTrack",
        description:
            "Seguimiento de fallas y registros correspondientes a planta MESA.",
        category: "Operaciones",
        icon: Wrench,
        path: "https://nice-pebble-08635cc10.2.azurestaticapps.net/",
        iconBackground: "bg-gradient-to-br from-orange-400 to-orange-600",
    },
    {
        id: "app-failtrack-ramos",
        title: "FailTrack Ramos",
        shortTitle: "FailTrack Ramos",
        description:
            "Seguimiento de fallas y registros correspondientes a Ramos Arizpe.",
        category: "Operaciones",
        icon: Factory,
        path: "https://witty-sea-09b415510.7.azurestaticapps.net/",
        iconBackground: "bg-gradient-to-br from-amber-400 to-amber-600",
    },
    {
        id: "app-masterweb",
        title: "MasterWeb",
        shortTitle: "MasterWeb",
        description:
            "Acceso al sistema MasterWeb disponible dentro de la red corporativa.",
        category: "Operaciones",
        icon: Monitor,
        path: "http://192.168.25.206/masterweb/",
        iconBackground: "bg-gradient-to-br from-indigo-400 to-indigo-600",
        internal: true,
    },
    {
        id: "app-mejora",
        title: "DaMESAidea - Mejora Continua",
        shortTitle: "DaMESAidea - Mejora Continua",
        description:
            "Registro y seguimiento de actividades relacionadas con mejora continua.",
        category: "Calidad",
        icon: Lightbulb,
        path: "https://lively-forest-01f0c7010.1.azurestaticapps.net/",
        iconBackground: "bg-gradient-to-br from-yellow-400 to-amber-500",
    },
    {
        id: "app-mesacore",
        title: "MesaCore",
        shortTitle: "MesaCore",
        description:
            "Plataforma central de herramientas y servicios corporativos de MESA.",
        category: "Corporativas",
        icon: Building2,
        path: "https://jolly-ocean-0033fe410.6.azurestaticapps.net/",
        iconBackground: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
        id: "app-tickets",
        title: "Tickets Sistemas",
        shortTitle: "Tickets",
        description:
            "Registro y seguimiento de solicitudes de soporte del área de Sistemas.",
        category: "Sistemas",
        icon: TicketCheck,
        path: "https://orange-sea-091f38210.7.azurestaticapps.net/",
        iconBackground: "bg-gradient-to-br from-violet-400 to-violet-600",
    },
];

const internalQuickAccessItems: QuickAccessItem[] = [
    {
        id: "home",
        title: "Inicio",
        icon: Home,
        path: "/",
    },
    {
        id: "noticias",
        title: "Noticias",
        icon: Newspaper,
        path: "/noticias",
    },
    {
        id: "departamento",
        title: "Mi Depto.",
        icon: Users,
        path: "/departamento",
    },
    {
        id: "aplicaciones",
        title: "Apps",
        icon: LayoutGrid,
        path: "/aplicaciones",
    },
    {
        id: "posteos",
        title: "Posteos",
        icon: MessageSquare,
        path: "/posteos",
    },
    {
        id: "calendario",
        title: "Calendario",
        icon: Calendar,
        path: "/#calendario",
    },
    {
        id: "directorio",
        title: "Directorio",
        icon: Phone,
        path: "/#directorio",
    },
    {
        id: "cumpleanos",
        title: "Cumpleaños",
        icon: Gift,
        path: "/#cumpleanos",
    },
    {
        id: "ingresos",
        title: "Ingresos",
        icon: UserPlus,
        path: "/ingresos",
    },
    {
        id: "accesos",
        title: "Mis Accesos",
        icon: Lock,
        path: "/accesos",
    },
    {
        id: "perfil",
        title: "Mi Perfil",
        icon: User,
        path: "/perfil",
    },
    {
        id: "sgi",
        title: "SGI",
        icon: ShieldCheck,
        path: "/sgi",
    },
    {
        id: "documentos",
        title: "Documentos",
        icon: Folder,
        path: "/documentos",
    },
    {
        id: "compras",
        title: "Compras",
        icon: ShoppingCart,
        path: "/compras",
    },
    {
        id: "reportes",
        title: "Reportes",
        icon: BarChart3,
        path: "/reportes",
    },
    {
        id: "capacitaciones",
        title: "Capacitaciones",
        icon: GraduationCap,
        path: "/capacitaciones",
    },
    {
        id: "tickets",
        title: "Tickets",
        icon: Headset,
        path: "https://orange-sea-091f38210.7.azurestaticapps.net/",
        external: true,
    },
];

const applicationQuickAccessItems: QuickAccessItem[] =
    companyApplications.map((application) => ({
        id: application.id,
        title: application.shortTitle,
        icon: application.icon,
        path: application.path,
        external: true,
    }));

export const quickAccessRegistry: QuickAccessItem[] = [
    ...internalQuickAccessItems,
    ...applicationQuickAccessItems,
];

export const fallbackRecentIds = [
    "aplicaciones",
    "tickets",
    "documentos",
    "sgi",
    "compras",
    "reportes",
];

export const readStorage = (key: string, fallback: string[]) => {
    if (typeof window === "undefined") return fallback;

    try {
        const raw = localStorage.getItem(key);

        if (!raw) return fallback;

        const parsed: unknown = JSON.parse(raw);

        return Array.isArray(parsed)
            ? parsed.filter((item): item is string => typeof item === "string")
            : fallback;
    } catch {
        return fallback;
    }
};

export const writeStorage = (key: string, value: string[]) => {
    if (typeof window === "undefined") return;

    localStorage.setItem(key, JSON.stringify(value));
};

export const registerRecentAccess = (accessId: string) => {
    const currentRecents = readStorage(RECENTS_KEY, fallbackRecentIds);

    const nextRecents = [
        accessId,
        ...currentRecents.filter((id) => id !== accessId),
    ].slice(0, 10);

    writeStorage(RECENTS_KEY, nextRecents);

    window.dispatchEvent(new Event("mesa:quick-access-updated"));

    return nextRecents;
};

export const getQuickAccessItemById = (id: string) =>
    quickAccessRegistry.find((item) => item.id === id);

export const getQuickAccessItemByPath = (path: string) =>
    quickAccessRegistry.find(
        (item) => !item.external && item.path === path,
    );