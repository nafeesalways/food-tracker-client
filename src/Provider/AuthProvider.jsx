import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  console.log(user);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const updateUser = (registeredUser, updatedData) => {
    return updateProfile(registeredUser, updatedData);
  };

  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
         currentUser.getIdToken().then(token=>{
          console.log(token)
          setUser({ ...currentUser, accessToken: token });
          setLoading(false);
        });
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authData = {
    user,
    setUser,
    createUser,
    logIn,
    logOut,
    loading,
    setLoading,
    updateUser,
    googleSignIn,
  };
  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
