import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { AuthContext } from "../context/authcontext/AuthContext";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { registerUser, setUser, updateUser, emailVerify, loginViaGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [passVisible, setPassVisible] = useState(false);
  const showPass = () => setPassVisible(!passVisible);

  // google

  const handlegoole = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

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

        toast.success("Sign up via Google Successfully.", {
          duration: 2000,
          position: "top-center",
          style: {
            background: "#22c55e",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            gap: "8px",
          },
        });
        navigate(location.state?.pathname || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message, {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#ef4444",
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
            secondary: "#b91c1c",
          },
        });
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value.trim();

    // Validation
    if (!name || !email || !password) {
      toast.error("Please fill all required fields!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email address!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least 1 uppercase letter!");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least 1 lowercase letter!");
      return;
    }

    registerUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

        setTimeout(() => {
          navigate(location.state || "/");
        }, 5000);

        emailVerify().then(() => {
          toast.success(
            "Registration successful! Check your email inbox to verify your account.",
            {
              duration: 4000,
              position: "top-center",
              style: {
                background: "#22c55e",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                gap: "8px",
              },
            }
          );
        });
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 5000);
      })
      .catch((error) => {
        toast.error(error.message, {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#ef4444", // professional red tone
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
            secondary: "#b91c1c", // deeper red for contrast
          },
        });
      });
  };

  return (
    <>
      <Navbar />
      <div className="lg:w-full lg:pb-10 h-[970px] lg:pt-25 lg:h-[60%] bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100 flex flex-col">
        <div className="flex w-10/12 lg:w-9/12 mx-auto flex-1 items-center justify-center lg:px-4">
          <div className="flex flex-col md:flex-row w-full max-w-6xl h-[70%] bg-white/30 backdrop-blur-md shadow-2xl border border-gray-300 rounded-2xl overflow-hidden">
            <div className="md:w-[30%] mx-auto w-full lg:w-[600px] h-44  md:h-auto">
              <img
                className="w-full lg:w-[700px] h-full object-cover"
                src="/assets/signup.png"
                alt="Sign Up"
              />
            </div>

            <div className="md:w-[60%] w-full flex flex-col items-center justify-center py-5 lg:px-4  px-10 relative">
              <h2 className="text-5xl font-semibold mb-4 text-gray-700">
                Welcome
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                Please Register to continue
              </p>

              <form
                onSubmit={handleRegister}
                className="flex flex-col gap-4 w-full lg:w-[80%] relative"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Username"
                  className="p-2 rounded-lg border border-gray-300"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="p-2 rounded-lg border border-gray-300"
                  required
                />
                <input
                  name="photoURL"
                  type="text"
                  placeholder="Photo URL"
                  className="p-2 rounded-lg border border-gray-300"
                />
                <div className="relative">
                  <input
                    name="password"
                    type={passVisible ? "text" : "password"}
                    placeholder="Password"
                    className="p-2 rounded-lg border border-gray-300 w-full"
                    required
                  />
                  <div
                    onClick={showPass}
                    className="absolute right-3 top-4 cursor-pointer  hover:text-blue-600 transition"
                  >
                    {passVisible ? <FiEye size={18} /> : <FiEyeOff size={18} />}
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Register
                </button>
              </form>

              <button
                onClick={handlegoole}
                className="btn bg-white border-2 font-semibold border-blue-300 cursor-pointer mt-3 px-10 lg:px-24 text-black rounded-lg flex items-center justify-center gap-2"
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
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
