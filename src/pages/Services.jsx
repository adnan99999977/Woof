import React, { useContext } from "react";
import { DataContext } from "../context/JsonData";
import ServiceCard from "../components/ServiceCard";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
  const { sharedData, isLoading } = useContext(DataContext);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="">
      <div className="mb-40">
        <Navbar />
      </div>
      <p className="text-4xl font-bold text-center w-9/12 mx-auto border-b border-gray-300 pb-10">
        Our All Services
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 py-10 px-5 lg:px-20">
        {sharedData.map((item) => (
          <ServiceCard key={item.category} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
