import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { DepartmentNewsHeader } from "./DepartmentNewsHeader";
import { DepartmentNewsCard } from "./DepartmentNewsCard";
import { deptNews } from "../../../data/departmentNews.data";

export const DepartmentNews = () => {
  const visibleDeptNews = deptNews.slice(0, 3);

  return (
    <section
      className="
        group/section relative
        h-full overflow-hidden
        rounded-[28px] border border-blue-100
        bg-white p-5
        shadow-[0_12px_36px_rgba(15,23,42,0.07)]
        transition-all duration-300
        hover:border-blue-200
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.11)]
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-36 
        bg-linear-to-br from-blue-50 via-white to-sky-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full 
        bg-blue-200/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-44 w-44 rounded-full 
        bg-sky-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(0,51,160,0.08)_1px,transparent_1px)] 
        bg-size-[22px_22px] opacity-[0.14]"
      />

      <div className="relative z-10 flex h-full flex-col">
        <DepartmentNewsHeader />

        <div className="flex flex-1 flex-col gap-2.5">
          {visibleDeptNews.map((news, index) => (
            <DepartmentNewsCard key={news.id} news={news} index={index} />
          ))}
        </div>

        <Link
          to="/noticias/departamentos"
          className="
            group/more mt-auto
            flex items-center justify-center gap-2
            rounded-xl border border-blue-100
            bg-blue-50/60 px-4 py-2.5
            text-[11px] font-extrabold text-[#0033a0]
            transition-all duration-300
            hover:-translate-y-0.5 hover:border-blue-300
            hover:bg-blue-100/70 hover:shadow-sm
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
          "
        >
          Ver más noticias
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 
            group-hover/more:translate-x-1"
            strokeWidth={2.2}
          />
        </Link>
      </div>
    </section>
  );
};
