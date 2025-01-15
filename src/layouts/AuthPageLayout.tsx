import { ReactNode } from "react";

const AuthPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-6 lg:px-0">
      <div className="w-full max-w-[480px] rounded-lg pb-6 shadow-lg">
        <div className="flex items-center justify-center bg-slate-100 py-5">
          <div className="h-full">
            <img
              src="/myNotes-dark.png"
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
