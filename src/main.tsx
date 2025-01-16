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
import AddNoteForm from "./pages/AddNoteForm";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ContextProviders from "./context/ContextProviders";

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
        path: "notes/new",
        element: <AddNoteForm />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProviders>
      <RouterProvider router={router} />
    </ContextProviders>
  </StrictMode>,
);
