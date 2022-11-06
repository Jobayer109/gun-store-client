import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut,
    updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profile = (name, photoURL) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL });
    };
    
    const googleSignIn = (googleProvider) => {
      return signInWithPopup(auth, googleProvider);
    };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubsCribe();
    };
  }, []);

  const authInfo = { user, createUser, loginUser, logOut, profile, googleSignIn };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
