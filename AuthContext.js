import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Store multiple users
  const [currentUser, setCurrentUser] = useState(null); // Current logged in user
  const [childDetails, setChildDetails] = useState(null); // State for child details

  const register = (name, email, password) => {
    setUsers((prevUsers) => [...prevUsers, { name, email, password }]); // Add new user
  };

  const login = (email, password) => {
    const foundUser = users.find(user => user.email === email && user.password === password);
    if (foundUser) {
      setCurrentUser(foundUser); // Set current user
      return true; 
    }
    return false; 
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login, childDetails, setChildDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
