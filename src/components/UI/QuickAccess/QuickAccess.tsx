import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  Clock3,
  ExternalLink,
  MousePointer2,
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

const MAX_VISIBLE_ITEMS = 6;
const PINNED_UPDATED_EVENT =
  "mesa:quick-access-pinned-updated";

export const useRecentPagesTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath =
      `${location.pathname}${location.hash}`;

    const currentItem =
      getQuickAccessItemByPath(currentPath);

    if (!currentItem || currentItem.path === "/") {
      return;
    }

    registerRecentAccess(currentItem.id);
  }, [location.pathname, location.hash]);
};

export const QuickAccess = () => {
  const [recentIds, setRecentIds] = useState<string[]>(
    () => readStorage(RECENTS_KEY, fallbackRecentIds),
  );

  const [pinnedIds, setPinnedIds] = useState<string[]>(
    () => readStorage(PINNED_KEY, []),
  );

  useEffect(() => {
    const synchronizeRecents = () => {
      setRecentIds(
        readStorage(RECENTS_KEY, fallbackRecentIds),
      );
    };

    const synchronizePinned = () => {
      setPinnedIds(
        readStorage(PINNED_KEY, []),
      );
    };

    const synchronizeAll = () => {
      synchronizeRecents();
      synchronizePinned();
    };

    window.addEventListener(
      "storage",
      synchronizeAll,
    );

    window.addEventListener(
      "mesa:quick-access-updated",
      synchronizeRecents,
    );

    window.addEventListener(
      PINNED_UPDATED_EVENT,
      synchronizePinned,
    );

    return () => {
      window.removeEventListener(
        "storage",
        synchronizeAll,
      );

      window.removeEventListener(
        "mesa:quick-access-updated",
        synchronizeRecents,
      );

      window.removeEventListener(
        PINNED_UPDATED_EVENT,
        synchronizePinned,
      );
    };
  }, []);

  const pinnedItems = useMemo(
    () =>
      pinnedIds
        .map(getQuickAccessItemById)
        .filter(
          (item): item is QuickAccessItem =>
            Boolean(item),
        ),
    [pinnedIds],
  );

  const recentItems = useMemo(
    () =>
      recentIds
        .filter(
          (id) => !pinnedIds.includes(id),
        )
        .map(getQuickAccessItemById)
        .filter(
          (item): item is QuickAccessItem =>
            Boolean(item),
        ),
    [recentIds, pinnedIds],
  );

  const visibleItems = useMemo(
    () =>
      [...pinnedItems, ...recentItems].slice(
        0,
        MAX_VISIBLE_ITEMS,
      ),
    [pinnedItems, recentItems],
  );

  const registerRecentClick = (
    item: QuickAccessItem,
  ) => {
    const nextRecents =
      registerRecentAccess(item.id);

    setRecentIds(nextRecents);
  };

  const togglePinned = (
    item: QuickAccessItem,
  ) => {
    const isPinned =
      pinnedIds.includes(item.id);

    const nextPinned = isPinned
      ? pinnedIds.filter(
        (id) => id !== item.id,
      )
      : [item.id, ...pinnedIds].slice(
        0,
        MAX_VISIBLE_ITEMS,
      );

    setPinnedIds(nextPinned);

    writeStorage(
      PINNED_KEY,
      nextPinned,
    );

    window.dispatchEvent(
      new CustomEvent(
        PINNED_UPDATED_EVENT,
      ),
    );
  };

  return (
    <section
      className="
        group/quick relative
        overflow-hidden
        rounded-[28px]
        border border-blue-100
        bg-white
        p-4
        shadow-[0_12px_36px_rgba(15,23,42,0.07)]
        transition-all duration-300
        hover:border-blue-200
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.11)]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-x-0 top-0 h-32
          bg-gradient-to-br
          from-blue-50
          via-white
          to-sky-50
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-20 -top-20
          h-52 w-52
          rounded-full
          bg-blue-200/35
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-20 bottom-0
          h-44 w-44
          rounded-full
          bg-sky-100/60
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(0,51,160,0.08)_1px,transparent_1px)]
          [background-size:22px_22px]
          opacity-[0.14]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-4 top-4
          h-24 w-24
          rounded-full
          border border-blue-100/70
          transition-transform duration-700
          group-hover/quick:scale-110
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-9 top-9
          h-14 w-14
          rounded-full
          border border-blue-100/60
          transition-transform duration-700
          group-hover/quick:scale-90
        "
      />

      <div className="relative z-10">
        <header className="mb-4">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-2xl
                bg-gradient-to-br
                from-[#0033a0]
                to-[#1685df]
                text-white
                shadow-[0_9px_22px_rgba(0,51,160,0.22)]
                transition-all duration-300
                group-hover/quick:-rotate-3
                group-hover/quick:scale-105
              "
            >
              <MousePointer2
                className="h-5 w-5"
                strokeWidth={2.2}
              />
            </div>

            <div className="min-w-0">
              <h2
                className="
                  text-[19px] font-black
                  leading-tight
                  text-[#123f7a]
                "
              >
                Accesos rápidos
              </h2>

              <p
                className="
                  mt-1 text-[11px]
                  leading-4 text-slate-500
                "
              >
                Tus herramientas más utilizadas.
              </p>
            </div>
          </div>
        </header>

        <div className="mb-4 flex items-center gap-2">
          <div className="h-1 w-10 rounded-full bg-[#0033a0]" />
          <div className="h-1 w-4 rounded-full bg-sky-400" />
          <div className="h-1 w-2 rounded-full bg-blue-200" />
        </div>

        {visibleItems.length > 0 ? (
          <div
            className="
              grid grid-cols-2
              gap-2.5
              sm:grid-cols-3
            "
          >
            {visibleItems.map((item) => {
              const Icon = item.icon;

              const pinned =
                pinnedIds.includes(item.id);

              const accessContent = (
                <>
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute
                      -right-10 -top-10
                      h-24 w-24
                      rounded-full
                      bg-blue-100/60
                      transition-transform duration-500
                      group-hover/item:scale-125
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute inset-x-0 bottom-0
                      h-1 origin-left
                      scale-x-0
                      bg-gradient-to-r
                      from-[#0033a0]
                      to-[#1685df]
                      transition-transform duration-300
                      group-hover/item:scale-x-100
                    "
                  />

                  <div
                    className={`
                      relative mb-2.5 flex
                      h-11 w-11
                      items-center justify-center
                      rounded-2xl
                      transition-all duration-300
                      ${pinned
                        ? `
                            bg-gradient-to-br
                            from-[#0033a0]
                            to-[#1685df]
                            text-white
                            shadow-[0_8px_18px_rgba(0,51,160,0.22)]
                          `
                        : `
                            border border-blue-100
                            bg-blue-50
                            text-[#0033a0]
                            shadow-sm
                            group-hover/item:-rotate-3
                            group-hover/item:scale-105
                            group-hover/item:border-[#0033a0]
                            group-hover/item:bg-[#0033a0]
                            group-hover/item:text-white
                          `
                      }
                    `}
                  >
                    <Icon
                      className="h-[22px] w-[22px]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div
                    className="
    relative flex
    w-full min-w-0
    items-center
    justify-center
    gap-1
  "
                  >
                    <span
                      className="
    w-full
    whitespace-nowrap
    text-center
    font-extrabold
    leading-4
    text-[#123f7a]
    transition-colors duration-300
    group-hover/item:text-[#0033a0]
    text-[11px]
  "
                    >
                      {item.title}
                    </span>

                    {item.external && (
                      <ExternalLink
                        className="
                          h-3 w-3 shrink-0
                          text-blue-500
                        "
                        strokeWidth={2}
                      />
                    )}
                  </div>
                </>
              );

              return (
                <article
                  key={item.id}
                  className="
                    group/item relative
                    h-[112px]
                    overflow-hidden
                    rounded-[20px]
                    border border-slate-200
                    bg-white
                    shadow-[0_5px_16px_rgba(15,23,42,0.05)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-blue-300
                    hover:bg-gradient-to-br
                    hover:from-blue-50/70
                    hover:via-white
                    hover:to-sky-50/70
                    hover:shadow-[0_12px_26px_rgba(0,51,160,0.11)]
                  "
                >
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        registerRecentClick(item)
                      }
                      aria-label={`Abrir ${item.title} en una pestaña nueva`}
                      className="
                        relative flex
                        h-full w-full
                        cursor-pointer
                        flex-col
                        items-center
                        justify-center
                        px-1.5 py-3
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-inset
                        focus-visible:ring-blue-500
                      "
                    >
                      {accessContent}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() =>
                        registerRecentClick(item)
                      }
                      aria-label={`Abrir ${item.title}`}
                      className="
                        relative flex
                        h-full w-full
                        cursor-pointer
                        flex-col
                        items-center
                        justify-center
                        px-2.5 py-3
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-inset
                        focus-visible:ring-blue-500
                      "
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
                      absolute right-2 top-2 z-20
                      flex h-7 w-7
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-xl
                      border
                      transition-all duration-300
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-500
                      ${pinned
                        ? `
                            border-blue-100
                            bg-blue-50
                            text-[#0033a0]
                            opacity-100
                            shadow-sm
                            hover:-rotate-12
                            hover:bg-blue-100
                          `
                        : `
                            border-slate-200
                            bg-white/95
                            text-slate-300
                            opacity-0
                            shadow-sm
                            hover:border-blue-200
                            hover:text-[#0033a0]
                            group-hover/item:opacity-100
                            focus:opacity-100
                          `
                      }
                    `}
                  >
                    <Pin
                      className="h-3 w-3"
                      strokeWidth={2.2}
                      fill={
                        pinned
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>
                </article>
              );
            })}
          </div>
        ) : (
          <div
            className="
              flex min-h-[190px]
              flex-col items-center
              justify-center
              rounded-[22px]
              border border-dashed
              border-blue-200
              bg-blue-50/40
              px-5 text-center
            "
          >
            <div
              className="
                mb-3 flex h-12 w-12
                items-center justify-center
                rounded-2xl
                bg-white
                text-[#0033a0]
                shadow-sm
              "
            >
              <Clock3
                className="h-5 w-5"
                strokeWidth={2}
              />
            </div>

            <h3
              className="
                text-sm font-extrabold
                text-[#123f7a]
              "
            >
              Todavía no hay accesos recientes
            </h3>

            <p
              className="
                mt-1 max-w-[230px]
                text-xs leading-5
                text-slate-500
              "
            >
              Las páginas y aplicaciones que abras aparecerán aquí.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};