import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/authcontext/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logged Out Successfully", {
          duration: 2500,
          position: "top-center",
          style: {
            background: "#3b82f6", 
            color: "#ffffff",
            padding: "12px 20px",
            borderRadius: "20px",
            fontWeight: "600",
            fontSize: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            letterSpacing: "0.3px",
          },
          iconTheme: {
            primary: "#ffffff",
            secondary: "#2563eb",
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className="navbar mb-15 mx-auto px-5 lg:mt-0 lg:rounded-none w-[94%] lg:w-full flex items-center justify-between mr-4 lg:px-9 bg-white/50 backdrop-blur-sm shadow-md fixed top-0 z-50
"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-58 shadow"
            >
              <li>
                <NavLink className="hover:text-blue-900" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-blue-900" to="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-blue-900" to="/profile">
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <img
            className="lg:w-40 w-25 filter hue-rotate-180"
            src="/assets/lg.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-6 menu-horizontal px-1   text-lg">
            <li>
              <NavLink className="hover:text-blue-900" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-blue-900" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-blue-900" to="/profile">
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex flex-row-reverse gap-2 items-center justify-center">
            {user ? (
              <Link
                to={"/profile"}
                className="lg:w-13 lg:h-13 w-8 h-8 rounded-full overflow-hidden border-2 border-gray-500 shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={user ? user.photoURL : "/assets/profile.png"}
                  title={user ? user.displayName : "Guest User"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
            ) : (
              ""
            )}

            <p>
              {user ? (
                <a
                  className="px-4 lg:px-8 lg:py-2 py-1 text-xs lg:text-lg bg-[#cdedfa] border border-gray-400 text-shadow-gray-600 font-semibold rounded-sm hover:scale-103 transition-all duration-200 hover:bg-yellow-50 hover:text-gray-800 hover:outline cursor-pointer"
                  onClick={handleLogout}
                >
                  Log Out
                </a>
              ) : (
                <Link
                  className="px-3 lg:px-8 lg:py-2 py-1 text-xs lg:text-lg bg-[#cdedfa] border border-gray-400 text-shadow-gray-600 font-semibold rounded-sm hover:scale-103 transition-all duration-200 hover:bg-yellow-50 hover:text-gray-800 hover:outline cursor-pointer"
                  to={"/login"}
                >
                  Log In
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
