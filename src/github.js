import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const provider = new GithubAuthProvider();
  const navigate=useNavigate()
  const login = async () => {
    setError(null);
    setIsPending(true);
    navigate("/Recipes")

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete signup");
      }

      const user = res.user;
      console.log(user);
      setIsPending(false)
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { login, error, isPending };
};


export const useLogout = () => {
    const navigate=useNavigate()
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("user logged out")
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  };

  return { logout };
};