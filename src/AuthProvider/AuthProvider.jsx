/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../FirebaseConfig/firebase_config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null); // used for unsubscribe function
  const [loading, setLoading] = useState(true); // used for unsubscribe function

  const googleProvider = new GoogleAuthProvider();

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password); 
  };

  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const Logout = () => {
    return signOut(auth);
  };

  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
      setLoading(false)
    });
    return  () =>{
       unsubscribe
    }
  },[])


  const authInfo = {
    CreateUser,
    Login,
    Logout,
    GoogleLogin,
    user,
    loading,
  }

  return <AuthContext.Provider value ={authInfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
