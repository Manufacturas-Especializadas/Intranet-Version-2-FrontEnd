const PEOPLE_IMAGE = "/people-team-white.png";
const MESA_LOGO_WHITE = "/mesa-logo-white.png";

export const MotivationalBanner = () => {
  return (
    <section className="relative h-[180px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#0033a0] via-[#005bea] to-[#1769ff] px-6 py-5 text-white shadow-sm">
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative flex h-full items-center gap-6">
        <div className="flex w-[150px] shrink-0 items-end justify-center">
          <img
            src={PEOPLE_IMAGE}
            alt="Equipo MESA"
            draggable={false}
            className="h-[122px] w-auto object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-[22px] font-bold leading-[1.12] text-white">
            En MESA,
            <br />
            construimos juntos
            <br />
            el futuro.
          </h2>

          <p className="mt-2 max-w-[360px] text-xs leading-relaxed text-blue-100">
            Compromiso, innovación y calidad en todo lo que hacemos.
          </p>
        </div>

        <div className="hidden shrink-0 items-center justify-center md:flex">
          <img
            src={MESA_LOGO_WHITE}
            alt="MESA"
            draggable={false}
            className="h-26 w-auto max-w-[140px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};