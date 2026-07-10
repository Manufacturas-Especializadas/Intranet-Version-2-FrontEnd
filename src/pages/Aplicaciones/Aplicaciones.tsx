import {
  ExternalLink,
  LayoutGrid,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  companyApplications,
  registerRecentAccess,
} from "../../data/accessRegistry";

export const Aplicaciones = () => {
  /*
   * Temporalmente se muestran todas las aplicaciones registradas.
   *
   * Cuando se conecte el backend, companyApplications será reemplazado
   * por la lista de aplicaciones autorizadas para el usuario autenticado.
   */
  const availableApplications = companyApplications;

  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 pb-10 sm:px-5 lg:px-6">
      <section
        className="
          relative min-h-[620px] overflow-hidden
          rounded-[32px]
          border border-blue-200/50
          bg-gradient-to-br
          from-[#06183f]
          via-[#0033a0]
          to-[#0874d1]
          px-5 py-7
          shadow-[0_24px_65px_rgba(0,51,160,0.22)]
          sm:px-7 sm:py-8
          lg:px-10 lg:py-10
        "
      >
        {/* Resplandor superior derecho */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-28 -top-32
            h-[420px] w-[420px]
            rounded-full
            bg-cyan-300/20
            blur-3xl
          "
        />

        {/* Resplandor inferior izquierdo */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -bottom-36 -left-28
            h-[390px] w-[390px]
            rounded-full
            bg-blue-300/20
            blur-3xl
          "
        />

        {/* Resplandor central */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            bottom-0 left-1/3
            h-80 w-80
            rounded-full
            bg-indigo-950/20
            blur-3xl
          "
        />

        {/* Patrón de puntos */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14)_1px,transparent_1px)]
            [background-size:26px_26px]
            opacity-20
          "
        />

        {/* Círculos decorativos */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            right-10 top-12
            h-48 w-48
            rounded-full
            border border-white/10
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            right-[72px] top-[80px]
            h-32 w-32
            rounded-full
            border border-white/10
          "
        />

        {/* Línea decorativa superior */}
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

        {/* Marca MESA decorativa */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            right-8 top-5
            hidden select-none
            text-[92px] font-black
            tracking-[-0.08em]
            text-white/[0.045]
            lg:block
          "
        >
          MESA
        </div>

        <div className="relative z-10">
          {/* Encabezado principal */}
          <header className="max-w-3xl">
            <div
              className="
                mb-5 inline-flex
                items-center gap-2
                rounded-full
                border border-white/15
                bg-white/10
                px-3 py-1.5
                text-blue-50
                shadow-sm
                backdrop-blur-md
              "
            >
              <ShieldCheck
                className="h-4 w-4"
                strokeWidth={2}
              />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.24em]">
                Portal corporativo MESA
              </span>
            </div>

            <h1
              className="
                text-3xl font-black
                tracking-tight text-white
                sm:text-4xl
                lg:text-[42px]
              "
            >
              Mis aplicaciones
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-50/75">
              Accede de manera rápida y segura a las plataformas, sistemas y
              páginas corporativas habilitadas para tu usuario.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-1 w-16 rounded-full bg-white" />
              <div className="h-1 w-6 rounded-full bg-cyan-300" />
              <div className="h-1 w-3 rounded-full bg-white/40" />
            </div>
          </header>

          {/* Panel de aplicaciones */}
          <section
            className="
              relative mt-9 overflow-hidden
              rounded-[28px]
              border border-white/20
              bg-white/[0.96]
              px-4 py-6
              shadow-[0_24px_55px_rgba(3,20,60,0.24)]
              backdrop-blur-xl
              sm:px-6 sm:py-7
              lg:px-8 lg:py-8
            "
          >
            {/* Borde azul superior */}
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

            {/* Encabezado de la sección */}
            <div
              className="
                mb-7 flex flex-col gap-4
                border-b border-slate-200
                pb-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-2xl
                    bg-[#0033a0]
                    text-white
                    shadow-[0_9px_22px_rgba(0,51,160,0.24)]
                  "
                >
                  <LayoutGrid
                    className="h-5 w-5"
                    strokeWidth={2.1}
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-black text-[#123f7a]">
                      Aplicaciones disponibles
                    </h2>

                    <Sparkles
                      className="h-4 w-4 text-blue-500"
                      strokeWidth={2}
                    />
                  </div>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Selecciona una herramienta para abrirla en una pestaña
                    nueva.
                  </p>
                </div>
              </div>

              <div
                className="
                  hidden items-center gap-2
                  rounded-xl
                  bg-blue-50
                  px-3 py-2
                  text-[10px] font-bold
                  uppercase tracking-[0.12em]
                  text-blue-700
                  sm:flex
                "
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                Accesos habilitados
              </div>
            </div>

            {availableApplications.length > 0 ? (
              <div
                className="
                  grid grid-cols-1
                  gap-5
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                "
              >
                {availableApplications.map((application, index) => {
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
                        group/app
                        relative flex min-h-[270px]
                        w-full cursor-pointer
                        flex-col overflow-hidden
                        rounded-[24px]
                        border border-slate-200
                        bg-white
                        p-5
                        shadow-[0_8px_26px_rgba(15,23,42,0.07)]
                        transition-all duration-300
                        hover:-translate-y-1.5
                        hover:border-blue-300
                        hover:shadow-[0_20px_42px_rgba(0,51,160,0.16)]
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-blue-500
                        focus-visible:ring-offset-2
                      "
                    >
                      {/* Resplandor interno */}
                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none absolute
                          -right-16 -top-16
                          h-36 w-36
                          rounded-full
                          bg-blue-50
                          opacity-70
                          transition-all duration-500
                          group-hover/app:scale-125
                          group-hover/app:bg-blue-100
                        "
                      />

                      {/* Línea animada inferior */}
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

                      <div className="relative z-10 flex h-full flex-col">
                        <div className="flex items-start justify-between gap-4">
                          {/* Ícono de la aplicación */}
                          <div
                            className={`
                              relative flex
                              h-[68px] w-[68px]
                              shrink-0 items-center
                              justify-center overflow-hidden
                              rounded-[21px]
                              text-white
                              shadow-[0_13px_27px_rgba(3,20,60,0.22)]
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
                                h-14 w-14
                                rounded-full
                                bg-white/20
                              "
                            />

                            <div
                              aria-hidden="true"
                              className="
                                absolute -bottom-7 -left-5
                                h-16 w-16
                                rounded-full
                                bg-slate-950/10
                              "
                            />

                            <Icon
                              className="relative z-10 h-7 w-7"
                              strokeWidth={2}
                            />
                          </div>

                          {/* Ícono de abrir */}
                          <div
                            className="
                              flex h-10 w-10 shrink-0
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
                        </div>

                        {/* Información */}
                        <div className="mt-5 flex flex-1 flex-col">
                          <div className="flex items-start gap-2">
                            <span
                              className="
                                mt-1.5 h-2 w-2 shrink-0
                                rounded-full
                                bg-[#1685df]
                              "
                            />

                            <h3
                              className="
                                text-base font-extrabold
                                leading-5 text-[#123f7a]
                                transition-colors
                                group-hover/app:text-[#0033a0]
                              "
                            >
                              {application.title}
                            </h3>
                          </div>

                          <p className="mt-3 line-clamp-3 text-xs leading-5 text-slate-500">
                            {application.description}
                          </p>

                          <div className="mt-auto pt-5">
                            <div className="border-t border-slate-100 pt-4">
                              <div className="flex items-center justify-between gap-3">
                                <span
                                  className="
                                    max-w-[150px] truncate
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
                                    text-[11px] font-bold
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

                              {application.internal && (
                                <div
                                  className="
                                    mt-3 flex items-center gap-1.5
                                    rounded-xl
                                    border border-blue-100
                                    bg-blue-50/70
                                    px-3 py-2
                                    text-[10px] font-semibold
                                    text-blue-700
                                  "
                                >
                                  <LockKeyhole
                                    className="h-3.5 w-3.5"
                                    strokeWidth={2}
                                  />

                                  Disponible dentro de la red MESA
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Número decorativo */}
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none absolute
                          bottom-4 right-5
                          text-[42px] font-black
                          leading-none text-slate-100
                          opacity-0
                          transition-opacity duration-300
                          group-hover/app:opacity-70
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div
                className="
                  flex min-h-64
                  flex-col items-center
                  justify-center
                  rounded-[24px]
                  border border-dashed
                  border-blue-200
                  bg-blue-50/50
                  px-6 text-center
                "
              >
                <div
                  className="
                    mb-4 flex h-14 w-14
                    items-center justify-center
                    rounded-[18px]
                    bg-white
                    text-[#0033a0]
                    shadow-sm
                  "
                >
                  <LockKeyhole
                    className="h-6 w-6"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-base font-extrabold text-[#123f7a]">
                  No tienes aplicaciones asignadas
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Cuando se asignen aplicaciones a tu usuario aparecerán
                  automáticamente en esta sección.
                </p>
              </div>
            )}
          </section>

          {/* Mensaje inferior */}
          <div
            className="
              mx-auto mt-5 flex
              max-w-xl items-start
              justify-center gap-2
              rounded-full
              border border-white/10
              bg-white/[0.07]
              px-4 py-2.5
              text-center
              text-[10px] leading-4
              text-blue-50/65
              backdrop-blur-md
            "
          >
            <LockKeyhole className="mt-0.5 h-3.5 w-3.5 shrink-0" />

            <p>
              Algunas aplicaciones únicamente funcionan dentro de la red
              corporativa MESA o mediante una conexión VPN.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};