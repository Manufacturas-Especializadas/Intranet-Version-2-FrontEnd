import {
  ExternalLink,
  LockKeyhole,
} from "lucide-react";
import {
  companyApplications,
  registerRecentAccess,
} from "../../data/accessRegistry";

export const Aplicaciones = () => {
  const availableApplications = companyApplications;

  return (
    <div
      className="
        mx-auto w-full max-w-screen-2xl
        px-4 py-2
        sm:px-5
        lg:px-6
      "
    >
      <section
        className="
          relative overflow-hidden
          rounded-[28px]
          border border-blue-200/50
          bg-gradient-to-br
          from-[#06183f]
          via-[#0033a0]
          to-[#0874d1]
          p-4
          shadow-[0_20px_52px_rgba(0,51,160,0.20)]
          sm:p-5
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-28 -top-32
            h-[360px] w-[360px]
            rounded-full
            bg-cyan-300/20
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -bottom-36 -left-28
            h-[330px] w-[330px]
            rounded-full
            bg-blue-300/20
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14)_1px,transparent_1px)]
            [background-size:26px_26px]
            opacity-20
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            right-10 top-6
            h-40 w-40
            rounded-full
            border border-white/10
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            right-[68px] top-[52px]
            h-24 w-24
            rounded-full
            border border-white/10
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            inset-x-10 top-0 h-px
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            right-8 top-2
            hidden select-none
            text-[76px] font-black
            tracking-[-0.08em]
            text-white/[0.045]
            lg:block
          "
        >
          MESA
        </div>

        <div className="relative z-10">
          <header>
            <p
              className="
                text-[11px] font-extrabold
                uppercase tracking-[0.22em]
                text-cyan-200
              "
            >
              Herramientas corporativas
            </p>

            <h1
              className="
                mt-1 text-[34px] font-black
                leading-tight tracking-tight
                text-white
                sm:text-[38px]
              "
            >
              Aplicaciones
            </h1>

            <p
              className="
                mt-1.5 max-w-2xl
                text-sm leading-5
                text-blue-50/80
              "
            >
              Selecciona una herramienta para abrirla en una pestaña nueva.
            </p>

            <div className="mt-3 flex items-center gap-2">
              <div className="h-1 w-14 rounded-full bg-white" />
              <div className="h-1 w-5 rounded-full bg-cyan-300" />
              <div className="h-1 w-2 rounded-full bg-white/40" />
            </div>
          </header>

          <section
            className="
              relative mt-3
              overflow-hidden
              rounded-[24px]
              border border-white/20
              bg-white/[0.96]
              p-4
              shadow-[0_20px_46px_rgba(3,20,60,0.22)]
              backdrop-blur-xl
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute inset-x-0 top-0
                h-1
                bg-gradient-to-r
                from-[#0033a0]
                via-[#1685df]
                to-[#0033a0]
              "
            />

            {availableApplications.length > 0 ? (
              <div
                className="
                  grid grid-cols-1
                  gap-3
                  sm:grid-cols-2
                  xl:grid-cols-3
                  2xl:grid-cols-4
                "
              >
                {availableApplications.map((application) => {
                  const Icon = application.icon;

                  return (
                    <a
                      key={application.id}
                      href={application.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        registerRecentAccess(application.id)
                      }
                      title={`Abrir ${application.title}`}
                      className="
                        group/app relative
                        flex min-h-[195px]
                        w-full cursor-pointer
                        overflow-hidden
                        rounded-[20px]
                        border border-slate-200
                        bg-white
                        p-4
                        shadow-[0_6px_20px_rgba(15,23,42,0.06)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-blue-300
                        hover:shadow-[0_15px_30px_rgba(0,51,160,0.14)]
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-blue-500
                        focus-visible:ring-offset-2
                        xl:h-[195px]
                      "
                    >
                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none absolute
                          -right-14 -top-14
                          h-28 w-28
                          rounded-full
                          bg-blue-50
                          opacity-70
                          transition-all duration-500
                          group-hover/app:scale-125
                          group-hover/app:bg-blue-100
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
                          group-hover/app:scale-x-100
                        "
                      />

                      <div
                        className="
                          relative z-10
                          flex h-full min-w-0
                          flex-1 flex-col
                        "
                      >
                        <div
                          className="
                            flex min-w-0
                            items-start gap-3
                            pr-10
                          "
                        >
                          <div
                            className={`
                              relative flex
                              h-14 w-14
                              shrink-0 items-center
                              justify-center overflow-hidden
                              rounded-[18px]
                              text-white
                              shadow-[0_9px_20px_rgba(3,20,60,0.20)]
                              transition-all duration-300
                              group-hover/app:-rotate-2
                              group-hover/app:scale-105
                              ${application.iconBackground}
                            `}
                          >
                            <div
                              aria-hidden="true"
                              className="
                                absolute -right-4 -top-5
                                h-12 w-12
                                rounded-full
                                bg-white/20
                              "
                            />

                            <div
                              aria-hidden="true"
                              className="
                                absolute -bottom-6 -left-5
                                h-14 w-14
                                rounded-full
                                bg-slate-950/10
                              "
                            />

                            <Icon
                              className="relative z-10 h-6 w-6"
                              strokeWidth={2}
                            />
                          </div>

                          <div className="min-w-0 flex-1 pt-0.5">
                            <div className="flex min-w-0 items-start gap-2">
                              <span
                                className="
                                  mt-2 h-2 w-2
                                  shrink-0 rounded-full
                                  bg-[#1685df]
                                "
                              />

                              <h2
                                className="
                                  line-clamp-2
                                  text-[16px] font-extrabold
                                  leading-[1.3rem]
                                  text-[#123f7a]
                                  transition-colors
                                  group-hover/app:text-[#0033a0]
                                "
                              >
                                {application.title}
                              </h2>
                            </div>

                            <p
                              className="
                                mt-2 line-clamp-2
                                text-[13px] leading-5
                                text-slate-500
                              "
                            >
                              {application.description}
                            </p>
                          </div>
                        </div>

                        <div
                          className="
                            mt-auto border-t
                            border-slate-100 pt-3
                          "
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span
                              className="
                                max-w-[160px] truncate
                                rounded-lg
                                bg-blue-50
                                px-2.5 py-1
                                text-[10px] font-bold
                                text-blue-700
                              "
                            >
                              {application.category}
                            </span>

                            <span
                              className="
                                flex shrink-0
                                items-center gap-1.5
                                text-[12px] font-extrabold
                                text-slate-400
                                transition-colors
                                group-hover/app:text-[#0033a0]
                              "
                            >
                              Acceder

                              <ExternalLink
                                className="h-3.5 w-3.5"
                                strokeWidth={2}
                              />
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        className="
                          absolute right-3 top-3
                          flex h-9 w-9 shrink-0
                          items-center justify-center
                          rounded-xl
                          border border-blue-100
                          bg-blue-50
                          text-[#0033a0]
                          transition-all duration-300
                          group-hover/app:-translate-y-0.5
                          group-hover/app:border-[#0033a0]
                          group-hover/app:bg-[#0033a0]
                          group-hover/app:text-white
                          group-hover/app:shadow-md
                        "
                      >
                        <ExternalLink
                          className="h-4 w-4"
                          strokeWidth={2}
                        />
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div
                className="
                  flex min-h-[240px]
                  flex-col items-center
                  justify-center
                  rounded-[22px]
                  border border-dashed
                  border-blue-200
                  bg-blue-50/50
                  px-6 text-center
                "
              >
                <div
                  className="
                    mb-3 flex h-12 w-12
                    items-center justify-center
                    rounded-[16px]
                    bg-white
                    text-[#0033a0]
                    shadow-sm
                  "
                >
                  <LockKeyhole
                    className="h-5 w-5"
                    strokeWidth={2}
                  />
                </div>

                <h2 className="text-base font-extrabold text-[#123f7a]">
                  No tienes aplicaciones asignadas
                </h2>

                <p className="mt-2 max-w-md text-sm leading-5 text-slate-500">
                  Cuando se asignen aplicaciones a tu usuario aparecerán
                  automáticamente en esta sección.
                </p>
              </div>
            )}
          </section>
        </div>
      </section>
    </div>
  );
};