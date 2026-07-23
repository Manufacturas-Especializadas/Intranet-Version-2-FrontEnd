import { PartyPopper, CalendarDays, Gift } from "lucide-react";
import type { BirthdayPerson } from "../../../data/birthday.data";
import { BirthdayPhoto } from "./BirthdayPhoto";

export const BirthdayCard = ({
  person,
  onPhotoClick,
}: {
  person: BirthdayPerson;
  onPhotoClick: () => void;
}) => {
  return (
    <article
      className="group/card relative overflow-hidden rounded-3xl border border-blue-100 
      bg-linear-to-br from-blue-50/80 via-white to-sky-50/80 p-3.5 
      shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-300 
      hover:-translate-y-1 hover:border-blue-300 
      hover:shadow-[0_18px_38px_rgba(0,51,160,0.13)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full border 
        border-blue-100/80 transition-transform duration-700 group-hover/card:scale-125"
      />

      <BirthdayPhoto person={person} onOpen={onPhotoClick} />

      <div className="relative mt-4 px-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p
              className="mb-1 text-[9px] font-extrabold uppercase tracking-[0.18em] 
              text-blue-500"
            >
              Feliz cumpleaños
            </p>
            <h3 className="truncate text-xl font-black leading-tight text-[#123f7a]">
              {person.name}
            </h3>
            <span
              className="mt-2 inline-flex rounded-lg border border-blue-100 
              bg-white px-2.5 py-1 text-[10px] font-bold text-blue-700 shadow-sm"
            >
              {person.department}
            </span>
          </div>
          <div
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl 
            bg-blue-50 text-[#0033a0] transition-all duration-300 group-hover/card:rotate-6 
            group-hover/card:bg-[#0033a0] group-hover/card:text-white"
          >
            <PartyPopper className="h-5 w-5" strokeWidth={2} />
          </div>
        </div>
      </div>

      <div
        className="relative mt-4 flex items-center gap-3 overflow-hidden rounded-2xl border 
        border-blue-100 bg-white px-3.5 py-3 shadow-sm"
      >
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 top-0 w-1 bg-linear-to-b from-[#0033a0] 
          to-[#1685df]"
        />
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl 
          bg-blue-50 text-[#0033a0]"
        >
          <CalendarDays className="h-5 w-5" strokeWidth={1.9} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
            Fecha de cumpleaños
          </p>
          <p className="mt-0.5 text-sm font-black text-[#0033a0]">
            {person.date}
          </p>
        </div>
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl 
          bg-linear-to-br from-blue-50 to-sky-100 text-blue-600"
        >
          <Gift className="h-4 w-4" strokeWidth={2} />
        </div>
      </div>
    </article>
  );
};
