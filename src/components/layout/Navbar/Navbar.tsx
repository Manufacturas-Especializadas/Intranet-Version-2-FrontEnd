import {
  Bell,
  ChevronDown,
  CornerDownLeft,
  ExternalLink,
  Mail,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  companyApplications,
  quickAccessRegistry,
  registerRecentAccess,
  type QuickAccessItem,
} from "../../../data/accessRegistry";

interface SearchResult extends QuickAccessItem {
  description: string;
  group: string;
  searchableText: string;
  iconBackground?: string;
}

/*
 * Información provisional.
 *
 * Después estos datos vendrán del usuario autenticado.
 */
const currentUser = {
  firstName: "Juan",
  fullName: "Juan Pérez",
  department: "Ingeniería",
  initials: "JP",
};

const sectionDescriptions: Record<string, string> = {
  home: "Página principal de la intranet MESA",
  noticias: "Noticias, comunicados y novedades de la empresa",
  departamento: "Información y publicaciones de mi departamento",
  aplicaciones: "Aplicaciones, sistemas y páginas corporativas",
  posteos: "Publicaciones recientes de los colaboradores",
  calendario: "Calendario anual, eventos y fechas importantes",
  directorio: "Directorio interno, extensiones, correos y teléfonos",
  cumpleanos: "Cumpleaños de los colaboradores",
  ingresos: "Nuevos ingresos y colaboradores",
  accesos: "Consulta de permisos y accesos asignados",
  perfil: "Información y configuración de mi perfil",
  sgi: "Sistema de Gestión Integral",
  documentos: "Documentos, archivos y formatos corporativos",
  compras: "Herramientas, solicitudes y procesos de compras",
  reportes: "Indicadores, informes y reportes empresariales",
  capacitaciones: "Cursos, capacitaciones y material de formación",
  tickets: "Solicitudes y seguimiento de soporte técnico",
};

const searchAliases: Record<string, string> = {
  home: "inicio principal dashboard portada",
  noticias: "noticia avisos comunicados novedades",
  departamento: "departamento área depto información",
  aplicaciones:
    "apps sistemas programas herramientas páginas web enlaces",
  posteos: "post publicaciones comunidad comentarios",
  calendario: "eventos fechas agenda anual organización",
  directorio:
    "contactos teléfonos extensiones correos personal colaboradores",
  cumpleanos: "cumpleaños festejos colaboradores",
  ingresos: "nuevos empleados altas colaboradores",
  accesos: "permisos seguridad usuarios autorizaciones",
  perfil: "usuario cuenta datos personales",
  sgi: "calidad seguridad gestión integral",
  documentos: "archivos formatos procedimientos carpetas",
  compras: "requisiciones ordenes proveedores",
  reportes: "informes indicadores estadísticas power bi",
  capacitaciones: "cursos entrenamiento formación",
  tickets: "soporte sistemas ayuda incidencia",
};

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const applicationById = new Map(
  companyApplications.map((application) => [
    application.id,
    application,
  ]),
);

const searchableItems: SearchResult[] = quickAccessRegistry.map(
  (item) => {
    const application = applicationById.get(item.id);

    const description =
      application?.description ??
      sectionDescriptions[item.id] ??
      "Sección disponible dentro de la intranet MESA";

    const group = application?.category ?? "Intranet";

    const searchableText = normalizeText(
      [
        item.title,
        item.id,
        item.path,
        description,
        group,
        searchAliases[item.id] ?? "",
        application?.title ?? "",
        application?.shortTitle ?? "",
      ].join(" "),
    );

    return {
      ...item,
      description,
      group,
      searchableText,
      iconBackground: application?.iconBackground,
    };
  },
);

