import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

type AuthContextType = {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
  setIsloggedIn?: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (username: string) => {
    setUser(username);
    setIsLoggedIn(true);
  }
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  }
  
  const setIsloggedIn = (value: boolean) => setIsLoggedIn(value);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn, setIsloggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
