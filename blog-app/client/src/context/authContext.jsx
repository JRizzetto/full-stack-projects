import axios from "axios";
import { createContext, useEffect, useState, useRef } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const hasChecked = useRef(false); // Prevent multiple checks

  // Function to check authentication
  const checkAuth = async () => {
    try {
      const res = await axios.get("/api/auth/verify", {
        withCredentials: true,
      });
      setCurrentUser(res.data);
      console.log("User authenticated:", res.data);
    } catch (err) {
      // 401 is expected when not logged in
      if (err.response?.status !== 401) {
        console.log("Auth check error:", err.message);
      }
      setCurrentUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Check auth on app start - only once
  useEffect(() => {
    if (!hasChecked.current) {
      hasChecked.current = true;
      console.log("Initial auth check...");
      checkAuth();
    }
  }, []);

  const login = async (inputs) => {
    try {
      console.log("Logging in...");
      const res = await axios.post("/api/auth/login", inputs, {
        withCredentials: true,
      });
      console.log("Login successful, verifying...");

      // After login, verify to get user data
      await checkAuth();
      return res;
    } catch (err) {
      console.error("Login error:", err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      console.log("Logging out...");
      await axios.post(
        "/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log("Logout error:", err);
    } finally {
      setCurrentUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        loading,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
