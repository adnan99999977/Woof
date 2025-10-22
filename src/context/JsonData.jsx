import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const JsonData = ({ children }) => {
  const [sharedData, setSharedData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
       
        setSharedData(data); 
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <DataContext.Provider value={sharedData}>
      {children}
    </DataContext.Provider>
  );
};

export default JsonData;
