import { Gift, PartyPopper, Sparkles } from "lucide-react";

export const BirthdayHeader = () => {
  return (
    <>
      <header className="mb-5 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div
            className="relative flex h-12 w-12 shrink-0 items-center justify-center 
            rounded-2xl bg-linear-to-br from-[#0033a0] to-[#1685df] text-white 
            shadow-[0_10px_24px_rgba(0,51,160,0.24)] transition-transform duration-300 
            group-hover/section:-rotate-3 group-hover/section:scale-105"
          >
            <Gift className="h-5 w-5" strokeWidth={2.2} />
            <span
              className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center 
              rounded-full border-2 border-white bg-cyan-400"
            >
              <Sparkles className="h-2 w-2 text-white" strokeWidth={3} />
            </span>
          </div>

          <div className="min-w-0 pt-0.5">
            <div className="mb-1 flex items-center gap-2">
              <p
                className="text-[10px] font-extrabold uppercase tracking-[0.22em] 
                text-blue-600"
              >
                Celebraciones
              </p>
              <PartyPopper
                className="h-3.5 w-3.5 text-blue-500"
                strokeWidth={2}
              />
            </div>
            <h2
              id="birthday-section-title"
              className="text-[22px] font-black leading-tight text-[#123f7a]"
            >
              Cumpleaños
            </h2>
            <p className="mt-1 max-w-55 text-xs leading-5 text-slate-500">
              Celebramos a quienes cumplen años en MESA.
            </p>
          </div>
        </div>

        <div
          className="relative z-10 flex shrink-0 items-center gap-2 rounded-full border 
          border-blue-100 bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase 
            tracking-[0.12em] text-blue-700 shadow-sm backdrop-blur-md"
        >
          Hoy
        </div>
      </header>

      <div className="mb-5 flex items-center gap-2">
        <div className="h-1 w-12 rounded-full bg-[#0033a0]" />
        <div className="h-1 w-5 rounded-full bg-sky-400" />
        <div className="h-1 w-2 rounded-full bg-blue-200" />
      </div>
    </>
  );
};
