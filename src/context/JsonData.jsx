import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const JsonData = ({ children }) => {
  const [sharedData, setSharedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setSharedData(data);
        setIsLoading(false); 
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false); 
      });
  }, []);

  return (
    <DataContext.Provider value={{ sharedData, isLoading, setIsLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export default JsonData;
