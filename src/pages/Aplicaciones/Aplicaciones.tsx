import { AplicacionesEmpty } from "../../components/UI/AplicacionesUI/AplicacionesEmpty";
import { AplicacionesHeader } from "../../components/UI/AplicacionesUI/AplicacionesHeader";
import { ApplicationCard } from "../../components/UI/AplicacionesUI/ApplicationCard";
import { companyApplications } from "../../data/accessRegistry";

export const Aplicaciones = () => {
  const availableApplications = companyApplications;

  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-2 sm:px-5 lg:px-6">
      <section
        className="relative overflow-hidden rounded-[28px] border 
        border-blue-200/50 bg-linear-to-br from-[#06183f] via-[#0033a0] 
        to-[#0874d1] p-4 shadow-[0_20px_52px_rgba(0,51,160,0.20)] sm:p-5"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-32 h-90 w-90 
          rounded-full bg-cyan-300/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 -left-28 h-82.5 w-82.5 
          rounded-full bg-blue-300/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 
          bg-[radial-linear(circle_at_center,rgba(255,255,255,0.14)_1px,transparent_1px)] 
          bg-size-[26px_26px] opacity-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-6 h-40 w-40 rounded-full 
          border border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-17 top-13 h-24 w-24 
          rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-0 h-px 
          bg-linear-to-r from-transparent via-white/40 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-2 hidden select-none 
          text-[76px] font-black tracking-[-0.08em] text-white/4.5 lg:block"
        >
          MESA
        </div>

        <div className="relative z-10">
          <AplicacionesHeader />

          <section
            className="relative mt-3 overflow-hidden rounded-3xl border 
            border-white/20 bg-white/96 p-4 shadow-[0_20px_46px_rgba(3,20,60,0.22)] 
            backdrop-blur-xl"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#0033a0] 
              via-[#1685df] to-[#0033a0]"
            />

            {availableApplications.length > 0 ? (
              <div
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 
                2xl:grid-cols-4"
              >
                {availableApplications.map((application) => (
                  <ApplicationCard
                    key={application.id}
                    application={application}
                  />
                ))}
              </div>
            ) : (
              <AplicacionesEmpty />
            )}
          </section>
        </div>
      </section>
    </div>
  );
};
