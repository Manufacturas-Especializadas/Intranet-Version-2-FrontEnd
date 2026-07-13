import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  MessageSquare,
  Newspaper,
  Plus,
  ThumbsUp,
} from "lucide-react";

interface PostItem {
  id: string;
  author: string;
  department: string;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  photo?: string;
  avatarClassName: string;
}

const initialPosts: PostItem[] = [
  {
    id: "1",
    author: "María López",
    department: "Recursos Humanos",
    timeAgo: "Hace 2 horas",
    content:
      "¡Gracias a todo el equipo por el esfuerzo y compromiso durante el lanzamiento del nuevo producto!",
    likes: 15,
    comments: 3,
    avatarClassName:
      "from-[#0033a0] via-[#0757bb] to-[#1685df]",
  },
  {
    id: "2",
    author: "Carlos Gómez",
    department: "Operaciones",
    timeAgo: "Hace 4 horas",
    content:
      "Recordatorio: mañana tendremos nuestra reunión general a las 10:00 h en el auditorio.",
    likes: 8,
    comments: 1,
    avatarClassName:
      "from-sky-500 via-blue-500 to-[#0033a0]",
  },
  {
    id: "3",
    author: "Ana Torres",
    department: "Ingeniería",
    timeAgo: "Hace 1 día",
    content:
      "¡Felicitaciones al equipo de Ingeniería por el excelente trabajo realizado durante esta semana!",
    likes: 12,
    comments: 2,
    avatarClassName:
      "from-indigo-500 via-blue-600 to-[#0033a0]",
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

export const RecentPosts = () => {
  const [posts, setPosts] = useState<PostItem[]>(initialPosts);
  const [likedPostIds, setLikedPostIds] = useState<string[]>([]);

  const visiblePosts = posts.slice(0, 2);

  const toggleLike = (postId: string) => {
    const isLiked = likedPostIds.includes(postId);

    setLikedPostIds((currentIds) =>
      isLiked
        ? currentIds.filter((id) => id !== postId)
        : [...currentIds, postId],
    );

    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: Math.max(
                0,
                post.likes + (isLiked ? -1 : 1),
              ),
            }
          : post,
      ),
    );
  };

  return (
    <section
  className="
    group/section relative
    h-full
    overflow-hidden
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
          inset-x-0 top-0 h-36
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
          -right-20 -top-20
          h-52 w-52
          rounded-full
          bg-blue-200/35
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-20 bottom-0
          h-44 w-44
          rounded-full
          bg-sky-100/60
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(0,51,160,0.08)_1px,transparent_1px)]
          [background-size:22px_22px]
          opacity-[0.14]
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        <header className="mb-4 flex items-start gap-3">
          <div
            className="
              flex h-12 w-12 shrink-0
              items-center justify-center
              rounded-2xl
              bg-gradient-to-br
              from-[#0033a0]
              to-[#1685df]
              text-white
              shadow-[0_10px_24px_rgba(0,51,160,0.24)]
              transition-all duration-300
              group-hover/section:-rotate-3
              group-hover/section:scale-105
            "
          >
            <Newspaper
              className="h-5 w-5"
              strokeWidth={2.2}
            />
          </div>

          <div className="min-w-0 pt-0.5">
            <p
              className="
                text-[10px] font-extrabold
                uppercase tracking-[0.22em]
                text-blue-600
              "
            >
              Comunidad MESA
            </p>

            <h2
              className="
                mt-1 text-[20px] font-black
                leading-tight text-[#123f7a]
              "
            >
              Posteos recientes
            </h2>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Comunicados y publicaciones de los colaboradores.
            </p>
          </div>
        </header>

        <div className="mb-4 flex items-center gap-2">
          <div className="h-1 w-12 rounded-full bg-[#0033a0]" />
          <div className="h-1 w-5 rounded-full bg-sky-400" />
          <div className="h-1 w-2 rounded-full bg-blue-200" />
        </div>

        <div className="flex flex-1 flex-col gap-2.5">
          {visiblePosts.map((post) => {
            const liked = likedPostIds.includes(post.id);

            return (
              <article
                key={post.id}
                className="
                  group/post relative
                  overflow-hidden
                  rounded-[20px]
                  border border-slate-200
                  bg-white
                  p-3.5
                  shadow-[0_6px_20px_rgba(15,23,42,0.05)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-300
                  hover:shadow-[0_14px_28px_rgba(0,51,160,0.11)]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    -right-16 -top-16
                    h-36 w-36
                    rounded-full
                    bg-blue-50
                    transition-transform duration-500
                    group-hover/post:scale-125
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute bottom-0 left-0 top-0
                    w-1
                    bg-gradient-to-b
                    from-[#0033a0]
                    to-[#1685df]
                    opacity-0
                    transition-opacity duration-300
                    group-hover/post:opacity-100
                  "
                />

                <div className="relative z-10 flex items-start gap-3">
                  <div className="relative shrink-0">
                    {post.photo ? (
                      <img
                        src={post.photo}
                        alt={post.author}
                        draggable={false}
                        className="
                          h-10 w-10
                          rounded-2xl
                          object-cover
                          shadow-[0_7px_16px_rgba(15,23,42,0.13)]
                          ring-2 ring-white
                        "
                      />
                    ) : (
                      <div
                        className={`
                          flex h-10 w-10
                          items-center justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          text-xs font-black
                          text-white
                          shadow-[0_7px_16px_rgba(0,51,160,0.20)]
                          ring-2 ring-white
                          ${post.avatarClassName}
                        `}
                      >
                        {getInitials(post.author)}
                      </div>
                    )}

                    <span
                      className="
                        absolute -bottom-1 -right-1
                        h-3.5 w-3.5
                        rounded-full
                        border-2 border-white
                        bg-emerald-500
                      "
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div
                      className="
                        flex flex-col gap-1
                        sm:flex-row
                        sm:items-start
                        sm:justify-between
                      "
                    >
                      <div className="min-w-0">
                        <h3
                          className="
                            truncate text-[13px]
                            font-extrabold text-[#123f7a]
                          "
                        >
                          {post.author}
                        </h3>

                        <span
                          className="
                            mt-1 inline-flex
                            max-w-full truncate
                            rounded-md
                            bg-blue-50
                            px-2 py-0.5
                            text-[8px] font-bold
                            text-blue-700
                          "
                        >
                          {post.department}
                        </span>
                      </div>

                      <div
                        className="
                          flex shrink-0
                          items-center gap-1.5
                          text-[9px] font-medium
                          text-slate-400
                        "
                      >
                        <Clock3
                          className="h-3 w-3"
                          strokeWidth={2}
                        />

                        {post.timeAgo}
                      </div>
                    </div>

                    <p
                      className="
                        mt-2.5 line-clamp-2
                        text-[12px] leading-5
                        text-slate-600
                      "
                    >
                      {post.content}
                    </p>

                    <div
                      className="
                        mt-3 flex flex-wrap
                        items-center gap-2
                        border-t border-slate-100
                        pt-2.5
                      "
                    >
                      <button
                        type="button"
                        onClick={() => toggleLike(post.id)}
                        aria-pressed={liked}
                        aria-label={
                          liked
                            ? `Quitar me gusta a la publicación de ${post.author}`
                            : `Dar me gusta a la publicación de ${post.author}`
                        }
                        className={`
                          group/like flex cursor-pointer
                          items-center gap-1.5
                          rounded-xl border
                          px-2.5 py-1.5
                          text-[10px] font-bold
                          transition-all duration-300
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-blue-500
                          ${
                            liked
                              ? `
                                border-blue-200
                                bg-[#0033a0]
                                text-white
                                shadow-[0_5px_14px_rgba(0,51,160,0.18)]
                              `
                              : `
                                border-slate-200
                                bg-white
                                text-slate-500
                                hover:border-blue-200
                                hover:bg-blue-50
                                hover:text-[#0033a0]
                              `
                          }
                        `}
                      >
                        <ThumbsUp
                          className={`
                            h-3.5 w-3.5
                            transition-transform duration-300
                            group-hover/like:-translate-y-0.5
                            ${liked ? "scale-110" : ""}
                          `}
                          strokeWidth={2}
                          fill={liked ? "currentColor" : "none"}
                        />

                        <span>{post.likes}</span>

                        <span className="hidden sm:inline">
                          Me gusta
                        </span>
                      </button>

                      <button
                        type="button"
                        aria-label={`Ver comentarios de la publicación de ${post.author}`}
                        className="
                          group/comment flex cursor-pointer
                          items-center gap-1.5
                          rounded-xl
                          border border-slate-200
                          bg-white
                          px-2.5 py-1.5
                          text-[10px] font-bold
                          text-slate-500
                          transition-all duration-300
                          hover:border-blue-200
                          hover:bg-blue-50
                          hover:text-[#0033a0]
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-blue-500
                        "
                      >
                        <MessageSquare
                          className="
                            h-3.5 w-3.5
                            transition-transform duration-300
                            group-hover/comment:-translate-y-0.5
                          "
                          strokeWidth={2}
                        />

                        <span>{post.comments}</span>

                        <span className="hidden sm:inline">
                          Comentarios
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="
            mt-4 grid grid-cols-1
            gap-2
            border-t border-blue-100
            pt-4
            sm:grid-cols-2
          "
        >
          <Link
            to="/posteos"
            className="
              group/more flex
              items-center justify-center
              gap-2 rounded-xl
              border border-blue-100
              bg-blue-50/60
              px-4 py-2.5
              text-[11px] font-extrabold
              text-[#0033a0]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-blue-300
              hover:bg-blue-100/70
              hover:shadow-sm
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
            "
          >
            Ver más posteos

            <ArrowRight
              className="
                h-3.5 w-3.5
                transition-transform duration-300
                group-hover/more:translate-x-1
              "
              strokeWidth={2.2}
            />
          </Link>

          <Link
            to="/posteos"
            className="
              group/new relative
              flex items-center justify-center
              gap-2 overflow-hidden
              rounded-xl
              bg-gradient-to-r
              from-[#0033a0]
              to-[#1685df]
              px-4 py-2.5
              text-[11px] font-extrabold
              text-white
              shadow-[0_8px_20px_rgba(0,51,160,0.20)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_12px_25px_rgba(0,51,160,0.28)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              focus-visible:ring-offset-2
            "
          >
            <Plus
              className="
                h-3.5 w-3.5
                transition-transform duration-300
                group-hover/new:rotate-90
              "
              strokeWidth={2.5}
            />

            Nuevo posteo
          </Link>
        </div>
      </div>
    </section>
  );
};