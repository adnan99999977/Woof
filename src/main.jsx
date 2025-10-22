import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router"; 
import Router from "./routes/Route";
import JsonData from "./context/JsonData";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JsonData>
      <RouterProvider router={Router} />
    </JsonData>
  </StrictMode>
);
