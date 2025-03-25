import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateTrip from "./create-trip";
import Header from "./components/ui/custom/Header";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "create-trip",
    element: <CreateTrip></CreateTrip>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header></Header>
    <Toaster></Toaster>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
