import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Archive from "./pages/Archive";
import { setInitialNotes } from "./utils/notes";
import Details from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: () => {
      setInitialNotes();
      return 1;
    },
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "archive",
        element: <Archive />,
      },
      {
        path: "note/:id",
        element: <Details />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
