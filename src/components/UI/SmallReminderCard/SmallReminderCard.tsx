const solesItems = [
  {
    letter: "S",
    title: "Seleccionar",
  },
  {
    letter: "O",
    title: "Ordenar",
  },
  {
    letter: "L",
    title: "Limpiar",
  },
  {
    letter: "E",
    title: "Estandarizar",
  },
  {
    letter: "S",
    title: "Sostener",
  },
];

export const SmallReminderCard = () => {
  return (
    <section
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-blue-100
        bg-white
        p-3
        shadow-[0_8px_22px_rgba(15,23,42,0.06)]
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-blue-200
        hover:shadow-[0_14px_30px_rgba(0,51,160,0.11)]
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/90" />

      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-300/30 blur-3xl transition duration-500 group-hover:scale-110" />

      <div className="pointer-events-none absolute -bottom-16 -left-12 h-32 w-32 rounded-full bg-cyan-200/35 blur-3xl transition duration-500 group-hover:scale-110" />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(0,51,160,0.08)_1px,transparent_1px)]
          [background-size:18px_18px]
          opacity-[0.08]
        "
      />

      <div className="relative z-10 flex items-center gap-3">
        <div
          className="
            five-s-mesa-card
            relative flex h-[86px] w-[86px]
            shrink-0 items-center justify-center
            overflow-hidden rounded-[22px]
            bg-gradient-to-br
            from-[#002a86]
            via-[#005bea]
            to-[#21a4ff]
            text-white
            shadow-[0_12px_26px_rgba(0,51,160,0.28)]
          "
        >
          <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-white/18" />
          <div className="pointer-events-none absolute -bottom-7 -left-7 h-20 w-20 rounded-full bg-white/10" />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0
              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22)_1px,transparent_1px)]
              [background-size:14px_14px]
              opacity-20
            "
          />

          <div className="relative text-center">
            <p className="text-[31px] font-black leading-none tracking-[-0.08em]">
              5S
            </p>

            <p className="mt-1 text-[8.5px] font-black uppercase tracking-[0.22em] text-blue-100">
              MESA
            </p>

            <div className="mx-auto mt-1.5 h-0.5 w-8 rounded-full bg-white/75" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-blue-600">
              Cultura 5’S SOLES
            </p>

            <h2 className="mt-0.5 text-[15px] font-black leading-tight text-[#123f7a]">
              Mantén tu área lista, segura y ordenada
            </h2>

            <p className="mt-1 text-[11px] leading-4 text-slate-600">
              Aplica SOLES como parte de la disciplina diaria en cada área.
            </p>
          </div>

          <div className="relative mt-2">
            <div className="absolute left-4 right-4 top-[18px] h-0.5 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100" />

            <div className="relative grid grid-cols-5 gap-1.5">
              {solesItems.map((item, index) => (
                <div
                  key={`${item.letter}-${item.title}-${index}`}
                  className="
          relative flex flex-col items-center
          rounded-2xl
          border border-blue-300
          bg-blue-50
          px-1 py-2
          text-center
          shadow-[0_10px_22px_rgba(0,51,160,0.10)]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_12px_26px_rgba(0,51,160,0.16)]
        "
                >
                  <div
                    className="
            relative z-10 mb-1 flex h-9 w-9
            items-center justify-center
            rounded-2xl
            bg-gradient-to-br
            from-[#0033a0]
            to-[#1685df]
            text-sm font-black
            text-white
            ring-1 ring-blue-300
            shadow-[0_8px_16px_rgba(0,51,160,0.20)]
          "
                  >
                    {item.letter}
                  </div>

                  <p className="text-[8.5px] font-extrabold leading-tight text-[#123f7a]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fiveSFloat {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }

            50% {
              transform: translateY(-3px) rotate(-0.8deg);
            }
          }

          @keyframes fiveSGlow {
            0%, 100% {
              box-shadow: 0 12px 26px rgba(0, 51, 160, 0.28);
            }

            50% {
              box-shadow: 0 14px 30px rgba(0, 91, 234, 0.40);
            }
          }

          .five-s-mesa-card {
            animation:
              fiveSFloat 4s ease-in-out infinite,
              fiveSGlow 3.5s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .five-s-mesa-card {
              animation: none;
            }
          }
        `}
      </style>
    </section>
  );
};