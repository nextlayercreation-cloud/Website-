import React, { createContext, useContext, useState, useEffect } from "react";

const LOGIN_KEY = 'isLogin';
const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
  // Initialize isLogin from localStorage
  const [isLogin, setIsLogin] = useState(() => {
    const stored = localStorage.getItem(LOGIN_KEY);
    return stored === 'true';
  });
  const [companyName, setCompanyName] = useState("Raj Paintings");
  // Replace this phone number with your business WhatsApp number (digits only, no + or spaces)
  const [DEFAULT_WHATSAPP_NUMBER, setWhatsappNumber] = useState('+918098613952');

  // Sync isLogin to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOGIN_KEY, isLogin);
  }, [isLogin]);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, companyName, setCompanyName, DEFAULT_WHATSAPP_NUMBER, setWhatsappNumber }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
