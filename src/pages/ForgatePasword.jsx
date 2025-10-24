import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ForgatePasword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location]);
  
  const handleReset = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Please enter your email", { position: "top-center" });
      return;
    }
    
    toast.success("Reset link sent successfully!", {
      position: "top-center",
      style: {
        background: "#22c55e",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "10px",
        fontWeight: "600",
        fontSize: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      },
    });
    
    setEmail("");
    
    setTimeout(() => {
      window.open("https://mail.google.com", "_blank");
    }, 500);
  };
 
  
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br lg:h-screen mt-20 py-10 lg:py-0 from-blue-200 via-blue-50 to-blue-100 flex justify-center items-center px-7">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white/30 backdrop-blur-md shadow-2xl border border-gray-300 rounded-2xl py-10 px-10 lg:w-5/12 flex flex-col items-center justify-center gap-8 relative"
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

          <form
            onSubmit={handleReset}
            className="flex flex-col items-center gap-4 w-full"
          >
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
              type="submit"
            >
              Reset Password
            </motion.button>
          </form>

          <p className="text-sm text-gray-700 mt-2 text-center">
            Tip: Check your inbox after submitting to reset your password.
          </p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ForgatePasword;
