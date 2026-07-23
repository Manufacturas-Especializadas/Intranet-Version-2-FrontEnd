import { LockKeyhole } from "lucide-react";

export const AplicacionesEmpty = () => {
  return (
    <div
      className="
        flex min-h-60
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
          rounded-2xl
          bg-white
          text-[#0033a0]
          shadow-sm
        "
      >
        <LockKeyhole className="h-5 w-5" strokeWidth={2} />
      </div>

      <h2 className="text-base font-extrabold text-[#123f7a]">
        No tienes aplicaciones asignadas
      </h2>

      <p className="mt-2 max-w-md text-sm leading-5 text-slate-500">
        Cuando se asignen aplicaciones a tu usuario aparecerán automáticamente
        en esta sección.
      </p>
    </div>
  );
};
