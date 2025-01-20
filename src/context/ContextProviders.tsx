import { useCallback } from "react";
import { LocaleContext, ThemeContext } from "./contexts";
import useContextValue from "../hooks/useContextValue";
import PropTypes from "prop-types";

// @ts-expect-error used of prop-types
const ContextProviders = ({ children }) => {
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

ContextProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProviders;
