// src/context/AppContext.js
import React, { useState, createContext } from 'react';

export const Context = createContext();

const AppContext = ({ children }) => {
  const [isSubmit, setSubmit] = useState(false);

  return (
    <Context.Provider value={{ 
        isSubmit,
        setSubmit
    }}>
      {children} 
    </Context.Provider>
  );
};

export default AppContext;
