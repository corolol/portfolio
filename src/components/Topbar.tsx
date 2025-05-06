import LanguageChanger from "./changers/LanguageChanger";
import ThemeChanger from "./changers/ThemeChanger";

const Topbar = () => {
  return (
    <div className="flex gap-2 h-10">
      <ThemeChanger />
      <LanguageChanger />
    </div>
  );
};

export default Topbar;
