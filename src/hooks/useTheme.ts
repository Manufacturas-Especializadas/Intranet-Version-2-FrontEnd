import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "mesa-theme";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    return false;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem(THEME_STORAGE_KEY, "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem(THEME_STORAGE_KEY, "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  return {
    isDark,
    toggleTheme,
  };
};