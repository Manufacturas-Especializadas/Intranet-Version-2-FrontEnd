import { useRef } from "react";
import {
  Search,
  X,
  Sparkles,
  CornerDownLeft,
  ExternalLink,
} from "lucide-react";
import { useIntranetSearch } from "../../../hooks/useIntranetSearch";

export const NavbarSearch = () => {
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const {
    query,
    setQuery,
    isSearchOpen,
    setIsSearchOpen,
    activeIndex,
    setActiveIndex,
    searchResults,
    normalizedQuery,
    clearSearch,
    openSearchResult,
    handleSearchKeyDown,
  } = useIntranetSearch({ searchInputRef, searchContainerRef });

  return (
    <div
      ref={searchContainerRef}
      className="relative z-20 col-span-3 row-start-2 min-w-0 md:col-span-1 md:col-start-2 
      md:row-start-1 md:mx-3 xl:mx-6"
    >
      <div className="group/search relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-1 rounded-[19px] bg-linear-to-r 
          from-[#0033a0]/30 via-cyan-400/25 to-[#0033a0]/30 opacity-0 blur-md 
          transition-opacity duration-300 group-focus-within/search:opacity-100"
        />

        <div
          className="relative overflow-hidden rounded-2xl border border-slate-200 
          bg-white shadow-[0_7px_22px_rgba(15,23,42,0.06)] transition-all duration-300 
            hover:border-blue-200 hover:shadow-[0_10px_28px_rgba(0,51,160,0.09)] 
            group-focus-within/search:border-blue-400 
            group-focus-within/search:shadow-[0_12px_32px_rgba(0,51,160,0.13)]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-0.5 origin-center scale-x-0 
            bg-linear-to-r from-[#0033a0] via-[#1685df] to-cyan-400 
            transition-transform duration-300 group-focus-within/search:scale-x-100"
          />

          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 
            -translate-y-1/2 text-slate-400 transition-all duration-300 
            group-focus-within/search:scale-110 
            group-focus-within/search:text-[#0033a0] 
            md:left-4 md:h-5 md:w-5"
            strokeWidth={2}
          />

          <input
            ref={searchInputRef}
            type="search"
            value={query}
            autoComplete="off"
            aria-label="Buscar en la intranet"
            aria-expanded={isSearchOpen && normalizedQuery.length > 0}
            placeholder="Buscar en MESA..."
            onFocus={() => {
              if (normalizedQuery) setIsSearchOpen(true);
            }}
            onChange={(event) => {
              setQuery(event.target.value);
              setIsSearchOpen(true);
            }}
            onKeyDown={handleSearchKeyDown}
            className="block h-11 w-full bg-transparent py-2.5 pl-11 pr-12 text-[13px] 
            font-medium text-slate-800 outline-none placeholder:font-normal 
            placeholder:text-slate-400 md:h-12 md:pl-12 md:pr-20 md:text-sm 
            xl:h-13 xl:pr-24"
          />

          {query.length > 0 ? (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 
              cursor-pointer items-center justify-center rounded-xl 
              text-slate-400 transition-all duration-200 hover:rotate-90 
              hover:bg-blue-50 hover:text-[#0033a0]"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
          ) : (
            <div
              className="pointer-events-none absolute right-3 top-1/2 hidden 
              -translate-y-1/2 items-center gap-1 rounded-lg border border-slate-200 
              bg-slate-50 px-2 py-1 text-[9px] font-bold text-slate-400 shadow-sm lg:flex"
            >
              <span>Ctrl</span>
              <span>+</span>
              <span>K</span>
            </div>
          )}
        </div>
      </div>

      {isSearchOpen && normalizedQuery.length > 0 && (
        <div
          className="absolute left-0 right-0 top-[calc(100%+8px)] overflow-hidden 
          rounded-[20px] border border-blue-100 bg-white 
          shadow-[0_28px_70px_rgba(15,23,42,0.22)] sm:top-[calc(100%+10px)] 
          sm:rounded-[22px]"
        >
          <div
            className="relative overflow-hidden border-b border-blue-100 
            bg-linear-to-r from-[#f1f7ff] via-white to-[#eef8ff] px-3 py-3 
            sm:px-4 sm:py-3.5"
          >
            <div className="relative flex items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center 
                  rounded-xl bg-[#0033a0] text-white 
                  shadow-[0_7px_18px_rgba(0,51,160,0.24)]"
                >
                  <Sparkles className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p
                    className="truncate text-[11px] font-extrabold uppercase 
                    tracking-[0.14em] text-[#0033a0] sm:text-xs sm:tracking-[0.16em]"
                  >
                    Búsqueda MESA
                  </p>
                </div>
              </div>
              <span
                className="shrink-0 rounded-full border border-blue-100 
                bg-white px-2.5 py-1 text-[9px] font-bold text-blue-700 shadow-sm 
                sm:text-[10px]"
              >
                {searchResults.length}
              </span>
            </div>
          </div>

          {searchResults.length > 0 ? (
            <div
              className="custom-scrollbar max-h-[60dvh] overflow-y-auto p-2 
              sm:max-h-107.5"
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
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => openSearchResult(item)}
                    className={`
                      group/result relative flex w-full cursor-pointer items-center 
                      gap-2.5 overflow-hidden rounded-2xl px-2.5 py-2.5 text-left 
                      transition-all duration-200 sm:gap-3 sm:px-3 sm:py-3
                      ${
                        isActive
                          ? "bg-linear-to-r from-blue-50 via-white to-sky-50 shadow-[0_7px_20px_rgba(0,51,160,0.07)]"
                          : "hover:bg-slate-50"
                      }
                    `}
                  >
                    <span
                      aria-hidden="true"
                      className={`
                        absolute bottom-2 left-0 top-2 w-1 rounded-r-full bg-[#0033a0] 
                        transition-all duration-200
                        ${isActive ? "opacity-100" : "opacity-0"}
                      `}
                    />

                    <div
                      className={`
                        relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden 
                        rounded-[14px] transition-all duration-200 sm:h-12 sm:w-12 sm:rounded-[15px]
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
                        className="absolute -right-3 -top-3 h-8 w-8 rounded-full 
                        bg-white/15"
                      />
                      <Icon
                        className="relative h-4.5 w-4.5 sm:h-5 sm:w-5"
                        strokeWidth={1.9}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p
                          className="truncate text-[13px] font-extrabold text-[#123f7a] 
                          sm:text-sm"
                        >
                          {item.title}
                        </p>
                        {item.external && (
                          <ExternalLink
                            className="h-3.5 w-3.5 shrink-0 text-blue-500"
                            strokeWidth={2}
                          />
                        )}
                      </div>

                      <p
                        className="mt-0.5 line-clamp-1 text-[11px] text-slate-500 
                        sm:text-xs"
                      >
                        {item.description}
                      </p>

                      <div className="mt-1.5 flex items-center gap-2 sm:mt-2">
                        <span
                          className="max-w-32.5 truncate rounded-md border 
                          border-blue-100 bg-blue-50 px-2 py-0.5 text-[8px] font-bold 
                          text-blue-700 sm:max-w-none sm:text-[9px]"
                        >
                          {item.group}
                        </span>
                        <span
                          className="hidden text-[9px] font-medium text-slate-400 
                          md:block"
                        >
                          {item.external
                            ? "Página web externa"
                            : "Sección de la intranet"}
                        </span>
                      </div>
                    </div>

                    {isActive && (
                      <div
                        className="hidden shrink-0 items-center gap-1 rounded-lg border 
                        border-blue-100 bg-white px-2 py-1 text-[9px] font-bold 
                        text-blue-700 shadow-sm lg:flex"
                      >
                        <CornerDownLeft className="h-3 w-3" strokeWidth={2} />
                        Enter
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="flex min-h-44 flex-col items-center justify-center px-5 py-7 text-center sm:min-h-48 sm:px-6 sm:py-8">
              <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-[18px] bg-blue-50 text-[#0033a0]">
                <Search className="h-6 w-6" strokeWidth={2} />
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-amber-400" />
              </div>
              <p className="text-sm font-extrabold text-[#123f7a]">
                No encontramos resultados
              </p>
              <p className="mt-1 max-w-xs text-xs leading-5 text-slate-500">
                Busca una sección, aplicación, sistema o herramienta disponible
                en MESA.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
