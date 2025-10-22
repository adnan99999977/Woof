import React, { useContext, useState } from "react";
import { DataContext } from "../context/JsonData";
import Card from "./Card";
import WinterTips from "./WintertTips";

const CareServices = () => {
  const services = useContext(DataContext);
  const [showAll, setShowAll] = useState(false);

  
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#383634]">
        Our Care Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 lg:px-20">
        {displayedServices.map((service, index) => (
          <Card key={index} service={service} />
        ))}
      </div>

     
      {services.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            className="btn btn-outline btn-primary px-8 py-2"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "See All"}
          </button>
        </div>
      )}
      <WinterTips/>
    </div>
    
  );
};

export default CareServices;
