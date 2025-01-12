import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="w-full py-4">
      <div className="container flex justify-between">
        <div className="text-4xl font-bold">MY-NOTES</div>
        <nav className="space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/archive">Archive</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
