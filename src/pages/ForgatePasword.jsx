import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router";

const ForgatePasword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email); 
    }
  }, [location.state]);

  return (
    <div className="bg-gradient-to-br h-screen from-blue-200 via-blue-50 to-blue-100 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/30 backdrop-blur-md shadow-2xl border border-gray-300 rounded-2xl py-10 px-10 w-5/12 flex flex-col items-center justify-center gap-8 relative"
      >
        <img
          className="w-55 h-40"
          src="/assets/fp.png"
          alt="Forgot Password Illustration"
        />

        <div className="text-center">
          <h3 className="text-3xl font-semibold leading-tight mb-2">
            Forgot your password?
          </h3>
          <p className="text-sm text-gray-500">
            Enter your email and we'll send a reset link.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-6 py-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 cursor-pointer rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-medium shadow-lg hover:brightness-105 active:brightness-95 transition-all"
            onClick={() => window.open("https://mail.google.com", "_blank")}
          >
            Reset Password
          </motion.button>
        </div>

        <p className="text-sm text-gray-700 mt-2 text-center">
          Tip: Check your inbox after submitting to reset your password.
        </p>
      </motion.div>
    </div>
  );
};

export default ForgatePasword;
