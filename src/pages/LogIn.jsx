import { Link, useLocation, useNavigate } from "react-router";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authcontext/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";

const LogIn = () => {
  const { loginUser, loginViaGoogle, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [pass, setPass] = useState(false);
  const [email, setEmail] = useState("");
  const auth = getAuth();

  const showpass = () => setPass(!pass);

  // Google login
  const handlegoole = () => {
    const provider = new GoogleAuthProvider();

    loginViaGoogle(provider)
      .then((userCredential) => {
        console.log(userCredential);
        const currentUser = auth.currentUser;
        setUser({
          ...currentUser,
          displayName: currentUser.displayName || "User Name",
          photoURL: currentUser.photoURL || "/assets/profile.png",
          email: currentUser.email,
        });

        toast.success("Logged In Successfully!", {
          duration: 2000,
          position: "top-center",
        });

        navigate(location.state?.pathname || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login Failed! " + error.message, {
          duration: 4000,
          position: "top-center",
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;

        if (!currentUser.emailVerified) {
          toast.error("Please verify your email!", {
            duration: 3000,
            position: "top-center",
            style: {
              background: "#ef4444",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            },
          });

          setTimeout(() => {
            window.open("https://mail.google.com", "_blank");
          }, 3000); 

          return; 
        }

        setUser({
          ...currentUser,
          displayName: currentUser.displayName || "User Name",
          photoURL: currentUser.photoURL || "/assets/profile.png",
        });

        toast.success("Logged In Successfully!", {
          duration: 2000,
          position: "top-center",
        });
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        console.error("Login error:", error);
        toast.error("Action Failed! " + error.message, {
          duration: 3000,
          position: "top-center",
        });
      });
  };

  return (
    <>
      <Navbar />
      <div className="w-full pt-30 pb-10 lg:min-h-screen bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100 flex flex-col">
        <div className="flex lg:w-9/12 mx-auto flex-1 items-center justify-center lg:px-4 ">
          <div className="flex flex-col md:flex-row lg:max-w-6xl h-[70%] bg-white/30 backdrop-blur-md shadow-2xl border border-gray-300 rounded-2xl py-5 overflow-hidden">
            <div className="md:w-[40%] mx-auto w-full h-50 md:h-[40%]">
              <img
                className="w-full h-full object-cover"
                src="/assets/login.png"
                alt="Login"
              />
            </div>

            <div className="mx-auto w-[70%] lg:w-[35%] flex flex-col items-center justify-center">
              <h2 className="text-5xl font-semibold my-4 lg:my-1 mb-4 text-gray-700">
                Welcome
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                Please log in to continue to your account
              </p>

              <div className="flex flex-col gap-4 w-full">
                <form
                  onSubmit={handleLogin}
                  className="flex flex-col relative gap-4 w-full"
                >
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="p-2 rounded-lg border border-gray-300"
                  />
                  <input
                    name="password"
                    type={pass ? "text" : "password"}
                    placeholder="Password"
                    className="p-2 rounded-lg border border-gray-300"
                  />
                  <div
                    onClick={showpass}
                    className="absolute lg:left-78 left-[87%] cursor-pointer bottom-26"
                  >
                    {pass ? <FiEye /> : <FiEyeOff />}
                  </div>

                  <div className="flex items-center justify-end">
                    <Link
                      to="/forgatepasword"
                      state={{ email }}
                      className="text-end text-sm hover:font-bold hover:underline cursor-pointer"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <button className="bg-blue-500 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    Log In
                  </button>
                </form>

                <div className="flex items-center justify-center gap-3 w-full">
                  <div className="flex-1 border-t border-gray-400"></div>
                  <p className="text-gray-600 text-sm">Or</p>
                  <div className="flex-1 border-t border-gray-400"></div>
                </div>

                <button
                  onClick={handlegoole}
                  className="btn bg-white border-2 font-semibold border-blue-300 cursor-pointer text-black rounded-lg flex items-center justify-center gap-2"
                >
                  <svg
                    aria-label="Google logo"
                    width="26"
                    height="26"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>

                <div className="flex items-center justify-center">
                  <Link to={"/register"}>
                    Are you a new user?{" "}
                    <span className="font-semibold hover:underline cursor-pointer text-blue-600">
                      Register
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
