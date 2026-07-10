import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  Clock3,
  ExternalLink,
  Pin,
} from "lucide-react";
import {
  fallbackRecentIds,
  getQuickAccessItemById,
  getQuickAccessItemByPath,
  PINNED_KEY,
  readStorage,
  RECENTS_KEY,
  registerRecentAccess,
  writeStorage,
  type QuickAccessItem,
} from "../../../data/accessRegistry";

export const useRecentPagesTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const currentItem = getQuickAccessItemByPath(location.pathname);

    if (!currentItem || currentItem.path === "/") return;

    registerRecentAccess(currentItem.id);
  }, [location.pathname]);
};

export const QuickAccess = () => {
  const [recentIds, setRecentIds] = useState<string[]>(() =>
    readStorage(RECENTS_KEY, fallbackRecentIds),
  );

  const [pinnedIds, setPinnedIds] = useState<string[]>(() =>
    readStorage(PINNED_KEY, []),
  );

  useEffect(() => {
    const synchronizeRecents = () => {
      setRecentIds(readStorage(RECENTS_KEY, fallbackRecentIds));
    };

    window.addEventListener("storage", synchronizeRecents);
    window.addEventListener(
      "mesa:quick-access-updated",
      synchronizeRecents,
    );

    return () => {
      window.removeEventListener("storage", synchronizeRecents);
      window.removeEventListener(
        "mesa:quick-access-updated",
        synchronizeRecents,
      );
    };
  }, []);

  const pinnedItems = useMemo(
    () =>
      pinnedIds
        .map(getQuickAccessItemById)
        .filter(
          (item): item is QuickAccessItem => Boolean(item),
        ),
    [pinnedIds],
  );

  const recentItems = useMemo(
    () =>
      recentIds
        .filter((id) => !pinnedIds.includes(id))
        .map(getQuickAccessItemById)
        .filter(
          (item): item is QuickAccessItem => Boolean(item),
        ),
    [recentIds, pinnedIds],
  );

  const visibleItems = [...pinnedItems, ...recentItems].slice(0, 6);

  const registerRecentClick = (item: QuickAccessItem) => {
    const nextRecents = registerRecentAccess(item.id);

    setRecentIds(nextRecents);
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
      <div className="mb-3 flex items-center justify-between rounded-2xl bg-blue-50/70 px-4 py-2.5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
            Accesos rápidos
          </p>

          <div className="mt-1 flex items-center gap-1.5 text-[10px] font-medium text-slate-500">
            <Clock3 className="h-3 w-3" strokeWidth={2} />
            Tus accesos más recientes
          </div>
        </div>

        {pinnedItems.length > 0 && (
          <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-500 ring-1 ring-blue-100">
            {pinnedItems.length} fijados
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {visibleItems.map((item) => {
          const Icon = item.icon;
          const pinned = pinnedIds.includes(item.id);

          const accessContent = (
            <>
              <div
                className={`
                  mb-3 flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  transition-all duration-200
                  ${
                    pinned
                      ? "bg-[#0033a0] text-white shadow-sm"
                      : "bg-blue-50 text-[#0033a0] group-hover:scale-110 group-hover:bg-[#0033a0] group-hover:text-white"
                  }
                `}
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
              className="
                group relative h-[112px]
                rounded-2xl
                border border-slate-200
                bg-white
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-blue-300
                hover:bg-blue-50/70
                hover:shadow-md
              "
            >
              {item.external ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => registerRecentClick(item)}
                  className="flex h-full w-full cursor-pointer flex-col items-center justify-center p-3"
                >
                  {accessContent}
                </a>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => registerRecentClick(item)}
                  className="flex h-full w-full cursor-pointer flex-col items-center justify-center p-3"
                >
                  {accessContent}
                </Link>
              )}

              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();

                  togglePinned(item);
                }}
                title={
                  pinned
                    ? "Quitar de fijados"
                    : "Fijar acceso"
                }
                aria-label={
                  pinned
                    ? `Quitar ${item.title} de fijados`
                    : `Fijar ${item.title}`
                }
                className={`
                  absolute right-2 top-2
                  flex h-7 w-7 cursor-pointer
                  items-center justify-center
                  rounded-full
                  transition
                  ${
                    pinned
                      ? "bg-blue-100 text-[#0033a0] opacity-100"
                      : "bg-white/90 text-slate-300 opacity-0 shadow-sm ring-1 ring-slate-200 hover:text-[#0033a0] group-hover:opacity-100"
                  }
                `}
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

      {visibleItems.length === 0 && (
        <div className="flex min-h-[220px] flex-col items-center justify-center text-center">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Clock3 className="h-5 w-5" />
          </div>

          <p className="text-sm font-bold text-slate-800">
            Todavía no hay accesos recientes
          </p>

          <p className="mt-1 max-w-[220px] text-xs leading-5 text-slate-500">
            Las páginas y aplicaciones que abras aparecerán aquí.
          </p>
        </div>
      )}
    </section>
  );
};