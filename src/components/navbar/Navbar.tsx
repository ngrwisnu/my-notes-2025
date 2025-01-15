import { LogOut } from "lucide-react";
import { Link, NavLink } from "react-router";
import DarkModeToggler from "./DarkModeToggler";

const Navbar = () => {
  const logoutHandler = () => {
    console.log("logout button is clicked");
  };

  return (
    <header className="w-full py-4">
      <div className="container flex justify-between px-4 xl:px-0">
        <div className="text-4xl font-bold">
          <Link to="/">
            <img src="/myNotes-dark.png" className="h-[52px]" alt="" />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <nav className="space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/archive">Archive</NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <DarkModeToggler />
            <div
              role="button"
              onClick={logoutHandler}
              className="flex items-center gap-1 rounded-lg border border-slate-900 px-3 py-2 transition duration-300 hover:cursor-pointer hover:bg-slate-700 hover:text-white"
            >
              <LogOut size={20} /> Logout
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
