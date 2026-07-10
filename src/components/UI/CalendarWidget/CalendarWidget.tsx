import { CalendarDays, Expand, Maximize2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DocumentViewerModal } from "../DocumentViewerModal/DocumentViewerModal";

const CALENDAR_IMAGE = "/calendario-2026.png";

export const CalendarWidget = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const calendarRef = useRef<HTMLElement | null>(null);

  /*
   * Cuando la dirección sea /#calendario:
   *
   * 1. El Dashboard se carga.
   * 2. La página baja hasta este componente.
   * 3. Después se abre automáticamente el modal.
   */
  useEffect(() => {
    if (location.hash !== "#calendario") return;

    const scrollTimer = window.setTimeout(() => {
      calendarRef.current?.scrollIntoView({
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

  const openCalendar = () => {
    setOpen(true);
  };

  const closeCalendar = () => {
    setOpen(false);

    /*
     * Si el modal se abrió desde /#calendario,
     * eliminamos el hash sin recargar ni mover la página.
     */
    if (location.hash === "#calendario") {
      navigate("/", {
        replace: true,
        preventScrollReset: true,
      });
    }
  };

  return (
    <>
      <section
        ref={calendarRef}
        id="calendario"
        aria-labelledby="calendar-widget-title"
        className="
          group/widget relative scroll-mt-28 overflow-hidden
          rounded-[26px]
          border border-blue-100
          bg-white
          p-4
          shadow-[0_10px_35px_rgba(15,23,42,0.07)]
          transition-all duration-300
          hover:border-blue-200
          hover:shadow-[0_18px_45px_rgba(15,23,42,0.11)]
        "
      >
        {/* Fondo decorativo sutil */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-0 top-0 h-28
            bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_45%)]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute right-3 top-3
            h-24 w-24 rounded-full
            border border-blue-100/70
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute right-7 top-7
            h-12 w-12 rounded-full
            border border-blue-100/60
          "
        />

        <div className="relative z-10">
          {/* Encabezado */}
          <header className="mb-4 flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-2xl
                  bg-[#0033a0]
                  text-white
                  shadow-[0_8px_20px_rgba(0,51,160,0.24)]
                  transition duration-300
                  group-hover/widget:-rotate-3
                  group-hover/widget:scale-105
                "
              >
                <CalendarDays
                  className="h-5 w-5"
                  strokeWidth={2.2}
                />
              </div>

              <div className="min-w-0">
                <div className="mb-0.5 flex flex-wrap items-center gap-2">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-blue-600">
                    Organización
                  </p>

                  <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                    2026
                  </span>
                </div>

                <h2
                  id="calendar-widget-title"
                  className="text-[15px] font-extrabold leading-tight text-[#123f7a]"
                >
                  Calendario MESA
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={openCalendar}
              aria-label="Ampliar calendario MESA 2026"
              title="Ampliar calendario"
              className="
                flex h-10 w-10 shrink-0 cursor-pointer
                items-center justify-center
                rounded-xl
                border border-slate-200
                bg-white
                text-[#0033a0]
                shadow-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-blue-300
                hover:bg-blue-50
                hover:shadow-md
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-2
              "
            >
              <Expand
                className="h-[18px] w-[18px]"
                strokeWidth={2}
              />
            </button>
          </header>

          {/* Vista previa */}
          <button
            type="button"
            onClick={openCalendar}
            aria-label="Abrir calendario completo"
            className="
              group/calendar relative block w-full
              cursor-pointer
              overflow-hidden
              rounded-[21px]
              border border-slate-200/80
              bg-slate-50
              p-2
              shadow-[0_8px_24px_rgba(15,23,42,0.08)]
              transition-all duration-500
              hover:-translate-y-1
              hover:border-blue-200
              hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              focus-visible:ring-offset-2
            "
          >
            <div className="relative overflow-hidden rounded-[16px] bg-white">
              <img
                src={CALENDAR_IMAGE}
                alt="Vista previa del Calendario MESA 2026"
                draggable={false}
                className="
                  block h-auto w-full
                  object-contain
                  transition-transform duration-700 ease-out
                  group-hover/calendar:scale-[1.025]
                "
              />

              {/* Capa oscura inferior */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t
                  from-slate-950/45
                  via-slate-950/0
                  to-transparent
                  opacity-0
                  transition-opacity duration-300
                  group-hover/calendar:opacity-100
                "
              />

              {/* Brillo animado */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute -left-1/2 top-0
                  h-full w-1/3
                  -skew-x-12
                  bg-white/20
                  opacity-0
                  blur-md
                  transition-all duration-700
                  group-hover/calendar:left-[120%]
                  group-hover/calendar:opacity-100
                "
              />

              {/* Indicador flotante */}
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
                  px-4 py-2
                  text-[11px] font-semibold text-white
                  opacity-0
                  shadow-xl
                  backdrop-blur-md
                  transition-all duration-300
                  group-hover/calendar:translate-y-0
                  group-hover/calendar:opacity-100
                "
              >
                <Maximize2
                  className="h-3.5 w-3.5"
                  strokeWidth={2}
                />

                Ver calendario completo
              </div>
            </div>
          </button>
        </div>
      </section>

      <DocumentViewerModal
        isOpen={open}
        title="Calendario MESA 2026"
        image={CALENDAR_IMAGE}
        onClose={closeCalendar}
      />
    </>
  );
};