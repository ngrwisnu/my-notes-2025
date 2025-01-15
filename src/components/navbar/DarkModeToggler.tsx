"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const DarkModeToggler = () => {
  const [isDark, setIsDark] = useState(false);

  const darkModeHandler = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <div
      onClick={darkModeHandler}
      className="relative h-full w-20 rounded-full bg-slate-400 hover:cursor-pointer"
    >
      <div className="flex w-full items-center justify-between px-2 py-2">
        <Sun size={16} />
        <Moon size={16} />
      </div>
      <div
        className={`absolute top-0 z-30 h-8 w-8 scale-75 rounded-full bg-white transition-transform duration-300 ${isDark ? "translate-x-12" : "translate-x-0"}`}
      ></div>
    </div>
  );
};

export default DarkModeToggler;
