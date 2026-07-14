import {
  CalendarDays,
  Expand,
  Gift,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DocumentViewerModal } from "../DocumentViewerModal/DocumentViewerModal";

type BirthdayPerson = {
  name: string;
  department: string;
  date: string;
  photo?: string;
};

const birthdays: BirthdayPerson[] = [
  {
    name: "Ulises González",
    department: "Sistemas",
    date: "08 Julio",
    photo: "/birthdays/ulises-gonzalez.png",
  },
];

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

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
      <div
        className="
          relative flex h-[230px] w-full
          items-center justify-center overflow-hidden
          rounded-[22px]
          bg-gradient-to-br
          from-[#0033a0]
          via-[#0757bb]
          to-[#1685df]
          text-5xl font-black text-white
          shadow-[0_14px_30px_rgba(0,51,160,0.18)]
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute -right-12 -top-12
            h-36 w-36 rounded-full
            border border-white/15
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute -bottom-16 -left-14
            h-40 w-40 rounded-full
            border border-white/10
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16)_1px,transparent_1px)]
            [background-size:18px_18px]
            opacity-30
          "
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
      className="
        group/photo relative block w-full
        cursor-pointer overflow-hidden
        rounded-[22px]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-2
      "
    >
      <img
        src={person.photo}
        alt={person.name}
        draggable={false}
        onError={() => setImageError(true)}
        className="
          h-[230px] w-full
          rounded-[22px]
          object-cover
          shadow-sm
          transition-transform duration-700 ease-out
          group-hover/photo:scale-[1.045]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-t
          from-slate-950/55
          via-slate-950/5
          to-transparent
          opacity-50
          transition-opacity duration-300
          group-hover/photo:opacity-75
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-12 -top-12
          h-32 w-32
          rounded-full
          bg-white/20
          blur-2xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-1/2 top-0
          h-full w-1/3
          -skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/35
          to-transparent
          opacity-0
          blur-md
          transition-all duration-700
          group-hover/photo:left-[125%]
          group-hover/photo:opacity-100
        "
      />

      <div
        className="
          pointer-events-none absolute
          right-3 top-3
          flex h-10 w-10
          translate-y-1
          items-center justify-center
          rounded-2xl
          border border-white/30
          bg-white/90
          text-[#0033a0]
          opacity-0
          shadow-[0_8px_22px_rgba(15,23,42,0.20)]
          backdrop-blur-md
          transition-all duration-300
          group-hover/photo:translate-y-0
          group-hover/photo:opacity-100
        "
      >
        <Expand className="h-4 w-4" strokeWidth={2.2} />
      </div>
    </button>
  );
};

