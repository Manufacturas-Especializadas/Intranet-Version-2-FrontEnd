import { ExternalLink, Lightbulb, Search } from "lucide-react";

export const DamesaideaSection = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm xl:h-[388px]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-sky-100/80" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative grid h-full grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="relative flex h-full flex-col overflow-hidden bg-gradient-to-br from-[#0033a0] via-[#005bea] to-[#1699ff] p-5 text-white lg:rounded-l-3xl">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px)] [background-size:22px_22px]" />
          </div>

          <div className="relative z-10 shrink-0">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-100">
              Mejora continua
            </p>

            <h2 className="mt-2 text-3xl font-bold leading-tight">
              DaMESAidea
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-blue-100">
              Convierte tus ideas en propuestas reales para mejorar nuestros
              procesos.
            </p>
          </div>

          <div className="relative z-10 mt-5 flex flex-1 items-end">
            <div className="w-full rounded-3xl border border-white/25 bg-white/95 p-3 shadow-lg backdrop-blur-sm">
              <div className="flex h-[160px] items-center justify-center overflow-hidden rounded-2xl bg-white">
                <img
                  src="/damesaidea.png"
                  alt="DaMESAidea"
                  draggable={false}
                  className="max-h-[145px] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full min-w-0 flex-col justify-between gap-4 p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="mb-2 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Plataforma interna
              </div>

              <h3 className="max-w-[520px] text-[26px] font-bold leading-tight text-[#123f7a]">
                Propón, registra y da seguimiento a tus ideas.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                Comparte propuestas de mejora, consulta avances y participa en
                iniciativas que ayuden a optimizar la operación diaria de MESA.
              </p>
            </div>

            <a
              href="https://lively-forest-01f0c7010.1.azurestaticapps.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#0033a0] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md xl:flex"
            >
              Ir a DaMESAidea
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              href="https://lively-forest-01f0c7010.1.azurestaticapps.net/registroIdea"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[112px] items-center gap-4 rounded-3xl border border-blue-100 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0033a0] transition group-hover:bg-[#0033a0] group-hover:text-white">
                <Lightbulb className="h-7 w-7" strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-base font-bold text-slate-800">
                  Registrar idea
                </p>

                <p className="mt-1 text-sm leading-snug text-slate-500">
                  Captura una nueva propuesta de mejora.
                </p>
              </div>
            </a>

            <a
              href="https://lively-forest-01f0c7010.1.azurestaticapps.net/seguimiento"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[112px] items-center gap-4 rounded-3xl border border-blue-100 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0033a0] transition group-hover:bg-[#0033a0] group-hover:text-white">
                <Search className="h-7 w-7" strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-base font-bold text-slate-800">
                  Seguimiento
                </p>

                <p className="mt-1 text-sm leading-snug text-slate-500">
                  Consulta el avance de tus ideas registradas.
                </p>
              </div>
            </a>
          </div>

          <a
            href="https://lively-forest-01f0c7010.1.azurestaticapps.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#0033a0] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md xl:hidden"
          >
            Ir a DaMESAidea
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};