import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser,] = useState(null);
  const [loading, setLoading] = useState(true);

  // google

  const loginViaGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // create new user / register

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email verification
  
  const emailVerify = ()=>{
    return sendEmailVerification(auth.currentUser)
  }


  // update profile

  const updateUser = (updatedData) => {
    setLoading(true)
    return updateProfile(auth.currentUser, updatedData);
  };

  
  //  login existing user

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out user

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    registerUser,
    loginUser,
    logoutUser,
    loginViaGoogle,
    updateUser,
    emailVerify
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
