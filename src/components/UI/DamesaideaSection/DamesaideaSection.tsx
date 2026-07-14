import { ArrowRight, ExternalLink, Lightbulb, Search } from "lucide-react";

const DAMESA_IDEA_HOME =
  "https://lively-forest-01f0c7010.1.azurestaticapps.net/";

const DAMESA_IDEA_REGISTER =
  "https://lively-forest-01f0c7010.1.azurestaticapps.net/registroIdea";

const DAMESA_IDEA_TRACKING =
  "https://lively-forest-01f0c7010.1.azurestaticapps.net/seguimiento";

const actionCards = [
  {
    title: "Registrar idea",
    description: "Captura una nueva propuesta de mejora.",
    href: DAMESA_IDEA_REGISTER,
    icon: Lightbulb,
    label: "Registrar",
  },
  {
    title: "Seguimiento",
    description: "Consulta el avance de tus ideas registradas.",
    href: DAMESA_IDEA_TRACKING,
    icon: Search,
    label: "Consultar",
  },
];

export const DamesaideaSection = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm xl:h-[388px]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-sky-100/80" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative grid h-full grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="relative flex min-h-[360px] flex-col overflow-hidden bg-gradient-to-br from-[#0033a0] via-[#005bea] to-[#1699ff] p-5 text-white lg:min-h-0 lg:rounded-l-3xl">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px)] [background-size:22px_22px]" />
          </div>

          <div className="relative z-10">
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

          <div className="relative z-10 mt-auto">
            <div className="rounded-3xl border border-white/25 bg-white/95 p-3 shadow-lg backdrop-blur-sm">
              <div className="flex h-[160px] items-center justify-center overflow-hidden rounded-2xl bg-white">
                <img
                  src="/damesaidea.png"
                  alt="DaMESAidea"
                  draggable={false}
                  className="max-h-[190px] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-between gap-4 p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div className="min-w-0">
              <div className="mb-2 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Plataforma interna
              </div>

              <h3 className="max-w-[560px] text-[26px] font-bold leading-tight text-[#123f7a]">
                Propón, registra y da seguimiento a tus ideas.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                Comparte propuestas de mejora, consulta avances y participa en
                iniciativas que ayuden a optimizar la operación diaria de MESA.
              </p>
            </div>

            <a
              href={DAMESA_IDEA_HOME}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0033a0] via-[#005bea] to-[#1769ff] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,51,160,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,51,160,0.30)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 xl:flex"
            >
              Ir a DaMESAidea
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {actionCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-h-[122px] items-center gap-4 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/40 to-sky-50/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_12px_28px_rgba(0,91,234,0.16)] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[#0033a0] opacity-0 transition group-hover:opacity-100" />

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 text-[#0033a0] shadow-sm ring-1 ring-blue-100 transition group-hover:scale-105 group-hover:from-[#0033a0] group-hover:to-[#1769ff] group-hover:text-white group-hover:ring-blue-300">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-base font-bold text-slate-800 transition group-hover:text-[#0033a0]">
                      {card.title}
                    </p>

                    <p className="mt-1 text-sm leading-snug text-slate-500">
                      {card.description}
                    </p>

                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                      {card.label}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <a
            href={DAMESA_IDEA_HOME}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0033a0] via-[#005bea] to-[#1769ff] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,51,160,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,51,160,0.30)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 xl:hidden"
          >
            Ir a DaMESAidea
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};