import { Link } from "react-router";
import { IoIosArrowDropleft } from "react-icons/io";

const LogIn = () => {
  return (
    <div className="w-full  min-h-screen bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100 flex flex-col">
      <div className="flex relative flex-1 items-center justify-center px-4 ">
        <Link
          to={"/"}
          className="absolute z-2 left-30 top-8 cursor-pointer hover:scale-120 animate-pulse transition-all duration-200"
        >
          <IoIosArrowDropleft size={40} color="blue" />
        </Link>
        <div className="flex flex-col md:flex-row w-full max-w-6xl h-[70%] bg-white/30 backdrop-blur-md shadow-2xl border border-gray-300 rounded-2xl overflow-hidden">
    
          <div className="md:w-1/2 w-full h-64 md:h-auto">
            <img
              className="w-full h-full object-cover"
              src="/assets/login.png"
              alt="Login"
            />
          </div>

       
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center px-30">
            <h2 className="text-5xl font-semibold mb-4 text-gray-700">
              Welcome Back
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Please log in to continue to your account
            </p>

        
            <div className="flex flex-col gap-4 w-full">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg border border-gray-300"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="p-3 rounded-lg border border-gray-300"
              />
              <div className="flex items-center justify-end">
                <p className="text-end text-sm hover:font-bold hover:underline cursor-pointer">
                  Forgot Password?{" "}
                </p>
              </div>
              <button className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
                Log In
              </button>
              <div className="flex items-center justify-center gap-3  w-full">
                <div className="flex-1 border-t border-gray-400"></div>
                <p className="text-gray-600 text-sm">Or</p>
                <div className="flex-1 border-t border-gray-400"></div>
              </div>
              <button className="btn bg-white border-2 font-semibold border-blue-300 cursor-pointer text-black rounded-xl ">
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
                  <span className="font-semibold hover:underline cursor-pointer">
                    Register{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
