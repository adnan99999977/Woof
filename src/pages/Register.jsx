import React from "react";
import { Link } from "react-router";
import { IoIosArrowDropleft } from "react-icons/io";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    console.log({ name, email, photoURL, password });
  };

  return (
    <>
      <Navbar />
      <div className="w-full pt-30 pb-10  min-h-screen bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100 flex flex-col">
        <div className="flex w-9/12 mx-auto flex-1 items-center justify-center px-4 ">
          <div className="flex flex-col md:flex-row w-full max-w-6xl h-[70%] bg-white/30 backdrop-blur-md shadow-2xl border border-gray-300 rounded-2xl overflow-hidden">

            <div className="md:w-[30%] mx-auto w-full h-64 md:h-auto">
              <img
                className="w-full h-full object-cover"
                src="/assets/signup.png"
                alt="Login"
              />
            </div>

            <div className="md:w-[50%] w-full flex flex-col items-center justify-center py-10 px-30">
              <h2 className="text-5xl font-semibold mb-4 text-gray-700">
                Welcome
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                Please Register to continue
              </p>

              <form
                onSubmit={handleRegister}
                className="flex flex-col gap-4 w-full"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="username"
                  className="p-3 rounded-lg border border-gray-300"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-lg border border-gray-300"
                />
                <input
                  name="photoURL"
                  type="text"
                  placeholder="Photo URL"
                  className="p-3 rounded-lg border border-gray-300"
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="p-3 rounded-lg border border-gray-300"
                />

                <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
