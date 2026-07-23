import { Gift } from "lucide-react";

export const BirthdayEmpty = () => {
  return (
    <div
      className="flex min-h-65 flex-col items-center justify-center rounded-3xl 
      border border-dashed border-blue-200 bg-blue-50/40 px-5 text-center"
    >
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-[18px] 
        bg-white text-[#0033a0] shadow-sm"
      >
        <Gift className="h-6 w-6" strokeWidth={2} />
      </div>
      <h3 className="text-sm font-extrabold text-[#123f7a]">
        No hay cumpleaños programados
      </h3>
      <p className="mt-2 max-w-65 text-xs leading-5 text-slate-500">
        Los próximos cumpleaños de los colaboradores aparecerán en esta sección.
      </p>
    </div>
  );
};
