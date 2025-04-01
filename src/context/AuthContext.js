'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ isLoggedIn: false, role: null });

  const refreshAuth = () => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setAuth({ isLoggedIn: true, role: decoded.role });
      } catch (err) {
        setAuth({ isLoggedIn: false, role: null });
      }
    } else {
      setAuth({ isLoggedIn: false, role: null });
    }
  };

  useEffect(() => {
    refreshAuth(); // Initial check
  }, []);

  const logout = () => {
    Cookies.remove('token');
    setAuth({ isLoggedIn: false, role: null });
    window.location.href = '/login';
  };

  return (
  <AuthContext.Provider value={{
    ...auth,
    setAuth,         // now available everywhere
    refreshAuth,
    logout,
  }}>
    {children}
  </AuthContext.Provider>

  );
}

export const useAuth = () => useContext(AuthContext);
