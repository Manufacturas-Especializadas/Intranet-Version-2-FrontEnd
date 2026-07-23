import { ExternalLink } from "lucide-react";
import { registerRecentAccess } from "../../../data/accessRegistry";

interface ApplicationProps {
  application: {
    id: string;
    title: string;
    description: string;
    category: string;
    path: string;
    icon: React.ElementType;
    iconBackground?: string;
  };
}

export const ApplicationCard = ({ application }: ApplicationProps) => {
  const Icon = application.icon;

  return (
    <a
      href={application.path}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => registerRecentAccess(application.id)}
      title={`Abrir ${application.title}`}
      className="
        group/app relative
        flex min-h-48.75
        w-full cursor-pointer
        overflow-hidden
        rounded-[20px]
        border border-slate-200
        bg-white
        p-4
        shadow-[0_6px_20px_rgba(15,23,42,0.06)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-300
        hover:shadow-[0_15px_30px_rgba(0,51,160,0.14)]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-2
        xl:h-48.75
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-14 -top-14
          h-28 w-28
          rounded-full
          bg-blue-50
          opacity-70
          transition-all duration-500
          group-hover/app:scale-125
          group-hover/app:bg-blue-100
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0
          h-1 origin-left
          scale-x-0
          bg-linear-to-r
          from-[#0033a0]
          to-[#1685df]
          transition-transform duration-300
          group-hover/app:scale-x-100
        "
      />

      <div className="relative z-10 flex h-full min-w-0 flex-1 flex-col">
        <div className="flex min-w-0 items-start gap-3 pr-10">
          <div
            className={`
              relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden
              rounded-[18px] text-white shadow-[0_9px_20px_rgba(3,20,60,0.20)]
              transition-all duration-300 group-hover/app:-rotate-2 group-hover/app:scale-105
              ${application.iconBackground ?? "bg-[#0033a0]"}
            `}
          >
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-5 h-12 w-12 rounded-full bg-white/20"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-5 h-14 w-14 rounded-full bg-slate-950/10"
            />
            <Icon className="relative z-10 h-6 w-6" strokeWidth={2} />
          </div>

          <div className="min-w-0 flex-1 pt-0.5">
            <div className="flex min-w-0 items-start gap-2">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1685df]" />
              <h2
                className="line-clamp-2 text-[16px] font-extrabold leading-[1.3rem] 
                text-[#123f7a] transition-colors group-hover/app:text-[#0033a0]"
              >
                {application.title}
              </h2>
            </div>
            <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-slate-500">
              {application.description}
            </p>
          </div>
        </div>

        <div className="mt-auto border-t border-slate-100 pt-3">
          <div className="flex items-center justify-between gap-3">
            <span
              className="max-w-40 truncate rounded-lg bg-blue-50 px-2.5 py-1 
              text-[10px] font-bold text-blue-700"
            >
              {application.category}
            </span>
            <span
              className="flex shrink-0 items-center gap-1.5 text-[12px] font-extrabold 
              text-slate-400 transition-colors group-hover/app:text-[#0033a0]"
            >
              Acceder
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
          </div>
        </div>
      </div>

      <div
        className="absolute right-3 top-3 flex h-9 w-9 shrink-0 items-center 
        justify-center rounded-xl border border-blue-100 bg-blue-50 
        text-[#0033a0] transition-all duration-300 group-hover/app:-translate-y-0.5 
        group-hover/app:border-[#0033a0] group-hover/app:bg-[#0033a0] 
        group-hover/app:text-white group-hover/app:shadow-md"
      >
        <ExternalLink className="h-4 w-4" strokeWidth={2} />
      </div>
    </a>
  );
};
