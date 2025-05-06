import React, { useEffect, useState, type PropsWithChildren } from "react";

type Theme = "dark" | "light";
type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const themeContext = React.createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isInitialized, setIsInitialized] = useState(false);

  // set theme on page load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme | null;
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const initial = saved || (systemPrefersDark ? "dark" : "light");
      setTheme(initial);
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, isInitialized]);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

const useTheme = () => {
  const context = React.useContext(themeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};

export { ThemeContextProvider, useTheme };
export type { Theme };
