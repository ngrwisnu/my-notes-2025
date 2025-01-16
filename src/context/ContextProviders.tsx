import { ReactNode, useCallback } from "react";
import { LocaleContext, ThemeContext } from "./contexts";
import useContextValue from "../hooks/useContextValue";

const ContextProviders = ({ children }: { children: ReactNode }) => {
  const themeCallback = useCallback((theme: string) => {
    document.documentElement.setAttribute("class", theme);
  }, []);

  const [theme, setTheme] = useContextValue(
    "theme",
    JSON.parse(localStorage.getItem("theme") as string) || "light",
    themeCallback,
  );
  const [locale, setLocale] = useContextValue(
    "locale",
    JSON.parse(localStorage.getItem("locale") as string) || "en",
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        {children}
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ContextProviders;
