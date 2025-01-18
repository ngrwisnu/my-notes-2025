import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/contexts";

const DarkModeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const darkModeHandler = () => {
    setTheme((prevState: string) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div
      onClick={darkModeHandler}
      className="relative h-full w-14 rounded-full bg-slate-400 hover:cursor-pointer"
    >
      <div className="flex w-full items-center justify-between px-2 py-2">
        <Moon size={14} />
        <Sun size={14} />
      </div>
      <div
        className={`absolute top-[1px] z-30 h-7 w-7 scale-75 rounded-full bg-white transition-transform duration-300 ${theme === "dark" ? "translate-x-7" : "translate-x-0"}`}
      ></div>
    </div>
  );
};

export default DarkModeToggler;
