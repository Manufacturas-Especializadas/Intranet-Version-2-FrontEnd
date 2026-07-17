import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../hooks/useTheme";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      className="
        group relative flex h-10 w-10
        cursor-pointer items-center justify-center
        rounded-xl border border-slate-200
        bg-white text-slate-500
        shadow-sm transition-all duration-300
        hover:-translate-y-0.5
        hover:border-blue-200
        hover:bg-blue-50
        hover:text-[#0033a0]
        hover:shadow-md
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500

        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-300
        dark:hover:border-blue-500/50
        dark:hover:bg-slate-800
        dark:hover:text-blue-300

        sm:rounded-2xl
        xl:h-11 xl:w-11
      "
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px] xl:h-5 xl:w-5" strokeWidth={2} />
      ) : (
        <Moon className="h-[18px] w-[18px] xl:h-5 xl:w-5" strokeWidth={2} />
      )}
    </button>
  );
};