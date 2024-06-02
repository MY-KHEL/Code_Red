import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { LandingPage } from "./components/landingPage";
import { ViewPage } from "./components/viewPage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/view-all",
    element: <ViewPage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

