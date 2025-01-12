import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-8 px-4 pb-8 xl:px-0">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
