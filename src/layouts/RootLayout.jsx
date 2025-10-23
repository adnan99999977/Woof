import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <ScrollToTop />

      <main className="flex-1 w-full bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