export const Navbar = () => {
  const navigate = useNavigate();

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const normalizedQuery = normalizeText(query);

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];

    const searchTerms = normalizedQuery
      .split(/\s+/)
      .filter(Boolean);

    return searchableItems
      .map((item) => {
        const normalizedTitle = normalizeText(item.title);
        const normalizedGroup = normalizeText(item.group);

        const matchesEveryTerm = searchTerms.every((term) =>
          item.searchableText.includes(term),
        );

        if (!matchesEveryTerm) {
          return {
            item,
            score: 0,
          };
        }

        let score = 30;

        if (normalizedTitle === normalizedQuery) {
          score = 100;
        } else if (normalizedTitle.startsWith(normalizedQuery)) {
          score = 85;
        } else if (normalizedTitle.includes(normalizedQuery)) {
          score = 70;
        } else if (normalizedGroup === normalizedQuery) {
          score = 60;
        } else if (normalizedGroup.includes(normalizedQuery)) {
          score = 50;
        }

        return {
          item,
          score,
        };
      })
      .filter(({ score }) => score > 0)
      .sort((firstResult, secondResult) => {
        if (secondResult.score !== firstResult.score) {
          return secondResult.score - firstResult.score;
        }

        return firstResult.item.title.localeCompare(
          secondResult.item.title,
          "es",
        );
      })
      .slice(0, 8)
      .map(({ item }) => item);
  }, [normalizedQuery]);

  /*
   * Regresa al primer resultado cuando cambia la búsqueda.
   */
  useEffect(() => {
    setActiveIndex(0);
  }, [normalizedQuery]);

  /*
   * Cierra el buscador al hacer clic fuera.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(
          event.target as Node,
        )
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, []);

  /*
   * Ctrl + K o Command + K enfoca el buscador.
   */
  useEffect(() => {
    const handleSearchShortcut = (
      event: globalThis.KeyboardEvent,
    ) => {
      const isSearchShortcut =
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k";

      if (!isSearchShortcut) return;

      event.preventDefault();

      searchInputRef.current?.focus();
      searchInputRef.current?.select();

      if (normalizedQuery) {
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleSearchShortcut);

    return () => {
      window.removeEventListener(
        "keydown",
        handleSearchShortcut,
      );
    };
  }, [normalizedQuery]);

  const closeSearch = () => {
    setQuery("");
    setIsSearchOpen(false);
    setActiveIndex(0);
  };

  const clearSearch = () => {
    setQuery("");
    setIsSearchOpen(false);
    setActiveIndex(0);

    window.requestAnimationFrame(() => {
      searchInputRef.current?.focus();
    });
  };

  const openSearchResult = (item: SearchResult) => {
    /*
     * Registra el acceso para que aparezca posteriormente
     * dentro de QuickAccess.
     */
    if (item.path !== "/") {
      registerRecentAccess(item.id);
    }

    if (item.external) {
      const newWindow = window.open(
        item.path,
        "_blank",
        "noopener,noreferrer",
      );

      if (newWindow) {
        newWindow.opener = null;
      }
    } else {
      navigate(item.path);
    }

    closeSearch();
  };

  const handleSearchKeyDown = (
    event: ReactKeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setIsSearchOpen(false);
      return;
    }

    if (searchResults.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();

      setActiveIndex((currentIndex) =>
        currentIndex >= searchResults.length - 1
          ? 0
          : currentIndex + 1,
      );

      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setActiveIndex((currentIndex) =>
        currentIndex <= 0
          ? searchResults.length - 1
          : currentIndex - 1,
      );

      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();

      const selectedItem = searchResults[activeIndex];

      if (selectedItem) {
        openSearchResult(selectedItem);
      }
    }
  };

  return (
    <header
      className="
        sticky top-0 z-50
        flex min-h-[88px]
        items-center justify-between
        border-b border-blue-100/80
        bg-white/[0.92]
        px-5 py-3
        shadow-[0_8px_30px_rgba(15,23,42,0.055)]
        backdrop-blur-xl
        lg:px-6
      "
    >
      {/* Iluminación izquierda */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-16 -top-20
          h-44 w-72
          rounded-full
          bg-blue-200/25
          blur-3xl
        "
      />

      {/* Iluminación derecha */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-16 -top-24
          h-48 w-64
          rounded-full
          bg-cyan-100/30
          blur-3xl
        "
      />

      {/* Marca MESA tenue */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-52 top-1/2
          hidden -translate-y-1/2
          select-none
          text-[58px] font-black
          tracking-[-0.08em]
          text-[#0033a0]/[0.025]
          2xl:block
        "
      >
        MESA
      </span>

      {/* Línea inferior corporativa */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-0 left-0 right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-blue-400/60
          to-transparent
        "
      />

      {/* Saludo */}
      <div
        className="
          relative z-10
          hidden shrink-0
          flex-col
          lg:flex
        "
      >
        <div className="mb-1 flex items-center gap-2">
          <span
            className="
              relative flex h-2.5 w-2.5
              items-center justify-center
            "
          >
            <span
              className="
                absolute h-full w-full
                animate-ping rounded-full
                bg-emerald-400 opacity-60
              "
            />

            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
          </span>

          <p
            className="
              text-[10px] font-extrabold
              uppercase tracking-[0.2em]
              text-blue-600
            "
          >
            Intranet MESA
          </p>
        </div>

        <h1
          className="
            text-xl font-black
            leading-tight text-[#123f7a]
            xl:text-2xl
          "
        >
          ¡Hola, {currentUser.firstName}!
        </h1>

        <p className="mt-0.5 text-xs text-slate-500">
          Bienvenido al portal corporativo
        </p>
      </div>

      {/* Buscador global */}
      <div
        ref={searchContainerRef}
        className="
          relative z-20
          mx-4 max-w-2xl flex-1
          lg:mx-8
        "
      >
        <div className="group/search relative">
          {/* Resplandor del buscador */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -inset-1
              rounded-[19px]
              bg-gradient-to-r
              from-[#0033a0]/30
              via-cyan-400/25
              to-[#0033a0]/30
              opacity-0
              blur-md
              transition-opacity duration-300
              group-focus-within/search:opacity-100
            "
          />

          <div
            className="
              relative overflow-hidden
              rounded-2xl
              border border-slate-200
              bg-white
              shadow-[0_7px_22px_rgba(15,23,42,0.06)]
              transition-all duration-300
              hover:border-blue-200
              hover:shadow-[0_10px_28px_rgba(0,51,160,0.09)]
              group-focus-within/search:border-blue-400
              group-focus-within/search:shadow-[0_12px_32px_rgba(0,51,160,0.13)]
            "
          >
            {/* Línea azul al enfocar */}
            <div
              aria-hidden="true"
              className="
                absolute inset-x-0 bottom-0
                h-0.5 origin-center
                scale-x-0
                bg-gradient-to-r
                from-[#0033a0]
                via-[#1685df]
                to-cyan-400
                transition-transform duration-300
                group-focus-within/search:scale-x-100
              "
            />

            <Search
              aria-hidden="true"
              className="
                pointer-events-none absolute
                left-4 top-1/2
                h-5 w-5
                -translate-y-1/2
                text-slate-400
                transition-all duration-300
                group-focus-within/search:scale-110
                group-focus-within/search:text-[#0033a0]
              "
              strokeWidth={2}
            />

            <input
              ref={searchInputRef}
              type="search"
              value={query}
              autoComplete="off"
              aria-label="Buscar en la intranet"
              aria-expanded={
                isSearchOpen && normalizedQuery.length > 0
              }
              aria-controls="navbar-search-results"
              aria-autocomplete="list"
              placeholder="Buscar secciones, aplicaciones o herramientas..."
              onFocus={() => {
                if (normalizedQuery) {
                  setIsSearchOpen(true);
                }
              }}
              onChange={(event) => {
                setQuery(event.target.value);
                setIsSearchOpen(true);
              }}
              onKeyDown={handleSearchKeyDown}
              className="
                block h-[52px] w-full
                bg-transparent
                py-3 pl-12 pr-24
                text-sm font-medium
                text-slate-800
                outline-none
                placeholder:font-normal
                placeholder:text-slate-400
              "
            />

            {query.length > 0 ? (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="Limpiar búsqueda"
                title="Limpiar búsqueda"
                className="
                  absolute right-3 top-1/2
                  flex h-8 w-8
                  -translate-y-1/2
                  cursor-pointer
                  items-center justify-center
                  rounded-xl
                  text-slate-400
                  transition-all duration-200
                  hover:rotate-90
                  hover:bg-blue-50
                  hover:text-[#0033a0]
                "
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
            ) : (
              <div
                className="
                  pointer-events-none absolute
                  right-3 top-1/2
                  hidden -translate-y-1/2
                  items-center gap-1
                  rounded-lg
                  border border-slate-200
                  bg-slate-50
                  px-2 py-1
                  text-[9px] font-bold
                  text-slate-400
                  shadow-sm
                  sm:flex
                "
              >
                <span>Ctrl</span>
                <span>+</span>
                <span>K</span>
              </div>
            )}
          </div>
        </div>

        {/* Resultados */}
        {isSearchOpen && normalizedQuery.length > 0 && (
          <div
            id="navbar-search-results"
            role="listbox"
            className="
              absolute left-0 right-0
              top-[calc(100%+12px)]
              overflow-hidden
              rounded-[22px]
              border border-blue-100
              bg-white
              shadow-[0_28px_70px_rgba(15,23,42,0.22)]
            "
          >
            {/* Encabezado de resultados */}
            <div
              className="
                relative overflow-hidden
                border-b border-blue-100
                bg-gradient-to-r
                from-[#f1f7ff]
                via-white
                to-[#eef8ff]
                px-4 py-3.5
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -right-8 -top-10
                  h-28 w-28
                  rounded-full
                  border border-blue-200/50
                "
              />

              <div className="relative flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-xl
                      bg-[#0033a0]
                      text-white
                      shadow-[0_7px_18px_rgba(0,51,160,0.24)]
                    "
                  >
                    <Sparkles
                      className="h-4 w-4"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs font-extrabold
                        uppercase tracking-[0.16em]
                        text-[#0033a0]
                      "
                    >
                      Búsqueda MESA
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-500">
                      Secciones, herramientas y aplicaciones
                    </p>
                  </div>
                </div>

                <span
                  className="
                    rounded-full
                    border border-blue-100
                    bg-white
                    px-2.5 py-1
                    text-[10px] font-bold
                    text-blue-700
                    shadow-sm
                  "
                >
                  {searchResults.length}{" "}
                  {searchResults.length === 1
                    ? "resultado"
                    : "resultados"}
                </span>
              </div>
            </div>

            {searchResults.length > 0 ? (
              <div
                className="
                  custom-scrollbar
                  max-h-[430px]
                  overflow-y-auto
                  p-2
                "
              >
                {searchResults.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() =>
                        setActiveIndex(index)
                      }
                      onMouseDown={(event) => {
                        event.preventDefault();
                      }}
                      onClick={() => openSearchResult(item)}
                      className={`
                        group/result
                        relative flex w-full
                        cursor-pointer items-center
                        gap-3 overflow-hidden
                        rounded-2xl
                        px-3 py-3
                        text-left
                        transition-all duration-200
                        ${
                          isActive
                            ? `
                              bg-gradient-to-r
                              from-blue-50
                              via-white
                              to-sky-50
                              shadow-[0_7px_20px_rgba(0,51,160,0.07)]
                            `
                            : `
                              hover:bg-slate-50
                            `
                        }
                      `}
                    >
                      {/* Indicador lateral */}
                      <span
                        aria-hidden="true"
                        className={`
                          absolute bottom-2 left-0 top-2
                          w-1 rounded-r-full
                          bg-[#0033a0]
                          transition-all duration-200
                          ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0"
                          }
                        `}
                      />

                      {/* Ícono */}
                      <div
                        className={`
                          relative flex h-12 w-12
                          shrink-0 items-center
                          justify-center overflow-hidden
                          rounded-[15px]
                          transition-all duration-200
                          ${
                            item.iconBackground
                              ? `${item.iconBackground} text-white shadow-md`
                              : isActive
                                ? "bg-[#0033a0] text-white shadow-md"
                                : "bg-slate-100 text-slate-500 group-hover/result:bg-blue-100 group-hover/result:text-[#0033a0]"
                          }
                        `}
                      >
                        <div
                          aria-hidden="true"
                          className="
                            absolute -right-3 -top-3
                            h-8 w-8
                            rounded-full
                            bg-white/15
                          "
                        />

                        <Icon
                          className="relative h-5 w-5"
                          strokeWidth={1.9}
                        />
                      </div>

                      {/* Información */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p
                            className="
                              truncate text-sm
                              font-extrabold text-[#123f7a]
                            "
                          >
                            {item.title}
                          </p>

                          {item.external && (
                            <ExternalLink
                              className="
                                h-3.5 w-3.5
                                shrink-0 text-blue-500
                              "
                              strokeWidth={2}
                            />
                          )}
                        </div>

                        <p
                          className="
                            mt-0.5 line-clamp-1
                            text-xs text-slate-500
                          "
                        >
                          {item.description}
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                          <span
                            className="
                              rounded-md
                              border border-blue-100
                              bg-blue-50
                              px-2 py-0.5
                              text-[9px] font-bold
                              text-blue-700
                            "
                          >
                            {item.group}
                          </span>

                          <span className="text-[9px] font-medium text-slate-400">
                            {item.external
                              ? "Página web externa"
                              : "Sección de la intranet"}
                          </span>
                        </div>
                      </div>

                      {/* Indicador Enter */}
                      {isActive && (
                        <div
                          className="
                            hidden shrink-0
                            items-center gap-1
                            rounded-lg
                            border border-blue-100
                            bg-white
                            px-2 py-1
                            text-[9px] font-bold
                            text-blue-700
                            shadow-sm
                            sm:flex
                          "
                        >
                          <CornerDownLeft
                            className="h-3 w-3"
                            strokeWidth={2}
                          />

                          Enter
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div
                className="
                  flex min-h-48
                  flex-col items-center
                  justify-center
                  px-6 py-8
                  text-center
                "
              >
                <div
                  className="
                    relative mb-4
                    flex h-14 w-14
                    items-center justify-center
                    rounded-[18px]
                    bg-blue-50
                    text-[#0033a0]
                  "
                >
                  <Search className="h-6 w-6" strokeWidth={2} />

                  <span
                    className="
                      absolute -right-1 -top-1
                      h-3 w-3
                      rounded-full
                      border-2 border-white
                      bg-amber-400
                    "
                  />
                </div>

                <p className="text-sm font-extrabold text-[#123f7a]">
                  No encontramos resultados
                </p>

                <p className="mt-1 max-w-xs text-xs leading-5 text-slate-500">
                  Busca una sección, aplicación, sistema o
                  herramienta disponible en MESA.
                </p>
              </div>
            )}

            {searchResults.length > 0 && (
              <div
                className="
                  flex items-center justify-between
                  border-t border-slate-100
                  bg-slate-50/80
                  px-4 py-2.5
                "
              >
                <span className="text-[10px] text-slate-500">
                  Usa ↑ y ↓ para navegar
                </span>

                <span className="text-[10px] text-slate-500">
                  Enter para abrir · Esc para cerrar
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Acciones del usuario */}
      <div
        className="
          relative z-10
          flex shrink-0
          items-center gap-3
          lg:gap-4
        "
      >
        {/* Notificaciones */}
        <button
          type="button"
          aria-label="Ver notificaciones"
          title="Notificaciones"
          className="
            group/action relative
            flex h-11 w-11
            cursor-pointer items-center
            justify-center rounded-2xl
            border border-slate-200
            bg-white text-slate-500
            shadow-sm
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-[#0033a0]
            hover:shadow-md
          "
        >
          <Bell
            className="
              h-5 w-5
              transition-transform duration-300
              group-hover/action:rotate-12
            "
            strokeWidth={2}
          />

          <span
            className="
              absolute -right-1 -top-1
              flex h-5 min-w-5
              items-center justify-center
              rounded-full
              bg-gradient-to-br
              from-[#0033a0]
              to-[#1685df]
              px-1
              text-[9px] font-extrabold
              text-white
              shadow-md
              ring-2 ring-white
            "
          >
            3
          </span>
        </button>

        {/* Mensajes */}
        <button
          type="button"
          aria-label="Ver mensajes"
          title="Mensajes"
          className="
            group/action relative
            hidden h-11 w-11
            cursor-pointer items-center
            justify-center rounded-2xl
            border border-slate-200
            bg-white text-slate-500
            shadow-sm
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-[#0033a0]
            hover:shadow-md
            sm:flex
          "
        >
          <Mail
            className="
              h-5 w-5
              transition-transform duration-300
              group-hover/action:-translate-y-0.5
            "
            strokeWidth={2}
          />

          <span
            className="
              absolute -right-1 -top-1
              flex h-5 min-w-5
              items-center justify-center
              rounded-full
              bg-gradient-to-br
              from-[#0033a0]
              to-[#1685df]
              px-1
              text-[9px] font-extrabold
              text-white
              shadow-md
              ring-2 ring-white
            "
          >
            2
          </span>
        </button>

        <div className="hidden h-9 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent sm:block" />

        {/* Perfil */}
        <button
          type="button"
          className="
            group/profile
            flex cursor-pointer
            items-center gap-3
            rounded-2xl
            border border-transparent
            p-1.5 pr-2
            text-left
            transition-all duration-300
            hover:border-blue-100
            hover:bg-blue-50/70
            hover:shadow-sm
          "
        >
          <div className="relative">
            <div
              className="
                flex h-11 w-11
                items-center justify-center
                overflow-hidden rounded-2xl
                bg-gradient-to-br
                from-[#0033a0]
                via-[#0757bb]
                to-[#1685df]
                text-white
                shadow-[0_8px_20px_rgba(0,51,160,0.22)]
                ring-2 ring-blue-100
                transition-all duration-300
                group-hover/profile:scale-105
                group-hover/profile:ring-blue-200
              "
            >
              <span className="text-sm font-extrabold">
                {currentUser.initials}
              </span>
            </div>

            <span
              className="
                absolute -bottom-0.5 -right-0.5
                h-3.5 w-3.5
                rounded-full
                border-2 border-white
                bg-emerald-500
              "
            />
          </div>

          <div className="hidden min-w-0 xl:block">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-sm font-extrabold leading-none text-[#123f7a]">
                {currentUser.fullName}
              </p>

              <ShieldCheck
                className="h-3.5 w-3.5 shrink-0 text-blue-500"
                strokeWidth={2}
              />
            </div>

            <p className="mt-1 truncate text-[11px] text-slate-500">
              {currentUser.department}
            </p>
          </div>

          <ChevronDown
            className="
              hidden h-4 w-4
              shrink-0 text-slate-400
              transition-transform duration-300
              group-hover/profile:translate-y-0.5
              group-hover/profile:text-[#0033a0]
              xl:block
            "
            strokeWidth={2}
          />
        </button>
      </div>
    </header>
  );
};