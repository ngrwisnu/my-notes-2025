import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-8">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
