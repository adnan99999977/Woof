import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/authcontext/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logged Out Successfully!", {
          duration: 2000,
          position: "top-center",
          style: {
            background: "#22c55e", // professional green
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "20px",
            fontWeight: "600",
            fontSize: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
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
        className="navbar mb-15  w-full flex items-center justify-between px-5 lg:px-9 lg:py-3 bg-white/50 backdrop-blur-sm shadow-md fixed top-0  z-50
"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
            className="w-40 filter hue-rotate-180"
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
          <div>
            <p>
              {user ? (
                <a
                  className="px-4 lg:px-8 py-2 bg-[#cdedfa] outline text-shadow-gray-600 font-semibold rounded-sm hover:scale-103 transition-all duration-200 hover:bg-yellow-50 hover:text-gray-800 hover:outline cursor-pointer"
                  onClick={handleLogout}
                >
                  Log Out
                </a>
              ) : (
                <Link
                  className="px-4 lg:px-8 py-2 bg-[#cdedfa] outline text-shadow-gray-600 font-semibold rounded-sm hover:scale-103 transition-all duration-200 hover:bg-yellow-50 hover:text-gray-800 hover:outline cursor-pointer"
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
