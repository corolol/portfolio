import { useTheme } from "../../context/theme";
import { Icon } from "@iconify/react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <div
      className="flex justify-center items-center h-full aspect-square rounded-lg hover:bg-background-hover cursor-pointer"
      onClick={toggleTheme}
    >
      <Icon
        icon={theme === "dark" ? "ph:sun-bold" : "ph:moon-bold"}
        className="text-2xl"
      />
    </div>
  );
};

export default ThemeChanger;
