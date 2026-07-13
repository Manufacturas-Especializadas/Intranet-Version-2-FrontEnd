import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Newspaper,
} from "lucide-react";

interface NewsItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  timeAgo: string;
}

const news: NewsItem[] = [
  {
    id: 1,
    tag: "Noticia destacada",
    title: "Nueva planta en San Luis",
    description:
      "Anunciamos la apertura de nuestra nueva planta productiva y una nueva etapa de crecimiento para MESA.",
    imageUrl:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2000&auto=format&fit=crop",
    linkUrl: "/noticias/1",
    timeAgo: "Hoy",
  },
  {
    id: 2,
    tag: "Innovación",
    title: "Actualización de sistemas",
    description:
      "Implementamos nuevas herramientas digitales para optimizar procesos, comunicación y tiempos de entrega.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
    linkUrl: "/noticias/2",
    timeAgo: "Hace 2 días",
  },
  {
    id: 3,
    tag: "Recursos Humanos",
    title: "Semana de la salud 2026",
    description:
      "Consulta las actividades preparadas para promover la salud y el bienestar de nuestros colaboradores.",
    imageUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop",
    linkUrl: "/noticias/3",
    timeAgo: "Hace 4 días",
  },
];

const SLIDE_DURATION = 6000;

export const FeaturedNewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [imageError, setImageError] = useState(false);

  const currentNews = news[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((current) =>
      current === news.length - 1 ? 0 : current + 1
    );
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? news.length - 1 : current - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setImageError(false);
  }, [currentIndex]);

  useEffect(() => {
    if (paused || news.length <= 1) return;

    const timer = window.setInterval(goToNext, SLIDE_DURATION);

    return () => {
      window.clearInterval(timer);
    };
  }, [goToNext, paused]);

  return (
    <section
      aria-label="Noticias destacadas"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="
        group/carousel relative
        h-[390px] w-full
        overflow-hidden
        rounded-[30px]
        border border-blue-200/60
        bg-[#0033a0]
        shadow-[0_16px_46px_rgba(0,51,160,0.17)]
        transition-all duration-300
        hover:border-blue-300
        hover:shadow-[0_22px_56px_rgba(0,51,160,0.23)]
        sm:h-[370px]
        lg:h-[350px]
      "
    >
      {!imageError ? (
        <img
          key={currentNews.id}
          src={currentNews.imageUrl}
          alt={currentNews.title}
          draggable={false}
          onError={() => setImageError(true)}
          className="
            absolute inset-0
            h-full w-full
            object-cover object-center
            transition-transform duration-1000 ease-out
            group-hover/carousel:scale-[1.035]
            md:object-right
          "
        />
      ) : (
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-[#0033a0]
            via-[#0757bb]
            to-[#1685df]
          "
        />
      )}

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#0033a0]
          via-[#0033a0]/90
          to-[#0033a0]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[#001f63]/60
          via-transparent
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16)_1px,transparent_1px)]
          [background-size:24px_24px]
          opacity-[0.1]
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute bottom-0 left-0 top-0
          w-1
          bg-gradient-to-b
          from-cyan-300
          via-sky-400
          to-transparent
        "
      />

      <div
        className="
          relative z-10
          flex h-full
          max-w-[680px]
          flex-col justify-center
          px-7 pb-20 pt-7
          sm:px-9
          lg:px-10
        "
      >
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-white/20
              bg-white/12
              px-3 py-1.5
              text-[9px] font-extrabold
              uppercase tracking-[0.18em]
              text-cyan-100
              backdrop-blur-md
            "
          >
            <Newspaper className="h-3.5 w-3.5" strokeWidth={2} />
            {currentNews.tag}
          </span>

          <span
            className="
              inline-flex items-center gap-1.5
              rounded-full
              border border-white/15
              bg-blue-950/15
              px-3 py-1.5
              text-[9px] font-bold
              text-white/80
              backdrop-blur-md
            "
          >
            <Clock3 className="h-3 w-3" strokeWidth={2} />
            {currentNews.timeAgo}
          </span>
        </div>

        <h2
          key={`title-${currentNews.id}`}
          className="
            max-w-[560px]
            text-[29px] font-black
            leading-[1.06]
            tracking-[-0.025em]
            text-white
            drop-shadow-[0_4px_14px_rgba(0,0,0,0.18)]
            sm:text-[34px]
            lg:text-[38px]
          "
        >
          {currentNews.title}
        </h2>

        <p
          key={`description-${currentNews.id}`}
          className="
            mt-3 max-w-[530px]
            text-sm leading-6
            text-blue-50/90
            sm:text-[15px]
          "
        >
          {currentNews.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            to={currentNews.linkUrl}
            className="
              group/link relative
              inline-flex cursor-pointer
              items-center gap-2
              overflow-hidden
              rounded-[14px]
              bg-white
              px-5 py-2.5
              text-xs font-extrabold
              text-[#0033a0]
              shadow-[0_12px_28px_rgba(0,31,99,0.25)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-blue-50
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
            "
          >
            <span className="relative">Leer noticia</span>

            <ArrowRight
              className="
                relative h-4 w-4
                transition-transform duration-300
                group-hover/link:translate-x-1
              "
              strokeWidth={2.3}
            />
          </Link>

          <Link
            to="/noticias"
            className="
              inline-flex cursor-pointer
              items-center justify-center
              rounded-[14px]
              border border-white/20
              bg-white/10
              px-5 py-2.5
              text-xs font-bold
              text-white
              backdrop-blur-md
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-white/16
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
            "
          >
            Ver todas
          </Link>
        </div>
      </div>

      <div
        className="
          absolute bottom-5 left-6 z-20
          flex items-center gap-2
          sm:left-9
          lg:left-10
        "
      >
        {news.map((item, index) => {
          const active = currentIndex === index;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Ir a la noticia ${index + 1}: ${item.title}`}
              aria-current={active ? "true" : undefined}
              className={`
                h-2.5 cursor-pointer
                rounded-full
                transition-all duration-300
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                ${
                  active
                    ? "w-12 bg-white"
                    : "w-2.5 bg-white/45 hover:bg-white/80"
                }
              `}
            />
          );
        })}
      </div>

      <div
        className="
          absolute bottom-4 right-5 z-20
          flex items-center gap-2
        "
      >
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Ver noticia anterior"
          className="
            flex h-9 w-9
            cursor-pointer items-center
            justify-center rounded-xl
            border border-white/20
            bg-white/12
            text-white
            backdrop-blur-md
            transition-all duration-300
            hover:bg-white
            hover:text-[#0033a0]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
          "
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={2.3} />
        </button>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Ver siguiente noticia"
          className="
            flex h-9 w-9
            cursor-pointer items-center
            justify-center rounded-xl
            border border-white/20
            bg-white/12
            text-white
            backdrop-blur-md
            transition-all duration-300
            hover:bg-white
            hover:text-[#0033a0]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
          "
        >
          <ChevronRight className="h-4 w-4" strokeWidth={2.3} />
        </button>
      </div>
    </section>
  );
};