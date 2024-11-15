import { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../FirebaseConfig/firebase_config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = () => {
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

  const authInfo = {
    CreateUser,
    Login,
    Logout,
    GoogleLogin,
    user,
    loading,
  };
};
