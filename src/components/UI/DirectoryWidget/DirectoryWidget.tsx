import {
  BookUser,
  Expand,
  Maximize2,
  UsersRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DocumentViewerModal } from "../DocumentViewerModal/DocumentViewerModal";

const DIRECTORY_IMAGE = "/directorio-2026.png";

export const DirectoryWidget = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const directoryRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (location.hash !== "#directorio") return;

    const scrollTimer = window.setTimeout(() => {
      directoryRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 150);

    const openTimer = window.setTimeout(() => {
      setOpen(true);
    }, 750);

    return () => {
      window.clearTimeout(scrollTimer);
      window.clearTimeout(openTimer);
    };
  }, [location.hash]);

  const openDirectory = () => {
    setOpen(true);
  };

  const closeDirectory = () => {
    setOpen(false);

    if (location.hash === "#directorio") {
      navigate("/", {
        replace: true,
        preventScrollReset: true,
      });
    }
  };

  return (
    <>
      <section
        ref={directoryRef}
        id="directorio"
        aria-labelledby="directory-widget-title"
        className="
          group/widget relative scroll-mt-28 overflow-hidden
          rounded-[28px]
          border border-blue-100
          bg-white
          p-5
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
            inset-x-0 top-0 h-40
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
            h-56 w-56
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
            h-48 w-48
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
            right-3 top-3
            h-28 w-28
            rounded-full
            border border-blue-100/70
            transition-transform duration-700
            group-hover/widget:scale-110
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            right-9 top-9
            h-16 w-16
            rounded-full
            border border-blue-100/60
            transition-transform duration-700
            group-hover/widget:scale-90
          "
        />

        <UsersRound
          aria-hidden="true"
          className="
            pointer-events-none absolute
            right-7 top-7
            h-9 w-9
            text-blue-100
            transition-all duration-500
            group-hover/widget:rotate-6
            group-hover/widget:scale-110
            group-hover/widget:text-blue-200
          "
          strokeWidth={1.4}
        />

        <div className="relative z-10">
          <header className="mb-5 flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-3">
              <div
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#0033a0]
                  to-[#1685df]
                  text-white
                  shadow-[0_10px_24px_rgba(0,51,160,0.24)]
                  transition-all duration-300
                  group-hover/widget:rotate-3
                  group-hover/widget:scale-105
                "
              >
                <BookUser
                  className="h-5 w-5"
                  strokeWidth={2.2}
                />
              </div>

              <div className="min-w-0 pt-0.5">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <p
                    className="
                      text-[10px] font-extrabold
                      uppercase tracking-[0.22em]
                      text-blue-600
                    "
                  >
                    Colaboradores
                  </p>

                  <span
                    className="
                      rounded-full
                      border border-blue-100
                      bg-white/90
                      px-2 py-0.5
                      text-[9px] font-extrabold
                      text-blue-700
                      shadow-sm
                    "
                  >
                    Interno
                  </span>
                </div>

                <h2
                  id="directory-widget-title"
                  className="
                    text-[20px] font-black
                    leading-tight text-[#123f7a]
                  "
                >
                  Directorio MESA
                </h2>

              </div>
            </div>

            <button
              type="button"
              onClick={openDirectory}
              aria-label="Ampliar directorio MESA"
              title="Ampliar directorio"
              className="
                group/expand relative z-10
                flex h-10 w-10 shrink-0
                cursor-pointer items-center justify-center
                rounded-xl
                border border-blue-100
                bg-white/90
                text-[#0033a0]
                shadow-sm
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#0033a0]
                hover:bg-[#0033a0]
                hover:text-white
                hover:shadow-[0_8px_20px_rgba(0,51,160,0.22)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-2
              "
            >
              <Expand
                className="
                  h-[18px] w-[18px]
                  transition-transform duration-300
                  group-hover/expand:scale-110
                "
                strokeWidth={2}
              />
            </button>
          </header>

          <div className="mb-5 flex items-center gap-2">
            <div className="h-1 w-12 rounded-full bg-[#0033a0]" />
            <div className="h-1 w-5 rounded-full bg-sky-400" />
            <div className="h-1 w-2 rounded-full bg-blue-200" />
          </div>

          <button
            type="button"
            onClick={openDirectory}
            aria-label="Abrir directorio MESA completo"
            className="
              group/directory relative block w-full
              cursor-pointer overflow-hidden
              rounded-[24px]
              border border-blue-100
              bg-gradient-to-br
              from-blue-50/80
              via-white
              to-sky-50/80
              p-3
              shadow-[0_8px_24px_rgba(15,23,42,0.07)]
              transition-all duration-500
              hover:-translate-y-1
              hover:border-blue-300
              hover:shadow-[0_18px_40px_rgba(0,51,160,0.14)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              focus-visible:ring-offset-2
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -right-14 -top-14
                h-36 w-36
                rounded-full
                border border-blue-100/80
                transition-transform duration-700
                group-hover/directory:scale-125
              "
            />

            <div className="relative overflow-hidden rounded-[19px] bg-white">
              <img
                src={DIRECTORY_IMAGE}
                alt="Vista previa del Directorio MESA"
                draggable={false}
                className="
                  block h-auto w-full
                  object-contain
                  transition-transform duration-700 ease-out
                  group-hover/directory:scale-[1.03]
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t
                  from-slate-950/55
                  via-slate-950/5
                  to-transparent
                  opacity-0
                  transition-opacity duration-300
                  group-hover/directory:opacity-100
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -left-1/2 top-0
                  h-full w-1/3
                  -skew-x-12
                  bg-gradient-to-r
                  from-transparent
                  via-white/35
                  to-transparent
                  opacity-0
                  blur-md
                  transition-all duration-700
                  group-hover/directory:left-[125%]
                  group-hover/directory:opacity-100
                "
              />

              <div
                className="
                  pointer-events-none absolute
                  bottom-4 left-1/2
                  flex -translate-x-1/2 translate-y-4
                  items-center gap-2
                  whitespace-nowrap
                  rounded-full
                  border border-white/20
                  bg-slate-950/80
                  px-4 py-2.5
                  text-[11px] font-bold
                  text-white
                  opacity-0
                  shadow-xl
                  backdrop-blur-md
                  transition-all duration-300
                  group-hover/directory:translate-y-0
                  group-hover/directory:opacity-100
                "
              >
                <Maximize2
                  className="h-3.5 w-3.5"
                  strokeWidth={2}
                />

                Ver directorio completo
              </div>
            </div>
          </button>
        </div>
      </section>

      <DocumentViewerModal
        isOpen={open}
        title="Directorio MESA"
        image={DIRECTORY_IMAGE}
        onClose={closeDirectory}
      />
    </>
  );
};