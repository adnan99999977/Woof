import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../context/Authcontext/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [pass, setPass] = useState(false);

  const showpass = () => {
    setPass(!pass);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    registerUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registered User:", user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.error("Registration Error:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="w-full pt-30 pb-10 min-h-screen bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100 flex flex-col">
        <div className="flex w-9/12 mx-auto flex-1 items-center justify-center px-4">
          <div className="flex flex-col md:flex-row w-full max-w-6xl h-[70%] bg-white/30 backdrop-blur-md shadow-2xl border border-gray-300 rounded-2xl overflow-hidden">
            <div className="md:w-[30%] mx-auto w-full h-64 md:h-auto">
              <img
                className="w-full h-full object-cover"
                src="/assets/signup.png"
                alt="Login"
              />
            </div>

            <div className="md:w-[60%] w-full flex flex-col items-center justify-center py-10 px-30">
              <h2 className="text-5xl font-semibold mb-4 text-gray-700">
                Welcome
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                Please Register to continue
              </p>

              <form 
                onSubmit={handleRegister}
                className="flex flex-col relative gap-4 w-full"
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
                  type={pass ? "text" : "password"}
                  placeholder="Password"
                  className="p-3 rounded-lg border border-gray-300"
                />
                <div
                  onClick={() => {
                    showpass(!setPass);
                  }}
                  className="absolute left-78 cursor-pointer bottom-18"
                >
                  {pass ? <FiEye size={18} /> : <FiEyeOff size={18} />}
                </div>

                <button className="bg-blue-500 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-600 transition">
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
