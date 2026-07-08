import { Search, Bell, Mail, ChevronDown } from "lucide-react";

export const Navbar = () => {
  return (
    <header
      className="bg-white border-b border-slate-200 px-6 py-4 flex items-center 
      justify-between z-10"
    >
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-blue-900 leading-tight">
          ¡Hola, Juan!
        </h1>
        <p className="text-sm text-slate-500">Bienvenido a tu intranet</p>
      </div>

      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search
              className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 
              transition-colors"
            />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg leading-5 
            bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
            focus:border-blue-500 transition-all sm:text-sm"
            placeholder="Buscar en la intranet..."
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button
            className="relative p-2 text-slate-500 hover:text-blue-600 
            hover:bg-blue-50 rounded-full transition-colors"
          >
            <Bell className="h-5 w-5" />
            <span
              className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center 
              rounded-full bg-blue-600 text-[10px] font-bold text-white ring-2 ring-white"
            >
              3
            </span>
          </button>

          <button
            className="relative p-2 text-slate-500 hover:text-blue-600 
            hover:bg-blue-50 rounded-full transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span
              className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full 
              bg-blue-600 text-[10px] font-bold text-white ring-2 ring-white"
            >
              2
            </span>
          </button>
        </div>

        <div className="h-8 w-px bg-slate-200"></div>

        <button
          className="flex items-center gap-3 hover:bg-slate-50 p-1.5 rounded-lg 
          transition-colors text-left"
        >
          <div
            className="h-10 w-10 rounded-full bg-slate-200 flex items-center 
            justify-center overflow-hidden"
          >
            <span className="text-slate-500 font-bold text-sm">JP</span>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-slate-800 leading-none">
              Juan Pérez
            </p>
            <p className="text-xs text-slate-500 mt-1">Ingeniería</p>
          </div>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>
      </div>
    </header>
  );
};