export const BirthdaySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    title: string;
    image: string;
  } | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const birthdaySectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (location.hash !== "#cumpleanos") return;

    const scrollTimer = window.setTimeout(() => {
      birthdaySectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 150);

    const clearHashTimer = window.setTimeout(() => {
      navigate("/", {
        replace: true,
        preventScrollReset: true,
      });
    }, 950);

    return () => {
      window.clearTimeout(scrollTimer);
      window.clearTimeout(clearHashTimer);
    };
  }, [location.hash, navigate]);

  return (
    <>
      <section
        ref={birthdaySectionRef}
        id="cumpleanos"
        aria-labelledby="birthday-section-title"
        className="
          group/section relative scroll-mt-28 overflow-hidden
          rounded-[28px]
          border border-blue-100
          bg-white
          p-5
          shadow-[0_12px_36px_rgba(15,23,42,0.07)]
          transition-all duration-300
          hover:border-blue-200
          hover:shadow-[0_18px_45px_rgba(15,23,42,0.11)]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            inset-x-0 top-0 h-40
            bg-gradient-to-br
            from-blue-50
            via-white
            to-sky-50
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-14 -top-16
            h-48 w-48
            rounded-full
            bg-blue-200/40
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -left-20 bottom-10
            h-40 w-40
            rounded-full
            bg-sky-100/70
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(0,51,160,0.08)_1px,transparent_1px)]
            [background-size:22px_22px]
            opacity-[0.16]
          "
        />

        <img
          src="/globos.png"
          alt=""
          draggable={false}
          className="
            pointer-events-none absolute
            right-1 top-4 z-0
            h-28 w-28
            rotate-[8deg]
            object-contain
            opacity-90
            drop-shadow-[0_8px_16px_rgba(0,51,160,0.12)]
            transition-transform duration-700
            group-hover/section:-rotate-2
            group-hover/section:scale-105
          "
        />

        <div className="relative z-10">
          <header className="mb-5 flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-3">
              <div
                className="
                  relative flex h-12 w-12
                  shrink-0 items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#0033a0]
                  to-[#1685df]
                  text-white
                  shadow-[0_10px_24px_rgba(0,51,160,0.24)]
                  transition-transform duration-300
                  group-hover/section:-rotate-3
                  group-hover/section:scale-105
                "
              >
                <Gift className="h-5 w-5" strokeWidth={2.2} />

                <span
                  className="
                    absolute -right-1 -top-1
                    flex h-4 w-4
                    items-center justify-center
                    rounded-full
                    border-2 border-white
                    bg-cyan-400
                  "
                >
                  <Sparkles
                    className="h-2 w-2 text-white"
                    strokeWidth={3}
                  />
                </span>
              </div>

              <div className="min-w-0 pt-0.5">
                <div className="mb-1 flex items-center gap-2">
                  <p
                    className="
                      text-[10px] font-extrabold
                      uppercase tracking-[0.22em]
                      text-blue-600
                    "
                  >
                    Celebraciones
                  </p>

                  <PartyPopper
                    className="h-3.5 w-3.5 text-blue-500"
                    strokeWidth={2}
                  />
                </div>

                <h2
                  id="birthday-section-title"
                  className="
                    text-[22px] font-black
                    leading-tight text-[#123f7a]
                  "
                >
                  Cumpleaños
                </h2>

                <p className="mt-1 max-w-[220px] text-xs leading-5 text-slate-500">
                  Celebramos a quienes cumplen años en MESA.
                </p>
              </div>
            </div>

            <div
              className="
                relative z-10 flex shrink-0
                items-center gap-2
                rounded-full
                border border-blue-100
                bg-white/90
                px-3 py-1.5
                text-[10px] font-extrabold
                uppercase tracking-[0.12em]
                text-blue-700
                shadow-sm
                backdrop-blur-md
              "
            >
              Hoy
            </div>
          </header>

          <div className="mb-5 flex items-center gap-2">
            <div className="h-1 w-12 rounded-full bg-[#0033a0]" />
            <div className="h-1 w-5 rounded-full bg-sky-400" />
            <div className="h-1 w-2 rounded-full bg-blue-200" />
          </div>

          {birthdays.length > 0 ? (
            <div className="space-y-4">
              {birthdays.map((person) => (
                <article
                  key={`${person.name}-${person.date}`}
                  className="
                    group/card relative overflow-hidden
                    rounded-[24px]
                    border border-blue-100
                    bg-gradient-to-br
                    from-blue-50/80
                    via-white
                    to-sky-50/80
                    p-3.5
                    shadow-[0_8px_24px_rgba(15,23,42,0.06)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-300
                    hover:shadow-[0_18px_38px_rgba(0,51,160,0.13)]
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute
                      -right-16 -top-16
                      h-36 w-36
                      rounded-full
                      border border-blue-100/80
                      transition-transform duration-700
                      group-hover/card:scale-125
                    "
                  />

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

                  <div className="relative mt-4 px-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p
                          className="
                            mb-1 text-[9px] font-extrabold
                            uppercase tracking-[0.18em]
                            text-blue-500
                          "
                        >
                          Feliz cumpleaños
                        </p>

                        <h3
                          className="
                            truncate text-xl font-black
                            leading-tight text-[#123f7a]
                          "
                        >
                          {person.name}
                        </h3>

                        <span
                          className="
                            mt-2 inline-flex
                            rounded-lg
                            border border-blue-100
                            bg-white
                            px-2.5 py-1
                            text-[10px] font-bold
                            text-blue-700
                            shadow-sm
                          "
                        >
                          {person.department}
                        </span>
                      </div>

                      <div
                        aria-hidden="true"
                        className="
                          flex h-10 w-10 shrink-0
                          items-center justify-center
                          rounded-2xl
                          bg-blue-50
                          text-[#0033a0]
                          transition-all duration-300
                          group-hover/card:rotate-6
                          group-hover/card:bg-[#0033a0]
                          group-hover/card:text-white
                        "
                      >
                        <PartyPopper
                          className="h-5 w-5"
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="
                      relative mt-4 flex
                      items-center gap-3
                      overflow-hidden
                      rounded-2xl
                      border border-blue-100
                      bg-white
                      px-3.5 py-3
                      shadow-sm
                    "
                  >
                    <div
                      aria-hidden="true"
                      className="
                        absolute bottom-0 left-0 top-0
                        w-1 bg-gradient-to-b
                        from-[#0033a0]
                        to-[#1685df]
                      "
                    />

                    <div
                      className="
                        flex h-10 w-10
                        shrink-0 items-center justify-center
                        rounded-xl
                        bg-blue-50
                        text-[#0033a0]
                      "
                    >
                      <CalendarDays
                        className="h-5 w-5"
                        strokeWidth={1.9}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          text-[9px] font-extrabold
                          uppercase tracking-[0.18em]
                          text-slate-400
                        "
                      >
                        Fecha de cumpleaños
                      </p>

                      <p className="mt-0.5 text-sm font-black text-[#0033a0]">
                        {person.date}
                      </p>
                    </div>

                    <div
                      className="
                        flex h-8 w-8 shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-gradient-to-br
                        from-blue-50
                        to-sky-100
                        text-blue-600
                      "
                    >
                      <Gift className="h-4 w-4" strokeWidth={2} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div
              className="
                flex min-h-[260px]
                flex-col items-center justify-center
                rounded-[24px]
                border border-dashed border-blue-200
                bg-blue-50/40
                px-5 text-center
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
                <Gift className="h-6 w-6" strokeWidth={2} />
              </div>

              <h3 className="text-sm font-extrabold text-[#123f7a]">
                No hay cumpleaños programados
              </h3>

              <p className="mt-2 max-w-[260px] text-xs leading-5 text-slate-500">
                Los próximos cumpleaños de los colaboradores aparecerán en
                esta sección.
              </p>
            </div>
          )}
        </div>
      </section>

      {selectedPhoto && (
        <DocumentViewerModal
          isOpen={Boolean(selectedPhoto)}
          title={selectedPhoto.title}
          image={selectedPhoto.image}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
};