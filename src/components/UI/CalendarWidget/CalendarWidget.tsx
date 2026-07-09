import { Expand } from "lucide-react";
import { useState } from "react";
import { DocumentViewerModal } from "../DocumentViewerModal/DocumentViewerModal";

const CALENDAR_IMAGE = "/calendario-2026.png";

export const CalendarWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 rounded-2xl bg-blue-50/70 px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
            Calendario
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ampliar calendario"
          className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-blue-300 hover:shadow-md focus:outline-none"
        >
          <img
            src={CALENDAR_IMAGE}
            alt="Calendario MESA 2026"
            draggable={false}
            className="h-auto w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.01]"
          />

          <div className="absolute inset-3 rounded-xl bg-slate-950/0 transition duration-300 group-hover:bg-slate-950/15" />

          <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#0033a0] opacity-0 shadow-md backdrop-blur-sm transition duration-300 group-hover:opacity-100">
            <Expand className="h-5 w-5" strokeWidth={2} />
          </div>
        </button>
      </section>

      <DocumentViewerModal
        isOpen={open}
        title="Calendario MESA 2026"
        image={CALENDAR_IMAGE}
        onClose={() => setOpen(false)}
      />
    </>
  );
};