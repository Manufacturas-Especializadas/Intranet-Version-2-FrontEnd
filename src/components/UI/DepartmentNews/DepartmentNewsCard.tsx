import { Link } from "react-router-dom";
import { ChevronRight, Clock3 } from "lucide-react";
import type { DeptNewsItem } from "../../../data/departmentNews.data";

interface DepartmentNewsCardProps {
  news: DeptNewsItem;
  index: number;
}

export const DepartmentNewsCard = ({
  news,
  index,
}: DepartmentNewsCardProps) => {
  const Icon = news.icon;

  return (
    <Link
      to="/noticias/departamentos"
      aria-label={`Leer noticia de ${news.department}: ${news.title}`}
      className="
        group/news relative
        grid min-h-22.5
        grid-cols-[48px_minmax(0,1fr)_36px]
        items-center gap-3
        overflow-hidden
        rounded-[20px]
        border border-slate-200
        bg-white
        p-3
        shadow-[0_6px_20px_rgba(15,23,42,0.05)]
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-blue-300
        hover:bg-linear-to-br
        hover:from-blue-50/70
        hover:via-white
        hover:to-sky-50/70
        hover:shadow-[0_14px_28px_rgba(0,51,160,0.11)]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-2
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-14 -top-14
          h-32 w-32
          rounded-full
          bg-blue-50
          transition-transform duration-500
          group-hover/news:scale-125
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute bottom-0 left-0 top-0
          w-1 bg-linear-to-b
          from-[#0033a0] to-[#1685df]
          opacity-0 transition-opacity duration-300
          group-hover/news:opacity-100
        "
      />

      <div
        className={`
          relative z-10 flex h-12 w-12
          shrink-0 items-center justify-center
          rounded-2xl bg-linear-to-br
          text-white shadow-[0_8px_18px_rgba(0,51,160,0.18)]
          transition-all duration-300
          group-hover/news:-rotate-3
          group-hover/news:scale-105
          ${news.iconBackground}
        `}
      >
        <div
          aria-hidden="true"
          className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-white/15"
        />
        <Icon className="relative h-5 w-5" strokeWidth={1.9} />
      </div>

      <div className="relative z-10 min-w-0">
        <div className="mb-1 flex items-center gap-2">
          <span
            className={`
              inline-flex max-w-full
              truncate rounded-lg
              border px-2 py-0.5
              text-[8px] font-extrabold
              uppercase tracking-widest
              ${news.badgeClassName}
            `}
          >
            {news.department}
          </span>
        </div>

        <h3
          className="truncate text-[13px] font-extrabold text-[#123f7a] transition-colors 
          duration-300 group-hover/news:text-[#0033a0]"
        >
          {news.title}
        </h3>

        <p className="mt-0.5 line-clamp-1 text-[11px] leading-4 text-slate-500">
          {news.description}
        </p>

        <div
          className="mt-1.5 flex items-center gap-1.5 text-[9px] font-semibold 
          text-slate-400"
        >
          <Clock3 className="h-3 w-3" strokeWidth={2} />
          {news.timeAgo}
        </div>
      </div>

      <div
        className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center 
        rounded-xl border border-slate-200 bg-white text-slate-400 shadow-sm 
        transition-all duration-300 group-hover/news:translate-x-1 
        group-hover/news:border-[#0033a0] group-hover/news:bg-[#0033a0] 
        group-hover/news:text-white"
      >
        <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 right-12 text-[32px] font-black leading-none text-blue-100/60 opacity-0 transition-opacity duration-300 group-hover/news:opacity-100"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </Link>
  );
};
