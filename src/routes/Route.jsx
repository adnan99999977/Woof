import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Services from "../pages/Services";
import Hero from "../components/Hero";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import ServiceCard from "../components/ServiceCard";
import ErrorPage from "../pages/ErrorPage";
import ServicesDetails from "../pages/ServicesDetails";
import PrivetRoute from "./PrivetRoute";
import Profile from "../pages/Profile";
import ForgatePasword from "../pages/ForgatePasword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hero />,
        loader: () => {
          fetch("/services.json");
        },
      },
    ],
  },
  {
    path: "services",
    element: (
      <PrivetRoute>
        <Services />
      </PrivetRoute>
    ),
  },
  {
    path: "servicecard",
    element: <ServiceCard />,
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
    path: "serviceDetails/:id",
    element: (
      <PrivetRoute>
        <ServicesDetails />
      </PrivetRoute>
    ),
  },
  {
    path: "profile",
    element: (
      <PrivetRoute>
        <Profile />
      </PrivetRoute>
    ),
  },
  {
    path: "forgatepasword",
    element: <ForgatePasword />,
  },
]);

export default router;
