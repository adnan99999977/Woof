import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";
import { AuthContext } from "../context/authcontext/AuthContext";
import toast from "react-hot-toast";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      toast.success("Please log in first!", {
        duration: 2000,
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
    }
  }, [loading, user]);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  // navigate part
  return <Navigate to="/login" state={{ from: location.pathname }} replace />;
};

export default PrivetRoute;
