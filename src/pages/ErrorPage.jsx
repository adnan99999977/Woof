import React from "react";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />

      <div className="w-10/12 mx-auto py-20">
        <img
          className="w-[40%] pt-5 mx-auto bg-cover"
          src="/assets/error-404.png"
          alt=""
        />
        <p className="text-5xl font-semibold text-center">Page not found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
