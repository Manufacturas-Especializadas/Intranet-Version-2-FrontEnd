import { CalendarDays, Expand, Gift } from "lucide-react";
import { useState } from "react";
import { DocumentViewerModal } from "../DocumentViewerModal/DocumentViewerModal";

const birthdays = [
  {
    name: "Beto Pcerditas Lokas",
    department: "Sistemas",
    date: "08 Julio",
    photo: "/birthdays/beto-pcerditas.png",
  },
];

type BirthdayPerson = {
  name: string;
  department: string;
  date: string;
  photo?: string;
};

const BirthdayPhoto = ({
  person,
  onOpen,
}: {
  person: BirthdayPerson;
  onOpen: () => void;
}) => {
  const [imageError, setImageError] = useState(false);

  if (!person.photo || imageError) {
    return (
      <div className="flex h-[220px] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 text-5xl font-bold text-[#0033a0]">
        {person.name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .slice(0, 2)}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl focus:outline-none"
    >
      <img
        src={person.photo}
        alt={person.name}
        draggable={false}
        onError={() => setImageError(true)}
        className="h-[220px] w-full rounded-2xl object-cover shadow-sm transition duration-300 group-hover:scale-[1.02]"
      />

      <div className="absolute inset-0 rounded-2xl bg-slate-950/0 transition duration-300 group-hover:bg-slate-950/20" />

      <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#0033a0] opacity-0 shadow-sm backdrop-blur-sm transition duration-300 group-hover:opacity-100">
        <Expand className="h-4 w-4" strokeWidth={2} />
      </div>
    </button>
  );
};

export const BirthdaySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    title: string;
    image: string;
  } | null>(null);

  return (
    <>
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-100 blur-2xl" />
        <div className="pointer-events-none absolute -left-16 bottom-10 h-32 w-32 rounded-full bg-sky-100/70 blur-2xl" />

        <img
          src="/globos.png"
          alt=""
          draggable={false}
          className="pointer-events-none absolute right-1 top-4 z-0 h-30 w-30 rotate-10 object-contain"
        />

        <div className="relative z-10 mb-5 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="mt-2 text-2xl font-bold leading-tight text-[#123f7a]">
              Cumpleaños
            </h2>

            <p className="mt-1 max-w-[230px] text-sm text-slate-500">
              Colaboradores que cumplen años.
            </p>
          </div>

          <div className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Hoy
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          {birthdays.map((person) => (
            <article
              key={person.name}
              className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-4 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <BirthdayPhoto
                person={person}
                onOpen={() => {
                  if (!person.photo) return;

                  setSelectedPhoto({
                    title: person.name,
                    image: person.photo,
                  });
                }}
              />

              <div className="mt-4">
                <h3 className="text-xl font-bold leading-tight text-slate-800">
                  {person.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {person.department}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0033a0]">
                  <CalendarDays className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Fecha
                  </p>
                  <p className="text-sm font-bold text-[#0033a0]">
                    {person.date}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedPhoto && (
        <DocumentViewerModal
          isOpen={!!selectedPhoto}
          title={selectedPhoto.title}
          image={selectedPhoto.image}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
};