import React, { createContext, useState, useContext } from "react";

// Create the User Context
const UserContext = createContext();

// Create a custom hook for easier access to the context
export const useUser = () => useContext(UserContext);

// UserProvider component that will wrap the app and provide the context
export const UserProvider = ({ children }) => {
  // Define the state to hold user data
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    lastSignIn: "",
  });

  // Function to update the user data
  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
