import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// --- Tipado de Datos ---
interface NewsItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    tag: "NOTICIA DESTACADA",
    title: "Nueva planta en San Luis",
    description: "Anunciamos la apertura de nuestra nueva planta productiva.",
    imageUrl:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2000&auto=format&fit=crop",
    linkUrl: "/noticias/1",
  },
  {
    id: 2,
    tag: "INNOVACIÓN",
    title: "Actualización de sistemas",
    description:
      "Implementamos nuevo software para optimizar tiempos de entrega.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
    linkUrl: "/noticias/2",
  },
  {
    id: 3,
    tag: "RECURSOS HUMANOS",
    title: "Semana de la salud 2024",
    description:
      "Conoce el calendario de actividades para cuidar tu bienestar.",
    imageUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop",
    linkUrl: "/noticias/3",
  },
];

export const FeaturedNewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === mockNews.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentNews = mockNews[currentIndex];

  return (
    <div className="relative w-full h-80 rounded-2xl overflow-hidden group shadow-sm bg-blue-900">
      <img
        key={currentNews.id}
        src={currentNews.imageUrl}
        alt={currentNews.title}
        className="absolute inset-0 w-full h-full object-cover object-right animate-fade-in"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#0033a0] via-[#0033a0]/80 to-transparent"></div>

      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] mix-blend-overlay"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-14 max-w-2xl">
        <span className="text-white/90 text-xs font-bold tracking-wider uppercase mb-3">
          {currentNews.tag}
        </span>

        <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
          {currentNews.title}
        </h2>

        <p className="text-lg text-white/90 mb-8 max-w-md">
          {currentNews.description}
        </p>

        <div>
          <Link
            to={currentNews.linkUrl}
            className="inline-block bg-white text-[#0033a0] font-bold px-6 py-2.5 rounded-lg 
            hover:bg-slate-50 transition-colors duration-200 shadow-md"
          >
            Leer más
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {mockNews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a noticia ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-3 h-3 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/80 mt-0.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
