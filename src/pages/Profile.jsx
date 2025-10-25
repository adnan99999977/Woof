import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { AuthContext } from "../context/authcontext/AuthContext";
import toast from "react-hot-toast";
import { getAuth, updateProfile } from "firebase/auth";

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const { user, setUser } = useContext(AuthContext);

  const memberSince = user
    ? new Date(user.metadata.creationTime).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName && !photoURL) {
      return toast.error("Fields cannot be empty!");
    }

    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: fullName || auth.currentUser.displayName,
      photoURL: photoURL || auth.currentUser.photoURL,
    }).then(() => {
      setUser({ ...auth.currentUser });

      toast.success("Profile Update Successfully.", {
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
      setFullName("");
      setPhotoURL("");
    });
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
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-10 bg-gradient-to-br from-blue-100 via-blue-50 to-white flex flex-col items-center justify-center px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col lg:flex-row gap-8"
        >
          {/* Left Side */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center bg-blue-50/70 rounded-2xl p-6 w-full lg:w-1/3 shadow-xl"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-300 shadow-md mb-4">
              <img
                src={user?.photoURL}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-700">
              {user.displayName}
            </h2>
            <p className="text-gray-500 text-sm mt-2">{user.email}</p>
            <p className="text-gray-400 text-sm mt-6">
              Member since {memberSince}
            </p>
          </motion.div>

          {/* Right Side  */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-1 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-6">
              Update Profile
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Create a new Username"
                  className="p-3 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 outline-none transition"
                />
              </div>

              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Create a new profile Image URL"
                className="p-3 rounded-xl border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 outline-none transition"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white py-3 rounded-xl font-semibold mt-4 hover:bg-blue-600 transition-all hover:cursor-pointer"
                type="submit"
              >
                Update Profile
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
