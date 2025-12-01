import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../Firebase/firebase.config"; 

const useMobileGoogleRedirect = (setUser, navigate, location) => {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      getRedirectResult(auth)
        .then((result) => {
          if (result) {
            const currentUser = result.user;
            setUser({
              ...currentUser,
              displayName: currentUser.displayName || "User Name",
              photoURL: currentUser.photoURL || "/assets/profile.png",
              email: currentUser.email,
            });
         
            navigate(location.state?.pathname || "/");
          }
        })
        .catch((error) => console.error("Google Redirect Error:", error));
    }
  }, [setUser, navigate, location]);
};

export default useMobileGoogleRedirect;
