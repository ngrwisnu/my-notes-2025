import { useContext } from "react";
import { ThemeContext } from "../context/contexts";
import LanguageToggler from "../components/navbar/LanguageToggler";
import PropTypes from "prop-types";

// @ts-expect-error used of prop-types
const AuthPageLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="container flex h-14 items-center justify-end px-4">
        <LanguageToggler />
      </div>
      <div className="flex h-[calc(100vh_-_56px)] w-full items-center justify-center px-6 lg:px-0">
        <div className="w-full max-w-[480px] rounded-lg pb-6 shadow-lg dark:bg-dark_surface-900">
          <div className="flex items-center justify-center bg-slate-100 py-5 dark:bg-dark_surface-700">
            <div className="h-full">
              <img
                src={`/myNotes-${theme === "light" ? "dark" : "light"}.png`}
                className="h-[80px]"
                alt="myNotes logo"
              />
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

AuthPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthPageLayout;
