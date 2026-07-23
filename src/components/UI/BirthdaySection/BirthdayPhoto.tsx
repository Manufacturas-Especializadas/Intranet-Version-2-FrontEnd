import { Expand } from "lucide-react";
import { useState } from "react";
import { type BirthdayPerson, getInitials } from "../../../data/birthday.data";

export const BirthdayPhoto = ({
  person,
  onOpen,
}: {
  person: BirthdayPerson;
  onOpen: () => void;
}) => {
  const [imageError, setImageError] = useState(false);

  if (!person.photo || imageError) {
    return (
      <div
        className="relative flex h-57.5 w-full items-center justify-center overflow-hidden 
        rounded-[22px] bg-linear-to-br from-[#0033a0] via-[#0757bb] to-[#1685df] 
        text-5xl font-black text-white shadow-[0_14px_30px_rgba(0,51,160,0.18)]"
      >
        <div
          aria-hidden="true"
          className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/15"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-14 h-40 w-40 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16)_1px,transparent_1px)] 
          bg-size-[18px_18px] opacity-30"
        />
        <span className="relative z-10 drop-shadow-lg">
          {getInitials(person.name)}
        </span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ampliar fotografía de ${person.name}`}
      className="group/photo relative block w-full cursor-pointer overflow-hidden 
      rounded-[22px] focus:outline-none focus-visible:ring-2 
      focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <img
        src={person.photo}
        alt={person.name}
        draggable={false}
        onError={() => setImageError(true)}
        className="h-57.5 w-full rounded-[22px] object-cover shadow-sm 
        transition-transform duration-700 ease-out group-hover/photo:scale-[1.045]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-t 
        from-slate-950/55 via-slate-950/5 to-transparent opacity-50 
        transition-opacity duration-300 group-hover/photo:opacity-75"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full 
        bg-white/20 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 
        bg-linear-to-r from-transparent via-white/35 to-transparent opacity-0 blur-md 
        transition-all duration-700 group-hover/photo:left-[125%] group-hover/photo:opacity-100"
      />
      <div
        className="pointer-events-none absolute right-3 top-3 flex h-10 w-10 translate-y-1 
        items-center justify-center rounded-2xl border border-white/30 bg-white/90 
        text-[#0033a0] opacity-0 shadow-[0_8px_22px_rgba(15,23,42,0.20)] 
        backdrop-blur-md transition-all duration-300 group-hover/photo:translate-y-0 
        group-hover/photo:opacity-100"
      >
        <Expand className="h-4 w-4" strokeWidth={2.2} />
      </div>
    </button>
  );
};
