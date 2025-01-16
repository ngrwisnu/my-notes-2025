import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./contexts";

const ContextProviders = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    document.documentElement.setAttribute("class", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextProviders;
