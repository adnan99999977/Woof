import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router"; 
import Router from "./routes/Route";
import JsonData from "./context/JsonData";
import AuthProvider from "./context/Authcontext/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthProvider>
     <JsonData>
      <RouterProvider router={Router} />
    </JsonData>
   </AuthProvider>
  </StrictMode>
);
