import { ReactNode, useContext } from "react";
import { ThemeContext } from "../context/contexts";

const AuthPageLayout = ({ children }: { children: ReactNode }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-6 lg:px-0">
      <div className="dark:bg-dark_surface-900 w-full max-w-[480px] rounded-lg pb-6 shadow-lg">
        <div className="dark:bg-dark_surface-700 flex items-center justify-center bg-slate-100 py-5">
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
  );
};

export default AuthPageLayout;
