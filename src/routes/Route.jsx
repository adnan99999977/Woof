import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import Hero from "../components/Hero";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import ServiceCard from "../components/ServiceCard";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Hero />,
        loader: () => {fetch("/services.json")}
      },
    ],
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "servicecard",
    element: <ServiceCard />,
  },
  {
    path: "profile",
    element: <MyProfile />,
  },
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);

export default router;
