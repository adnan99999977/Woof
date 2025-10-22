import React, { useContext } from "react";
import { DataContext } from "../context/JsonData";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const { sharedData, isLoading } = useContext(DataContext);

  console.log("sharedData:", sharedData);

  if (isLoading || !sharedData) {
    return <p className="text-center text-lg mt-10">Loading...</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      
      {sharedData.map((item) => (
        <ServiceCard key={item.category} item={item} />
      ))}
    </div>
  );
};

export default Services;
