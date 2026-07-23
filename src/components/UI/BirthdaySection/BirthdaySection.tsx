import { DocumentViewerModal } from "../DocumentViewerModal/DocumentViewerModal";
import { BirthdayHeader } from "./BirthdayHeader";
import { BirthdayEmpty } from "./BirthdayEmpty";
import { BirthdayCard } from "./BirthdayCard";
import { useBirthdaySection } from "../../../hooks/useBirthdaySection";
import { birthdays } from "../../../data/birthday.data";

export const BirthdaySection = () => {
  const { birthdaySectionRef, selectedPhoto, setSelectedPhoto } =
    useBirthdaySection();

  return (
    <>
      <section
        ref={birthdaySectionRef}
        id="cumpleanos"
        aria-labelledby="birthday-section-title"
        className="group/section relative scroll-mt-28 overflow-hidden rounded-[28px] border 
        border-blue-100 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.07)] 
        transition-all duration-300 hover:border-blue-200 
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.11)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-br 
          from-blue-50 via-white to-sky-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-16 h-48 w-48 rounded-full 
          bg-blue-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-10 h-40 w-40 rounded-full 
          bg-sky-100/70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(0,51,160,0.08)_1px,transparent_1px)] 
          bg-size-[22px_22px] opacity-[0.16]"
        />

        <img
          src="/globos.png"
          alt=""
          draggable={false}
          className="pointer-events-none absolute right-1 top-4 z-0 h-28 w-28 rotate-[8deg] 
          object-contain opacity-90 drop-shadow-[0_8px_16px_rgba(0,51,160,0.12)] 
          transition-transform duration-700 group-hover/section:-rotate-2 
          group-hover/section:scale-105"
        />

        <div className="relative z-10">
          <BirthdayHeader />

          {birthdays.length > 0 ? (
            <div className="space-y-4">
              {birthdays.map((person) => (
                <BirthdayCard
                  key={`${person.name}-${person.date}`}
                  person={person}
                  onPhotoClick={() => {
                    if (!person.photo) return;
                    setSelectedPhoto({
                      title: person.name,
                      image: person.photo,
                    });
                  }}
                />
              ))}
            </div>
          ) : (
            <BirthdayEmpty />
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
