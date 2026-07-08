import { Link } from "react-router-dom";
import { ThumbsUp, MessageSquare, Plus, User } from "lucide-react";

interface PostItem {
  id: string;
  author: string;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
}

const recentPosts: PostItem[] = [
  {
    id: "1",
    author: "María López",
    timeAgo: "hace 2 horas",
    content:
      "¡Gracias a todo el equipo por el esfuerzo en el lanzamiento del nuevo producto!",
    likes: 15,
    comments: 3,
  },
  {
    id: "2",
    author: "Carlos Gómez",
    timeAgo: "hace 4 horas",
    content:
      "Recordatorio: mañana reunión general a las 10 hs en el auditorio.",
    likes: 8,
    comments: 1,
  },
  {
    id: "3",
    author: "Ana Torres",
    timeAgo: "hace 1 día",
    content: "¡Felicitaciones al equipo de Ingeniería por el gran trabajo!",
    likes: 12,
    comments: 2,
  },
];

export const RecentPosts = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-[#0033a0]">Posteos recientes</h3>
        <Link
          to="/posteos"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
        >
          Ver todos
        </Link>
      </div>

      <div className="flex flex-col flex-1">
        {recentPosts.map((post, index) => (
          <div
            key={post.id}
            className={`flex gap-4 items-start py-4 ${
              index !== 0 ? "border-t border-slate-100" : "pt-0"
            }`}
          >
            <div
              className="shrink-0 w-10 h-10 bg-slate-200 text-slate-400 rounded-full flex 
              items-center justify-center"
            >
              <User className="w-6 h-6" strokeWidth={1.5} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col mb-1">
                <span className="text-sm font-bold text-slate-800">
                  {post.author}
                </span>
                <span className="text-xs text-slate-400">{post.timeAgo}</span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                {post.content}
              </p>

              <div className="flex items-center gap-4">
                <button
                  className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 
                  transition-colors group"
                >
                  <ThumbsUp
                    className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
                    strokeWidth={2}
                  />
                  <span className="text-xs font-semibold">{post.likes}</span>
                </button>

                <button
                  className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 
                  transition-colors group"
                >
                  <MessageSquare
                    className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
                    strokeWidth={2}
                  />
                  <span className="text-xs font-semibold">{post.comments}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center">
        <button
          className="flex items-center gap-2 px-6 py-2 rounded-full border border-slate-200 
          text-sm font-bold text-[#0033a0] hover:bg-slate-50 transition-colors"
        >
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          Nuevo posteo
        </button>
      </div>
    </div>
  );
};
